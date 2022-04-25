import React, {useState,useEffect} from 'react'
import './tour.css'


function Tour() {
    const[tours,setTours]=useState([])


  useEffect(()=>{
      fetch('https://course-api.com/react-tours-project').then(response=>response.json())
     
      .then(data=>setTours(data))
  },[])


  const[read,setRead]=useState(false) 
  
  const handleToggle = (e) => {e.preventDefault(); setRead(!read ) } 

  const  handleDelete = (i) => { 
    tours.splice(i,1) 
    setTours([...tours]) 
       
  } 
  const[submit,setSubmit]=useState(false)


   

  


  
  return (

    
    <div className='container'>
    <div class='row'>
     <center>
    <div>{!submit&& 
      <div > 
      {tours.length>0?( 
          <> 
<h2>Our Tours</h2>



     

        {
          

            tours.map((tour,i)=><div key={tour.id} className='  mb-5 ' >
              
             

              
              <img  className='col-md-5 'src={tour.image} alt='images' width='300' height='400' />
             
              
          
         
              <div className='d-flex justify-content-between col-md-5 mt-4'>
          <div className='name'>  {tour.name}</div>
          <div className='price border border-2 ' >  ${tour.price}</div> 
          </div>
        
          
         
          <div className=' col-12 col-md-5 m-3 '>
          <p >{read ? tour.info : tour.info.slice(0, 200)} 
            <button className='btn btn-primary' onClick={handleToggle}>{read ? 'Show Less' : 'Read More'}</button> 
            </p> 
            </div>
           
            <div className='col-md-5 mb-4' ><button className='btn btn-danger' onClick={() =>handleDelete(i)}><center>Not Interested</center></button></div> 
    
      
           
            
            </div>)
            

        }
       
        
      
       
         

          </> 
             ):(
                 <h2>NO TOURS AVAILABLE 
                     <br/> 
                <center> <button className=' col-12 btn btn-primary ' onClick={()=>window.location.reload()}>REFRESH</button> </center>
                 </h2> 
                  )}
</div>} 
        </div> 
        </center>
        </div>
        </div>
       
   
     
  )
}

export default Tour;
