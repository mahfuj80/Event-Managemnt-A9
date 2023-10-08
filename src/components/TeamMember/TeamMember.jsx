import { useEffect, useState } from 'react';
import { FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';

const TeamMember = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch('members.json')
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] px-8 md:px-14">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team Member
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Our Team member Details
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {members.map((member) => (
            <>
              <div className="w-full px-4 sm:w-3/4 md:w-2/4 lg:w-1/4">
                <div className="hover:shadow-xl relative mb-8 rounded-xl bg-white text-center">
                  <div className="p-4">
                    <img
                      className="w-full h-full"
                      src={member.image}
                      alt="logo"
                    />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-dark">
                    {member.name}
                  </h4>
                  <div className="flex gap-4 mx-auto w-fit pb-4 text-2xl">
                    <FaFacebook className="hover:text-blue-600 cursor-pointer"></FaFacebook>
                    <FaYoutube className="hover:text-red-600 cursor-pointer"></FaYoutube>
                    <FaLinkedin className="hover:text-blue-600 cursor-pointer"></FaLinkedin>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
