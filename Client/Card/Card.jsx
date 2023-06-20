  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import "../Card/Card.css"
  import { useNavigate } from 'react-router-dom';
  import { useParams } from 'react-router-dom';
  // import BuyNow from '../BuyNow/BuyNow';
  <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>



  const Card = () => {

    const navigate = useNavigate();


      const API_URL="http://localhost:3005"
      const [products,setProducts]=useState([]);

      const params = useParams();
      console.log(params);
  

    const fetchUsers = async () => {
    
        const response = await axios(API_URL);
        setProducts(response.data);
        console.log(response)
    };

    useEffect(() => {
      fetchUsers();
    }, []);
    return (
      
      <div className="contain">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} className="cardImage" alt={product.title} />
            <p className="title">{product.title}</p>
            <p className="price">{product.price}</p>
            {/* <p className="description">{product.description}</p> */}
            <button onClick={() => navigate(`/buynow/${product.id}`)} className="buynow">Buy now</button>
            <button className="carts">Add to cart</button>
            {/* <BuyNow productList={products}/> */}
          </div>
        ))}
      </div>
    )
  }

  export default Card
