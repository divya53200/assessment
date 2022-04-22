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
import home1 from './assests/home1.jpeg'
import home2 from './assests/home2.jpeg'
import home3 from './assests/home3.jpeg'
import home4 from './assests/home4.jpeg'
import home5 from './assests/home5.jpeg'
import many from './assests/many.jpeg'
import orange from './assests/orange.png'
import yellow from './assests/yellow.png'
import { GiEyeball } from "react-icons/gi";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { GiExplosiveMaterials } from "react-icons/gi";
import follow from './assests/follow.png'




















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

             <img src={follow}/>

             <br/>
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
        <img src={person1}  className='rounded-circle' width='200'  />
        <img src={person2} className='rounded-circle' width='200' ms-1 height='133px'/>
        <img src={person3} className='rounded-circle' width='200' height='133px'/>
        <img src={person4}  className='rounded-circle' width='200'/>
        <img src={person5}  className='rounded-circle' width='200'/>
</div>
<div className='fivedots'>
    <div>.</div>
    <div>.</div>
    <div className='dotblue' >.</div>
    <div>.</div>
    <div>.</div>
</div>
<div className='blog'>Our <b>Blog</b></div>
<div>
    <img className='home1'src={home1} width='500' height='600'/>
    <img className='home2' src={home2} width='350' height='280'/>
    <img className='home3'src={home3} width='350' height='280'/>
    <img className='home4'src={home4} width='350' height='280'/>
    <img className='home5'src={home5} width='350' height='280'/>
   </div>
   <div className='home11'>
       <h3 className='a'>Lorem Ipsum is simply dummy text of<br/> the printing and typecasting</h3>
       <div className='b'>_______________________</div>
       <div className='c'>13 March,2000</div>
       <div className='d'> Contrary to popular belief, Lorem Ipsum is not simply random text.<br/> It has roots in a piece of classical latin literature from </div>
   </div>
   <div className='home22'>
       <div className='a1'>There are many variations of<br/> passages  of Lorem Ipsum</div>
       <div className='b1'>_______________________</div>
       <div className='c1'>13 March,2020</div>
   </div>
   <div className='home33'>
       <div className='a2'>There are many variations of<br/> passages  of Lorem Ipsum</div>
       <div className='b2'>_______________________</div>
       <div className='c2'>13 March,2020</div>
   </div>
   <div className='home44'>
       <div className='a3'>There are many variations of<br/> passages  of Lorem Ipsum</div>
       <div className='b3'>_______________________</div>
       <div className='c3'>13 March,2020</div>
   </div>
   <div className='home55'>
       <div className='a4'>There are many variations of<br/> passages  of Lorem Ipsum</div>
       <div className='b4'>_______________________</div>
       <div className='c4'>13 March,2020</div>
   </div>
   <br/>
   <div className='di'>
       <div className='everything'>Everything is about to Change.</div>
       <div className='dolor'>Lorem Ipsum dolor sit amet,consectrtur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore <br/>
     <div className='magna' >     magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div></div>
        <input  className= 'email'type ='text' placeholder='Email Address'></input>
        <button  className='subscribe'>SUBSCRIBE</button>
   </div>
   <div>
       <img className='many'src={many} width='1518' height='400'/>
      <div className='wp'>
       <div className='ace'>wp</div>
       <div className='bat'>Real Estate</div>
       </div>
       </div>
       <div className='car'>
           <div className='zz'>HOME</div>
           <div className='yy'>ABOUT</div>
           <div className='xx'>AGENTS</div>
           <div className='ww'>PROPERTIES</div>
           <div className='vv'>BLOG</div>
           <div className='uu'>CONTACT</div>
       </div>
       <div className='dear'>
       <b><div >ABOUT</div></b>
      <b> <div >INFORMATION</div></b>
      <b><div >RECENT NEWS</div> </b> 
     <b>  <div>GET IN TOUCH</div></b>
       </div> 
     
        <label className='astudio'>ABOUT STUDIO</label>
        <div className='info'>INFORMATION</div>
   <img  className='orange'src={orange}/>
      <div className='proin'> Proin eros nisl,ornare sed <br/>vehicula sit amet,feugiat</div>
       <div className='aug'><b>Aug 12 | 2017</b></div>
       <div className='doodle'>.</div>
       <div className='san'>San Fransisco,CA <br></br> 125, california,STP 2 Building</div>
       <div className='sboj'>JOBS</div>
    <div className='legal'>LEGAL INFORMATION</div>
    <div className='team'>TEAM</div>
    <div className='support'>SUPPORT</div>
    <img className='yellow' src={yellow}/>
    <div className='morbi'>Morbi placerat accumsan <br></br>nunc, luctus lacinia nisi</div>
    <div className='augs'><b>Aug 12|2017</b></div>
    <div className='diya'>.</div>
    <div className='theme'>www.studiotheme.com</div>
    <div className='sec'>SECURITY</div>
    <div className='faq'>FAQ</div>
    <div className='qaf'>.</div>
    <div  className='no'>+ 123 5645 8934</div>
     <div className='black'>
<div className='bb'></div>
         <GiEyeball size='30'/>
         <BsFacebook/>
         <AiOutlineTwitter/>
         <GiExplosiveMaterials/>
         <div className='privacy'>PRIVACY POLICY   |   TERMS & CONDITIONS</div>
              </div>



            </div>
    )
}
export default Family;




