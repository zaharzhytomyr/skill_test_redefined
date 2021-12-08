import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './style';

const SocialMedia = ({link, ...rest}) => {
    const styles = useStyles();

    return (
        <a href={link} target="_blank" className={styles.socialContainer}>
            <FontAwesomeIcon {...rest} />
        </a>
    )
}

export default SocialMedia
