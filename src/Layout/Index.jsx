import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Index = () =>{
  return (
    <>
      <Header />
      <Outlet/>
      <Footer/>
    </>
  );
};

export default Index;