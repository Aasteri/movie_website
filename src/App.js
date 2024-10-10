
import React, { Suspense, lazy } from 'react';
import { MovieProvider } from './context/MovieContext';
import GlobalStyles from './styles/GlobalStyles';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBar from './components/SearchBar';

const Header = lazy(() => import('./components/Header'));
const CarouselComponent = lazy(() => import('./components/CarouselComponent'));
const MovieCard = lazy(() => import('./components/MovieCard'));
const Footer = lazy(() => import('./components/Footer'));
const ModalForm = lazy(() => import('./components/ModalForm'));

function App() {
  return (
    <MovieProvider>
      <GlobalStyles />
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Header />
        <CarouselComponent />
        <Container id="categories" className="my-5">
          <h2 className="mb-4 text-center">Popular Movies</h2>
          <SearchBar />
          <Row>
            <MovieGrid />
          </Row>
        </Container>
        <Footer />
        <ModalForm />
      </Suspense>
    </MovieProvider>
  );
}

const MovieGrid = () => {
  const { movies } = React.useContext(require('./context/MovieContext').MovieContext);

  return movies.map((movie) => (
    <Col key={movie.id} xs={12} sm={6} md={3} lg={4} className="d-flex justify-content-center">
      <MovieCard movie={movie} />
    </Col>
  ));
};

export default App;
