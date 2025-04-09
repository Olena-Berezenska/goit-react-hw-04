import SearchBar from './components/SearchBar';
const App = () => {
  return (
    <>
      <SearchBar />
      <LoadMoreBtn />
      <Spinner />
      <ImageGallery />
      <ErrorMessage />
      <ImageModal />
    </>
  );
};

export default App;
