import Carousel from '../../components/Carousel/Carousel';
import Faq from '../../components/Faq/Faq';
import Services from '../../components/Services/Services';
import TeamMember from '../../components/TeamMember/TeamMember';

const Home = () => {
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
