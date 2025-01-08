import React, { useState } from 'react';
import Scrollbar from './Scrollbar';
import Login from './Login';
import SignIn from './SignIn';

function Home() {
  const [login, setLogin] = useState(false);

  return (
    <div className="w-full m-auto">

      <Scrollbar />

   
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row px-5 py-10 md:px-10 bg-blue-300 w-full">
        
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              We solve digital <br /> problems with an <br /> outstanding creative space
            </h1>
            <p className="text-white mt-4 sm:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur, dolor laborum iste ad,
              ratione velit aut vitae blanditiis ipsam maxime hic odit praesentium magni, similique ex repellendus
              dolorem quo!
            </p>
          </div>

          
          <div className="w-full md:w-1/2 bg-slate-400p-5 md:p-10 rounded-lg">
            <div className="flex justify-between items-center mb-5">
           
              <button
                className="bg-gray-200 px-10 py-3 rounded-sm font-semibold"
                onClick={() => setLogin(true)}
              >
                Login
              </button>
              {/* SignIn Button */}
              <button
                className="bg-gray-200 px-10 py-3 rounded-sm font-semibold"
                onClick={() => setLogin(false)}
              >
                Sign In
              </button>
            </div>

            <div className="rounded-lg">
              {login ? <Login /> : <SignIn />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
