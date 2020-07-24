import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import HomeCarousel from "../components/HomeCarousel";

function HomeLayout({ children }) {
  return (
    <>
      <Container>
        <NavBar />
        <HomeCarousel />

        <div>{children}</div>
        <Footer />
      </Container>
    </>
  );
}

export default HomeLayout;
