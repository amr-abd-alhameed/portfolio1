import "../../sass/Categories.scss";const Categories = ({ filterItems, categories, addingClass }) => {
  return (
    <>
      <div className="buttons">
        <button className="bio" onClick={() => filterItems("all")}>
          all
        </button>
        <button className="bio" onClick={() => filterItems("js")}>
          js
        </button>
        <button className="bio" onClick={() => filterItems("react")}>
          react
        </button>
      </div>
    </>
  );
};

export default Categories;
