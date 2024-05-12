/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";

function CategoryPage({
  removeCard,
  removeLike,
  addLikes,
  searchTerm,
  handleSerach,
  ...rest
}) {
  const { category } = useParams();
  const categoryItems = rest[category];

  return (
    <>
      <h2 className="cat-name ">{category}</h2>
      <input
        type="search"
        name="searc"
        value={searchTerm}
        onChange={(e)=>handleSerach(category,e)}
        id=""
        placeholder="search ..."
      />
      <div className="card-container">
        {categoryItems.map((item) => {
          return (
            <Cards
              key={item.name}
              name={item.name}
              removeCard={() => removeCard(item.name, category)}
              removeLike={() => removeLike(item.name, category, "remove")}
              addLikes={() => addLikes(item.name, category, "add")}
              likes={item.likes}
            />
          );
        })}
      </div>
    </>
  );
}

export default CategoryPage;
