import React,{useState,useEffect} from 'react'
import './slide.css'
import Quotation from './assests/Quotation.png'

function Slide(){
    const[reviews,setReviews]=useState([
        {
            id: 1,
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
            name: 'maria ferguson',
            title: 'office manager',
            quote:
              'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
          },
          {
            id: 2,
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
            name: 'john doe',
            title: 'regular guy',
            quote:
              'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
          },
          {
            id: 3,
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
            name: 'peter smith',
            title: 'product designer',
            quote:
              'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
          },
          {
            id: 4,
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
            name: 'susan andersen',
            title: 'the boss',
            quote:
              'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
          },
        
    ])

    const [index, setIndex] = useState(0)

    const handleNext=()=>{
      if (index === reviews.length - 1) { 
          setIndex(0)
      }
      else {
          setIndex(index + 1) 
      }
  }

  const handlePreview=()=>{
      if (index === 0) { 
          setIndex(reviews.length - 1)
      }
      else {
          setIndex(index -1 ) 
      }
  }

  useEffect(() =>  {
    let slider = setInterval(() =>{
        setIndex(index + 1);
    } ,4000);
    return () => {
      clearInterval(slider);
  }
},[index] )



    return(
      <div className='container'>
      <div className='row'>
          
  <center> 

      <div className=' col-12    mt-5 review  '>
       
        <h1>/ Reviews</h1>  
        </div> 
      
      <div className=' col-12 col-md-6 '>
       
      <img  className=' image rounded-circle  shadow  bg-body rounded'src={reviews[index].image} width='150' height='150' />
     <div className=' text-uppercase name'>{reviews[index].name}</div>
     <div className='text-capitalize text-secondary'>{reviews[index].title}</div>
     <div className='d-flex justify-content-between col-12'>
     <button className='btn btn-secondary but ' onClick={handlePreview}> &lt; </button>
     <button className='btn btn-secondary but 'onClick={handleNext}> &gt; </button>
     </div>
     <div className='col col-12'>{reviews[index].quote}</div>
     
     <img  className='mt-5'src={Quotation} width='70'/>


    
     
     </div>
     
     
  </center>
  
  </div>
  </div>


    )
}
export default Slide;