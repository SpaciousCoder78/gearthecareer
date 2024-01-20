import mermaid from 'mermaid';
mermaid.initialize({ startOnLoad: true });

const mermaidList = [
    `
    flowchart TD
        A[Senior Secondary Education: 
        Sciences]
         --> B(Undergraduate Entrance Exam:
                JEE, Eamcet or any other Private University Exam)
        B --> C{Bachelors Degree in
            Astronomy,Physics,Engineering}
        C -->|Masters Entrance Exam:
            GATE,UGC-NET| D[Masters Degree in Physics, AstroPhysics or Astronomy]
        D --> E{Phd Program}
    `,
    
]
function Astroflowchart(){
        return (
                <div>
                        <h1>Astronomer Path</h1>
        <pre className="mermaid">
                {mermaidList}
</pre>
<p> Key Skills needed for a Career in Astronomy are: </p>
        <ol> 
            <li>Critical Thinking</li>
            <li>Continuous Learning</li>
            <li>Strong Fundamentals in Sciences</li>
            <li>Complex Problem Solving</li>
            <li>Social Perceptiveness</li>
        </ol>
<p> Career Opportunities in Astronomy are: </p>
<ol>
    <li>Astronomy Professor</li>
    <li>Astrophysicist</li>
    <li>Research Scientist</li>
    <li>Physicist</li>
    <li>Research Consultant</li>
    <li>Astronomer and many more..</li>

</ol>
<span className="rating">
    <span className="star"><p> Gear the Careers Recommendation:4.5★</p></span>
</span>
                </div>
        );
}

export default Astroflowchart;