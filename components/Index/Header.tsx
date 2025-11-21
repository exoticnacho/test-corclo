"use client";

import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <div
      className="fixed-top d-flex justify-content-center pt-3 px-3"
      style={{ zIndex: 1030, pointerEvents: "none" }}
    >
      <Navbar
        expand="lg"
        variant="dark"
        className="rounded-4 border border-secondary border-opacity-25 shadow-lg py-2"
        style={{
          backgroundColor: "rgba(33, 37, 41, 0.85)",
          backdropFilter: "blur(12px)",
          width: "100%",
          maxWidth: "900px",
          pointerEvents: "auto",
        }}
      >
        <Container fluid className="px-3">
          <Link
            href="/"
            className="navbar-brand fw-bold d-flex align-items-center gap-2 me-4"
          >
            <span>Corclo</span>
          </Link>

          <Navbar.Toggle
            aria-controls="floating-navbar-nav"
            className="border-0"
          />

          <Navbar.Collapse id="floating-navbar-nav">
            <Nav className="mx-auto my-2 my-lg-0">
              <Link href="#home" className="nav-link px-2 fw-medium">
                Home
              </Link>
              <Link href="#about" className="nav-link px-2 fw-medium">
                About
              </Link>
              <Link href="#features" className="nav-link px-2 fw-medium">
                Features
              </Link>
              <Link href="#community" className="nav-link px-2 fw-medium">
                Community
              </Link>
            </Nav>

            <div className="d-flex gap-2">
              <Link
                href="/login"
                className="btn btn-outline-light btn-sm rounded-pill px-3 border-0"
              >
                Sign In
              </Link>

              <Link
                href="/register"
                className="btn btn-primary btn-sm rounded-pill px-4 fw-bold"
                style={{ backgroundColor: "#7c3aed", borderColor: "#7c3aed" }}
              >
                Get Started
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
