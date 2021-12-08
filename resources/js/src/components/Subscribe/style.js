import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    formContainer:{
      backgroundColor: 'white', 
      height: 40,
      padding: 4, 
      borderRadius: 5,
    }, 
    form:{
      borderRadius: 5, 
      widows: 'relative', 
      paddingLeft: 10,
      '&:before':{
        content: " ",
        display: 'table',
      },
      '&:after':{
        content: " ",
        display: 'table',  
      }
    },
    input: {
      background: 'none', 
      padding: 0, //'4px 10px 4px 0', 
      boxShadow: 'none', 
      float: 'left',
      fontSize: 16, 
      height: 40, 
      outline: 'none', 
      border: 0,
    },
    button: {
      backgroundColor: 'rgba(40, 50, 160, 1)', 
      color: 'white',
      height: 40, 
      textTransform: 'Capitalize',
      fontWeight: 'bold',
      padding: '0 15px',
      marginTop: 0, 
      float: 'right',
      '&:hover':{
        backgroundColor: 'rgba(50, 60, 200, 1)',
      }
    },
    title:{
      marginBottom: 10,
      color: 'white',
      "@media (max-width: 1280px)": {
          marginBottom: 0,
          marginTop: 10,
          fontSize: 17
      },
      "@media (max-width: 960px)": {
        marginBottom: 5,
    },
    }
  }));

export default useStyles;