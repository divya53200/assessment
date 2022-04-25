import React,{useState} from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsLinkedin, BsBehance } from "react-icons/bs";


function Navigationbar(){
    return(
        <div>
            <Navbar bg="light"  expand="lg" className='shadow-lg p-3 mb-5 bg-white rounded'>
  <Container>
    <Navbar.Brand className='col-5 d-flex ' ><h3>Coding </h3>
    <h3 className='text-info mx-3'>Addict</h3></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className=" me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Project">Project</Nav.Link>
        <Nav.Link href="#Contact">Contact</Nav.Link>
        <Nav.Link href="#Profile">Profile</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
       
       <div className='px-1 pt-1 text-info text-center col-4 d-none d-lg-block'>
 
          <BsFacebook size={15}  class='mx-2'/>
          <BsTwitter size={15} class='mx-2' />
          <BsLinkedin size={15} class='mx-2' /> 
          <BsBehance size={15}  class='mx-2'/>
          </div>
        

</Navbar>
        </div>
    )
}
export default Navigationbar;