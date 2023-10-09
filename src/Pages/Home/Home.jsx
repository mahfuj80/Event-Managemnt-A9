import { useEffect } from 'react';
import Carousel from '../../components/Carousel/Carousels';
import Faq from '../../components/Faq/Faq';
import Services from '../../components/Services/Services';
import TeamMember from '../../components/TeamMember/TeamMember';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  // const { name } = useContext(AuthContext);
  // console.log(name);
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <main className="relative">
      {/* carousel Banner Section*/}
      <section
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="overflow-hidden md:overflow-auto"
      >
        <Carousel></Carousel>
      </section>
      {/* Services Section */}

      <section data-aos="flip-right" data-aos-duration="1000">
        <Services></Services>
      </section>
      <section data-aos="flip-left" data-aos-duration="1000">
        <TeamMember></TeamMember>
      </section>
      <section
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <Faq></Faq>
      </section>
    </main>
  );
};

export default Home;
