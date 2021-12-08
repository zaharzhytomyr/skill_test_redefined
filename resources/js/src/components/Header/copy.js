import useStyles from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
    const styles = useStyles();
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <Link to='/' className={` ${styles.headerLogo}`}>
                    Code<span className={styles.headerLogoSpan}>Interview</span>
                </Link>
                <Link to='/news' className={styles.headerLink}>News</Link>
                <Link to='/challenges' className={styles.headerLink}>Challenges</Link>
                <Link to='/practice' className={styles.headerLink}>Practice</Link>
                <Link to='/skill-test' className={styles.headerLink}>Skill test</Link>
                <Link to='/events' className={styles.headerLink}>Events</Link>
                <Link to='/log-in' className={`${styles.headerLink} ${styles.headerLogin}`}>Login/SignUp</Link>
            </div>
        </div>
    )
}

export default Header
