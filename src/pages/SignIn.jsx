import React, { useState } from 'react';

function SignIn() {
  // Set up state for each input field and for the popup visibility
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const [showPopup, setShowPopup] = useState(false);  // State to control popup visibility

  //  Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //  Handle form submission and store data in localStorage
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission (page reload)
    
    // Store form data in localStorage
    localStorage.setItem('userData', JSON.stringify(formData)); // Save as string in localStorage

    console.log('User Data Saved:', formData); // Log the stored data

    //  Show the success popup
    setShowPopup(true);

    // Reset the form fields after submission
    setFormData({
      fullname: '',
      email: '',
      password: '',
    });

    // Optionally hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center bg-slate-400 gap-3 rounded-md">
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-green-500 text-white px-6 py-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold">Account Created Successfully!</h2>
            <p>Your account has been created. You can now log in.</p>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Full Name Field */}
        <div className="border-spacing-1 my-2">
          <label htmlFor="fullname" className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="border p-3 rounded-md px-20 ml-2"
            placeholder="Full Name"
          />
        </div>

        {/* Email Field */}
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
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
