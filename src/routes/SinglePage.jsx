import { useParams } from "react-router-dom";

function SinglePage({ ...rest }) {
  const params = useParams();
  const categoryItem = rest[params.category];
  const data = categoryItem.find((el) => el.name === params.name);
  return (
    <div className="container singlePage">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://source.unsplash.com/400x400?${data.name}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"> {data.name} </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
