import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    // <Link to={`/post/${$id}`}>
    //   <div className='w-full bg-gray-00 rounded-xl p-4'>
    //     <div className='w-full justify-center mb-4'>
    //       <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
    //     </div>
    //     <h2 className='text-xl font-bold'>{title}</h2>
    //   </div>
    // </Link>
    <Link to={`/post/${$id}`}>
      <div className="card bg-gray-700 w-56 shadow-xl rounded-lg hover:translate-y-2 duration-200">
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

export default PostCard;
