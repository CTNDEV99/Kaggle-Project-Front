import './App.css';
import { Outlet} from "react-router-dom";
import Sidebar from './Widgets/Sidebar';


function App() {
  return (
    <div>
       <Sidebar/>
        <Outlet/>
    </div>
        
  
  );
}

export default App;
