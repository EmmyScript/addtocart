
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export interface cartObj {
_id:string
price:number
productImage:string
productName:string
qtty:number
size: string
classob: string
category:string
select: string

searching:string
}
export const ShopContext = createContext<any>(!null);

export const ShopContextProvider = ({children}:{children:React.ReactNode}) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [sizes,  setSizes]  =useState <string>(""); 
  const[category, setCategory] = useState <string>("");
  const [search, setSearch] = useState<string>("");
  const[prodCategory, setProdCategory]= useState<string>("")
  const[selectitems, setSelectItems] = useState<string>("")
  const [allProduct, setAllProduct] = useState([])
  const[productObj,setProductObj] = useState({})

  
  

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item of cartItems) {
      totalAmount += item?.price;
    }
    return totalAmount;
  };

  
  
  const isItemInCart = (itemId: string) => {

    return cartItems.some((val:cartObj)=>val._id === itemId);
  };

  const addToCart = (item: cartObj) => {
    console.log(item);

    if (isItemInCart(item._id)) {

     const result =  cartItems.map((val:cartObj)=>{
    
        if(val._id === item._id ){
          return{
            ...val,
            qtty:val.qtty+1
          }
        }else{
          return val
        }
      })

      

     return setCartItems(result)
    } else {
    return  setCartItems([...cartItems,{...item,qtty:item.qtty = 1}]);
    }
  };


  const reduceFromCart = (item: cartObj) => {
    console.log(item);

    if (isItemInCart(item._id)) {

     const result =  cartItems.map((val:cartObj)=>{
    
        if(val._id === item._id && item.qtty > 1){
          return{
            ...val,
            qtty:val.qtty-1
          }
        }else{
          return val
        }
      })

     return setCartItems(result)
    } else {
    return  setCartItems([...cartItems,{...item,qtty:item.qtty = 1}]);
    }
  };

  
  const removeFromCart = (item: any) => {
    // alert(JSON.stringify(item, null,1))

    const result =  cartItems.filter((val:cartObj)=>val._id !== item.id)
   return setCartItems(result);
  };

  const updateCartItemCount = (newAmount: any, itemId: any) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const handleSize = (size: string) =>{
    setSizes(size)
  };
  const handleCategorys = (classob:string) =>{
    setCategory(classob)
  };
  const handleSearch = (productName:string) =>{
    setSearch(productName);
  }
const handleCategory =(category: string) =>{
  setProdCategory(category)
  console.log(category)
}

const handleSelect =(select: string) =>{
  setSelectItems(select)
}

const fetchData =  async ()=>{
  const result:any =  await axios.get("https://ecommerce-trading.onrender.com/api/products")
  setAllProduct(result?.data.data)
}
useEffect(()=>{
   fetchData()

},[])


const handleClick = (valObj:any)=>{
  setProductObj(valObj)
}
  
    
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    setCartItems,
    reduceFromCart,
    handleSize,
    sizes,
    handleClick,
    productObj,
    handleCategorys,
    category,
    handleSearch,
    search,
    handleCategory,
    prodCategory,
    handleSelect,
    allProduct,
    selectitems,
    
    
     
  };

 
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

