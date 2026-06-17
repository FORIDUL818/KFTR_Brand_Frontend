
// import Header from "../Header";
// import SideBar from "../SideBar";

// export default function DashboardLayout({ children }) {
//   return (
//     <div className="h-screen flex flex-col">
//       <Header/>

//       <div className="flex flex-1 overflow-hidden">
//         <SideBar/>
//         <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

import { Outlet } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";
import Footer from "../Footer";

export default function DashboardLayout() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <SideBar />

        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <Outlet /> {/* 🔥 THIS IS THE FIX */}
        </main>
      </div>
      <Footer/>
    </div>
  );
}