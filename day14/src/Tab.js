import React,{useState,useEffect} from 'react'
import './tab.css'

function App(){
    const[tabs,setTabs]=useState([])


    const fetchData=()=>{
        fetch('https://course-api.com/react-tabs-project').then (response=>response.json())
        .then(data=>setTabs(data))

    }

    useEffect(() => {
        fetchData();
    }, [])
    
    const[dataRender,setRenderData]=useState(tabs);

    const company=tabs.map(data=> data.company)
    const uniqCompany=[...new Set (company)]

    const handleTab=(d)=>{
      const filteredData=tabs.filter(data=>data.company===d)
  setRenderData(filteredData)

    }
  return(
    <div>
      <h1 className='text-center mt-5 exp'>Experience</h1>
      <h1 className='text-center mt-1 line  '>___</h1>
       <div className='container'>
         <div className='row'>
           
           
          
        {

          uniqCompany.map((d,i)=><div className='mt-3 d-flex justify-content-between fs-5 tab col-md-7 col-sm-4' onClick={()=>handleTab(d)}>{d}</div>)} 
          <br/>
          
            
         {
           dataRender.map(tab=><div className=' col-8 mt-5'key={tab.id}>
             
            <h4 className='title'> {tab.title}</h4>
            <h5 className='company border border-2 rounded  ' > {tab.company}</h5>
             <br/>
           <div className='date'>  {tab.dates}</div>
             <br/>
            <div className=''> {tab.duties}</div>
            <br/>
            <div className='border border-1 info ' >MORE INFO</div>
           
           </div>)
         }
         
         
         
       
         
         </div>
         </div>
        
    </div>
  )
}
export default App