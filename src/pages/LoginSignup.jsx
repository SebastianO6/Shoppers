import { useState } from 'react'
import './css/LoginSignUp.css'

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    if (isLogin) {
      console.log("Logging in with: ", formData);
    } else {
      console.log("Signing up with: ", formData);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='form-container'>
      <div className='form-box'>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            
            {!isLogin && (
              <div className="input-field">
                <input
                  id="email"
                  onChange={handleChange}
                  name='email'
                  type="email"
                  value={formData.email}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
            )}

            <div className="input-field">
              <input
                id="username"
                onChange={handleChange}
                name='username'
                type="text"
                value={formData.username}
                required
              />
               <label htmlFor="username">Username</label>
            </div>

            <div className="input-field">
              <input
                id="password"
                onChange={handleChange}
                type="password"
                name="password"
                value={formData.password}
                required
              />
               <label htmlFor="password">Password</label>
            </div>
          </div>

          <button type='submit' className='submit-button'>
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>
        <div className='toggle-area'>
          <span>{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
          <span className='toggle-link' onClick={toggleForm}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;