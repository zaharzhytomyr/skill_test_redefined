import { Grid } from "@material-ui/core"
import { Pagination } from '@material-ui/lab';
import {useEffect, useState} from "react";
import { TestCard } from '../';
import useStyles from './style.js'
import axios from "axios";

function TestList(props) {
    const [tests, setTests] = useState([
      // {name:"test name", sucRate:60, participants:1337, tags:["test1", "test2"]},
      // {name:"test name 2", sucRate:60, participants:1348, tags:["test1", "test2"]},
      // {name:"test name 3", sucRate:70, participants:1237, tags:["test1", "test2", "test3"]},
      // {name:"test name 4", sucRate:20, participants:154, tags:[]},
      // {name:"test name 5", sucRate:30, participants:137, tags:["test1"]},
      // {name:"test name 6", sucRate:50, participants:1, tags:["test1", "test3"]}
    ])

    useEffect(() => {
        axios.get('/test/categories/' + props.category_id + '/tests').then(
            (response) => {
                if (response && response.status === 200) {
                    setTests(response.data)
                }
            }
        )
    })

    const [page, setPage] = useState(1)
    const pageStart = (page - 1) * props.testsPerPage
    const pageCount = Math.ceil(tests.length / props.testsPerPage)

    const handlePageChange = (event, newPage) => {
      setPage(newPage)
    }

    const styles = useStyles();

    return (
      <Grid container direction="column" spacing={2}>
          {tests.length !== 0 ?
              <>
                  {
                      tests.slice(pageStart, pageStart + props.testsPerPage).map(test =>
                          <Grid item>
                              <TestCard key={test.id} test_id={test.id} item name={test.name} sucRate={test.success_rate}
                                        participants={test.participants_amount} tags={test.tags}/>
                          </Grid>
                      )}
              </>
         : <></> }
        <Grid item>
          <Pagination count={pageCount} defaultPage={page} onChange={handlePageChange} className={styles.pagination}/>
        </Grid>
      </Grid>
    )
}

export default TestList;
