import React, {useState} from 'react'
import './family.css'
import { TiMail } from "react-icons/ti";
import { BiPhoneCall } from "react-icons/bi";
import { TiSocialGooglePlusCircular } from "react-icons/ti";
import { TiSocialPinterestCircular} from "react-icons/ti";
import { TiSocialTwitterCircular} from "react-icons/ti";
import {RiFacebookCircleLine} from "react-icons/ri";
import {BiBasketball } from "react-icons/bi";
import buildtwo from './assests/buildtwo.jpeg'
import buildthree from './assests/buildthree.jpeg'
import girl from './assests/girl.jpeg'
import person1 from './assests/person1.jpeg'
import person2 from './assests/person2.jpeg'
import person3 from './assests/person3.jpeg'
import person4 from './assests/person4.jpeg'
import person5 from './assests/person5.jpeg'
import dd from './assests/dd.PNG'












function Family(){
    return(
        <div>
            
           <div className='nav_bar'>
           < TiMail className='mail' size='30'/>
           <div>sample@sample.com</div>
           <BiPhoneCall className='phone' size='30'/>
           <div>00  1234  5678</div>
           <TiSocialGooglePlusCircular className='goog' size='30'/>
           <TiSocialPinterestCircular  className='p' size='30'/>
           <TiSocialTwitterCircular className='twitte'r size='30'/>
           <RiFacebookCircleLine className='fb' size='30'/>
           <BiBasketball className='ball' size='30'/>
            </div>
            <br/>
            <div className='bar2'>
            <h3>wp</h3>
            <div>/</div>
            <h4>Real Estate </h4>
            <h3>HOME</h3><h3>ABOUT</h3><h3>AGENTS</h3><h3>PROPERTIES</h3><h3>BLOG</h3><h3>CONTACT</h3>
            </div>
            <div className='container'>
            <img src='https://cdn.cdnparenting.com/articles/2019/04/14175650/278188052-H.jpg' className='img1'/>
            <div  className="centered">
            <h4 class='text-white text-left'>If you can dream,we can create it</h4>
             <div class='text-white'>Find your house without any difficulties</div>
             <div class='text-white'>Know more</div>
             </div>
             <div class='blue '>
             <div >01</div>
             <div>|  05 <span class="dot bg-white"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
             <div >&lt;  &gt;	</div>
             </div>
             </div>
             <br/><br/><br/><br/>
             <h4 ><center>wp/Real Estate</center></h4>
             <div className='prop'><center>Properties </center></div>
             <div className='home'><center>HOME  FOR  SALE</center></div>

             
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwveroX5l9r3jVzGfJtAAUQaEX7VGf7kQOQA&usqp=CAU' className='img2'/><br/><br/>
             <div className='b3'>
             <img className='img3'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7Mn3AJ-_vqOCUdFZUQ6cXGuF07SH2J2OUQ&usqp=CAU'/><br/>
            <img  className='img4'src={buildtwo}/><br/>
            <img className='img5'src={buildthree}/>
            </div>
            
            <div class="container mt-2">
            <div class="row">
           <div class="col-sm-4">
               <h5>Scandinavian style apartment</h5>
              <h6>94-98 Ingraham St,Brooklyn,NY 11237,USA</h6>
             </div>
            <div class="col-sm-4">
               <h5 >Lovelace Road Greenfield</h5>
             <h6>120 N St SW Thomaston, Georgia(GA), 30286</h6>
             </div>
              <div class="col-sm-4">
                 <h5>Building Complex Apartments</h5>  
              <h6>319 Brookmeade Way Lawrenceville, Georgia(GA),30043</h6>      
          </div>
  </div>
</div>
<div className='line1'>
<h6>____________________________________________________________________________________________________________________________________________________________________________</h6></div>
<div class='display-7' ><center>VIEW MORE</center></div>
<br/>
<br/>
<div class='container'>
    <div className= 'sandal' >
<img className='img6' src={girl} height='600' width='600'/>
<h6 className='beaut'><b>Beautifully designed ,inside<br/> and out, Studio looks every bit <br/>as powerful as it is</b> </h6>
<p className='photoshop'>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.<br/>Aenean sollicitudin ,Iorem quis bibendum auctor,
nisi elit consequat ipsum,nec sagittis sem<br/>nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris </p>
<h5 className='studio'>Studio.</h5>
</div>
</div>

<br/><br/>
<h6 className='client'><b><center>Our Clients Review</center></b></h6>
<div className='product'><center>Duane Neal <br/>Product Designer, USA</center></div>
<div className='design'>I'm a freelance fashion designer who specialises in print designs and combining fabrics.
 My designs have been sold all over Europe and 
    <br/> <div className='usa'>the USA and I have worked with some of the biggest designers in the industry.
     I'm also currently working with a big supermarket to 
    </div><div className='develop'><center>develop a gorgeous,yet affordable</center></div>
    </div>
    <div className='persons'>
        <img src={person1}  className='rounded-circle' width='200' />
        <img src={person2} className='rounded-circle' width='200' ms-1 height='133px'/>
        <img src={person3} className='rounded-circle' width='200' height='133px'/>
        <img src={person4}  className='rounded-circle' width='200'/>
        <img src={person5}  className='rounded-circle' width='200'/>
</div>
<img src={dd}/>








            </div>
    )
}
export default Family;




