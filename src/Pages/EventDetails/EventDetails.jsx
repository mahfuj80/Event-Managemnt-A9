import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const EventDetails = () => {
  const [displayService, setDisplayService] = useState([]);
  const services = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const [displayService] = services.filter((service) => service.id == id);
    setDisplayService(displayService);
  }, [id, services]);
  console.log(displayService);
  return (
    <>
      <div className="py-10 md:py-24 px-10">
        <div className="text-center">
          <h1 className="text-black shadow-2xl pb-4 bg-[#f2f2f2] w-fit mx-auto font-bold text-5xl">
            {displayService.name}
          </h1>
          <img
            className="w-full mx-auto bg-white rounded-lg"
            src={displayService?.background}
            alt="banner"
          />
        </div>
        <div>
          <p className="text-5xl font-bold leading-loose">
            {displayService?.short_description}
          </p>
          <p className="text-3xl font-medium leading-loose">
            <span className="text-blue-500">Description: </span>
            {displayService?.detailed_description}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="w-[200px]" src={displayService?.logo} alt="logo" />
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
