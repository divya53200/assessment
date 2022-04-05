import React, { useState } from 'react'
import './review.css'



function FuncReview() {
    const[submit,setSubmit]=useState(false)
    
    const[reviews,setReviews]=useState ([
         {
           id: 1,
           name: 'Bertie Yates',
           age: 29,
           image:
             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
         },
         {
           id: 2,
           name: 'Hester Hogan',
           age: 32,
           image:
             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
         },
         {
           id: 3,
           name: 'Larry Little',
           age: 36,
           image:
             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
         },
         {
           id: 4,
           name: 'Sean Walsh',
           age: 34,
           image:
             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
         },
         {
          id: 5,
          name: 'Lola Gardner',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        },
      
         
       ])
       const handleReset=(e)=>{setSubmit({submit:true})
       setSubmit({id:'',name:'',age:'',image:''})}
       
      
       return(
      <div className='v'>
      <div>
          {!submit&&(
          <div className='box'> 
          <div>
            <h6 className='birthday'>{reviews.length} Birthdays Today </h6>
          <br/>
          <div>
      {reviews.map(review=><div key={review.id}><img src={review.
        image} />

          <div className='move'>
            <div className='name' >{review.name}</div>
            <div className='age'>{review.age} years</div>
             </div>
       </div>)}
        </div>
       <button className='clear'onClick={handleReset}>Clear All</button>


      </div>
      </div>)}
      </div>
       </div>
       
        )
  }
  
  export default FuncReview;
  