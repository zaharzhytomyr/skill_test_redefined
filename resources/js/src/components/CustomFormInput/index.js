import { Field } from "react-final-form";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from 'mui-rff';

const styles = {
  root: {
    '& .MuiFormHelperText-contained': {
      marginBottom: -7,
    }
  }
}

const MIU_RFF_input = (props) => {
    const { name, className, ...rest } = props;
    return (
      <Field name={name}>
          {({input, meta})=>(
            <TextField 
                name={input.name} 
                value={input.value} 
                onChange={input.onChange} 
                {...rest}
            />
          )}
        </Field>
    )
  }

  export default withStyles(styles)(MIU_RFF_input);