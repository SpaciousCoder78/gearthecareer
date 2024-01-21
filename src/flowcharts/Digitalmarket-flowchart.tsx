import mermaid from 'mermaid';
mermaid.initialize({ startOnLoad: true });

const mermaidList = [
    `
    flowchart TD
    A[Senior Secondary Education: 
    Any Stream]
     --> B(Undergraduate Entrance Exam: Depends on the Course taken)
    B --> C{Bachelors Degree in any field- BBA,BA,BSc,B.Arch,BTech and many more..
      }
    C -->|Masters Entrance Exam:
      CAT,XAT,IBSAT | D[Masters Degree in Digital Marketing]
    `,
]

function digiMarketFlow(){
    return(
        <div>
             <h1>Digital Marketing Path</h1>
    <pre className="mermaid">
        {mermaidList}
</pre>
<p> Key Skills needed for a Career in Digital Marketing are: </p>
    <ol> 
      <li>Critical Thinking</li>
      <li>Continuous Learning</li>
      <li>Search Engine Optimization-SEO</li>
      <li>Search Engine Marketing-SEM</li>
      <li>Google Analytics</li>
      <li>Email Marketing</li>
      <li>Business Management</li>
    </ol>
<p> Career Opportunities in Digital Marketing are: </p>
<ol>
  <li>SEM Specialist</li>
  <li>SEO Specialist</li>
  <li>Website Designer</li>
  <li>Social Media Marketing Expert</li>
  <li>Marketing Consultant and many more..</li>

</ol>
<span className="rating">
  <span className="star"><p> Gear the Careers Recommendation : 4.5★</p></span>
</span>
        </div>
    );
}

export default digiMarketFlow