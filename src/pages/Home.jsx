import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import Loadinglg from "../components/Loadinglg";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const userStatus = useSelector((state) => state.auth.status);


  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (userStatus===false){
    return (
      <div className="w-full flex justify-center content-center min-h-[80vh] py-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Please_log_in_image.png/800px-Please_log_in_image.png?20170326002341" alt="" />     
      </div>
    );
  }

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
