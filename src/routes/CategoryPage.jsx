/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";

function CategoryPage({
  removeCard,
  removeLike,
  addLikes,
  searchTerm,
  handleSearch,
  ...rest
}) {
  const { category } = useParams();
  const categoryItems = rest[category];

  const filteredItem = categoryItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2 className="cat-name ">{category}</h2>

      {/* Serach input */}
      <input
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={(e) => handleSearch(category, e)}
      />

      <div className="card-container row gap-3">
        {filteredItem.map((item) => {
          <Cards
            key={item.name}
            name={item.name}
            removeCard={() => removeCard(item.name, category)}
            removeLike={() => removeLike(item.name, category, "remove")}
            addLikes={() => addLikes(item.name, category, "add")}
            likes={item.likes}
          />;
        })}
      </div>
    </>
  );
}

export default CategoryPage;
