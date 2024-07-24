import React, { useState, useEffect } from "react";
import { Container, PostCardEdit } from "../components";
import appwriteService from "../appwrite/config";
import authService from "../appwrite/auth";
import Loadinglg from "../components/Loadinglg";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");
  const [show, whatshow] = useState(false);

  const logi = async () => {
    const user = await authService.getCurrentUserId();
    setUser(user);
  };

  useEffect(() => {
    logi();
  }, []);

  console.log(user);

  appwriteService.getPosts().then((posts) => {
    if (posts) {
      const files = posts.documents.filter((file) => file.userId === user);
      setPosts(files);
      whatshow(true);
    }
  });

  return (
    <>
      {show ? (
        <div className="w-full min-h-[90vh] py-8">
          <Container>
            <div className="flex flex-wrap justify-center gap-3">
              {posts.map((post) => (
                <div key={post.$id} className="">
                  <PostCardEdit {...post} />
                </div>
              ))}
            </div>
          </Container>
        </div>
      ) : (
        <div className="w-full min-h-[90vh] py-8">
          <Loadinglg />
        </div>
      )}
    </>
  );
}

export default AllPosts;
