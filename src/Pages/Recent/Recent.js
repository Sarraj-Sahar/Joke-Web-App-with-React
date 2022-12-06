// import "./home.css"
import { Filters } from "../../Components/Filters";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/SideBar/SideBar";
import RecentList from "./RecentList";

export default function Recent() {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <RecentList />
        {/* <Rightbar/> */}
      </div>
    </>
  );
}
