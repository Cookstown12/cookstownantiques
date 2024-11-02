import React, { useEffect, useState } from 'react';
import { Alert, Modal } from 'react-bootstrap';
import { Link, NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./";
import AboutPage from './components/AboutPage';
import Blog from './components/Blog';
import Career from './components/Career';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Home from './components/Home';
import Shop from './components/Shop';
import promoBg from './imgs/shopfurniture.png';


function App() {
  const [showCookies, setShowCookies] = useState(false);
  const [showShipping, setShowShipping] = useState(true);
  const [show, setShow] = useState(false)
  
  //handle cookies
  useEffect(() => {
    setTimeout(() => {
      setShowCookies(true);
    }, 2500);
    setTimeout(() => {
      setShow(true);
    }, 1000);

  }, []);
  //handle modal
  const handleClose = () => {
    setShow(false)
  };

  return (
  <Router>

    <nav className="navbar fixed-top navbar-expand-md">
    <div className='shipping-container '>
        {showShipping && (
        <Alert className='mb-4 rounded-0 text-center my-0 py-0' style={{backgroundColor: '#1155c4', color: '#f2e5c6 '}} variant="light" onClose={() => setShowShipping(false)} dismissible>
          <p className="mb-0">
           <b>FREE</b> shipping on all orders over 200!{' '}
          </p>
        </Alert>
      )}
        </div>
      <div className="mt-2 container-md d-flex py-0 justify-content-end justify-content-md-end align-items-center">
        <Link className="navbar-brand" to="/">
          <h1 className="display-6">Cookstown Antiques</h1>
        </Link>
        <button className="navbar-toggler ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center flex-grow-1" id="navbarNav">
          <ul className="navbar-nav ms-md-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/">SHOP</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/about">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/blog">BLOG</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/contact">CONTACT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/career">CAREER</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/cart"> <i class="fa-solid fa-cart-shopping"></i> </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/career" element={<Career />} />
    </Routes>
    {showCookies && (
        <Alert className='fixed-bottom mb-0 bg-white rounded-0 d-flex align-items-center mt-3' style={{backgroundColor: 'null'}} variant="light" onClose={() => setShowCookies(false)} dismissible>
          <p className="mb-0">
            We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.{' '}
            <a href="#" className="alert-link">
              Learn more
            </a>
            .
          </p>
        </Alert>
      )}
      {/* promo modal */}
      <Modal show={show} onHide={handleClose} size='xl' >
        <Modal.Body className='border border-5' style={{backgroundImage: 'url(' + promoBg + ')', backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
        <div className='row d-flex justify-content-center text-center promo-container'>
          <h4 className='text-light'>Spring into savings</h4>
          <div>
          <h1 className='display-1 py-0 text-light'><b>25% OFF</b></h1>
          <h2 className='display-1 py-0 text-light'>Sitewide</h2>
          </div>
          <h4 className='col-6 text-light'>From vintage furniture to antique glass, our collection has something for everyone. Take advantage of our Spring Sale and enjoy 25% off all items with code <u><b>SPRING</b></u> at checkout.</h4>
          <h2 className='waitna'>We're hiring Four (4) Administrative Assistant. To apply Chat with support down below</h2>
        <button className='promo-button' onClick={handleClose}>Close</button>
        </div>
        </Modal.Body>
      </Modal>


  </Router>
  )
}


export default App;
