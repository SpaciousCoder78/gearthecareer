import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Index from "./pages/homepage";
import Careerpath from "./pages/careerpath";
 // Import the component that contains the <a> tag
function Rooter(){
    return(
        <div>
            <Router>
                <Routes>
                    {/* Add your component here */}
                    <Route path="/" element={<Index/>}/>
                    <Route path="/careerpath" element={<Careerpath/>}/>
                </Routes>
            </Router>
        </div>
    );
}

                    

export default Rooter