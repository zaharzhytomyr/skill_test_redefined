import { Box, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Subscribe from '../Subscribe';
import useStyles from './style';
import SocialMedia from './SocialMediaLink';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const links = [
    {
        to:'/about-us',
        title:'About Us',
    },
    {
        to:'/press',
        title:'In The Press',
    },
    {
        to:'/awards',
        title:'Our Awards',
    },
    {
        to:'/contact-us',
        title:'Contact Us',
    },
    {
        to:'/privacy',
        title:'Privacy Policy',
    },
    {
        to:'/terms',
        title:'Terms & Conditions',
    }
]

function Footer() {
    const styles = useStyles();
    const urlLinks = links.map(elem=>(
        <Grid item lg={6} md={5} sm={6} xs={6} key={elem.title}>
            <Link to={elem.to} className={styles.footerMenuLink}>{elem.title}</Link>
        </Grid>
    ))
    return (
        <Grid container className={styles.footer}>
            <Grid container className={styles.footerContainer}>
                <Grid item lg={4} md={5} sm={6} xs={12}>
                    <Link to='/' className={styles.footerLogo}>
                        Code<span className={styles.footerLogoSpan}>Interview</span>
                    </Link>
                    <Grid container className={styles.footerMenuContainer} spacing={1}>
                        {
                            urlLinks
                        }
                    </Grid>
                </Grid>
                <Grid item lg={8} md={7} sm={12} className={styles.flexCenter}>
                    <Grid container>
                        <Grid item lg={5} md={10} sm={10} className={`${styles.flexCenter} ${styles.marginLeft}`}>
                            <Typography variant="h6" component="p" className={styles.socialMediaTitle}>
                                Follow CodeInterview
                            </Typography>
                            <Box className={styles.socialMediaContainer}>
                                <SocialMedia link="https://www.youtube.com/" icon={faYoutube} size="2x" color="red" />
                                <SocialMedia link="https://www.facebook.com/" icon={faFacebook} size="2x" color="#3b5998" />
                                <SocialMedia link="https://www.instagram.com/?hl=ru" icon={faInstagram} size="2x" color="#FCAF45" />
                                <SocialMedia link="https://twitter.com/?lang=ru" icon={faTwitter} size="2x" color="#1da1f2" />
                            </Box>
                        </Grid>
                        <Grid item lg={5} md={10} sm={10} className={`${styles.flexCenter} ${styles.marginLeft} ${styles.subscribeContainer}`}>
                            <Subscribe title='Subscribe To Our Newsletter' />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer
