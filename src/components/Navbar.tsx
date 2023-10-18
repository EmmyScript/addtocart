import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { ShopContext } from "../shop/ShopContext";
import { useContext, useEffect, useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
//import SearchInput from "./SearchInput";


function Navbar()  {
  const { cartItems, search } = useContext(ShopContext);
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    const usersD:any = window.localStorage.getItem("user_data");
    setUserData(JSON.parse(usersD));
    // const decoded = jwt_decode(JSON.parse(usersD?.token))
    // console.log(decoded)
  }, []);

  console.log(userData)

  const handleLogout = ()=>{
    window.localStorage.removeItem("user_data")
    window.location.href = "/login"
  }
  return (
    <>
      <div className="container-fliud ">
      <nav className="navbar navbar-expand-md bg-body-tertiary">
      
          
            <div className="nav">
            {!userData ? 
            <>
            <li className="nav-item d-inline-none">
                <Link to="/admindashboard" className="nav-link"><span><BiSolidDashboard size={17}/></span>
                   Dashboard
                </Link>
              </li>
              <li className="nav-item d-inline-none">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              </>
              :
              <li className="nav-item" onClick={handleLogout}>
              <Link to="!#" className="nav-link">
                Logout
              </Link>
            </li>
              }
            </div>
            <form className="d-flex d-lg-none" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    {userData && userData?.user.fullname}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Shops
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="cart" className="nav-link">
                    <FaShoppingCart size={25} />
                    <span>{cartItems?.length}</span>
                  </Link>
                </li>
              </ul>
              <form className="d-flex d-none" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          
        </nav>
        
      </div>
      
      {/* <SearchInput search={search} /> */}

      
    </>
  );
};

export default Navbar;

//let names = ['globall', 'hook', 'emmy',];
//console.log(names.sort())

//const  arry = [1, 2, 3, 4, 5, 6, 7, 100];
//const found = arry.find((element)=> element > 3)
// console.log(found)

//const arry1 = [12, 23, 13 , 50, 27, 30];
//const isLargeNuber = ((element: number) => element > 27);
//console.log(arry1.findIndex(isLargeNuber));

//include method return true / false
//every() return all element in the arry pass de test // true || false
// some()

//const age =[ 20, 23, 40, 33,]
//age.some(checkAdult),
//function checkAdult(age) {
//return age > 32
//}

//const fruits = ['orange', 'mango', 'apple', 'orange']
//fruits.fill('cassava')
//console.log(fruits)
// output ['cassava' all]

//const fruit = ['orange', 'mango', 'apple', 'orange']
//fruit.fill('cassava', 1, 4)
//console.log(fruit)
