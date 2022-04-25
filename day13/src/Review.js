import React, {useState} from 'react'
import './review.css'



function Review(){
    const [reviews,setReviews]=useState([
        {
            id: 1,
            name: 'susan smith',
            job: 'web developer',
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
            text:
              "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
          },
          {
            id: 2,
            name: 'anna johnson',
            job: 'web designer',
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
            text:
              'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
          },
          {
            id: 3,
            name: 'peter jones',
            job: 'intern',
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
            text:
              'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
          },
          {
            id: 4,
            name: 'bill anderson',
            job: 'the boss',
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
            text:
              'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
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

    const hanldeRandom = () => {
        let randomValue = Math.floor(Math.random() * reviews.length);
        if (randomValue === index) {
            randomValue = ((randomValue + 1) > (reviews.length - 1)) ? 0 : randomValue + 1
        }
        setIndex(randomValue)
    }

    


    return(
        <div className='container'>
            <div className='row'>
                
        <center> 

            <h3 className='mt-5 our '>Our Reviews</h3>   
            <div className='text-primary mb-3 mt-0 line ' >______</div> 
            <div className='box col-12 col-md-6 shadow p-3 mb-5 bg-body rounded'>
             
            <img  className=' image rounded-circle'src={reviews[index].image} width='300' height='200' />
           <div className='name'>{reviews[index].name}</div>
           <div className='text-uppercase text-primary'>{reviews[index].job}</div>
           <div className='col col-12'>{reviews[index].text}</div>
           <div className='d-flex justify-content-around col-md-6'>
           <h4  className='text-primary ' onClick={handlePreview}> &lt; </h4>
           <h4 className='text-primary 'onClick={handleNext}> &gt; </h4>
           </div>
           <button className='btn btn-outline-primary' onClick={hanldeRandom}>Surprise Me</button>
           </div>
           
           
        </center>
        
        </div>
        </div>

    )
}
export  default Review;