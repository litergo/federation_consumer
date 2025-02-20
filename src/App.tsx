import './App.css';
import Button from 'federation_button_provider/button';
import Docs from 'federation_docs_provider/docs';
import Navbar from "./components/navbar.tsx";
import { Route,Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="content">
      <>
        <Navbar/>
          <div>
          <Routes>        
            <Route path="/button"  element={<Button/>} />
            <Route path="/docs"  element={<Docs/>}/>
            <Route path="/"  element={
              <div> 
                <h1>Rsbuild with React</h1> 
                <p>Start building amazing things with Rsbuild.</p>
              </div>
            }/>
          </Routes>
          </div>
        </>
    </div>
  );
};

export default App;
