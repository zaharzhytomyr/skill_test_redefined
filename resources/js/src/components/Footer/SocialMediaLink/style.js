import { makeStyles } from '@material-ui/styles';
 
const useStyles = makeStyles((theme) => ({
    socialContainer: {
        width: 30,
        height: 30,
        marginRight: 15,
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "@media (max-width: 1280px)": {
            backgroundColor: 'transparent',
            width: 20,
            height: 20,
            '& svg': {
                color: 'white',
            }
        },
    }
}));

export default useStyles;