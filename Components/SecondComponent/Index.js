import styles from './Second.module.css'
export default function Second(){

    return(
        <div className={styles.secondSection}>
            <input type="button" value="Sign up with Google" className={styles.googleButton} onclick="window.location.href='#'"></input>
            <br></br>
            <button className={styles.appleButton}>Sign up with Apple</button>
            <br></br>
            <div className={styles.or}>
                <hr></hr><p>or</p><hr></hr>
            </div>
            <button className={styles.createAccount}>Create account</button>
            <p>By signing up, you agree to the <a  target="blank" href="_blank">Terms of Service</a> and <a target="blank" href="_blank">Privacy Policy</a>, including <a target="blank" href="_blank">Cookie Use.</a></p>
        </div>
    )
    
}