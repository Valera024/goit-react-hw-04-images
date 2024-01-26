import { ProgressBar } from "react-loader-spinner";
import styles from "./loader.module.css"

const Loader = () => {
        return (
            <ProgressBar
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}} 
        wrapperClass={styles.loader}  
      />
        )
}

export default Loader