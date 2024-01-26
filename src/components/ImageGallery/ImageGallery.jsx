import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import styles from "./imageGallery.module.css"

const ImageGallery = ({onClick, images}) => {
        return (
            <ul className={styles.gallery} onClick={onClick}>
                <ImageGalleryItem images={images} />
            </ul>
        )
}

export default ImageGallery