import { AboutProject } from './AboutProject';
import { Home } from './Home';
import '../../styles/style1.css';
import '../../styles/style2.css';
import '../../styles/style3.css';
import '../../styles/style4.css';
import { Courses } from './Courses';
import { ContactInfo } from './ContactInfo';

function HomePage() {
  return (
    <>
      <Home />
      <AboutProject />
      <Courses />
      <ContactInfo />
    </>
  );
}

export default HomePage;
