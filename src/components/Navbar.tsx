import { Link } from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa'
import { ShopContext } from "../shop/ShopContext";
import {useContext} from "react"
import SearchInput from "./SearchInput";



const Navbar = () => {
  const {cartItems, search} = useContext (ShopContext);
  return (

   <>
   <div className="navbar">
   
    <div className="links">
      <Link to = "/">Shops</Link>
    
      <Link to = "/productlist">AddProduct</Link>
      <Link to = "/updateproduct">Update</Link>
      <Link to ="cart" >

< FaShoppingCart size = {40}/>
<span>{cartItems?.length}</span>
</Link>
    </div>
    
    
    <SearchInput search={search} />
   </div>
   
  
   </>
  );
};

export default Navbar;

//let names = ['globall', 'hook', 'emmy',];
//console.log(names.sort())

//const  arry = [1, 2, 3, 4, 5, 6, 7, 100];
 //const found = arry.find((element)=> element > 3)
// console.log(found)
 
const arry1 = [12, 23, 13 , 50, 27, 30];
const isLargeNuber = ((element: number) => element > 27);
console.log(arry1.findIndex(isLargeNuber));


//include method return true / false 
//every() return all element in the arry pass de test // true || false
// some()

//const age =[ 20, 23, 40, 33,]
//age.some(checkAdult),
//function checkAdult(age) {
  //return age > 32
//}

const fruits = ['orange', 'mango', 'apple', 'orange']
fruits.fill('cassava') 
//console.log(fruits)
// output ['cassava' all]

const fruit = ['orange', 'mango', 'apple', 'orange']
fruit.fill('cassava', 1, 4)
console.log(fruit)






