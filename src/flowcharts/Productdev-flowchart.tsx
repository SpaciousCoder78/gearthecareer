import mermaid from 'mermaid';
mermaid.initialize({ startOnLoad: true });

const mermaidList = [
    `
    flowchart TD
    A[Senior Secondary Education: Sciences-PCM]
     --> B(Undergraduate Entrance Exam: JEE, EAMCET or any other Private University Exams)
    B --> C{Bachelors Degree in BCA or Bsc-Computers or DA or BTech
      }
    C -->|Masters Entrance Exam:
        GATE or any other University Entrance Exams| D[MTech or MS in Software Engineering or CS]
    D -->E{Upskill - Solve - Achieve}
    
    `
]

function productdevflow(){
    return(
        <div>
            <h1>Product Developer Path</h1>
    <pre className="mermaid">
        {mermaidList}
</pre>
<p> Key Skills needed for a Product Developer are: </p>
    <ol>
      <li>Problem Solving Skills</li>
      <li>Interpersonal skills</li>
      <li>Team Work</li>
      <li>Developmental Skills</li>
      <li>Programming and many more..</li>
    </ol>
<p> Career Opportunities as a Product Developer are: </p>
<ol>
  <li>Junior Developer</li>
  <li>Senior Developer</li>
  <li>Product Manager</li>
  <li>Product Designer and many more..</li>


</ol>
<span className="rating">
  <span className="star">Gear the Careers Recomendation - 4.5★</span>
</span>
        </div>
    );
}

export default productdevflow