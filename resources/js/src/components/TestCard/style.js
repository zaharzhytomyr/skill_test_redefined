import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    testLayout: {
        backgroundColor: 'rgba(60, 70, 180, 1)',
        color: 'white',
        padding: '1rem',
        textAlign: 'left',
    },
    button: {
        backgroundColor: 'rgba(255, 99, 102, 1)',
        color: 'white',
        textAlign: 'center',
        "&:hover": {
            backgroundColor: "rgba(255, 99, 102, 1)"
        },
        margin: '0.5rem 0rem 0.5rem 0rem',
        padding: '0.1rem 2rem 0.1rem 2rem',
        float: 'right',
    },
    tags: {
        textAlign: 'right',
        clear: 'both',
        opacity: '0.75',
        fontSize: '0.8em'
    },
}));

export default useStyles;