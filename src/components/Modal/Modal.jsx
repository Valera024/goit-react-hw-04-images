import { useEffect } from "react"
import styles from "./modal.module.css"

const Modal = ({ onClose, image, isModalOpen }) => {
    const closeKey = (event) => {
        if (event.code === "Escape") {
            onClose()
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", closeKey)
        document.documentElement.style.overflow = 'hidden';

        return () => {
            window.removeEventListener("keydown", closeKey)
            document.documentElement.style.overflowY = "auto"
        }
    }, [closeKey])

    const handleClickOutside = (event) => {
        const overlay = document.querySelector(`.${styles.modal}`)
        if (event.currentTarget === event.target || event.target === overlay) {
            onClose()
        }
    }

        const overlayClass = isModalOpen ? `${styles.overlay} ${styles.overlayVisible}` : styles.overlay;
  return (
    <div className={overlayClass} onClick={handleClickOutside}>
      <div className={styles.modal}>
        <img src={image} alt="big img"  />
      </div>
    </div>
        )
}

export default Modal