import React from 'react';
import { Avatar, Fab, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Tooltip, Typography } from "@material-ui/core";
import useStyles from "./style";
import { withStyles } from '@material-ui/styles';
import SVGContainer from '../SVGContainer';
import { Bronze, Gold, Silver } from '../../assets';
  
const technologies = [
    'Angular JS',
    'Artificial Intelligence',
    'Big Data',
    'C',
    'C#',
    'C++',
    'CSS',
    'HTML',
    'Java Script',
    'jQuery',
    'Node.js',
    'PHP',
    'Python',
    'Software Testing',
    'SQL'
]

const leaderboard = [
    {
        name: 'AMIT SHISHODIA',
        rank: '1',
        rating: '99.98',
        about: 'Fresher',
        badges: {
            gold: 46,
            silver: 92,
            bronze: 34,
        },
    },
    {
        name: 'Srikant Gudi',
        rank: '2',
        rating: '99.95',
        about: 'Pandera Systems *||* Mphasis Ltd',
        badges: {
            gold: 5,
            silver: 37,
            bronze: 11,
        },
    },
    {
        name: 'akanksha pyasi',
        rank: '3',
        rating: '99.93',
        about: '',
        badges: {
            gold: 58,
            silver: 11,
            bronze: 6,
        },
    },
    {
        name: 'Esakkiammal S',
        rank: '3',
        rating: '99.91',
        about: '',
        badges: {
            gold: 1,
            silver: 7,
            bronze: 0,
        },
    },
    {
        name: 'Nikhil Bharadwaj',
        rank: '4',
        rating: '99.87',
        about: 'Optival Health Solution Pvt.Ltd. *||* Med Plus Health Service Private Limited',
        badges: {
            gold: 10,
            silver: 19,
            bronze: 7,
        },
    },
    {
        name: 'Aritra Neogy',
        rank: '5',
        rating: '99.84',
        about: 'Capgemini *||* Infosys',
        badges: {
            gold: 0,
            silver: 2,
            bronze: 0,
        },
    },
    {
        name: 'Surya',
        rank: '6',
        rating: '99.80',
        about: 'Infosys',
        badges: {
            gold: 0,
            silver: 3,
            bronze: 0,
        },
    }
]

const HtmlTooltip = withStyles((theme) => ({
    arrow: {
        fontSize: 16,
        width: 20,
        "&::before": {
          border: "1px solid #dadde9",
          backgroundColor: "#fff",
        },
    },
    tooltip: {
        backgroundColor: '#fff',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 400,
        minWidth: 400,
        width: '100%',
        fontSize: 12,
        border: '1px solid #dadde9',
        '@media (max-width: 450px)': {
            maxWidth: 310,
        }
    },

  }))(Tooltip);

  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

const LeaderboardItem = ({elem}) => {
    const styles = useStyles()

    return (
        <Grid container className={styles.leaderbordItem} key={`${elem.name}_${elem.rank}`}>
            <Grid item xs={6}>
            <HtmlTooltip
                placement="top"
                arrow
                title={
                    <Grid container className={styles.tooltipContainer}>
                        <Grid item xs={2} >
                            <Avatar {...stringToColor(elem.name)} className={styles.tooltipAvatar} />
                        </Grid> 
                        <Grid item xs={10} className={styles.tooltipHeaderContainer} >
                            <Typography variant='h7' component="p" className={styles.tooltipHeaderName}>{elem.name}</Typography>
                            <Typography variant='p' className={styles.tooltipHeaderAbout}>{elem.about}</Typography>
                            <Grid container className={styles.tooltipHeaderAchievements}>
                                <Grid item xs={4}>
                                    SQ <b>{elem.rating}%</b>
                                </Grid>
                                <Grid item xs={5}>
                                    Rank <b>{elem.rank}</b>
                                </Grid>
                            </Grid>
                            <Grid container className={styles.tooltipMedalsContainer}>
                                <Grid item xs={4} className={styles.tooltipMedalItem}>
                                    <SVGContainer source={Gold} className={styles.tooltipMedalImage} />
                                    <Typography variant='span' className={styles.tooltipMedalAmount}>
                                        {`${elem.badges.gold} Gold`}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} className={styles.tooltipMedalItem}>
                                    <SVGContainer source={Silver} className={styles.tooltipMedalImage} />
                                    <Typography variant='span' className={styles.tooltipMedalAmount}>
                                        {`${elem.badges.silver} Silver`}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} className={styles.tooltipMedalItem}>
                                    <SVGContainer source={Bronze} className={styles.tooltipMedalImage} />
                                    <Typography variant='span' className={styles.tooltipMedalAmount}>
                                        {`${elem.badges.bronze} Bronze`}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    }
                >
                    <span 
                        style={{fontWeight: 'bold'}} 
                    >{elem.name}</span>
                </HtmlTooltip>
            </Grid>
            <Grid item xs={2} style={{color: '#19171a'}}>
                {elem.rank}
            </Grid>
            <Grid item xs={4} style={{color: '#19171a', fontWeight: 'bold'}}>
                {`${elem.rating}%`}
            </Grid>
        </Grid>
    )
}

const Leaderboard = () => {
    const styles = useStyles()
    const [technology, setTechnology] = React.useState(technologies[0]);

    const handleChange = (event) => {
      setTechnology(event.target.value);
    };
    const isWindowWidth = window.innerWidth < 650 && window.innerWidth > 600 || window.innerWidth < 380;
    return ( 
        <>
            <Typography variant="h6" className={styles.title}>
                Leaderboard
            </Typography>
            <Paper elevation={2} className={styles.leaderbordContainer}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={technology}
                        variant='outlined'
                        onChange={handleChange}
                        className={styles.leaderbordSelect}
                    >
                        {
                            technologies.map(elem=>( 
                                <MenuItem value={elem} key={elem}>{elem}</MenuItem>
                            ))
                        } 
                    </Select>
                </FormControl>

                <Grid container className={styles.leaderHeader}>
                    <Grid item xs={6}>
                        Name
                    </Grid>
                    <Grid item xs={2}>
                        Rank
                    </Grid>
                    <Grid item xs={4}>
                        {
                            isWindowWidth?
                            <Tooltip title="Skill Quotient" aria-label="Skill Quotient">
                                <span>SQ</span>
                            </Tooltip>:
                            <span>Skill Quotient</span>
                        }
                    </Grid>
                </Grid>
                {
                    leaderboard.map(elem => (
                        <LeaderboardItem elem={elem} key={elem.name}/>
                    ))
                }
            </Paper>
        </>
    )
}

export default Leaderboard;
