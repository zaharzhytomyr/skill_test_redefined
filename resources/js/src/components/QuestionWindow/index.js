import React, {useEffect, useState} from "react"
import {TabContext, TabList, TabPanel} from "@material-ui/lab";
import {AppBar, Box, Button, Checkbox, Tab} from "@material-ui/core";
import {Login, Signup} from "../index";
import {makeStyles} from "@material-ui/styles";
import axios from "axios";
import {Link as RouterLink, useParams} from "react-router-dom";
import useStyles from "../../pages/Question/styles";

const styles = makeStyles((theme) => ({
    appBarContainer: {
        width: '500px',
        margin: '0 auto',
        '@media (max-width: 600px)': {
            width: '100%',
        }
    },
    tabMenuItem: {
        width: '50%'
    },
    tabPanelItem: {
        padding: '0',
        width: '500px',
        margin: '0 auto',
        '@media (max-width: 600px)': {
            width: '100%',
        }
    },
    formContainer: {
        padding: '0 20px',
        paddingTop: 60,
        paddingBottom: 40,
    }
}));


export const QuestionWindow = () => {

    const styles = useStyles();
    const { test_id } = useParams();
    const [questions, setQuestions] = useState([]);
    const [isRetrievedQuestions, setIsRetrievedQuestions] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [score, setScore] = useState({});

    const [userAnswers, setUserAnswers] = useState([]);

    const handleChange = (event, newValue) => {
        setCurrentQuestion(newValue);
    };

    useEffect(() => {
        if (!isRetrievedQuestions) {
            axios.get('/test/' + test_id+ '/questions').then(
                (response) => {
                    if (response && response.status === 200) {
                        setQuestions(response.data);
                        setCurrentQuestion('question-' + response.data[0].id);
                    }
                }
            )

            setIsRetrievedQuestions(true)
        }
    })

    if (!currentQuestion) {
        return null;
    }

    const handleCheckboxChange = (event) => {
        const answer_id = parseInt(event.target.value)

        const newQuestions = questions.map((quest) => {
                quest.answers = quest.answers.map((ans) => {
                    if (ans.id === answer_id) {
                        ans.checked = !ans.checked;
                    }
                    return ans;
                })

                return quest;
            }
        )

        setQuestions(newQuestions)
    }

    const finishTest = () => {
        axios.put('/test/questions/' + test_id + '/answer', {
            results: questions
        }).then(
            (response) => {
                if (response && response.status === 200) {
                    setScore(response.data)
                }
            }
        )
    }

    return (
        <>
            <div style={{
                height: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                {score && score.max && score.actual ? (
                    <div style={{
                        height: 400,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <h2>Your result is {score.actual} / {score.max}!</h2>
                    </div>

                ) : (
                    <TabContext value={currentQuestion}>
                    <Box className={styles.formContainer} >
                    <AppBar position='static' color='default' className={styles.appBarContainer} >
                    <TabList
                    onChange={handleChange}
                    indicatorColor='primary'
                    textColor='primary'
                    >
                {
                    questions.map((question, index) => (
                    <Tab key={question.id} label={index + 1} value={'question-' + question.id}
                    className={styles.tabMenuItem}/>
                    ))
                }
                    </TabList>
                    </AppBar>
                {
                    questions.map((question, index) => (
                    <TabPanel key={question.id} value={'question-' + question.id} className={styles.tabPanelItem} >
                    <div>
                    <h2>Question #{index + 1}</h2>
                    <p>{question.question_text}</p>

                    <ul style={{
                    paddingLeft: 0
                }}>
                {question.answers.map((answer) => {
                    return (
                    <li key={answer.id}>
                    <label>
                    <Checkbox
                    value={answer.id}
                    checked={answer.checked}
                    onChange={handleCheckboxChange}
                    />
                {answer.value}
                    </label>
                    </li>
                    )
                })}

                    </ul>
                    </div>
                    </TabPanel>
                    ))
                }
                    </Box>
                    </TabContext>
                )}

            <div style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <Button
                    onClick={finishTest}
                    style={{
                        marginTop: 5,
                        borderRadius: 5,
                        backgroundColor: 'rgba(255, 99, 102, 1)',
                        color: '#fff',
                        marginRight: 40
                    }}
                    {...{
                        color: "inherit"
                    }}
                >
                    Finish Test
                </Button>
            </div>
        </div>
    </>

);
}
