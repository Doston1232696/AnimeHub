import Navbar from "../Sections/Navbar";
import "./Watchlist.css"
import Clock from "../../assets/images/clock.png"

const Watchlist = () => {
  return (
    <>
      <Navbar />
      <h1 style={{ marginTop: 100, color: "white" }}>Watchlist</h1>
      <h2 style={{ color: "white" }}>
       Hozircha Mavjud Emas
      </h2>
      <div className="emoji">
    <iframe src="https://lottie.host/embed/b8e3bcc5-fe06-49da-8a33-3a8b2902a26a/ul2c78ukZw.json"></iframe>
      </div>
      
    </>
  );
};
export default Watchlist;
