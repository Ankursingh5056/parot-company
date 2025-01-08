import React, { useState } from 'react';

function Login() {
  //  Set up state for each input field and for the popup visibility
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPopup, setShowPopup] = useState(false);  // For login success
  const [popupMessage, setPopupMessage] = useState('');  // For popup message

  //  Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission and check credentials
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission (page reload)

    //  Get stored user data from localStorage
    const storedData = JSON.parse(localStorage.getItem('userData'));

    //  Check if the entered data matches the stored data
    if (storedData && storedData.email === formData.email && storedData.password === formData.password) {
      // Login Success: Show success popup
      setPopupMessage('Login Successful!');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);  // Hide popup after 3 seconds
    } else {
      // Login Failed: Show error popup
      setPopupMessage('Invalid email or password. Please try again.');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);  // Hide popup after 3 seconds
    }

    // Reset the form fields after submission
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="flex justify-center items-center  bg-slate-400 gap-3 rounded-md gap-3">
     
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className={`bg-${popupMessage.includes('Success') ? 'green' : 'red'}-500 text-white px-6 py-4 rounded-md shadow-md`}>
            <h2 className="text-lg font-bold">{popupMessage}</h2>
          </div>
        </div>
      )}

      
      <form onSubmit={handleSubmit}>
       
        <div className="border-spacing-1 my-2">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-md px-20 ml-2"
            placeholder="Email"
          />
        </div>

        {/* Password Field */}
        <div className="border-spacing-1 my-2">
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border p-3 rounded-md px-20 ml-2"
            placeholder="Password"
          />
        </div>

        {/* Submit Button */}
        <div className="border-spacing-1 my-2 flex justify-center">
          <button
            type="submit"
            className="p-3 rounded-md px-20 ml-2 bg-blue-300 text-white font-semibold"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
