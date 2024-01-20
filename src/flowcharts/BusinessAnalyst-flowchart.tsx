import mermaid from 'mermaid';
mermaid.initialize({ startOnLoad: true });

const mermaidList = [
    `
    flowchart TD
    A[Senior Secondary Education: 
    Sciences-PCM]
     --> B(Undergraduate Entrance Exam:
    JEE,EAMCET,PESSAT,APIIT NAT 
    and many more.. )
    B --> C{Undergrad Courses: BsC, BCA,BBA, BTech or any other course
      }
    C -->|Masters Entrance Exam:
       CAT,MAT,UPSEE,GMAT and many more..| D[PostGrad Courses: MBA-IT,MBA_Business Analytics,MSc]
    
    `,
]

function Busianalyst(){
    return(
        <div>
            <h1>IT Business Analyst Path</h1>
    <pre className="mermaid">
        {mermaidList}
</pre>
<p>Key Skills needed for an IT Business Analyst are:</p>
    <ol>
      <li>Functional Analysis</li>
      <li>Business Analysis</li>
      <li>Project Management</li>
      <li>SQL</li>
    </ol>
<p> Career Opportunities as IT Business Analyst are: </p>
<ol>
  <li>Business Analyst</li>
  <li>Data Analyst</li>
  <li>Management Analyst</li>
  <li>Marketing Research Executive</li>
  <li>Project Manager and many more..</li>

</ol>
<span className="rating">
  <span className="star"><p> Gear the Careers Recommendation:4.5★</p></span>
</span>
        </div>
    );
}

export default Busianalyst