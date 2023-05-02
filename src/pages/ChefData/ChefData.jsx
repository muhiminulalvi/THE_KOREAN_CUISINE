import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegThumbsUp, FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BounceLoader from "react-spinners/BounceLoader";
import LazyLoad from "react-lazyload";

const ChefData = () => {
  const { id } = useParams();
  const chef = useLoaderData();
  const [recipeStates, setRecipeStates] = useState(
    chef.recipes.map((recipe) => ({ id: recipe.recipe_id, isFavorite: false }))
  );
  const [isLoading, setIsLoading] = useState(true);

  const handleAddToFavorite = (recipeId) => {
    const updatedRecipeStates = recipeStates.map((recipeState) => {
      if (recipeState.id === recipeId) {
        return { ...recipeState, isFavorite: true };
      }
      return recipeState;
    });
    setRecipeStates(updatedRecipeStates);
    toast.success("Recipe added to favorites");
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <div className=" bg-stone-50">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <BounceLoader color="#f59e0b" size={150} />
        </div>
      ) : (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <h2 className="text-5xl font-bold text-center pb-16">
            Meet The Chef
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 px-5">
            <div className="mb-3 font-bold px-4">
              <h2 className="text-5xl text-warning py-3">{chef.name}</h2>
              <p className="py-4">{chef.bio}</p>
              <p className="flex items-center py-2">
                <FaRegThumbsUp size={20} />:{" "}
                <span className="text-xl">{chef.likes}</span>
              </p>
              <p className="py-2">Number of Recipes: {chef.recipe_number}</p>
              <p className=" py-2">Experiences: {chef.experience}</p>
            </div>
            <div>
              <LazyLoad height={400}>
                <img
                  src={chef.chef_picture}
                  alt=""
                  className="rounded w-full p-4"
                />
              </LazyLoad>
            </div>
          </div>
          <div className="pt-16">
            <div className="text-center px-7">
              <h2 className="font-bold text-warning text-5xl py-4">
                Popular Recipes
              </h2>
              <p className="font-medium">
                Korean cuisine is known for its bold and complex flavors, with
                dishes often featuring{" "}
              </p>
              <p className="font-medium">
                a combination of spicy, sour, sweet, and salty tastes.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-4 py-10">
              {chef.recipes.map((recipe, index) => (
                <div className="card w-full shadow-xl" key={recipe.recipe_id}>
                  <figure>
                    <img src={recipe.photo} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-bold text-4xl py-3">
                      {recipe.recipe_name}
                    </h2>
                    <p className="font-medium py-3">
                      Ingredients: {recipe.ingredients}
                    </p>
                    <hr />
                    <div className="flex items-center justify-between font-bold pt-3">
                      <div className="flex-col gap-3">
                        <p>Cooking Method: {recipe.cooking_method}</p>
                        <p>Ratings: {recipe.rating}</p>
                      </div>
                      <div>
                        <button
                          className="btn btn-warning"
                          onClick={() => handleAddToFavorite(recipe.recipe_id)}
                          disabled={recipeStates[index].isFavorite}
                        >
                          {recipeStates[index].isFavorite ? (
                            <FaRegHeart size={20} />
                          ) : (
                            <FaRegHeart size={20} />
                          )}
                        </button>
                        <ToastContainer />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChefData;
