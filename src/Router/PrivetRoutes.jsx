import useAuth from '../hooks/useAuth';

const PrivetRoutes = () => {
  const { user, loading } = useAuth();
  return <div></div>;
};

export default PrivetRoutes;
