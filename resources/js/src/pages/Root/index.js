import { Box, Button, Container, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import SVG from '../../assets/img/Main';
import SVGContainer from '../../components/SVGContainer'

const useStyles = makeStyles((theme) => ({
    itemContainer :{
        display: 'flex',
        margin: '35px 0',
        alignItems: 'flex-end'
    },
    itemImage: {
        marginRight: 20,
    },
    itemTitle: {
        fontWeight: 'bold',
    },
    itemText: {
        fontSize: 16,
    },
    buttonGetStarted: {
        padding: '20px 45px',
        backgroundColor: '#3f51b5',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        cursor: 'pointer',
        transition: '0.3s',
        borderRadius: 5,
        '&:hover': {
            textDecoration: 'none',
            transition: '0.3s',
            backgroundColor: '#3a41c5',
        }
    },
    buttonGoToTests: {
        padding: '19px 45px',
        border: '1px solid #3f51b5',
        fontWeight: 'bold',
        boxSizing: 'border-box',
        fontSize: 16,
        cursor: 'pointer',
        borderRadius: 5,
        marginLeft: 20,
        '&:hover': {
            textDecoration: 'none'
        }
    }
}))

const Root = () => {
    const {itemContainer, itemImage, itemTitle, itemText, buttonGetStarted, buttonGoToTests} = useStyles();
    const history = useHistory();

    const handleHistoryPush = (path) => {
        history.push(path);
    }
    return (
        <Box style={{maxWidth: 1300, padding: '0 20px', margin: "0 auto", width: '100%'}}>
                <Grid container style={{paddingTop: 140, paddingBottom: 120, alignItems: 'center'}}>
                    <Grid item xs={6}>
                        <Box style={{maxWidth: "90%"}}>
                            <img src={SVG.PeopleConnection} alt="" width="100%" />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h2" style={{marginTop: 0, fontSize: 45, lineHeight: 1.1, color: 'rgba(27,49,61,.9)', fontWeight: 'bold'}}>
                            Make your code interview preparation easer and smart.
                        </Typography>
                        <Typography variant="body1" style={{fontSize: 25, marginTop: 20}}>
                            Try our new service for code interview preparation!
                        </Typography>
                        <Box style={{marginTop: 50}}>
                            <Link className={buttonGetStarted} onClick={()=>handleHistoryPush('/log-in')}>Get Started</Link>
                            <Link className={buttonGoToTests} onClick={()=>handleHistoryPush('/skill-test')}>Go to tests</Link>
                        </Box>
                    </Grid>

                </Grid>
                <Grid container style={{marginTop: 60, paddingBottom: 100, alignItems: 'center'}}>
                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <Typography variant="h4" >Our benefits</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={itemContainer}>
                            <SVGContainer source={SVG.Participate} className={itemImage} />
                            <Box style={{maxWidth: 450}}>
                                <Typography variant="h6" className={itemTitle}>
                                    20+ Skills to Learn & Practice
                                </Typography>
                                <Typography variant="body1" className={itemText}>
                                     From basic coding fundamentals to Java and AI, there are 30+ tests to learn, practice and compete in.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={itemContainer}>
                            <SVGContainer source={SVG.Participate2} className={itemImage} />
                            <Box style={{maxWidth: 450}}>
                                <Typography variant="h6" className={itemTitle}>
                                    Improve Yourself.
                                </Typography>
                                <Typography variant="body1" className={itemText}>
                                    Get Noticed Participation increases your Skill Quotient, which can be seen by fellow developers and potential employers.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={itemContainer}>
                            <SVGContainer source={SVG.Participate3} className={itemImage} />
                            <Box style={{maxWidth: 450}}>
                                <Typography variant="h6" className={itemTitle}>
                                    Compete. Get Hired
                                </Typography>
                                <Typography variant="body1" className={itemText}>
                                    Compete in over 300 challenges from top IT companies to win prizes or even get hired..
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={itemContainer}>
                            <SVGContainer source={SVG.Participate5} className={itemImage} />
                            <Box style={{maxWidth: 450}}>
                                <Typography variant="h6" className={itemTitle}>
                                    Your Online Portfolio
                                </Typography>
                                <Typography variant="body1" className={itemText}>
                                    Use your TechGig profile to show off your skills and achievements as an online portfolio.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box style={{maxWidth: '90%'}}>
                            <img src={SVG.Benefits} alt="benefits" width="100%" />
                        </Box>
                    </Grid>


                </Grid>
        </Box>
    )
}

export default Root
