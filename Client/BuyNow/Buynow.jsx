  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import { useParams } from 'react-router-dom';
  import { Link } from 'react-router-dom';

  import "./BuyNow.css";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faStar } from '@fortawesome/free-solid-svg-icons';
  import Footer from '../Footer/footer';

  const BuyNow = () => {
    const { id } = useParams();
    const API_URL = `http://localhost:3005/product/${id}`;
    const [productDetails, setProductDetails] = useState([]);

    const fetchProduct = async () => {
      try {
        const response = await axios(API_URL);
        setProductDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      fetchProduct();
    }, []);

    return (
      <>
        <div className="containers">
          <div className="navbar">
            <nav>
              <div className="nav-left">
                <ul>
                <li className="nav">
                <Link to="/">Home</Link>
              </li>
                  <li className="nav-cart">Cart</li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="content">
            <div className="left">
              {productDetails.length > 0 && (
                <img src={productDetails[0].image} alt={productDetails[0].title} className="image" />
              )}
            </div>
            <div className="right">
              {productDetails.length > 0 ? (
                productDetails.map((productDetail) => (
                  <div key={productDetail.id}>
                    <div className="title">{productDetail.title}</div>
                    <div className="price">{productDetail.price}</div>
                    <div className="descriptions">Description:</div>
                    <div className="description">{productDetail.description}</div>
                    <div className="ch">Category:</div>
                    <div className="category">{productDetail.category}</div>
                    <div className="rating">
                      <div className="ratingtitle">
                        rating
                        <FontAwesomeIcon icon={faStar} style={{ color: "#2d6920" }} />
                      </div>
                      {productDetail.rating.rate}
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-details">No product details available</div>
              )}
            </div>
          </div>
        </div>
        <footer className="buynow-footer">
          <Footer className="mass" />
        </footer>
      </>
    );
  };

  export default BuyNow;
