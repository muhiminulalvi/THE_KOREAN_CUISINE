import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
  return (
    <div className="px-4 py-14 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="card mx-auto w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <h2 className="font-bold text-3xl text-center py-3">
            Please Register!
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="url"
              type="url"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Register"
              className="btn btn-warning hover:btn font-bold"
            />
          </div>
          <label className="label">
            <Link
              to="/login"
              className="label-text-alt link link-hover font-medium"
            >
              Already have an account? {" "}
              <span className="text-warning">Login</span>
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Register;
