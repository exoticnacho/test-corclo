// components/App/PostCard.tsx
"use client";

import { Heart, MessageCircle, MoreHorizontal, Share2 } from "lucide-react";
import { Button, Card, Image } from "react-bootstrap";

// 💡 1. PERBARUI TIPE DATA
// Kita tambahkan properti 'media' yang opsional
type PostProps = {
  post: {
    user: { name: string; username: string; avatar: string };
    content: string;
    timestamp: string;
    media?: {
      type: "image" | "video";
      url: string;
    };
  };
};

export default function PostCard({ post }: PostProps) {
  return (
    <Card className="feature-card-glass border-0">
      <Card.Body className="p-3">
        {/* Info User (Tidak berubah) */}
        <div className="d-flex align-items-center mb-3">
          <Image
            src={post.user.avatar}
            roundedCircle
            style={{ width: "40px", height: "40px" }}
          />
          <div className="ms-3">
            <h6 className="fw-bold mb-0 text-body">{post.user.name}</h6>
            <small className="text-body-secondary">
              {post.user.username} · {post.timestamp}
            </small>
          </div>
          <Button
            variant="light"
            size="sm"
            className="rounded-circle p-2 ms-auto"
          >
            <MoreHorizontal size={20} />
          </Button>
        </div>

        {/* Konten Post (Tidak berubah) */}
        <Card.Text className="text-body mb-3">{post.content}</Card.Text>

        {/* 💡 2. TAMBAHKAN BLOK MEDIA (GAMBAR/VIDEO) */}
        {post.media && (
          <div
            className="mb-3"
            style={{ overflow: "hidden", borderRadius: "0.5rem" }}
          >
            {/* Jika tipe media adalah 'image' */}
            {post.media.type === "image" && (
              <Image src={post.media.url} fluid alt="Post content" />
            )}

            {/* Jika tipe media adalah 'video' */}
            {post.media.type === "video" && (
              <video
                controls
                width="100%"
                style={{ display: "block", maxHeight: "450px" }}
              >
                <source src={post.media.url} type="video/mp4" />
                Browser Anda tidak mendukung tag video.
              </video>
            )}
          </div>
        )}

        {/* Tombol Aksi (Tidak berubah) */}
        <div className="d-flex justify-content-around text-body-secondary border-top pt-2">
          <Button
            variant="light"
            className="d-flex align-items-center gap-2 border-0 bg-transparent text-body-secondary"
          >
            <MessageCircle size={18} /> 0
          </Button>
          <Button
            variant="light"
            className="d-flex align-items-center gap-2 border-0 bg-transparent text-body-secondary"
          >
            <Heart size={18} /> 0
          </Button>
          <Button
            variant="light"
            className="d-flex align-items-center gap-2 border-0 bg-transparent text-body-secondary"
          >
            <Share2 size={18} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
