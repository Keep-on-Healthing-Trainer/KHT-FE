import { Outlet } from 'react-router-dom';
import BeforeHeader from '../components/header/before';

const BeforeLayout = () => {
    return (
      <>
        <BeforeHeader />
        <Outlet />
      </>
    );
  };
  
  export default BeforeLayout;