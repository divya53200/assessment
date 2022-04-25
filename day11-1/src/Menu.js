import React, {useState} from 'react'
import './Menu.css'
import item1 from './images/item1.jpeg'
import item2 from './images/item2.jpeg'
import item3 from './images/item3.jpeg'
import item4 from './images/item4.jpeg'
import item5 from './images/item5.jpeg'
import item6 from './images/item6.jpeg'
import item7 from './images/item7.jpeg'
import item8 from './images/item8.jpeg'
import item9 from './images/item9.png'




function Menu(){
    const[menus,setMenus]=useState([   {
        id: 1,
        title: 'Buttermilk Pancakes',
        category: 'breakfast',
        price: 15.99,
        img: item1,
        desc:"I'm baby woke mlkshk wolf biters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed "
      },
      {
        id: 2,
        title: 'Diner Double',
        category: 'lunch',
        price: 13.99,
        img: item2,
        desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "
      },
      {
        id: 3,
        title: 'Godzilla Milkshake',
        category: 'shakes',
        price: 6.99,
        img: item3,
        desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
      },
      {
        id: 4,
        title: 'Country Delight',
        category: 'breakfast',
        price: 20.99,
        img: item4,
        desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "
      },
      {
        id: 5,
        title: 'Egg Attack',
        category: 'lunch',
        price: 22.99,
        img: item5,
        desc: " franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "
      },
      {
        id: 6,
        title: 'Oreo Dream',
        category: 'shakes',
        price: 18.99,
        img: item6,
        desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
      },
      {
        id: 7,
        title: 'Bacon Overflow',
        category: 'breakfast',
        price: 8.99,
        img: item7,
        desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "
      },
      {
        id: 8,
        title: 'American Classic',
        category: 'lunch',
        price: 12.99,
        img: item8,
        desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  "
      },
      {
        id: 9,
        title: 'Quarantine Buddy',
        category: 'shakes',
        price: 16.99,
        img: item9,
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
      },
    ]
    )
     const[dataNew,setDataNew]=useState(menus)
    
    const category=menus.map(menus=>menus.category) 
    console.log(category)
    const uniqCategory=[...new Set(category)]
    uniqCategory.unshift('All')
    console.log (uniqCategory)
    const handleTab=(d)=>{
      if(d==='All'){
        setDataNew(menus)
        return
      }
    console.log('click'+d)
    const filteredData=menus.filter(menus=>menus.category==d)
    setDataNew(filteredData)
    }
    
  
      

    return(
        <div>
         <div className='m-5 p-3 text-center font-weight-bold our' > <h1>Our Menu</h1></div>
         <div class="line "></div>

          <center><a className=' d-flex justify-content-around   col-md-3 mb-5 color tabs  ' >
            {
              uniqCategory.map((d,i)=><span key={i} className="color1 tabs" onClick={()=>handleTab(d)} >{d}</span>)
            }
          </a>
          </center>
        
          <div className='container'>
            <div className='row'>
           
           {
              dataNew.map(menus=><div key={menus.id } class='col-12 col-md-6 mb-5'><div className='row'>
              <div className='col-sm-8 col-md-5'>



                
                   <img src={menus.img} width='250' height='150' className=' borders '/></div>
                   <div  className='col-md-6'>
                   <div className='d-flex justify-content-between'>
                   <div className=' title '>   {menus.title}</div>
                    <div className='price'>  $ {menus.price}</div>
                       </div>
                      <div className='lines'></div>
                  <div className='desc m-2'>  {menus.desc} </div>
                  </div>  </div>
             </div>)}
             </div>
             </div>
               </div>
               





            
    )
}
export default Menu;