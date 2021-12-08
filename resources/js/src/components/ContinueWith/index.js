import { IconFB, IconGitHub, IconLinkedIn, IconGoogle } from "../../assets"
import useStyles from "./style.js"

const ContinueWith = () => {
    const styles = useStyles();
    return (
        <>
            <p>Continue with</p>
            <IconFB width={40} className={styles.loginImage} />
            <IconGoogle width={40} className={styles.loginImage} />
            <IconGitHub width={40} height={40} className={styles.loginImage} />
            <IconLinkedIn width={40} className={styles.loginImage} />
        </>
    )
}

export default ContinueWith
