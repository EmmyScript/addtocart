
import { createContext, useState } from "react";

export interface cartObj {
id:number
price:number
productImage:string
productName:string
qtty:number
size: string
classob: string
searchText:string

searching:string
}
export const ShopContext = createContext<any>(!null);

export const ShopContextProvider = ({children}:{children:React.ReactNode}) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [sizes,  setSizes]  =useState <string>(""); 
  const[category, setCategory] = useState <string>("");
  const [search, setSearch] = useState<string>("");
  
  

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item of cartItems) {
      totalAmount += item?.price;
    }
    return totalAmount;
  };

  
  
  const isItemInCart = (itemId: number) => {

    return cartItems.some((val:cartObj)=>val.id === itemId);
  };

  const addToCart = (item: cartObj) => {
    console.log(item);

    if (isItemInCart(item.id)) {

     const result =  cartItems.map((val:cartObj)=>{
    
        if(val.id === item.id ){
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

    if (isItemInCart(item.id)) {

     const result =  cartItems.map((val:cartObj)=>{
    
        if(val.id === item.id && item.qtty > 1){
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

    const result =  cartItems.filter((val:cartObj)=>val.id !== item.id)
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
    handleCategorys,
    category,
    handleSearch,
    search
     
  };

 
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

