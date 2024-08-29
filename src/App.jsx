import Sidenav from './components/NavigationSection/Sidenav'
import Main from './components/HeroSection/Main'
import AboutMe from './components/AboutMeSection/AboutMe'
import Projects from './components/PortfolioProjectsSection/Projects'
import Footer from './components/FooterSection/Footer'
import Myjourney from './components/MyJourneySection/Myjourney'
import Arsenal from './components/SkillsSection/Arsenal'
import ContactSection from './components/ContactSection/ContactSection'

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <AboutMe />
      <Myjourney />
      <Arsenal />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
