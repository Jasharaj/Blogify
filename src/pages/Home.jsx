import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import Loadinglg from "../components/Loadinglg";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full min-h-[80vh] py-8">
          <Loadinglg />          
      </div>
    );
  }
  return (
    <div className="w-full min-h-[80vh] py-8">
      <Container>
        <div className="flex flex-wrap justify-center gap-3">
          {posts.map((post) => (
            <div key={post.$id} className="">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
