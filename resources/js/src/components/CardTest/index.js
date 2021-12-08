import { Box, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import SVGContainer from "../SVGContainer";
import useStyles from "./style";
import {CategoryImages} from "../../pages/Main";

const SkillTest = ({elem}) => {
    const styles = useStyles();

    return (
        <Grid item xs={12} md={6} className={styles.testWrapper}>
            <Link to={`/skill-test/${elem.id}`}
                className={styles.testContainer}
            >
                <Box className={styles.testDataContainer}>
                    <Typography variant='subtitle1' className={styles.testTitle} >
                        {elem.title}
                    </Typography>
                    <Typography variant='body1' className={styles.testDescription} >{`See ${elem.amount} tests`}</Typography>
                </Box>
                <SVGContainer source={CategoryImages[elem.img]} className={styles.testImage} />
            </Link>
        </Grid>
    )
}

export default SkillTest;
