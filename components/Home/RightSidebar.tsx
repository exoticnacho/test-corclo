"use client";

import { Button, Card, Image, ListGroup } from "react-bootstrap";

export default function RightSidebar() {
  const verifiedUsers = [
    {
      id: 1,
      name: "Akun Verifikasi",
      username: "akunverif_1",
      avatar: "https://placehold.co/32x32/E9ECEF/495057?text=A1",
    },
    {
      id: 2,
      name: "Developer Handal",
      username: "dev_handal",
      avatar: "https://placehold.co/32x32/E9ECEF/495057?text=D2",
    },
    {
      id: 3,
      name: "Desainer Kreatif",
      username: "desainer_kreatif",
      avatar: "https://placehold.co/32x32/E9ECEF/495057?text=D3",
    },
  ];

  return (
    <div className="position-sticky" style={{ top: "80px" }}>
      {/* Card: Siapa untuk diikuti */}
      <Card className="feature-card-glass border-0">
        <Card.Body className="py-2 px-3">
          <Card.Title className="fw-bold fs-6 text-body mb-2">
            Siapa untuk diikuti
          </Card.Title>
          <ListGroup variant="flush" className="mt-2">
            {verifiedUsers.map((user) => (
              <ListGroup.Item
                key={user.id}
                className="bg-transparent border-0 px-0 py-2 d-flex align-items-center"
              >
                <Image
                  src={user.avatar}
                  roundedCircle
                  width={32}
                  height={32}
                  className="me-2"
                  alt={user.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/32x32/E9ECEF/495057?text=Err";
                  }}
                />
                <div className="flex-grow-1 overflow-hidden me-2">
                  <h6
                    className="fw-bold mb-0 text-body d-flex align-items-center"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <span className="text-truncate">{user.name}</span>
                    <span
                      className="ms-1 flex-shrink-0"
                      title="Verified Account"
                      style={{ color: "#1D9BF0", fontSize: "0.8rem" }}
                    >
                      ✓
                    </span>
                  </h6>
                  <small
                    className="text-body-secondary text-truncate d-block"
                    style={{ fontSize: "0.75rem" }}
                  >
                    @{user.username}
                  </small>
                </div>
                <Button
                  variant="dark"
                  size="sm"
                  className="rounded-pill px-2 py-0 ms-auto flex-shrink-0"
                  style={{
                    backgroundColor: "#0F1419",
                    color: "#FFFFFF",
                    border: "none",
                    fontSize: "0.8rem",
                  }}
                >
                  Follow
                </Button>
              </ListGroup.Item>
            ))}
            {/* Link "Tampilkan lebih banyak" telah dihapus */}
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Card: Trends */}
      <Card className="feature-card-glass border-0 mt-3">
        <Card.Body className="py-2 px-3">
          <Card.Title className="fw-bold fs-6 text-body mb-2">
            Trends for you
          </Card.Title>
          <ListGroup variant="flush" className="mt-2">
            <ListGroup.Item className="bg-transparent border-0 px-0 py-1 text-body-secondary">
              <small className="d-block" style={{ fontSize: "0.75rem" }}>
                Trending in Indonesia
              </small>
              <h6
                className="fw-bold mb-0 text-body"
                style={{ fontSize: "0.9rem" }}
              >
                #Nextjs
              </h6>
              <small style={{ fontSize: "0.75rem" }}>15.2k posts</small>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 px-0 py-1 text-body-secondary">
              <small className="d-block" style={{ fontSize: "0.75rem" }}>
                Trending in Tech
              </small>
              <h6
                className="fw-bold mb-0 text-body"
                style={{ fontSize: "0.9rem" }}
              >
                #Bootstrap5
              </h6>
              <small style={{ fontSize: "0.75rem" }}>8.7k posts</small>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 px-0 py-1 text-body-secondary">
              <small className="d-block" style={{ fontSize: "0.75rem" }}>
                Gaming
              </small>
              <h6
                className="fw-bold mb-0 text-body"
                style={{ fontSize: "0.9rem" }}
              >
                #Valorant
              </h6>
              <small style={{ fontSize: "0.75rem" }}>122.1k posts</small>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
