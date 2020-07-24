import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";

function MainLayout({ children }) {
  return (
    <>
      <Container>
        <NavBar />

        <div className="py-3">{children}</div>
        <Footer />
      </Container>
    </>
  );
}

export default MainLayout;
