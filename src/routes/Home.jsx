import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="home-thumb">
          <Link to="/animals">
            <img
              src={`https://source.unsplash.com/400x400?animals`}
              className="img-fluid"
              alt="..."
            />
            <p>Animals</p>
          </Link>
        </div>
        <div className="home-thumb">
          <Link to="/birds">
            {" "}
            <img
              src={`https://source.unsplash.com/400x400?birds`}
              className="img-fluid"
              alt="..."
            />
            <p>Birds</p>
          </Link>
        </div>
        <div className="home-thumb">
          <Link to="/insects">
            <img
              src={`https://source.unsplash.com/400x400?insects`}
              className="img-fluid"
              alt="..."
            />
            <p>Insects</p>
          </Link>
        </div>
        <div className="home-thumb">
          <Link to="/fishes">
            <img
              src={`https://source.unsplash.com/400x400?fishes`}
              className="img-fluid"
              alt="..."
            />
            <p>Fishes</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
