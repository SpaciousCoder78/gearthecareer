import mermaid from 'mermaid';
mermaid.initialize({ startOnLoad: true });

const mermaidList = [
    `
    flowchart TD
    A[Senior Secondary Education: 
    Any Stream]
     --> B(Undergraduate Entrance Exam:
    Depends on the Course taken)
    B --> C{Any Graduation is accepted-BTech,
    BBA,BA,BCA,BSc any many more..}
    C -->|Masters Entrance Exam:
    Depends on the Course taken| D[Any Masters Degree-MTech,MSc,
    MBA,M.Com and many more..]
    D-->E{After Graduation apply for UPSC or 
    State Public Commission}
    `,
]

function civilflow(){
    return(
        <div>
            <h1>Civil Services Path</h1>
    <pre className="mermaid">
        {mermaidList}
</pre>
<p> Note: Aspirants can apply to UPSC or State Government </p>
<p> Key Skills needed for a Public Servant are: </p>
    <ol> 
      <li>Critical Thinking</li>
      <li>Continuous Learning</li>
      <li>Leadership</li>
      <li>Adaptability</li>
      <li>Resilience</li>
      <li>Organisational Skills and many more..</li>
    </ol>
<p> Career Opportunities in Civil Services are:</p>
<ol>
  <li>IFS,IAS,IPS,IFoS</li>
  <li>Group "A" Civil Services</li>
  <li>Group "B" Civil Services</li>
  <li>State Goverment Group-I</li>
  <li>State Goverment Group-II</li>
  <li>State Goverment Group-III and many more..</li>

</ol>
<span className="rating">
  <span className="star"><p> Gear the Careers Recommendation:4.5★</p></span>
</span>
        </div>
    );
}

export default civilflow