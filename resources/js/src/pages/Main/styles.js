import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    shortcutButton: {
        textDecoration: 'underline',
        color: '#d7263d',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'none',
        }
    },
    pageContainer: {
        maxWidth: 1340, 
        width: '100%',
        margin: '0 auto', 
        textAlign: 'left', 
        fontWeight: 'bold',
        padding: '0 20px',
        '@media (max-width: 480px)': {
            padding: '0 15px',
        }

    },
    pageHeaderTitle:{
        margin: 0,
        fontSize: 40,
        fontWeight: 'normal',
        marginTop: 10,
        '@media (max-width: 480px)': {
            fontSize: 25,
        }
    },
    mainText: {
        fontWeight: 'bold',
        paddingBottom: 20,
        lineHeight: 1.4,
        '@media (max-width: 480px)': {
            fontWeight: 'normal'
        }
    },
    inputContainer: {
        display: 'flex', 
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 30,
        paddingRight: 8,
        '@media (max-width: 480px)': {
            marginTop: 0,
        }
    },
    inputImage: {
        width: 30, 
        margin: 15,
        '@media (max-width: 480px)': {
            width: 25,
            margin: 8,
        }
    },
    mainFindInput: {
        width: '90%',
        height: 20,
        border: 0,
        fontSize: 20,
        outline: 'none',
        padding: "25px 0",
        '@media (max-width: 480px)': {
            padding: "15px 0",
        }
    },
    skillTestTitle: {
        '@media (max-width: 960px)': {
            fontSize: 25,
            fontWeight: 'bold',
        },
        '@media (max-width: 480px)': {
            fontSize: 20,
        }
    },
    leaderbordSelect: {
        height: 40,
        color: '#8a85ad',
    },
    leaderHeader:{
        color: '#8a858d',
        paddingTop: 10,
    },
    leaderbordItem: {
        padding: '18px 2px',
        color: '#4a4548',
        fontWeight: 'normal',
        fontSize: 14,
        borderBottom: '1px dashed grey',
    },
    skillsRankTitle: {
        marginTop: 20, 
        marginBottom: 10, 
        paddingLeft: 20,
        '@media (max-width: 960px)': {
            fontSize: 15,
            paddingLeft: 0
        }
    },
    rankItem: {
        width: 50, 
        margin: '0 20px',
        '@media (max-width: 960px)': {
            marginLeft: 0,
            marginRight: 25,
        }
    },
    leaderbordContainer: {
        padding: 20,
        paddingRight: 0,
        '@media (max-width: 960px)': {
            padding: 0,
            paddingLeft: 15,
            width: '100%',
        },
        '@media (max-width: 600px)': {
            paddingLeft: 0,
        }
    },
}));

export default useStyles;