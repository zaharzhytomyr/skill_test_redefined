import React from 'react';
import { Breadcrumbs, Typography, Link, Box, Paper } from '@material-ui/core';
import useStyles from './style';
import { useHistory } from 'react-router-dom';

function handleClick(history, path) {
    // event.preventDefault();
    history.push(path);
  }
  
const BasicBreadcrumbs = ({links}) => {
    const styles = useStyles();

    const history = useHistory();
    let prev = [...links];
    let last = prev.pop();
    return (
        <Paper style={{ paddingTop: 15, backgroundColor: '#f2f2f2' }} elevation={0}>
          <Box role="presentation" style={{maxWidth: 1300, margin: '0 auto', padding: '0 20px'}} >
            <Breadcrumbs aria-label="breadcrumb">
              {
                prev.map(elem=>(
                  <Link underline="hover" style={{cursor: 'pointer'}} color="inherit" to={elem.link} key={elem.label} onClick={()=>handleClick(history, elem.link)}>
                    {elem.label}
                  </Link>
                ))
              }
              <Typography color="primary">{last.label}</Typography>
            </Breadcrumbs>
          </Box>
       </Paper>
    );
  }

  export default BasicBreadcrumbs;