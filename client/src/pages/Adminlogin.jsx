import { useState } from "react";
import "../styles/AdminLogin.css";
import "../components/Navbar.css";

export const AdminLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <section>
      <main>
        <div className="section-login">
          <div className="container grid grid-two-cols">
            {/* Login Image */}
            <div className="login-image">
              <img
                src="/images/GECIA-CANTEEN.png"
                alt="Admin Login Illustration"
                width="700"
                height="700"
              />
              {/* Text Below the Image */}
              <p  className="image-text">Welcome to the Admin Login Portal</p>
            </div>

            {/* Login Form */}
            <div className="login-form">
              <h1 className="main-heading mb-3">Admin Login</h1>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>

                {/* Password Field */}
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    id="password"
                    required
                    autoComplete="off"
                    onChange={handleInput}
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-submit">
                  Login as Admin
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AdminLogin;
