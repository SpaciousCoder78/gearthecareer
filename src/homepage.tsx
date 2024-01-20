import './homepage.css'

function Index(){
    return (
        <div>
            <body>
                <div className="container">
                    <div className="top">
                        <a id="eng" className="btn btn-primary" role="button" target="_blank">GO TO CAREER PATHS</a>
                        <a className="btn btn-primary" role="button" target="_blank">HELP</a>
                        <a className="btn btn-primary" role="button" target="_blank">RESOURCES</a>
                        <a className="btn btn-primary" role="button" target="_blank">FACT SHEETS</a>
                        <a className="btn btn-primary" role="button" target="_blank">LINKEDLN</a>
                        <a className="btn btn-primary" role="button" target="_blank">ABOUT US</a>
                        <a className="btn btn-primary" role="button" target="_blank">PSYCHOMETRIC TEST</a>
                    </div>
                    <div className="center">
                        <img className="logo" src="https://media.discordapp.net/attachments/1198163202937200682/1198314598533697727/Design_3_1.jpeg?ex=65be746f&is=65abff6f&hm=4a7ccee170531628c1465581b789fd8f0aee29058042570f92a50ba3bedbeab4&=&format=webp&width=1414&height=741" style={{maxWidth: '100%', height: '100%'}}/>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default Index;