import styles from "./button.module.css"

const Button = ({onClick}) => {
        return (
            <div className={styles.container}>
                <button className={styles.button} onClick={onClick}>Load More</button>
            </div>
        )
}

export default Button