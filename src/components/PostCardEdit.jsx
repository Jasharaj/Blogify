import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCardEdit({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="card bg-slate-200 dark:bg-gray-700 w-56 shadow-xl rounded-lg hover:translate-y-2 duration-200">
        <figure>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-28"
          />
        </figure>
        <div className="card-body flex justify-center items-center h-4 overflow-x-clip overflow-y-clip">
          <h2 className="card-title text-center text-sm ">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCardEdit;
