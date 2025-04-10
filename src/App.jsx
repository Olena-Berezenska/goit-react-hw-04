import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import Spinner from './components/Spinner/Spinner';
import { useEffect, useState } from 'react';
import { fetchPicts } from './services/apiRequest';

const App = () => {
  const [picts, setPicts] = useState([]);

  useEffect(() => {
    const getPictures = async () => {
      const query = 'nature';
      try {
        const data = await fetchPicts(query);
        setPicts(data.results);
      } catch {
      } finally {
      }
    };

    getPictures();
  }, []);

  useEffect(() => {
    console.log(picts);
  }, [picts]);

  return (
    <>
      <SearchBar />
      <LoadMoreBtn />
      <Spinner />
      <ImageGallery picts={picts} />
      <ErrorMessage />
      <ImageModal />
    </>
  );
};

export default App;
