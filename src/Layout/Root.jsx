import { Outlet } from 'react-router-dom';
import Nav from '../components/Navbar/Nav';
import Footer from '../components/Footer/Footer';

const Root = () => {
  return (
    <div className="container mx-auto bg-[#f2f2f2]">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
