import React from 'react';
import {Box, Container, Grid, Typography} from '@material-ui/core';
import {BasicBreadcrumbs, Leaderboard, TestList} from '../../components';
import useStyles from './style.js';
import {useParams} from "react-router-dom";

function TestListPage() {
    const styles = useStyles();
    let { test } = useParams();

    return (
        <>
            <BasicBreadcrumbs
                links={[
                    {label: 'Home', link: '/'},
                    {label: 'Skill Test', link: '/skill-test'},
                    {label: 'Test', link: ''}
                ]}
            />
          <Box className={styles.mainLayout}>
            <Grid container spacing={2}>
              <Grid container item direction="column" spacing={2} md={7} sm={6} xs={12}>
                <Grid item>
                  <Typography variant="h4" component="p" className={styles.pageTitle}>Tests</Typography>
                </Grid>
                <TestList item category_id={test} testsPerPage={3}/>
              </Grid>
              <Grid container item direction="column" spacing={2} md={5} sm={6} xs={12}>
                <Grid item className={styles.leaderBoardContainer}>
                  <Leaderboard />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </>
    )
  }

  export default TestListPage;
