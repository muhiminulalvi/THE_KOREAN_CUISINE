import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="px-4 py-14 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="card mx-auto w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="Login" className="btn btn-warning hover:btn font-bold" />
          </div>
          <label className="label">
            <Link to="/register" className="label-text-alt link link-hover font-medium">
            New to The Korean Cuisine? <span className="text-warning">Create New Account</span>
            </Link>
          </label>
          <hr />
          <p className="text-center font-bold text-xl">OR</p>
          <hr />

          <div className="flex flex-col gap-3 pt-3">
            <button className="btn btn-outline gap-3"><FaGoogle size={20}/> <span>Continue with Google</span></button>
            <button className="btn btn-outline gap-3"><FaGithub size={20}/> <span>Continue with Github</span></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
