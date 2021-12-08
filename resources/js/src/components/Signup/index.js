import React, {useContext} from 'react';
import { Button, Grid, Paper, MenuItem, Chip, TextField } from "@material-ui/core"
import { Field, Form } from "react-final-form";
import { CustomFormInput } from "..";

import { Autocomplete, Checkboxes, Radios, Select } from 'mui-rff';
import CustomMultiple from './customMultiple/index';
import {Link, useHistory} from 'react-router-dom';
import ContinueWith from '../ContinueWith';
import useStyles from './style';
import { validateSignupForm } from '../../constants/forms';
import axios from "axios";
import {UserContext} from "../../context/user/userContext";

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

const MyChip = (props) => {
  const [state, setState] = React.useState(false);
  const handleClick = () => {
    setState(prev => !prev);
  }
  return (
      <Chip
        style={{border: state?'1px solid grey': ''}}
        onClick={handleClick}
        {...props}
      />
  );
};

const technologies = [
  { label: 'C'},
  { label: 'c language'},
  { label: 'c developer'},
  { label: 'c program'},
  { label: 'c programming'},
  { label: "JS"},
  { label: 'ReactJS'},
  { label: 'NodeJS'},
  { label: 'Testing'},
  { label: 'AngularJS'},
  { label: 'VueJS' },
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'Bootstrap' },
  { label: 'Bootstrap 5' },
  { label: 'Haxe' },
  { label: "Java" },
  { label: 'JVM' },
  { label: 'JRE' },
  { label: 'Juputer' },
  { label: 'Python' },
  { label: 'Pandas' },
  { label: 'Redux' },
  { label: 'Redux-thunk' },
  { label: "Redux saga" },
  { label: 'Tailwind' },
  { label: 'React Native' },
  { label: 'React' },
  { label: 'Angular' },
  { label: 'XML' },
  { label: 'WebRTC' },
  { label: 'JSON' },
  { label: 'C++' },
  { label: 'Qt' },
  { label: 'VsCode' },
  { label: 'WebStorm' },
  { label: 'Intellij Idea' },
  { label: 'Blockchain' },
  { label: 'Web Sockets' },
  { label: 'ffmpeg' },
  { label: 'VR' },
  { label: 'B2B' },
  { label: 'B2C' },
  { label: 'C2B' },
  { label: 'UML' },
  { label: 'Software' },
  { label: 'Developer' },
  { label: 'Designer' },
  { label: 'Figma' },
  { label: 'Photoshop' },
  { label: 'Ant Design' },
  { label: 'ES5' },
  { label: 'ES6' },
  { label: 'ES7' },
  { label: 'Java Core' },
  { label: 'Threads' },
  { label: 'C++98' },
  { label: 'C++03' },
  { label: 'C++17' },
  { label: 'Django' },
  { label: 'Spring' },
  { label: 'GUI' },
  { label: 'Software Designer' },
  { label: 'XCode' },
  { label: 'Xamarin' },
  { label: 'Android developer' },
  { label: 'Android' },
  { label: 'IOS' },
  { label: 'IOS Developer' },
  { label: 'Apple' },
  { label: 'XML' },
  { label: 'SQL' },
  { label: 'MySQL' },
  { label: 'Postgress' },
  { label: 'NoSQL' },
  { label: 'ORM' },
  { label: 'MongoDB' },
  { label: 'Firebase' },
  { label: 'Microservice' },
  { label: 'Monolith' },
  { label: 'Web API' },
  { label: 'ECMA Script' },
  { label: 'Eclips' },
  { label: 'Excel' },
  { label: 'Data Science' },
  { label: 'HR' },
  { label: 'Integration' },
  { label: 'Laravel' },
  { label: 'PHP' },
  { label: 'Yii2' },
  { label: 'Yii3' },
  { label: 'Haskell' },
  { label: 'ELM' },
  { label: "JQuery" },
  { label: 'JDBC' },
  { label: 'Heroku' },
  { label: 'Visual Basic' },
  { label: 'TypeScript' },
  { label: 'Web 2.0' },
  { label: 'Web Design' },
];

const Signup = () => {
    const styles = useStyles();
    const history = useHistory();
    const {user, getAuthUser} = useContext(UserContext)

    const onSubmit = (data) => {
        axios.post('/register', data).then(
            (response) => {
                if (response.status === 201) {

                    history.push("/skill-test");
                    getAuthUser()
                }
            }
        )

    }

    const [skills, setSkills] = React.useState([]);

    return (
        <Grid container>
          <Grid item xs={12}>
            <Paper elevation={3} className={styles.formContainer}>
              {/*<ContinueWith />*/}
              <p style={{marginTop: '20px'}}>Or Signup with email</p>
              <Form
                onSubmit={onSubmit}
                subscription={true}
                validate={validateSignupForm}
                initialValues={{
                  type: "student",
                  skill_arr: [],
                  skills: [],
                }}
                render={({handleSubmit, values})=> (
              <>
              <form onSubmit={handleSubmit} className={styles.form}>
              <Radios
                name="type"
                label="I'm"
                formControlProps={{ margin: 'normal' }}
                radioGroupProps={{ row: true }}
                data={[
                  {label: 'Student', value: 'student'},
                  {label: 'Professional', value: 'professional'}
                ]}
              />

                <CustomFormInput
                    name="name"
                    label="Name*"
                    variant='outlined'
                    style={{margin: '10px 0'}}
                />
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
                <CustomFormInput
                    name="confirm_password"
                    label="Confirm password*"
                    variant="outlined"
                    type="password"
                    style={{margin: '10px 0', marginBottom: 20}}
                />

                <Select
                    name="gender"
                    label="Gender"
                    variant="outlined"
                    menuItemProps={{ variant: "outlined" }}
                    SelectDisplayProps={{variant: 'outlined'}}
                    className={styles.inputMargin}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>

                <Condition when="type" is="student">
                  <CustomFormInput
                      name="college"
                      label="College*"
                      variant="outlined"
                      style={{margin: '10px 0', marginTop: 20}}
                  />
                </Condition>
                <Condition when="type" is="professional">
                  <CustomFormInput
                      name="company"
                      label="Company*"
                      variant="outlined"
                      style={{margin: '10px 0', marginTop: 20}}
                  />
                </Condition>

                <Field name="skills">
                  {
                    ({input, meta}) => {
                      return (
                        <CustomMultiple
                          input={input}
                          meta={meta}
                          style={{margin: '10px 0', marginBottom: 20}} />
                      )
                    }
                  }
                </Field>

                <Checkboxes
                  name="privacy"
                  required={true}
                  className={{
                    root: {alignItems: 'flex-start'}
                  }}
                  data={{
                    label:(
                      <div>
                        <span>I accept the </span>
                        <Link to={'/terms'} className={styles.link}>terms of use</Link>
                        <span> and </span>
                        <Link to={'/privacy'} className={styles.link}>privacy policy</Link>
                      </div>
                  ), value: 'accepted'}}
                />
                <Button
                  type="submit"
                  variant='contained'
						      color='primary'
                  style={{width: '150px', margin: '0 auto', marginTop: '30px'}}
                >Signup</Button>
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


export default Signup
