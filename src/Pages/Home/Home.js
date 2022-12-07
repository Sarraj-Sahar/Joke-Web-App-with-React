import "./Home.css";
import TrendingList from "../Trending/TrendingList";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/SideBar/SideBar";
import Share from "../../Components/sharePost/Share";
export default function Home() {
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
