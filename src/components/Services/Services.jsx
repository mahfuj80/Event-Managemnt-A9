const Services = () => {
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] px-8 md:px-14">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                What we Serve
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Our Best Services
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 sm:w-4/5 md:w-1/2 lg:w-1/3">
            <div className="group relative mb-8 rounded-xl border-2 border-[#b9b9b9] bg-white p-10 text-center md:px-8 lg:py-9 lg:px-6 xl:p-10 2xl:p-12">
              <div className="relative z-10 mx-auto inline-flex items-center">
                <img
                  className="w-full h-full"
                  src="/public/images/anniversary.png"
                  alt="logo"
                />
              </div>
              <h4 className="mb-3 text-xl font-semibold text-dark">
                Marketing Solutions
              </h4>
              <p className="text-body-color">
                Lorem Ipsum is simply dummy text of the printing and industry.
              </p>
              <button className="btn btn-primary my-2">Details</button>

              <span className="absolute -bottom-2 left-0 right-0 z-[-1] mx-auto h-12 w-3/4 bg-primary opacity-0 blur-[12px] transition group-hover:opacity-[14%]"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
