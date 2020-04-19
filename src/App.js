import React from 'react';
import Portrait from './assets/portrait.jpg'


function App() {
  return (
    <div className="app">
      <section className="entrance">
        <div className="entrance--left">
          <h1 className="entrance--hey">Hello there</h1>
          <div className="entrance--caption">
            <p>My name is Soeradj Mahabiersing</p>
            <p>And I am a Full Stack Developer</p>
          </div>
          <div>
            email linkedin github
        </div>
        </div>
        <div className="entrance--right">
          <img className="entrance--portrait" src={Portrait} alt="portrait"/>
        </div>
      </section>
      <Wrapper />
    </div>
  );
}
const Wrapper = (props) => {
  return (<main className="wrapper">
    <About />
    <Process />
    <Qualifications />
    <Projects />
  </main>)
}

const About = () => {
  return (<div className="about">
    <h2>About</h2>
  </div>)
}

const Process = () => {
  return (<div className="process">
    <h2>Process</h2>
  </div>)
}

const Qualifications = () => {
  return (<div className="qualifications">
    <h2>Qualifications</h2>
  </div>)
}

const Projects = () => {
  return (<div className="projects">
    <h2>Projects</h2>
  </div>)
}

export default App;
