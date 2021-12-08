import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    testWrapper: {
        marginBottom: 20, 
        padding:'0 8px',
        '@media (max-width: 480px)': {
            padding: 0,
        }
    },
    testContainer: {
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: 16,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 18%)',
        backgroundColor: '#fff',
        borderRadius: 3,
        textDecoration: 'none', 
        color: 'rgba(0, 0, 0, 0.87)',
        "&:hover h6": {
            color: 'rgba(255, 99, 102, 1)',
            transition: '0.2s',
        },
        '@media (max-width: 480px)': {
            padding: '8px 16px',
        }
    },
    testDataContainer: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between'
    },
    testTitle: {
        transition: '0.2s',
        fontSize: 20
    },
    testDescription: {
        fontWeight: 'normal', 
        textDecoration: 'underline',
    },
    testImage: {
        width: 70, 
        borderRadius: 3,
        border: '1px solid #dadada', 
    }
}));

export default useStyles;