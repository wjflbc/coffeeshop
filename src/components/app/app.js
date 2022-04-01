import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FirstPage from "../pages/first-page";
import SecondPage from "../pages/second-page";


import './app.css'


const App = () => {

       return(
           <Router>
               <div className='app'>
                   <Routes>
                       <Route path='/' element={<FirstPage/>}/>
                       <Route path='/coffee' element={<SecondPage/>}/>
                   </Routes>
               </div>
           </Router>
       )
};

export default App;