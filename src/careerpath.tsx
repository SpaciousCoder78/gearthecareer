import "./careerpath.css";
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
    return (
        <div className="careerbox">
            <table style={styles.table}>
                <tbody style={styles.body}>
                    <tr>
                        <th className="heading">Career Path</th>
                        <th>Flowchart</th>
                    </tr>
                    <tr>
                        <td className="first-column">Engineer&#45;&#45;&gt;</td>
                        <td><a id="eng" className="btn btn-primary" href="./flowcharts/Engineer-flowchart.html" role="button" target="_blank">View Flowchart</a></td>
                    </tr>
                    <tr>
                        <td className="first-column">Doctor&#45;&#45;&gt;</td>
                        <td><a id="doc" className="btn btn-primary" href="./flowcharts/doctors-flowchart.html" role="button">View Flowchart</a></td>
                    </tr>
                    <tr>
                        <td className="first-column">Archaeologist&#45;&#45;&gt;</td>
                        <td><a id="arch" className="btn btn-primary" href="./flowcharts/Archaeologist-flowchart.html" role="button" target="_blank">View Flowchart</a></td>
                    </tr>
                    <tr>
                        <td className="first-column">Lawyer&#45;&#45;&gt;</td>
                        <td><a id="law" className="btn btn-primary" href="./flowcharts/Lawyer-flowchart.html" role="button">View Flowchart</a></td>
                    </tr>
                    <tr>
                        <td className="first-column">Cardiologist&#45;&#45;&gt;</td>
                        <td><a id="heart" className="btn btn-primary" href="./flowcharts/Cardiologist-flowchart.html" role="button">View Flowchart</a></td>
                    </tr>
                    <tr>
                        <td className="first-column">Neurologist&#45;&#45;&gt;</td>
                        <td><a id="brain" className="btn btn-primary" href="./flowcharts/neuro-flowchart.html" role="button">View Flowchart</a></td>
                    </tr>
                    <tr>
                        <td className="first-column">Astronomer&#45;&#45;&gt;</td>
                        <td><a id="space" className="btn btn-primary" href="./flowcharts/Astronomer-flowchart.html" role="button">View Flowchart</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Careerpath;