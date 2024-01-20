import mermaid from 'mermaid';
mermaid.initialize({ startOnLoad: true });

const mermaidList = [
    `
    flowchart TD
    A[Senior Secondary Education: 
    BiPC]
     --> B(Undergraduate Entrance Exam:
        NEET, Eamcet)
    B --> C{Degree Stream:
        MBBS}
    C -->|Masters Entrance Exam:
        Neet-PG| D[MasterStream:
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