// import React, { useState } from "react";

// export default function Landing() {
//   const [open, setOpen] = useState(false);
//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   let setName = (e) => {
//     setName(e.target.value);
//   }

//   let setEmail = (e) => {
//     setEmail(e.target.value);
//   }

//   let setPassword = (e) => {
//     setPassword(e.target.value);
//   }


//   let registerSubmit = (e) => {
//     e.preventDefault();

//         if (!isLogin) {
//             // Handle registration logic here
//             console.log("Registering user...");
//         } else {
//             // Handle login logic here
//             console.log("Logging in user...");
//         }

//         if (!isLogin) {
//             console.log("Name:", name);
//         }
//         console.log("Email:", email);
//         console.log("Password:", password);
  
//          // Reset form fields
//         setName("");
//         setEmail("");
//         setPassword("");
         


//   }

//   return (
//     <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

//       {/* HEADER */}
//       <header className="w-full flex items-center justify-between px-8 py-5">

//         {/* LEFT: LOGO */}
//         <div className="text-2xl font-bold tracking-wide">
//           Kftr<span className="text-blue-500">Store</span>
//         </div>

//         {/* RIGHT: BUTTON */}
//         <button
//           onClick={() => setOpen(true)}
//           className="px-5 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-semibold shadow-md"
//         >
//           Get Started
//         </button>
//       </header>

//       {/* HERO */}
//       <div className="h-[calc(100vh-80px)] flex items-center justify-center text-center px-4">
//         <div className="max-w-2xl">
//           <h1 className="text-5xl font-bold mb-4 leading-tight">
//             Build Your Online Store <br /> Like a Pro
//           </h1>

//           <p className="text-gray-300 mb-8 text-lg">
//             Start selling smarter with a fast, modern e-commerce platform.
//             Simple. Powerful. Scalable.
//           </p>
//         </div>
//       </div>

//       {/* MODAL */}
//       {open && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
//           <div className="bg-gray-900 w-full max-w-md p-6 rounded-2xl shadow-2xl relative">

//             {/* CLOSE */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-3 right-3 text-gray-400 hover:text-white"
//             >
//               ✕
//             </button>

//             {/* TITLE */}
//             <h2 className="text-2xl font-bold mb-6 text-center">
//               {isLogin ? "Login to your account" : "Create an account"}
//             </h2>

//             {/* FORM */}
//             <form  onSubmit={registerSubmit} className="space-y-4">
//               {!isLogin && (
//                 <input onChange={setName}
//                   type="text"
//                   placeholder="Full Name"
//                   className="w-full p-3 rounded-lg bg-gray-800 outline-none"
//                 />
//               )}

//               <input
//               onChange={setEmail}
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-3 rounded-lg bg-gray-800 outline-none"
//               />

//               <input
//                 onChange={setPassword}
//                 type="password"
//                 placeholder="Password"
//                 className="w-full p-3 rounded-lg bg-gray-800 outline-none"
//               />

//               <button
//                 type="button"
//                 onClick={() => {
//                   if (!isLogin) {
//                     setIsLogin(true);
//                   } else {
//                     setOpen(false);
//                   }
//                 }}
//                 className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
//               >
//                 {isLogin ? "Login" : "Register"}
//               </button>
//             </form>

//             {/* SWITCH */}
//             <p className="text-center text-gray-400 mt-5 text-sm">
//               {isLogin ? "New here?" : "Already have an account?"}{" "}
//               <button
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="text-blue-400 hover:underline"
//               >
//                 {isLogin ? "Create account" : "Login"}
//               </button>
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerSubmit = (e) => {
    e.preventDefault();

    // 🔥 SIMPLE VALIDATION
    if (!email || !password || (!isLogin && !name)) {
      alert("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // 🔥 FAKE AUTH LOGIC (replace with backend later)
    if (isLogin) {
      console.log("Logging in:", { email, password });
      alert("Login success");
    } else {
      console.log("Registering:", { name, email, password });
      alert("Registration success → redirecting to login...");
      setIsLogin(true);
      return;
    }

    // ✅ SUCCESS → GO HOME PAGE
    setOpen(false);
    navigate("/home");

    // reset
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

      {/* HEADER */}
      <header className="w-full flex items-center justify-between px-8 py-5">
        <div className="text-2xl font-bold tracking-wide">
          Kftr<span className="text-blue-500">Store</span>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
        >
          Get Started
        </button>
      </header>

      {/* HERO */}
      <div className="h-[calc(100vh-80px)] flex items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">
            Build Your Online Store Like a Pro
          </h1>
          <p className="text-gray-300 text-lg">
            Fast, modern e-commerce platform.
          </p>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-gray-900 w-full max-w-md p-6 rounded-2xl relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center mb-5">
              {isLogin ? "Login" : "Register"}
            </h2>

            <form onSubmit={registerSubmit} className="space-y-4">

              {!isLogin && (
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 bg-gray-800 rounded-lg outline-none"
                />
              )}

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-800 rounded-lg outline-none"
              />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full p-3 bg-gray-800 rounded-lg outline-none"
              />

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </form>

            <p className="text-center text-gray-400 mt-4 text-sm">
              {isLogin ? "New here?" : "Already have account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-400"
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </p>

          </div>
        </div>
      )}
    </div>
  );
}