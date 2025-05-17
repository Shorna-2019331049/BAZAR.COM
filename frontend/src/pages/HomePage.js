import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../context/auth';
import axios from 'axios';
import "../styles/AuthStyles.css"
import { useCart } from '../context/cart';
import { toast } from 'react-hot-toast';
// import { Prices } from '../components/Prices';

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  // const [radio,setRadio] = useState([]);

  const [cart, setCart] = useCart();
  // get product
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get('/api/v1/product/get-product');
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  },[]);

  return (
    <Layout title={'All Products - Best Offer'}>
      <div className="row mt-3">
        <h4 className="text-center">All Products</h4>
        <div className="col-md-2">

        </div>
        <div className="col-md-10 p-3">
          
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: '20rem' }}>
                <img
                  src={`/api/v1/product/get-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                  <p className='card-text price'>{p.price} Tk</p>
                  {auth?.user?.role === 1 ? (
                      ""
                    ):(< button className="btn btn-secondary" onClick={() => {
                    setCart([...cart,p]); 
                    localStorage.setItem(
                      "cart",
                      JSON.stringify([...cart, p])
                    );
                    toast.success("Item added to cart")}}
                    > Add to Cart </button>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
