import { useContext } from 'react';
import Carousel from '../../components/Carousel/Carousels';
import Faq from '../../components/Faq/Faq';
import Services from '../../components/Services/Services';
import TeamMember from '../../components/TeamMember/TeamMember';
import { AuthContext } from '../../Provider/AuthProvider';
const Home = () => {
  const { name } = useContext(AuthContext);
  console.log(name);
  return (
    <main className="relative">
      {/* carousel Banner Section*/}
      <section className="overflow-hidden md:overflow-auto">
        <Carousel></Carousel>
      </section>
      {/* Services Section */}

      <Services></Services>
      <section className="bg-blend-darken">
        <TeamMember></TeamMember>
      </section>
      <Faq></Faq>
    </main>
  );
};

export default Home;
