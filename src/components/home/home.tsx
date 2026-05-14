import styles from '../../App.module.scss';

import Hero from '../hero/hero';
import About from '../about/about';
import Projects from '../projects/projects';
import Skills from '../skills/skills';
import Simulations from '../simulations/simulations';
import Contact from '../contact/contact';
import Footer from '../footer/footer';

function Home(){
    return(
        <>
        <section className={styles.app}>
          <Hero/>
          <About/>
          <Projects/>
          <Skills/>
          <Simulations/>
          <Contact/>
          <Footer/>
        </section>
        </>
    )
};

export default Home;