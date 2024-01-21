

/*import './stylesheets/homepage.css';
import { useState } from 'react';
import Careerpath from './careerpath';
import Help from './help';
import Resources from './resources';
import FactSheets from './factsheet';
import LinkedIn from './linkedin';
import AboutUs from './about';
import PsychometricTest from './psychtest';

function Index() {
    const [showCareerpath, setShowCareerpath] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const [showResources, setShowResources] = useState(false);
    const [showFactSheets, setShowFactSheets] = useState(false);
    const [showLinkedIn, setShowLinkedIn] = useState(false);
    const [showAboutUs, setShowAboutUs] = useState(false);
    const [showPsychometricTest, setShowPsychometricTest] = useState(false);

    const handleCareerpathClick = (event: React.MouseEvent) => {
        event.preventDefault(); // Prevent default link behavior
        setShowCareerpath(!showCareerpath); // Toggle the state
    };

    const handleHelpClick = (event: React.MouseEvent) => {
        event.preventDefault(); // Prevent default link behavior
        setShowHelp(!showHelp); // Toggle the state
    };

    const handleResourcesClick = (event: React.MouseEvent) => {
        event.preventDefault(); // Prevent default link behavior
        setShowResources(!showResources); // Toggle the state
    };

    const handleFactSheetsClick = (event: React.MouseEvent) => {
        event.preventDefault(); // Prevent default link behavior
        setShowFactSheets(!showFactSheets); // Toggle the state
    };

    const handleLinkedInClick = (event: React.MouseEvent) => {
        event.preventDefault(); // Prevent default link behavior
        setShowLinkedIn(!showLinkedIn); // Toggle the state
    };

    const handleAboutUsClick = (event: React.MouseEvent) => {
        event.preventDefault(); // Prevent default link behavior
        setShowAboutUs(!showAboutUs); // Toggle the state
    };

    const handlePsychometricTestClick = (event: React.MouseEvent) => {
        event.preventDefault(); // Prevent default link behavior
        setShowPsychometricTest(!showPsychometricTest); // Toggle the state
    };

    return (
        <div className="container">
            <div className="top">
                {showCareerpath && <Careerpath />}
                {showHelp && <Help />} 
                {showResources && <Resources />} 
                {showFactSheets && <FactSheets />} 
                {showLinkedIn && <LinkedIn />} 
                {showAboutUs && <AboutUs />} 
                {showPsychometricTest && <PsychometricTest />} 
                {!showCareerpath && !showHelp && !showResources && !showFactSheets && !showLinkedIn && !showAboutUs && !showPsychometricTest && (
                    <div> 
                        <button type="button" className="btn btn-primary" onClick={handleCareerpathClick}>
                            GO TO CAREER PATHS
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleHelpClick}>
                            HELP
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleResourcesClick}>
                            RESOURCES
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleFactSheetsClick}>
                            FACT SHEETS
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleLinkedInClick}>
                            LINKEDIN
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleAboutUsClick}>
                            ABOUT US
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handlePsychometricTestClick}>
                            PSYCHOMETRIC TEST
                        </button>
                    </div>
                )}
            </div>

            <div className="center">
                {!showCareerpath && !showHelp && !showResources && !showFactSheets && !showLinkedIn && !showAboutUs && !showPsychometricTest && (
                    <img className="logo" src="https://media.discordapp.net/attachments/1198163202937200682/1198314598533697727/Design_3_1.jpeg?ex=65be746f&is=65abff6f&hm=4a7ccee170531628c1465581b789fd8f0aee29058042570f92a50ba3bedbeab4&=&format=webp&width=1414&height=741" style={{ maxWidth: '100%', height: '100%' }} />
                )}
            </div>
        </div>
    );
}

export default Index; */


import './stylesheets/homepage.css';
import { useState } from 'react';
import Careerpath from './careerpath';
import Help from './help';
import Resources from './resources';
import FactSheets from './factsheet';
import LinkedIn from './linkedin';
import AboutUs from './about';
import PsychometricTest from './psychtest';

function Index() {
    const [showComponent, setShowComponent] = useState<string | null>(null);

    const handleComponentClick = (componentName: string) => {
        setShowComponent(componentName);
    };

    return (
        <div className="container">
            <div className="top">
                {showComponent === 'Careerpath' && <Careerpath />}
                {showComponent === 'Help' && <Help />}
                {showComponent === 'Resources' && <Resources />}
                {showComponent === 'FactSheets' && <FactSheets />}
                {showComponent === 'LinkedIn' && <LinkedIn />}
                {showComponent === 'AboutUs' && <AboutUs />}
                {showComponent === 'PsychometricTest' && <PsychometricTest />}
                {showComponent === null && (
                    <div>
                        <button type="button" className="btn btn-primary" onClick={() => handleComponentClick('Careerpath')}>
                            GO TO CAREER PATHS
                        </button>
                        <button type="button" className="btn btn-primary" onClick={() => handleComponentClick('Help')}>
                            HELP
                        </button>
                        <button type="button" className="btn btn-primary" onClick={() => handleComponentClick('Resources')}>
                            RESOURCES
                        </button>
                        <button type="button" className="btn btn-primary" onClick={() => handleComponentClick('FactSheets')}>
                            FACT SHEETS
                        </button>
                        <button type="button" className="btn btn-primary" onClick={() => handleComponentClick('LinkedIn')}>
                            LINKEDIN
                        </button>
                        <button type="button" className="btn btn-primary" onClick={() => handleComponentClick('AboutUs')}>
                            ABOUT US
                        </button>
                        <button type="button" className="btn btn-primary" onClick={() => handleComponentClick('PsychometricTest')}>
                            PSYCHOMETRIC TEST
                        </button>
                    </div>
                )}
            </div>

            <div className="center">
                {showComponent === null && (
                    <img className="logo" src="https://media.discordapp.net/attachments/1198163202937200682/1198314598533697727/Design_3_1.jpeg?ex=65be746f&is=65abff6f&hm=4a7ccee170531628c1465581b789fd8f0aee29058042570f92a50ba3bedbeab4&=&format=webp&width=1414&height=741" style={{ maxWidth: '100%', height: '100%' }} />
                )}
            </div>
        </div>
    );
}

export default Index;