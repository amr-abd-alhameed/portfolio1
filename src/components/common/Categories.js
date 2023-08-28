import { Link, NavLink } from "react-router-dom";import "../../sass/Categories.scss";
const Categories = ({ filterItems, categories, addingClass }) => {
  return (
    <>
      <div className="buttons text-capitalize">
        <button className="bio" onClick={() => filterItems("all")}>
          all
        </button>
        <button className="bio" onClick={() => filterItems("js")}>
          js
        </button>
        <button className="bio" onClick={() => filterItems("react")}>
          react
        </button>
        <button className="bio" onClick={() => filterItems("next")}>
          Next
        </button>
      </div>
    </>
  );
};

export default Categories;
