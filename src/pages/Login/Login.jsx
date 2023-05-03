import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const {signInUser, googleUser, githubUser} = useContext(AuthContext);
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  // console.log(location);
  const from = location.state?.from?.pathname || "/"

  const handleLoginUser = (event)=> {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log( email, password);

    signInUser(email, password)
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      navigate(from, {replace: true})
      setError("")
    })
    .catch(err => {
      console.log(err.message);
      setError("Give correct email or password")
    })
  }

  const handleGoogle = () =>{
    googleUser(googleProvider)
    .then(result => {
      const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, {replace: true})
    })
    .catch(err => {
      console.log(err.message);
      setError("Please try again.")
    })
  }

  const handleGithub = () => {
    githubUser(githubProvider)
    .then(result => {
      const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, {replace: true})
    })
    .catch(err => {
      console.log(err.message);
      setError("Please try again.")
    })
  }

  return (
    <div className="px-4 py-14 sm:max-w-xl md:max-w-full  md:px-24 lg:px-8">
      <div className="card mx-auto justify-center w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleLoginUser}>
        <h2 className="font-bold text-3xl text-center py-3">
            Please Login!
          </h2>
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
            <button
              type="submit"

              className="btn btn-warning hover:btn font-bold"
            >Login</button>
          </div>
          <label className="label">
            <Link
              to="/register"
              className="label-text-alt link link-hover font-medium"
            >
              New to The Korean Cuisine?{" "}
              <span className="text-warning">Create New Account</span>
            </Link>
          </label>
          <p className="text-danger">{error}</p>
        </form>
        <div className="pb-7 px-7">
          <hr />
          <p className="text-center font-bold text-xl">OR</p>
          <hr />

          <div className="flex flex-col gap-3 pt-3">
            <button className="btn btn-outline gap-3" onClick={handleGoogle}>
              <FaGoogle size={20} /> <span>Continue with Google</span>
            </button>
            <button className="btn btn-outline gap-3" onClick={handleGithub}>
              <FaGithub size={20} /> <span>Continue with Github</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
