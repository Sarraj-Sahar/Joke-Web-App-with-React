// import "./home.css"
import TrendingList from "../Trending/TrendingList";
import { Filters } from "../../Components/Filters";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/SideBar/SideBar";
export default function Trending() {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />

        <TrendingList />

        {/* <Rightbar/> */}
      </div>
    </>
  );
}
