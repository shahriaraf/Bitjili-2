import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-600">
      <div className="bg-gray-100 rounded-lg shadow-md w-80 md:w-96 p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="inline-block w-1 h-6 bg-gray-800 mr-2"></span>
          Sign Up
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input type="text" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200" />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200" />
          </div>

          <div>
            <label className="block text-sm font-medium">Language</label>
            <select className="w-full px-3 py-2 border rounded">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700">Sign Up</button>
        </form>

        <div className="flex justify-between items-center mt-4 text-sm">
          <a href="#" className="text-teal-600 font-semibold">Sign In!</a>
          <a href="#" className="text-gray-600">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
