import React from "react";
<<<<<<< HEAD
// import { Link } from "react-router-dom";
=======
>>>>>>> f0f266dc70dcce465f72fdf12ffa1b9885541ec9

import "./Login.css";

const Login = () => {
  return (
<<<<<<< HEAD
    <>
<h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>

<footer>
	<p>
		Created with <i class="fa fa-heart"></i> by
		<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
		- Read how I created this and how you can join the challenge
		<a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
	</p>
</footer>
</>
=======
    <div className="main-login">
      <div class="container-login">
        <div class="container" id="container">
          <div class="form-container sign-in-container">
            <form action="#" className="login-form">
              <h1>Sign in</h1>
              <div class="social-container">
                <a href="/#" class="social">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="/#" class="social">
                  <i class="fab fa-google-plus-g"></i>
                </a>
                <a href="/#" class="social">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" className="login-input" />
              <input
                type="password"
                placeholder="Password"
                className="login-input"
              />
              <a href="/#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button class="ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button class="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <p>
            Created with <i class="fa fa-heart"></i> by
            <a target="/#" href="https://florin-pop.com">
              Florin Pop
            </a>
            - Read how I created this and how you can join the challenge
            <a
              target="/#"
              href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
            >
              here
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
>>>>>>> f0f266dc70dcce465f72fdf12ffa1b9885541ec9
  );
};

export default Login;
