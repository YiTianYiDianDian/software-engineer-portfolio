import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, ChevronRight, Mail, Menu, X } from "lucide-react";
import "./styles.css";

const projects = [
  {
    no: "01",
    type: "ENTERPRISE SOFTWARE",
    title: "Enterprise .NET + React Systems",
    text: "Full-stack business applications built around ASP.NET Core APIs, React interfaces, relational databases and cloud services.",
    stack: [".NET", "C#", "ASP.NET Core", "React", "SQL Server", "Azure"],
    points: ["REST API and service-layer development", "React interfaces, forms and data workflows", "Database design and EF Core integration", "Production troubleshooting and system improvement"]
  },
  {
    no: "02",
    type: "API & PAYMENT INTEGRATION",
    title: "Business & Payment Integrations",
    text: "Reliable integrations connecting enterprise applications with payment providers and external business platforms.",
    stack: ["C#", ".NET", "REST API", "JSON", "Webhooks"],
    points: ["Transaction request and response flows", "Payment status and callback handling", "Validation, error handling and retries", "Third-party API troubleshooting"]
  },
  {
    no: "03",
    type: "AI ENGINEERING",
    title: "AI Content & Audiobook Platform",
    text: "An AI workflow that transforms website and document content into structured scripts and generated audio.",
    stack: ["OpenAI API", "C#", "Azure Functions", "MongoDB", "Blob Storage"],
    points: ["LLM integration and content sanitisation", "Structured script generation", "Background processing with Azure Functions", "Cloud storage and audio delivery"]
  }
];

const skills = {
  "Backend": [".NET", "C#", "ASP.NET Core", "Web API", "EF Core"],
  "Frontend": ["React", "TypeScript", "Material UI", "React Hook Form"],
  "Cloud": ["Azure", "Azure Functions", "Azure SQL", "Blob Storage"],
  "Database": ["SQL Server", "MongoDB", "Database Design"],
  "Integration": ["REST APIs", "Payment APIs", "Webhooks", "JSON"],
  "AI": ["OpenAI API", "LLM Integration", "AI Content Processing"]
};

function App() {
  const [mobile, setMobile] = useState(false);
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
    setMobile(false);
  };

  return (
    <div>
      <header className="nav">
        <button className="logo" onClick={() => go("home")}><span>&lt;/&gt;</span> SOFTWARE ENGINEER</button>
        <nav className={mobile ? "navlinks show" : "navlinks"}>
          <button onClick={() => go("work")}>Work</button>
          <button onClick={() => go("skills")}>Skills</button>
          <button onClick={() => go("about")}>About</button>
          <button className="smallCta" onClick={() => go("contact")}>Let's talk <ArrowUpRight size={15}/></button>
        </nav>
        <button className="hamburger" onClick={() => setMobile(!mobile)}>{mobile ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="heroText">
            <div className="eyebrow"><i/> AVAILABLE FOR FREELANCE PROJECTS</div>
            <h1>Software that <em>solves</em> real business problems.</h1>
            <p className="lead">Senior Software Engineer focused on enterprise .NET applications, React, API integrations, payment systems and practical AI solutions.</p>
            <div className="actions">
              <button className="btn primary" onClick={() => go("work")}>View my work <ChevronRight size={17}/></button>
              <button className="btn ghost" onClick={() => go("contact")}>Start a conversation</button>
            </div>
          </div>
          <div className="terminal">
            <div className="terminalBar"><b/><b/><b/></div>
            <pre><span>01</span> <i>const</i> solution = {'{'}{"\n"}
<span>02</span>   backend: <strong>".NET"</strong>,{"\n"}
<span>03</span>   frontend: <strong>"React"</strong>,{"\n"}
<span>04</span>   cloud: <strong>"Azure"</strong>,{"\n"}
<span>05</span>   ai: <strong>"OpenAI"</strong>{"\n"}
<span>06</span> {'}'};</pre>
          </div>
        </section>

        <section id="work" className="section">
          <div className="heading">
            <div><div className="eyebrow">SELECTED WORK</div><h2>Engineering with a business purpose.</h2></div>
            <p>Examples of the systems, integrations and AI workflows I can build, improve and support.</p>
          </div>
          <div className="projects">
            {projects.map(p => <article className="project" key={p.no}>
              <div className="number">{p.no}</div>
              <div>
                <div className="type">{p.type}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
                <ul>{p.points.map(x => <li key={x}>{x}</li>)}</ul>
              </div>
            </article>)}
          </div>
        </section>

        <section id="skills" className="section ruled">
          <div className="eyebrow">TECHNICAL STACK</div>
          <h2>From application code to cloud.</h2>
          <div className="skillGrid">
            {Object.entries(skills).map(([k,v]) => <div className="skill" key={k}><h3>{k}</h3><div>{v.map(x=><span key={x}>{x}</span>)}</div></div>)}
          </div>
        </section>

        <section id="about" className="section about ruled">
          <div>
            <div className="eyebrow">ABOUT</div>
            <h2>Practical engineering, from requirement to production.</h2>
          </div>
          <div className="aboutText">
            <p>I work across backend, frontend, databases, cloud services and third-party integrations. My focus is building software that is maintainable, reliable and useful to the business.</p>
            <p>I am particularly interested in complex integrations, modernising .NET systems and introducing AI where it can genuinely improve a workflow.</p>
            <div className="principles">
              {["Clean, maintainable code","Reliable integrations","Clear API design","Practical cloud architecture","Defensive error handling","Business-focused delivery"].map((x,i)=><div key={x}><small>0{i+1}</small>{x}</div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section ruled">
          <div className="eyebrow">LET'S WORK TOGETHER</div>
          <h2>Have a software problem worth solving?</h2>
          <p>Tell me what you are building, integrating or improving.</p>
          <a className="btn primary" href="mailto:yitianyidiandian@gmail.com">Get in touch <Mail size={17}/></a>
         
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Your Name</span><span>Built with React · Hosted on GitHub Pages</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
