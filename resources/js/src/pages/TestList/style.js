import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    mainLayout: {
        maxWidth: 1300,
        width: '100%',
        padding: '0 20px',
        margin: '0 auto',
        flexDirection: 'column',
        flexGrow: '1',
        paddingBottom: '6rem',
        paddingTop: '2rem',
        '@media (max-width: 600px)': {
            width: '90%',
            paddingBottom: '2rem',
        }
    },
    pageTitle: {
        margin: '1rem 0rem 1rem 0rem',
        textAlign: 'left'
    },
    leaderBoardContainer: {
        marginLeft: 50,
        marginTop: '1.5rem',
        '@media (max-width: 825px)': {
            marginLeft: 20,
        },
        '@media (max-width: 670px)': {
            marginLeft: 10,
        },
        '@media (max-width: 600px)': {
            marginLeft: 0,
        }
    }
}));

export default useStyles;
