import mermaid from 'mermaid';
mermaid.initialize({ startOnLoad: true });

const mermaidList = [

    `
    flowchart TD
    A[Senior Secondary Education: 
    Any Stream]
     --> B(Undergraduate Entrance Exam:
        Based on the Courses Choosen)
    B --> C{Diploma/Bachelors in Arts,
    Mass Communication,BTech or any Graduation 
      }
    C -->|Things you need to become aa a Content Writer| D[Action - Skills - Find your Niche - Get Paid]
    
    `,
]

function contwritflowchart(){
    return(
        <div>
            <h1>Content Writer Path</h1>
    <pre className="mermaid">
        {mermaidList}
</pre>
<p> Key Skills needed for a Career in Content Writing are: </p>
    <ol>
      <li>Strong Language Fundamentals</li>
      <li>Research Skills</li>
      <li>Ability to think out of Box</li>
      <li>Creative Mind</li>
      <li>Time Management</li>
    </ol>
<p>Types of Web Content are as Follows: </p>
<ol>
  <li>Blog Posts</li>
  <li>Website Content</li>
  <li>Creative Writing</li>
  <li>Informative Articles</li>
  <li>Scripts and many more..</li>
</ol>
<span className="rating">
  <span className="star"><p> Gear the Careers Recommendation:4.5★</p></span>
</span>
        </div>
    );
}

export default contwritflowchart