import "../sass/Projects.scss";import { useState } from "react";
import items from "./common/data";

import { Categories, HeadLine, Menu } from "./common";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Projects = () => {


  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category.includes(category));
    // const newItems = items.filter((item) => item.category === category);

    setMenuItems(newItems);
  };
  // const classA = (e) => (e.target.classList = "active");
  const addingClass = function (e) {
    const mo = e.target.parentElement
      .querySelectorAll(".active")
      .forEach((el) => {
        el.classList.remove("active");
      });
    setMenuItems(mo);
    // add active class on target
    const fo = e.target.classList.add("active");
    // setMenuItems(pppp);
    setMenuItems(fo);
  };

  return (
    <>
      <section className="Projects" id="projects">
        <div className="container">
          <HeadLine>recent projects</HeadLine>
          <Categories
            filterItems={filterItems}
            categories={categories}
            addingClass={addingClass}
          />
          <Menu items={menuItems} />
        </div>
      </section>
    </>
  );
};

export default Projects;
