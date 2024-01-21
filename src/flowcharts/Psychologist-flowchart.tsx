import mermaid from 'mermaid';
mermaid.initialize({ startOnLoad: true });

const mermaidList = [
    `
    flowchart TD
    A[Senior Secondary Education: 
    Any Stream]
     --> B(Undergraduate Entrance Exam:
        CUET,TISS BAT,IUET)
    B --> C{Bachelors Degree in BA Psychology / Applied Psychology / B.Sc
      }
    C -->|Masters Entrance Exam:
    TISS NET,IUET,CUSAT CAT| D[M.Sc in Clinical Psychology/Masters in Clinical Psychology]
    D -->E{M.Phil/Ph.D}
    `,
]

function Psychchart(){
    return(
        <div>
            <head>
                <title>
                    Psychologist Path
                </title>
            </head>
            <h1>Psychologist Path</h1>
    <pre className="mermaid">
        {mermaidList}
    
</pre>
<p> Key Skills needed for a Career in Psychologist are: </p>
    <ol>
      <li>Cognitive Behavioral Therapy</li>
      <li>Interpersonal skills</li>
      <li>Psychometric test</li>
      <li>Disorder analysis</li>
      <li>Mental health and wellness</li>
    </ol>
<p> Career Opportunities in Psychologist are: </p>
<ol>
  <li>Depression counsellor</li>
  <li>Brain Science and cognitive psychologist</li>
  <li>Clinical Psychologist</li>
  <li>Psychologists</li>


</ol>
<span className="rating">
  <span className="star">Gear the Careers Recomendation-4.1★</span>
</span>
        </div>
    );
}

export default Psychchart