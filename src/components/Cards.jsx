/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function Cards({ name, likes, addLikes, removeLike, removeCard }) {
  return (
    <div className="card  card-box col-4">
      <button
        type="button"
        onClick={removeCard}
        className="btn-close"
        aria-label="Close"
      ></button>
      <img
        src={`https://source.unsplash.com/400x400?${name}`}
        alt="..."
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <div className="card-header text-center text-body-secondary">
        <div className="d-flex justify-content-between">
          <span onClick={addLikes} className="material-symbols-outlined">
            heart_plus
          </span>
          <div className="d-flex justify-content-center">
            <small>{likes} </small>
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <span onClick={removeLike} className="material-symbols-outlined">
            heart_minus
          </span>
        </div>
      </div>
      <div className="card-footer text-center text-body-secondary">
        <Link className="btn btn-dark" to={name}>
          See more
        </Link>
      </div>
    </div>
  );
}

export default Cards;
