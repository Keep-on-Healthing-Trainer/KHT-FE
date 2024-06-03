import { Outlet } from 'react-router-dom';
import MainHeader from '../components/header/main';

const MainLayout = () => {
    return (
      <>
        <MainHeader />
        <Outlet />
      </>
    );
  };
  
  export default MainLayout;