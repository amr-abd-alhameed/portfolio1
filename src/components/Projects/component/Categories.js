import "./Categories.scss";const Categories = ({ filterItems, categories, addingClass }) => {
  return (
    <>
      <div className="buttons">
        {/* {categories.map((category, index) => {
          return (
            <button
              type="button"
              key={index}
              className="bio"
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })} */}
        <button className="bio" onClick={() => filterItems("all")}>
          all
        </button>
        <button className="bio" onClick={() => filterItems("js")}>
          js
        </button>
        <button className="bio" onClick={() => filterItems("react")}>
          react
        </button>
        {/* <button className="bio" onClick={() => filterItems("js react")}>
          top quality
        </button> */}
      </div>
    </>
  );
};

export default Categories;
