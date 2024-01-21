import mermaid from 'mermaid';
mermaid.initialize({ startOnLoad: true });

const mermaidList = [
    `
    flowchart TD
    A[Senior Secondary Education: Sciences-Biology]
     --> B(Undergraduate Entrance Exam:
        NEET, EAMCET and AIIMS MBBS Exam)
    B --> C{Undergraduate Course:
        MBBS or Bachelor of Surgery}
    C -->|Masters Entrance Exam:
        NEET-PG,AIIMS-PG,DNB PDCET| D[MasterStream:
        MS in Neurology, Minor in Healthcare]
    `,
]

function Neuroflow(){
    return(
        <div>
            <head>
                <title>Neurologist Path</title>
            </head>
            <h1>Neurologist Path</h1>
    <pre className="mermaid">
        {mermaidList}
</pre>
<p> Key Skills needed for a Career in Neurologist are: </p>
    <ol> 
      <li>Dexterity</li>
      <li>Diagnostic skills</li>
      <li>Problem-solving</li>
      <li>Research</li>
    </ol>
<p> Career Opportunities in Neurologist are: </p>
<ol>
  <li>Neuro-physician</li>
  <li>Neurosurgeon</li>
  <li>Neurologic Physical Therapist</li>
</ol>
<span className="rating">
  <span className="star">Gear the Career's Recommendation: 4.2★</span>
</span>
        </div>
    );
}

export default Neuroflow