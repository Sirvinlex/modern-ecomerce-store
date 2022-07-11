import React, { useState } from 'react';
import { client, urlFor } from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({  bannerDatum, bannerData }) => {
  const { image, name, details, price } = bannerDatum;
  const [index, setIndex] = useState(0);
  const { qty, incQty, decQty, onAdd } = useStateContext();
  return (
    <div>
       <div className='product-detail-container'>
          <div>
            <div className='image-container'>
              <img src={urlFor(image && image[index])} className='product-detail-image' />
            </div>
            <div className='small-images-container'>
              {image?.map((item, i) =>(
                <img src={urlFor(item)} onMouseEnter={() => setIndex(i)}
                className={ i === index ? 'small-image selected-image' : 'small-image'}  />
              ))}
            </div>
          </div>
          <div className='product-detail-desc'>
            <h1>{name}</h1> 
            <div className='reviews'>
              <div>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
              </div>
              <p>(20)</p>
            </div>
            <h4>details:</h4>
            <p>{details}</p>
            <p className='price'>${price}</p>
            <div className='quantity'>
              <h3>quantity:</h3> 
              <p className='quantity-desc'>
                <span className='minus' onClick={decQty}>
                  <AiOutlineMinus/>
                </span>
                <span className='num' onClick=''>
                  {qty}
                </span>
                <span className='plus' onClick={incQty}>
                  <AiOutlinePlus/>
                </span>
              </p>
            </div>
            <div className='buttons'>
              <button type='button' onClick={() => onAdd(bannerDatum, qty)} className='add-to-cart'>
                Add to Cart
              </button>
              <button type='button' onClick='' className='buy-now'>
                Buy Now
              </button>
            </div>
          </div>
        </div> 
         <div className='maylike-products-wrapper'>
          <h2>You may also like</h2>
          <div className='marquee'>
            <div className='maylike-products-container track'>
              {bannerData.map((item) =>{
                return <Product key={item._id} product={item} />
              })}
            </div>
          </div>
         </div>
    </div>
  )
} 

export const getStaticPaths = async () => {
  const bannerQuery = `*[_type == "banner"]{
    slug{
      current
    }
  }`;

  const bannerData = await client.fetch(bannerQuery);

  const paths = bannerData.map((data) =>({
    params: {
      slug: data.slug.current
    }
  }));
  return{
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = `*[_type == "banner" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "banner"]'
  const bannerDatum = await client.fetch(bannerQuery);
  const bannerData = await client.fetch(productsQuery)

  return {
    props: { bannerData, bannerDatum }
  }
}

export default ProductDetails