import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  formContainer: {
    textAlign: 'left', 
    padding: '30px 40px',
    marginBottom: '50px',
    '@media (max-width: 600px)': {
      padding: 20,
    }
  },
  form: {
    display: 'flex', 
    flexDirection: "column"
  },
  formInput: {
    padding: '100px'
  },
  inputMargin: {
  },
  link: {
    color: 'black',
    textTransform: 'Capitalize'
  },
  tag: {
    borderRadius: 5,
    fontSize: 17,
    color: '#4a4548',
  },
}));

export default useStyles;