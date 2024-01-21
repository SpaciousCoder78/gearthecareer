import mermaid from 'mermaid';
mermaid.initialize({ startOnLoad: true });

function Civilflow(){
  return(
    <div>
      <h1>Civil Services Path</h1>
      <pre className="mermaid">
        <img src="https://media.discordapp.net/attachments/1198163202937200682/1198482470950150236/image.png?ex=65bf10c7&is=65ac9bc7&hm=1be25659136bc4dd28a322c3edc6c8d000714d9bc70fdc87768e72543d687534&=&format=webp&quality=lossless&width=259&height=741" alt="Flowchart"/>
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

export default Civilflow