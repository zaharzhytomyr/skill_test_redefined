import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    textAlign: 'left', 
    padding: '30px 40px',
    marginBottom: '50px',
    '@media (max-width: 600px)': {
      padding: 20,
    }
  },
  loginImage: {
    marginRight: '10px',
    cursor: 'pointer',
  },
  form: {
    display: 'flex', 
    flexDirection: "column"
  },
  forgetPassword: {
    textAlign: 'right',
    textDecoration: 'none',
    color: 'black',
    '&:hover':{
      textDecoration: 'underline',
    }
  }

}));

export default useStyles;