import React from 'react';
import { Login, Signup } from '../../components';
import { Tab, AppBar, Box } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import useStyles from './style';

const LoginPage = () => {
  const styles = useStyles();
    const [value, setValue] = React.useState('login');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <TabContext value={value}>
          <Box className={styles.formContainer} >
            <AppBar position='static' color='default' className={styles.appBarContainer} >
              <TabList  
                  onChange={handleChange}
                  indicatorColor='primary'
                  textColor='primary'
              >
                  <Tab label='Login' value='login' className={styles.tabMenuItem} />
                  <Tab label='Signup'	value='signup' className={styles.tabMenuItem} />
              </TabList>
            </AppBar>
            <TabPanel value='login' className={styles.tabPanelItem} >
              <Login />
            </TabPanel>
            <TabPanel value='signup' className={styles.tabPanelItem} >
              <Signup />
            </TabPanel>
          </Box>
      </TabContext>
  
    )
  }

  export default LoginPage;