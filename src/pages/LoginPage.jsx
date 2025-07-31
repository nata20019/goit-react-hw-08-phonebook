import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [formData, setFormData] = useState(initialState);
  // const [error, setError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };
  return (
    <div>
      {/* <Link to="/join" replace> */}
      <h1>Login Page</h1>
      {/* </Link> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {/* {error && <div className="alert alert-danger">{error}</div>} */}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
