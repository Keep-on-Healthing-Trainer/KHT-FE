import { Outlet } from 'react-router-dom';
import MainHeader from '../components/header/main';
import Footer from '../components/footer/footer';

const MainLayout = () => {
    return (
      <>
        <MainHeader />
        <Outlet />
      </>
    );
  };
  
  export default MainLayout;