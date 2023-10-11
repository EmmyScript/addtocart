import { useContext } from "react";
import { MdOutlineSnowshoeing } from "react-icons/md";
import { ShopContext } from "../shop/ShopContext";

const SearchInput = (props: any) => {
  const { handleSearch } = useContext(ShopContext);
  
  return (
    
    <div className="container ">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand wt-5" href="#">
          <span>
            <MdOutlineSnowshoeing />
          </span>
          emmy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    countact us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    08105791308
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    idoko@gmail.com
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              onChange={(e: any) => handleSearch(e.target.value)}
              value={props.search}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
    </div>


  );
};

export default SearchInput;
