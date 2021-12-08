import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { Footer, Header } from './components';
import MainPage from './pages/Main';
import Root from './pages/Root';

import { LoginPage, TestListPage } from './pages';
import {Box} from "@material-ui/core";
import Question from "./pages/Question";

const NotFound = () => {
  return (
    <Box style={{textAlign: 'center', height: '100%', paddingTop: 20}}>
      <h1 >404 Page not found</h1>
    </Box>
  )
}

function App() {
  return (
      <div className="App" style={{minHeight: '100vh'}}>
          <Header/>
          <div style={{minHeight: '68vh', backgroundColor: '#f2f2f2'}}>
              <Switch >
                  <Route path='/' exact component={Root} />
                  <Route path='/log-in' component={LoginPage} />
                  <Route path='/skill-test' exact component={MainPage} />
                  <Route path='/skill-test/:test' component={TestListPage} />
                  <Route path='/test/:test_id' component={Question} />
                  <Route path='/about3' component={()=><h1>ABOUT 3</h1>} />
                  <Route path='/about4' component={()=><h1>ABOUT 4</h1>} />
                  <Route component={NotFound} />
              </Switch>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
