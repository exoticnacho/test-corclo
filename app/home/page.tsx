// app/home/page.tsx
"use client";

import AppHeader from "@/components/Home/AppHeader";
import FeedColumn from "@/components/Home/FeedColumn";
import LeftSidebar from "@/components/Home/LeftSidebar";
import RightSidebar from "@/components/Home/RightSidebar";
import { Col, Container, Row } from "react-bootstrap";

// Halaman ini adalah layout utama setelah user login
export default function HomePage() {
  return (
    <>
      {/* 1. Header Aplikasi yang berbeda dari landing page */}
      <AppHeader />

      {/* 2. Layout 3 Kolom Utama */}
      <Container style={{ marginTop: "70px" }}>
        {" "}
        {/* Beri jarak dari AppHeader */}
        <Row className="justify-content-center g-4">
          {/* Kolom Kiri: Navigasi */}
          <Col lg={3} className="d-none d-lg-block">
            <LeftSidebar />
          </Col>

          {/* Kolom Tengah: Feed */}
          <Col lg={6} md={8}>
            <FeedColumn />
          </Col>

          {/* Kolom Kanan: Trends / Who to follow */}
          <Col lg={3} className="d-none d-lg-block">
            <RightSidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}
