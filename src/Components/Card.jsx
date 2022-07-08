import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'



function Card() {
    
    
    const [pdata, setPdata]=useState([]);
    
    useEffect(() => {
        getReviews();
    }, [])
    
    
    
    const getReviews = async () => {
        const reviewsFromServer = await fetchReviews()
        setPdata(reviewsFromServer.product)
    }


 

    const fetchReviews = async () => {
        const  res = await axios.get("https://electronic-ecommerce.herokuapp.com/api/v1/product")
        return res.data.data
    }


    
    
    
    
  return (
    <>
    
    <div className='m-5'>
        <div className='row'>
        
        {pdata.map((data, index) => (
        <div className='col-lg-3'>
        <div class="card" >
             <img className="image" src="data:image/jpeg;base64,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"  alt="..." />
             <div class="card-body">
                 <h5 class="card-title">{data.name}</h5>
                 <p class="card-text">Price: {data.price}</p>
                 <p class="card-text">Stock: {data.stock}</p>
                 <p class="card-text">Category: {data.category}</p>
                 <a href="#" class="btn btn-primary">Add to cart</a>
             </div>
         </div>

         
        </div>
      ))}
            


        
            
        </div>
            
        
    </div>
    
    
    
    </>
  )
}

export default Card