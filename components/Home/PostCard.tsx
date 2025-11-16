"use client";

import { BadgeCheck, Heart, MessageCircle, Repeat } from "lucide-react";
import { Button, Image } from "react-bootstrap";

// Tipe data
type PostUser = {
  name: string;
  username: string;
  avatar: string;
  isVerified?: boolean;
};

type PostMedia = {
  type: "image" | "video";
  url: string;
};

type Post = {
  id: number;
  user: PostUser;
  content: string;
  timestamp: string;
  media?: PostMedia; // Dibuat opsional
};

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    // Desain minimalis dengan border-bottom
    <div className="d-flex align-items-start p-3 border-bottom">
      <Image
        src={post.user.avatar}
        roundedCircle
        width={48}
        height={48}
        alt={post.user.name}
        className="me-3"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://placehold.co/48x48/E9ECEF/495057?text=Err";
        }}
      />

      <div className="w-100">
        {/* Header Postingan */}
        <div className="d-flex align-items-center mb-1">
          <h6 className="fw-bold mb-0 text-body d-flex align-items-center">
            {post.user.name}
            {post.user.isVerified && (
              <BadgeCheck
                size={16}
                fill="#1D9BF0"
                color="#FFFFFF"
                className="ms-1 flex-shrink-0"
              />
            )}
          </h6>
          <small className="text-body-secondary ms-2 text-truncate">
            {post.user.username} · {post.timestamp}
          </small>
        </div>

        {/* Konten Postingan */}
        <p
          className="text-body mb-2"
          style={{ whiteSpace: "pre-line" }} // Ini akan membaca baris baru
        >
          {post.content}
        </p>

        {/* Media */}
        {post.media && (
          <div
            className="mt-3 rounded-4 overflow-hidden"
            style={{ maxHeight: "500px", backgroundColor: "#000" }} // Tambahkan bg hitam untuk video
          >
            {post.media.type === "image" ? (
              <Image
                src={post.media.url}
                fluid
                alt="Post media"
                className="w-100 object-fit-cover"
                style={{ maxHeight: "500px" }}
              />
            ) : (
              <video
                src={post.media.url}
                controls // 1. Tetap ada tombol pause/play
                autoPlay // 2. Autoplay
                loop // 3. Loop (tanpa berhenti)
                muted // 4. PENTING agar autoplay jalan
                playsInline // 5. Bantuan untuk mobile
                className="w-100"
                style={{ maxHeight: "500px", display: "block" }}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}

        {/* Tombol Aksi */}
        <div className="d-flex justify-content-between mt-3 text-body-secondary">
          <Button
            variant="link"
            className="text-decoration-none text-body-secondary p-0 d-flex align-items-center"
          >
            <Heart size={18} />
            <small className="ms-1">Suka</small>
          </Button>
          <Button
            variant="link"
            className="text-decoration-none text-body-secondary p-0 d-flex align-items-center"
          >
            <MessageCircle size={18} />
            <small className="ms-1">Komentar</small>
          </Button>
          <Button
            variant="link"
            className="text-decoration-none text-body-secondary p-0 d-flex align-items-center"
          >
            <Repeat size={18} />
            <small className="ms-1">Repost</small>
          </Button>
        </div>
      </div>
    </div>
  );
}
