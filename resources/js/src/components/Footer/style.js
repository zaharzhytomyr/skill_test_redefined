import { makeStyles } from '@material-ui/styles';
 
const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        backgroundColor: 'rgba(40, 50, 160, 1)',
    },
    footerContainer: {
        maxWidth: 1300,
        margin: '0 auto',
        padding: 20,
        textAlign: 'left',
    },
    footerLogo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        textDecoration: 'none',
        "@media (max-width: 600px)": {
            fontSize: 30,
        },
    },
    footerLogoSpan: {
        color: 'rgba(255, 99, 92, 1)',
    },
    footerMenuContainer: {
        boxSizing: 'border-box',
        margin: '10px 0 0 10px',
        "@media (max-width: 600px)": {
            margin: 0,
        },
    },

    footerFollowUs: {
        width: 50,
        height: 50,
        margin: '0 10px',
        backgroundColor: 'pink'
    },
    footerMenuLink: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: '1s',
        '&:hover': {
            textDecoration: 'underline',
            transition: '1s'
        }
    },
    subscribeContainer: {

    },
    flexCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    socialMediaTitle: {
        color: 'white',
        marginBottom: 10,
        "@media (max-width: 1280px)": {
            marginBottom: 0,
            fontSize: 17
        },
        "@media (max-width: 960px)": {
            marginTop: 20,
        },
    },
    socialMediaContainer:{
        display: 'flex',

    },
    marginLeft: {
        marginLeft: 30,
        "@media (max-width: 980px)": {
            marginLeft: 0,
        },
    }
}));

export default useStyles;