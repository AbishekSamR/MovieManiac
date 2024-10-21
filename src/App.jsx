import "./app.css";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import Movielist from "./Components/MovieList/movielist";
import Navbar from "./Components/Navbar/navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Movielist type="popular" title="Popular" emoji={Fire} />
      <Movielist type="top_rated" title="Top Rated" emoji={Star} />
      <Movielist type="upcoming" title="Upcoming" emoji={Party} />
    </div>
  );
};

export default App;
