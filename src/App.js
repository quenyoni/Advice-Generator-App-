import {useState,useEffect} from 'react'
import dice from './assets/images/icon-dice.svg'
import axios from "axios";
import splitter from './assets/images/pattern-divider-desktop.svg'
import './App.css';


function App() {

  
const [advice, setAdvice] = useState({id:1, advice:'Try Again'})
    
  const fetchData = async () => {

  try {
    let response = await axios.get(`https://api.adviceslip.com/advice/${Math.floor(Math.random()*225)}`)
 setAdvice(response.data.slip)
console.log(advice.slip.id)
  }

      catch (error) {
        console.error(error.message);
     
  
  }
    

    };

  
    useEffect(() => {fetchData()},[])
    

  return (
  <div className="App">
      <div className='container'>
        
      <div >

           <div>
             <span className='advice-num'>ADVICE #{advice? advice.id  :'UH OH!'}</span>
           </div>
          <div>
             <blockquote className={`quote fade-in `}
             >
               "{advice? advice.advice  :'UH OH'}"
             </blockquote>
           </div> 
           <img className='splitter-icon' src={splitter} alt="" />
           <button onClick={fetchData} className='dice-wrapper'>
             <img className='dice' src={dice} alt="" />
           </button>
        
         </div>


        
        
      </div>
  </div>


  )


}







export default App;





