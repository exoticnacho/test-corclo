// components/App/FeedColumn.tsx
"use client";
import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    user: {
      name: "Andrew Reinhart",
      username: "@andrew",
      avatar: "/images/index/88.jpg",
    },
    content:
      "Ini adalah postingan pertama saya di Corclo! Platform ini dibuat dengan Bootstrap 5 dan Next.js.",
    timestamp: "5m ago",
  },
  {
    id: 2,
    user: {
      name: "Jane Doe",
      username: "@janedoe",
      avatar: "/images/index/ai.jpg",
    },
    content:
      "Baru saja mencoba komponen 'feature-card-glass'. Efek blur-nya keren banget! Ini contoh gambar.",
    timestamp: "1h ago",
    media: {
      type: "image" as "image" | "video", 
      url: "/images/index/esport.jpg",
    },
  },
  {
    id: 3,
    user: {
      name: "Tech Enthusiast",
      username: "@techy",
      avatar: "/images/index/web3.png",
    },
    content: "Bagaimana cara kerja video di platform ini? Mari kita coba.",
    timestamp: "2h ago",
    // 💡 CONTOH MEDIA VIDEO (Gunakan URL placeholder)
    media: {
      type: "video" as "image" | "video",
      url: "https://www.w3schools.com/html/mov_bbb.mp4", // URL video dummy
    },
  },
];

export default function FeedColumn() {
  return (
    <div className="d-flex flex-column gap-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
