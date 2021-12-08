import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
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

export default useStyles;