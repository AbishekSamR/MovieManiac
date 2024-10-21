import "./navbar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>
      <div className="navbar_links">
        <a href="#popular" className="">
          Popular <img src={Fire} alt="Fire_emoji" className="navbar_emoji" />
        </a>
        <a href="#top_rated" className="">
          Top Rated <img src={Star} alt="Star_emoji" className="navbar_emoji" />
        </a>
        <a href="#upcoming" className="">
          Upcoming
          <img src={Party} alt="Party_emoji" className="navbar_emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
