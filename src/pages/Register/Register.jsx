import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL =form.photo.value;
    const password = form.password.value;

    console.log(name, email, photoURL, password);

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError("password not valid need 8 char ");
      return;
    } else {
      setError("")
    }

    createUser(email, password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser);
      updateUserProfile(name, photoURL)
      .then(() => {
        navigate(from, {replace: true})
      })
      .catch((err) => console.log(err))
      
    })
    .catch(err => console.log(err))

  };

  return (
    <div className="px-4 py-14 sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
      <div className="card mx-auto w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit}>
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
              name="photo"
              type="text"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-warning hover:btn font-bold"
            >
              Register
            </button>
          </div>
          <label className="label">
            <Link
              to="/login"
              className="label-text-alt link link-hover font-medium"
            >
              Already have an account?{" "}
              <span className="text-warning">Login</span>
            </Link>
          </label>
          <p className="text-danger">{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
