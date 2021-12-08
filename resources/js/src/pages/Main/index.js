import { Box, FormControl, Grid, MenuItem, Paper, Typography, InputLabel, Select } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { Bronze, Gold, Search, Silver } from '../../assets';
// import { Bronze, Gold, Silver } from '../../assets';
import { BasicBreadcrumbs, Leaderboard, SVGContainer } from '../../components';
import useStyles from './styles';
import SVG from '../../assets/img/Tests';
import SkillTest from '../../components/CardTest';
import axios from "axios";

export const CategoryImages = {
    'SVG.JQuery' : SVG.JQuery,
    'SVG.Bigdata' : SVG.Bigdata,
    'SVG.Angular' : SVG.Angular,
    'SVG.NodeJS' : SVG.NodeJS,
    'SVG.Intelligence' : SVG.Intelligence,
    'SVG.Testing' : SVG.Testing,
    'SVG.Csharp' : SVG.Csharp,
    'SVG.PHP' : SVG.PHP,
    'SVG.CSS': SVG.CSS,
    'SVG.JavaScript' : SVG.JavaScript,
    'SVG.C': SVG.C,
    'SVG.HTML': SVG.HTML,
    'SVG.Cpp': SVG.Cpp,
    'SVG.SQL': SVG.SQL,
    'SVG.Python': SVG.Python,
    'DEFAULT':  SVG.NodeJS
};

//
// const AvailableTests = [
//     {
//         title: 'Jquery',
//         amount: 3,
//         img: SVG.JQuery,
//     },
//     {
//         title: 'Big Data',
//         amount: 3,
//         img: SVG.Bigdata,
//     },
//     {
//         title: 'Angular',
//         amount: 3,
//         img: SVG.Angular,
//     },
//     {
//         title: 'Node.js',
//         amount: 3,
//         img: SVG.NodeJS,
//     },
//     {
//         title: 'Artificial Intelligence',
//         amount: 3,
//         img: SVG.Intelligence,
//     },
//     {
//         title: 'Software Testing',
//         amount: 3,
//         img: SVG.Testing,
//     },
//     {
//         title: 'C Sharp',
//         amount: 3,
//         img: SVG.Csharp,
//     },
//     {
//         title: 'PHP',
//         amount: 3,
//         img: SVG.PHP,
//     },
//     {
//         title: 'CSS',
//         amount: 3,
//         img: SVG.CSS,
//     },
//     {
//         title: 'JavaScript',
//         amount: 3,
//         img: SVG.JavaScript,
//     },
//     {
//         title: 'C',
//         amount: 3,
//         img: SVG.C,
//     },
//     {
//         title: 'HTML',
//         amount: 3,
//         img: SVG.HTML,
//     },
//     {
//         title: 'C++',
//         amount: 3,
//         img: SVG.Cpp,
//     },
//     {
//         title: 'SQL',
//         amount: 3,
//         img: SVG.SQL,
//     },
//     {
//         title: 'Python',
//         amount: 3,
//         img: SVG.Python,
//     },
// ]

const MainPage = () => {
    const [short, setShort] = React.useState(false);
    const styles = useStyles()


    const [AvailableTests, setAvailableTests] = useState([])
    const [isRetrievedAvailableTests, setIsRetrievedAvailableTests] = useState(false)
    const [search, setSearch] = React.useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const retrieveTestCategories = () => {
        axios.get('/test/categories').then(
            (response) => {
                if (response && response.status === 200) {
                    setAvailableTests(response.data)
                }
            }
        )
    }

    useEffect(() => {
        if (!isRetrievedAvailableTests) {
            retrieveTestCategories()
            setIsRetrievedAvailableTests(true)
        }
    })

    return (
        <>
            <BasicBreadcrumbs
                links={[
                    {label: 'Home', link: '/'},
                    {label: 'Skill Test', link: ''}]}
            />
            <Box style={{borderBottom: '1px solid grey'}}>
                <Grid container className={styles.pageContainer} >
                    <Grid item md={8} xs={11} className={styles.mainText} >
                        <p className={styles.pageHeaderTitle}>Skill Tests </p>
                        <p>
                            {
                                short?
                                "Skill Tests are a collection of language/ technology-based MCQ questions which help you assess yourself, improve your knowledge and move up the leaderboard. In fact, with 1000s of users taking these tests daily, Skill Tests are one of the world's most trusted assessments for benchmarking technology-skills.":
                                "Skill Tests are a collection of language/ technology-based MCQ questions which help you assess yourself, improve your knowledge and move up the leaderboard. In fact, with 1000s of users taking these tests daily, Skill Tests are one of the world's most trusted assessments for benchmarking technology-skills.".slice(0, 150) + '... '
                            }
                            {
                                !short && <span onClick={()=>setShort(true)} className={styles.shortcutButton}>
                                                Read more
                                            </span>
                            }
                        </p>
                        {
                            short && <p>
                                        Each Skill Test is covers a set of topics, and is of a certain level of difficulty. We have refreshed the questions in consultation with industry experts, to up the level of Skill Tests. Qualifying in a Skill Test implies that you have strong grip of those topics within that skill. As a proof of your expertise, you can then get the certificate for that test either from the result page or your profile.
                                    </p>
                        }
                        {
                            short && <p>
                                        Skill Test Certificates are a testament of your understanding of the topics covered in a Skill Test. Several companies in our network recruit candidates based on their score and how well they have mastered a programming language, framework or skill. In addition, we are working diligently to onboard more companies who can offer you career opportunities on the basis of the certificates.
                                        Even though Skill Tests stand for benchmarking your technology skills against millions of users, we strive to also provide you meaningful learning. You can now view detailed, topic-wise score breakdown in the analytics section on the test result page. You can brush-up your knowledge on the topics you are weak on in the TechGig Practice section, where we have built dedicated learning paths for popular skills.
                                    </p>
                        }
                        {
                            short && <p>
                                        So, get going! Assess yourself in 25+ skills including SQL, Machine Learning, Python, Angular JS etc. and flaunt your test certificates. Have any suggestions or doubts about the New Skill Tests? Write to us on customercare@techgig.com&nbsp;
                                        <span onClick={()=>setShort(false)} className={styles.shortcutButton}>
                                        Read less
                                        </span>
                                    </p>
                        }
                    </Grid>
                    <Grid item md={4} xs={12} >
                        <p className={styles.skillsRankTitle}>Earn Badges as you complete a Skill Test. Badges are visible to the recruiters and developers visiting your profile.</p>
                        <SVGContainer source={Gold} className={styles.rankItem} />
                        <SVGContainer source={Silver} className={styles.rankItem} />
                        <SVGContainer src={Bronze} className={styles.rankItem} />
                    </Grid>
                </Grid>
            </Box>

            <Box style={{paddingBottom: 80}}>
                <Grid container className={styles.pageContainer} >
                    <Grid item md={8} sm={6} xs={12} style={{paddingTop: 20}}>
                        <Paper elevation={3} className={styles.inputContainer}>
                            <SVGContainer source={Search} className={styles.inputImage} />
                            <input
                                type="text"
                                value={search}
                                onChange={handleChange}
                                className={styles.mainFindInput}
                                placeholder="Enter topic, skill"
                            />
                        </Paper>
                        <Typography variant="h4" className={styles.skillTestTitle}>
                            All Skill Tests
                        </Typography>
                        <Grid container style={{marginTop: 15}}>
                            {
                                AvailableTests.map( (elem, index) =>(
                                    <SkillTest elem={elem} key={`${elem.title}_${index}`} />
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} sx={12} className={styles.leaderbordContainer} >
                        <Leaderboard />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default MainPage
