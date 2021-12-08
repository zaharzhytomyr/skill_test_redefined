import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: 20,
        marginTop: 5,
        fontWeight: 'bold',
        '@media (max-width: 960px)': {
            marginBottom: 10,
        }
    },
    leaderbordSelect: {
        height: 40,
        color: '#8a85ad',
    },
    leaderbordContainer: {
        padding: '10px 15px',
    },
    leaderHeader:{
        color: '#8a858d',
        paddingTop: 20,
        fontSize: 17,
        '@media (max-width: 768px)': {
            fontSize: 15,
            paddingTop: 15,
        },
        '@media (max-width: 695px)': {
            fontSize: 14,
        },
        '@media (max-width: 600px)': {
            fontSize: 17,
        },
        '@media (max-width: 600px)': {
            fontSize: 14,
        }
    },
    leaderbordItem: {
        padding: '18px 2px',
        color: '#4a4548',
        fontWeight: 'normal',
        fontSize: 17,
        borderBottom: '1px dashed #e3e3e3',
        '@media (max-width: 768px)': {
            fontSize: 15,
            padding: '16px 2px',
        },
        '@media (max-width: 695px)': {
            fontSize: 14,
            padding: '14px 2px',
        },
        '@media (max-width: 600px)': {
            fontSize: 17,
        },
        '@media (max-width: 600px)': {
            fontSize: 14,
        }
    },
    tooltipContainer: {
        padding: 8,
        '@media (max-width: 450px)': {
            padding: 2,
        }
        
    },
    tooltipAvatar: {
        margin: 5,
        '@media (max-width: 450px)': {
            margin: 0,
            marginLeft: -4,
        }
    },
    tooltipHeaderContainer : {
        fontSize: 18,
        '@media (max-width: 450px)': {
            fontSize: 16,
        }
    },
    tooltipHeaderName: {
        fontWeight: 'bold', 
        color: '#4a4548', 
        marginBottom: 8,
        '@media (max-width: 450px)': {
            fontSize: 15,
        }
    },
    tooltipHeaderAbout: {
        marginTop: 20, 
        fontSize: 16,
        '@media (max-width: 450px)': {
            fontSize: 14,
            lineHeight: 1.3,
        }
    },
    tooltipHeaderAchievements: {
        fontSize: 16, 
        margin: '6px 0',
        '@media (max-width: 450px)': {
            fontSize: 13,
        }
    },
    tooltipMedalsContainer: {
        fontSize: 14,
        '@media (max-width: 450px)': {
            fontSize: 12,
        }
    },
    tooltipMedalItem: {
        display: 'flex', 
        alignItems: 'center', 
        padding: 5,
        '@media (max-width: 450px)': {
            padding: 2,
        }
    },
    tooltipMedalImage: {
        width: 25, 
        marginRight: 7,
        '@media (max-width: 450px)': {
            width: 22, 
            marginRight: 3,
        }
    },
    tooltipMedalAmount: {
        marginTop: -5,
    },
}));

export default useStyles;