import { Link } from "react-router-dom";

function Signup() {
  
  // function to send the data to backend
  function register(event, formData) {
    event.preventDefault();
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    
    // sending the data
    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

    return;
  }

  return (
    <>
      <div className="main w-[100vw] v-[100vh] overflow-hidden">
        <div className="heading absolute top-0 left-0 p-4 text-[35px] font-bold text-white text-shadow-md">
          <Link to="/">FriendZoned</Link>
        </div>

        <div className="picture absolute -z-10">
          <img
            src="/assets/waves.svg"
            alt="Something"
            className="w-screen h-screen object-cover"
          />
        </div>

        <div className="content w-[90%] md:w-[35%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <form action={register} class="w-full p-8 bg-white rounded-lg">
            <h2 class="text-slate-800 text-2xl font-bold title-font mb-5">
              Signup
            </h2>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-400 focus:border-indigo-300 text-base outline-none text-slate-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-400 focus:border-indigo-300 text-base outline-none text-slate-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-400 focus:border-indigo-300 text-base outline-none text-slate-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              class="text-white bg-indigo-500 border-0 w-full mt-4 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
