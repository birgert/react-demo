import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import MyCarousel from "../components/MyCarousel";

function HomeLayout({ children }) {
  return (
    <>
      <Container>
        <NavBar />
        <MyCarousel />

        <div>{children}</div>
        <Footer />
      </Container>
    </>
  );
}

export default HomeLayout;
