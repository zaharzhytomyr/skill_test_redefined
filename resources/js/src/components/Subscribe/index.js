import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from "./style";

const Subscribe = ({title}) => {
  const styles = useStyles();
  const [value, setValue] = React.useState('');

  const changeValue = (e) => {
    setValue(e.target.value);
  } 
  return (
    <>
      <Typography variant="h6" component="p" className={styles.title}>{title}</Typography>
      <Box className={styles.formContainer}>
        <form className={styles.form}>
            <input 
                value={value} 
                onChange={changeValue} 
                placeholder="Enter your email"
                className={styles.input}
            /> 
            <Button className={styles.button}>Subscribe</Button>
        </form>
      </Box>
    </>
  )
}

export default Subscribe
