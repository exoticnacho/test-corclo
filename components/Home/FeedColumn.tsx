"use client";
import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    user: {
      name: "Mo🌖",
      username: "@mownohoes",
      avatar: "/images/home/mo.jpg",
      isVerified: true,
    },
    content: `i miss you so much i hope ur doing good i love you so much, not a day goes by where i dont think about you i dont like to do this life thing without you. i love you in more ways you can imagine

    always waiting for ur notification like a new member to my streams❤️`,
    timestamp: "5m ago",
    media: {
      type: "image" as "image" | "video",
      url: "/images/home/mopost.jpeg",
    },
  },
  {
    id: 2,
    user: {
      name: "Esports.gg",
      username: "@esports.gg",
      avatar: "/images/home/EsportLogo.png",
      isVerified: true,
    },
    content:
      "100 Thieves victory at Red Bull Home Ground was overwhelmingly dominant, and here`s why.",
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
      isVerified: false,
    },
    content: "Bagaimana cara kerja video di platform ini? Mari kita coba.",
    timestamp: "2h ago",
    media: {
      type: "video" as "image" | "video",
      url: "/videos/home/livyPost.mp4",
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
