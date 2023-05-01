import React from "react";

const Home = () => {
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
            <h1 className="mb-5 text-5xl font-bold">M's Cuisine</h1>
            <p className="mb-5">
            Korean cuisine is characterized by bold and spicy flavors, fermentation, and an emphasis on vegetables and rice. Korean cuisine is also known for its healthy qualities and emphasis on communal dining.
            </p>
            <button className="btn btn-xs btn-warning hover:btn-primary sm:btn-sm md:btn-md lg:btn-lg">See Below</button>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="text-center pt-14 pb-3">
            <h2 className="font-bold text-4xl py-2">About Us</h2>
            <p className="font-medium py-3">Korean cuisine is characterized by bold and spicy flavors, fermentation, and an emphasis on vegetables and rice.</p>
        </div>
        <div className="grid  md:grid-cols-2 justify-center items-center gap-5 pt-7 pb-14">
            <div className="mb-3">
                <h3 className="font-bold text-4xl">Best Cuisine In The City</h3>
                <p className="font-medium py-3">Korean cuisine is known for its bold and complex flavors, with dishes often featuring a combination of spicy, sour, sweet, and salty tastes. Many dishes are also characterized by their use of fermented ingredients, which add depth and complexity to the flavors.</p>
                <p className="font-medium py-3">Korean cuisine also features a wide variety of soups, stews, and noodle dishes, often made with a range of meats and vegetables. Seafood is also popular, with dishes like haemul pajeon (seafood pancake) and grilled squid being common favorites.</p>
                <button className="btn btn-warning font-bold">Know More</button>
            </div>
            <div>
                <img src="/food2.jpg" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
