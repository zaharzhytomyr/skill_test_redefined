import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	header: {
		height: 70,
        backgroundColor: 'rgba(40, 50, 160, 1)',
	},
    headerContainer: {
        maxWidth: 1300,
        height: '100%',
        padding: '0 20px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: '0 auto',
        overflow: 'hidden'
    },
    headerLogo: {
        textTransform: 'uppercase',
        fontSize: 23,
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'bold',
        marginRight: '20px',
    },
    headerLogoSpan: {
        color: 'rgba(255, 99, 102, 1)',
    },
    headerLink: {
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: 25,
        transition: '1s',
        color: 'white',
        textTransform: 'uppercase',
        position: 'relative',
        '&:hover':{
            backgroundColor: 'rgba(40, 50, 210, 1)',
            color: 'rgba(210, 210, 210, 1)',
            transition: '1s'
        }
    },
    headerLogin: {
        marginLeft: 'auto',
        padding: '10px 15px',
        backgroundColor: 'rgba(255, 99, 102, 1)',
        borderRadius: 5,
        transition: '2s',
        '&:hover':{
            backgroundColor: 'rgba(255, 99, 102, 1)',
            color: 'white'
        }
    }
}));

export default useStyles;