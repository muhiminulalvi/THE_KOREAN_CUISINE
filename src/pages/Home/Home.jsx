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
    </div>
  );
};

export default Home;
