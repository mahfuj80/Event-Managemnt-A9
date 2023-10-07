import Carousel from '../../components/Carousel/Carousel';

const Home = () => {
  return (
    <main className="relative">
      {/* carousel Banner Section*/}
      <section className="overflow-hidden md:overflow-auto">
        <Carousel></Carousel>
      </section>
      {/* Services Section */}
      <section>
        <h2>This is services section</h2>
      </section>
      <section>
        <h2>This is team member section</h2>
      </section>
      <section>
        <h2>This is faq section</h2>
      </section>
    </main>
  );
};

export default Home;
