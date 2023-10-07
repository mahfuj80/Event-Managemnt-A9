import { Outlet } from 'react-router-dom';
import Nav from '../components/Navbar/Nav';

const Root = () => {
  return (
    <div className="relative">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
