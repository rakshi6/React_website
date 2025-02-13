import React from 'react'
import { CDNURL } from '../../../constants/const';
function Restrocards(props) {
    const { resdata } = props;
    const {
        cloudinaryImageId,
                  name,
                  cuisines,
                  avgRating,
                  deliveryTime,
        } = resdata?.info || 0;
// The code is taking a props object and extracting resData from it.
// Then, it safely attempts to extract several properties 
// (cloudinaryImageId, name, cuisines, avgRating, costForTwo, and deliveryTime) 
// from resData.data using optional chaining to prevent errors if resData or resData.data is not defined.
  
return (   
    
    <div className='w-80 h-96 bg-pink-50 mb-10 rounded-xl shadow-xl hover:shadow-2xl'>
        <div className='imageContainer'>
            <img className='w-full h-[200px] rounded-md' src={ CDNURL.RES_IMG + cloudinaryImageId  } alt='food'/>
        </div>
        <div className='flex flex-col items-center'>
            <h3 className='font-bold mt-4'>{name}</h3>
            <h3 className='text-center w-[80%] mt-8'>{cuisines.join(', ')}</h3>
            <h3>ratings: {avgRating}</h3>
            <h3>Time: {deliveryTime}minutes</h3>
        </div>
    </div>
    )
  }
export default Restrocards
 