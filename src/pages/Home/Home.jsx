import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazyload';

const Home = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("https://b7a10-chef-recipe-hunter-server-side-muhiminulalv-muhiminulalvi.vercel.app/chefs")
      .then((response) => response.json())
      .then((data) => setChefData(data));
  }, []);
  //   console.log(chefData);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/5773954/pexels-photo-5773954.jpeg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">The Korean Cuisine</h1>
            <p className="mb-5">
              Korean cuisine is characterized by bold and spicy flavors,
              fermentation, and an emphasis on vegetables and rice. Korean
              cuisine is also known for its healthy qualities and emphasis on
              communal dining.
            </p>
            <button className="btn btn-xs btn-warning hover:btn-primary sm:btn-sm md:btn-md lg:btn-lg">
              See Below
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="text-center pt-14 pb-3">
          <h2 className="font-bold text-4xl py-2">About Us</h2>
          <p className="font-medium py-3">
            Korean cuisine is characterized by bold and spicy flavors,
            fermentation, and an emphasis on vegetables and rice.
          </p>
        </div>
        <div className="grid  md:grid-cols-2 justify-center items-center gap-5 pt-7 pb-14">
          <div className="mb-3">
            <h3 className="font-bold text-4xl">Best Cuisine In The City</h3>
            <p className="font-medium py-3">
              Korean cuisine is known for its bold and complex flavors, with
              dishes often featuring a combination of spicy, sour, sweet, and
              salty tastes. Many dishes are also characterized by their use of
              fermented ingredients, which add depth and complexity to the
              flavors.
            </p>
            <p className="font-medium py-3">
              Korean cuisine also features a wide variety of soups, stews, and
              noodle dishes, often made with a range of meats and vegetables.
              Seafood is also popular, with dishes like haemul pajeon (seafood
              pancake) and grilled squid being common favorites.
            </p>
            <button className="btn btn-warning font-bold">Know More</button>
          </div>
          <div>
            <img src="/food2.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-slate-100 py-16">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <h2 className="text-center font-bold text-4xl py-2">Our Chefs</h2>
          <p className="text-center font-medium py-2">
            Korean cuisine also features a wide variety of soups, stews, and
            noodle dishes, often made with a range of meats and vegetables.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-7 py-10">
            {chefData[0]?.chefs?.map((chef) => (
              <div className="card w-full bg-base-100 shadow-xl" key={chef.id}>
                <figure className="px-10 pt-10">
                  <LazyLoad height={400} threshold={0}>
                  <img
                    src={chef.chef_picture}
                    alt="Shoes"
                    className="rounded-xl"
                    width={600}
                  />
                  </LazyLoad>
                </figure>
                <div className="card-body px-10">
                  <h2 className="card-title font-bold">{chef.name}</h2>
                  <div className="flex-col justify-between items-center gap-10 font-medium">
                    <p>Experience: {chef.experience}</p>
                    <p>Recipes: {chef.recipe_number}</p>
                    <p>Likes: {chef.likes}</p>
                  </div>
                  <div className="card-actions">
                    <Link to={`/chefs/${chef?.id}`}>
                      <button className="btn btn-warning hover:btn">View Recipe</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" py-14">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5">
            <div>
              <h1 className="font-bold text-5xl">Contact Us</h1>
              <p className="font-medium py-3">
                One of the most famous Korean dishes is kimchi, a spicy and
                tangy fermented vegetable dish that is often served as a side
                dish or used as a condiment.
              </p>
              <p className="font-medium py-3">
                Korean cuisine also features a wide variety of soups, stews, and
                noodle dishes, often made with a range of meats and vegetables.
              </p>
              <div className="flex items-center gap-6 py-3">
                <FaFacebook size={30} /> <FaTwitter size={30} />{" "}
                <FaInstagramSquare size={30} /> <FaLinkedin size={30} />
              </div>
            </div>
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
              <div className="card-body text-center">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Messages"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-warning">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
