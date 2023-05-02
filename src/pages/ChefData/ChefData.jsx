import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegThumbsUp } from 'react-icons/fa';

const ChefData = () => {
  const { id } = useParams();
  // console.log(id);
  const chef = useLoaderData();
  console.log(chef);
  return (
    <div className=" bg-stone-50">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <h2 className="text-5xl font-bold text-center pb-16">Meet The Chef</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 px-5">
          <div className="mb-3 font-bold px-4">
            <h2 className="text-5xl text-warning py-3">{chef.name}</h2>
            <p className="py-4">{chef.bio}</p>
            <p className="flex items-center py-2"><FaRegThumbsUp size={20}/>: <span className="text-xl">{chef.likes}</span></p>
            <p className="py-2">Number of Recipes: {chef.recipe_number}</p>
            <p className=" py-2">Experiences: {chef.experience}</p>
          </div>
          <div>
            <img src={chef.chef_picture} alt="" className="rounded w-full p-4"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefData;
