import { Button, Grid, Paper, Typography } from "@material-ui/core"
import { Form } from "react-final-form"
import { Link, useHistory } from "react-router-dom";
import { CustomFormInput } from ".."
import { validateLoginForm } from "../../constants/forms";
import ContinueWith from "../ContinueWith";
import useStyles from './style';
import axios from 'axios';
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../context/user/userContext";

const Login = () => {
    const styles = useStyles();
    const history = useHistory();

    const {user, getAuthUser} = useContext(UserContext)

    useEffect(() => {
        if(!user) {
            getAuthUser()
        }

        if(user && Object.keys(user).length !== 0) {
            history.push("/skill-test");
            getAuthUser()
        }

    })

    const onSubmit = (data) => {
        axios.post('/login', data).then(
            (response) => {
                if (response && response.status === 204) {
                    history.push("/skill-test");
                    getAuthUser()
                }
            }
        )
    }

    return (
        <Grid container>
          <Grid item xs={12}>
            <Paper elevation={3} className={styles.formContainer}>
              {/*<ContinueWith />*/}
              <p style={{marginTop: '20px'}}>Or Login with email</p>
              <Form
                onSubmit={onSubmit}
                subscription={true}
                validate={validateLoginForm}
                render={({handleSubmit, values})=> (
              <>
              <form onSubmit={handleSubmit} className={styles.form}>
                <CustomFormInput
                    name="email"
                    label="Email*"
                    variant='outlined'
                    style={{margin: '10px 0'}}
                />
                <CustomFormInput
                    name="password"
                    label="Password*"
                    variant="outlined"
                    type="password"
                    style={{margin: '10px 0'}}
                />
                <Link to="/forget-password" className={styles.forgetPassword}>
                  Do not remember password?
                </Link>
                <Button
                  type="submit"
                  variant='contained'
						      color='primary'
                  style={{width: '150px', margin: '0 auto', marginTop: '30px'}}
                >Login</Button>
              </form>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
              </>
            )}
          />
          </Paper>
        </Grid>
      </Grid>
    )
}

export default Login;
