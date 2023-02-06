import "./Categories.scss";
const Categories = ({ filterItems, categories, addingClass }) => {
    return (
        <>
            <div className="buttons">
                {categories.map((category, index) => {
                    return (
                        <button
                            type="button"
                            key={index}
                            className="bio"
                            onClick={() => filterItems(category)}
                            // onClick={function (category) {
                            //     filterItems(category);
                            //     addingClass(category);
                            // }}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default Categories;
