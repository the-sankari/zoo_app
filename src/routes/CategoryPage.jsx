/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";

function CategoryPage({
  removeCard,
  removeLike,
  addLikes,

  ...rest
}) {
  const { category } = useParams();
  const categoryItems = rest[category];

  return (
    <>
      <h2 className="cat-name ">{category}</h2>

      <div className="card-container row gap-3">
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
