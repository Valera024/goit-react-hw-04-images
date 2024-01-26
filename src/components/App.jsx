import {  useState } from "react";
import { fetchSearch } from "./pixabay-api";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import Loader from "./Loader/Loader";

const App = () => {

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [filter, setFilter] = useState(''); 
  const [selectImage, setSelectImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const [totalHits, setTotalHits] = useState(0);


  const handleSubmit = async (event) => {
    event.preventDefault()
    const filterValue = document.querySelector("input[name='searchbar']").value;
    setPage(1);
    setImages([])
    setFilter(filterValue)
    setLoading(true)
    try {
      const response = await fetchSearch(1, perPage, filterValue);
    setTotalHits(response.data.totalHits);

    setImages((prevImages) => {
      if (prevImages.length > 0) {
        return [...prevImages, ...response.data.hits];
      } else {
        return response.data.hits;
      }
    });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false)
    }
};

  const onClickLargeImg = (event) => {
    if (event.target.closest("img")) {
      const largeImage = event.target.dataset.largeImage
      openModal(largeImage)
    }
  }

  const openModal = (largeImage) => {
    setSelectImage(largeImage);
    setIsModalOpen(true);
}

  const closeModal = () => {
    setSelectImage(null)
    setIsModalOpen(false)
}


  const onClickMore = () => {
    setPage((prevState) => prevState + 1)
    fetchData()
  };

  const fetchData = async () => {
    try {
      const response = await fetchSearch(page, perPage, filter);
      setImages((prevImages) => {
        console.log(prevImages)
        if (prevImages.length > 0) {
          return [...prevImages, ...response.data.hits]
        } else {
          return response.data.hits;
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

    const btn = images.length < totalHits ? <Button onClick={onClickMore} /> : null;
    return (
      <>
        <Searchbar onSubmit={handleSubmit} />
        {loading && <Loader visible={true} />} 
        <ImageGallery images={images} onClick={onClickLargeImg} />
        {btn}
        {isModalOpen && (
          <Modal image={selectImage} isModalOpen={isModalOpen} onClose={closeModal} />
        )}
      </>
    );
}

export default App