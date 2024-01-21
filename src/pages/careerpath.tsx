import "./stylesheets/careerpath.css";
import { useState } from "react";
import Astroflowchart from "../flowcharts/Astronomer-flowchart";
import Busianalyst from "../flowcharts/BusinessAnalyst-flowchart";
import Civilflow from "../flowcharts/Civilserv-flowchart";
import Contwritflowchart from "../flowcharts/Contentwrite-flowchart";
import DigiMarketFlow from "../flowcharts/Digitalmarket-flowchart";
import Neuroflow from "../flowcharts/Neuro-flowchart";
import Productdevflow from "../flowcharts/Productdev-flowchart";
import Psychchart from "../flowcharts/Psychologist-flowchart";

const styles = {
    careerbox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        marginTop: "50px",
    },
    
    careerPaths: {
        marginTop: "50px",
    },
    
    table: {
        width: "100%",
    },

    body: {
        paddingBottom: "500px",
    },
    
    th: {
        padding: "10px",
        textAlign: "center",
        fontWeight: "bold",
    },
    
    td: {
        padding: "10px",
        textAlign: "center",
        fontWeight: "bold",
    }
}
function Careerpath(){
    const [showComponent, setShowComponent] = useState<string | null>(null);

    const handleComponentClick = (componentName: string) => {
        setShowComponent(componentName);
    };
    return (
        <div className="careerbox">
            {showComponent === 'Astronomer' && <Astroflowchart/>}
            {showComponent === 'BusinessAnalyst' && <Busianalyst/>}
            {showComponent === 'Civilservice' && <Civilflow/>}
            {showComponent === 'ContentWriter' && <Contwritflowchart/>}
            {showComponent === 'DigitalMarketer' && <DigiMarketFlow/>}
            {showComponent === 'Neurologist' && <Neuroflow/>}
            {showComponent === 'Productdev' && <Productdevflow/>}
            {showComponent === 'Psychologist' && <Psychchart/>}

            <table style={styles.table}>
                <tbody style={styles.body}>
                    <tr>
                        <th className="heading">Career Path</th>
                        <th>Flowchart</th>
                    </tr>
                    <tr>
                        <td className="first-column">Astronomer&#45;&#45;&gt;</td>
                        <td><button id="astro" className="btn btn-primary" onClick={() => handleComponentClick('Astronomer')}>View Flowchart</button></td>
                    </tr>
                    <tr>
                        <td className="first-column">Business Analyst&#45;&#45;&gt;</td>
                        <td><button id="busybutton" className="btn btn-primary" onClick={() => handleComponentClick('BusinessAnalyst')}>View Flowchart</button></td>
                    </tr>
                    <tr>
                        <td className="first-column">Civil Services&#45;&#45;&gt;</td>
                        <td><button id="busybutton" className="btn btn-primary" onClick={() => handleComponentClick('Civilservice')}>View Flowchart</button></td>
                    </tr>
                    <tr>
                        <td className="first-column">Content Writer&#45;&#45;&gt;</td>
                        <td><button id="busybutton" className="btn btn-primary" onClick={() => handleComponentClick('ContentWriter')}>View Flowchart</button></td>
                    </tr>
                    <tr>
                        <td className="first-column">Digital Marketer&#45;&#45;&gt;</td>
                        <td><button id="busybutton" className="btn btn-primary" onClick={() => handleComponentClick('DigitalMarketer')}>View Flowchart</button></td>
                    </tr>
                    <tr>
                        <td className="first-column">Neurologist&#45;&#45;&gt;</td>
                        <td><button id="busybutton" className="btn btn-primary" onClick={() => handleComponentClick('Neurologist')}>View Flowchart</button></td>
                    </tr>
                    <tr>
                        <td className="first-column">Product Developer&#45;&#45;&gt;</td>
                        <td><button id="busybutton" className="btn btn-primary" onClick={() => handleComponentClick('Productdev')}>View Flowchart</button></td>
                    </tr>
                    <tr>
                        <td className="first-column">Psychologist&#45;&#45;&gt;</td>
                        <td><button id="busybutton" className="btn btn-primary" onClick={() => handleComponentClick('Psychologist')}>View Flowchart</button></td>
                    </tr>
                </tbody>
            </table> 
        </div>
    );
}

export default Careerpath;