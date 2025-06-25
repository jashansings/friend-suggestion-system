import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/FriendList";
import FriendList from "../components/FriendList";

function Home() {
  const name = "Mradul";
  const noOfFriends = 10;
  const recentAct = ["Added a friend", "Removed a friend"];
  // const [isToggled, setIsToggled] = useState(false);

  // const toggleList = () => {
  //   setIsToggled(prev => !prev);
  // };
  

  return (
    <>

      {/* {istoggled && <FriendList />} */}

      <div className="bg absolute -z-10">
        <img
          src="/assets/bg.svg"
          className="w-screen h-screen object-cover"
          alt=""
        />
      </div>

      <div className="navbar flex justify-between items-center">
        <Link
          to="/"
          className="text-[25px] md:text-[35px] text-white text-shadow-md px-6 py-4"
        >
          FriendZoned
        </Link>
        <div className="links hidden md:flex gap-6 text-white py-4 px-6 text-lg">
          <Link to="/suggestions">Suggestions</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/logout">Logout</Link>
        </div>
        <div className="hamburger md:hidden text-white py-4 px-6 text-2xl cursor-pointer">
          <Link>
            <RxHamburgerMenu />
          </Link>
        </div>
      </div>

      <div className="main flex md:flex-row flex-col p-8 box-border bg-white bg-opacity-40 rounded-md md:h-[40vh] h-[70vh] justify-between md:w-[50vw] w-[90vw] absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]">
        <div className="md:w-[60%] w-full left h-[60%] md:h-full flex flex-col justify-between">
          <div>
            <span className="md:text-[35px] text-[25px] text-white text-shadow-md">
              Welcome, {name}
            </span>
            <br />
            <span className="text-white text-shadow-md md:w-[100vw] h-[100vh] md:text-xl text-lg">
              Let's expand your network.
            </span>
          </div>

          <div className="flex md:flex-row flex-col mt-4">
            <div className="friendcount md:w-[40%] w-full bg-black bg-opacity-50 text-white shadow-md rounded-md p-4 text-xl">
              <p>{noOfFriends}</p>
              <p>Friends</p>
            </div>

            <div className="links flex flex-col my-4 md:my-0 md:mx-8 items-center justify-center">
              <Link
                to="/friends"
                className="text-lg bg-blue-700 text-white rounded-md px-4 py-2 mb-1 w-full"
              >
                Manage Friends
              </Link>
              <Link
                to="/suggestions"
                className="text-lg bg-blue-700 text-white rounded-md px-4 py-2 mt-1 w-full"
              >
                See suggestions
              </Link>
            </div>
          </div>
        </div>

        <div className="right md:w-[40%] w-full mobile:h-[30%] md:border-l-[1px] md:border-black md:border-opacity-30">
          <p className="text-white text-[20px] w-full text-center pb-2 text-shadow-md">
            Recent Activities
          </p>
          <ul className="px-8 h-[150px] md:h-[200px] overflow-auto">
            {recentAct.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
