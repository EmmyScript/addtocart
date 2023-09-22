import { ShopContext } from "./ShopContext";
import { useContext } from "react";

const CATEGORY = [
  {
    id: 1,
    classob: "easy",
  },
  {
    id: 2,
    classob: "bags",
  },
  
];
export const Category = () => {
  const { handleCategorys, category, } = useContext(ShopContext);
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Category:
        </button>
        <ul className="dropdown-menu">
          <li onClick={() => handleCategorys("")}> all</li>
          {CATEGORY.map((categorys) => (
            <li
              key={categorys.id}
              onClick={() => handleCategorys(categorys.classob)}
             style={{backgroundColor: category == categorys.classob ? "red" : ""}}>{categorys.classob}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Category;
