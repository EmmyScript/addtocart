
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
login: string
register: string
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
  const[productObj, ] = useState({})

  const [classStatus, setClassStatus] = useState("")
  const [loading,setLoading] = useState(false)


  
  

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

      /*
      const addtocart = (items:cartOBJ)=>{
        console.log(items)
        if(isitemsincart(item._id)){
          const result = cartitems.map(val:cartObj) ={}
            if(val._id === item._id){
              return{
                ...val,qtty: val.qtty +1
              }
            }else {
              return val
            }
          })
          return cartitem(reuslt)
          
        }else {
         return  setcartitems([...cartitem,qtty{...val,qtty : items.qtty}])  
        }

      }

      */
      

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

    const result =  cartItems.filter((val:cartObj)=>val._id !== item._id)
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
  setLoading(true)
  const result:any =  await axios.get("https://ecommerce-trading.onrender.com/api/products")

  if(!result){
    setLoading(false)
  }
  setAllProduct(result?.data.data)
  setLoading(false)
}
useEffect(()=>{
   fetchData()

},[])


//const handleClick = (valObj:any)=>{
  //setProductObj(valObj)
//}

const handleDelete = async (url:string,id:any) =>{
  if(id && window.confirm("Are sure you want to delete this item ?")){
 const res = await   axios({
      method:"delete",
      url:`${url}/${id}`,
      headers:{
        "Content-Type":"application/json",
        authorization:"sefdkfjdf"
      }
    })
    fetchData()
    console.log(res)
  }

}
 
const handleCreateProduct = async (data:any, url:string) => {
  
  try {
    const result = await axios({
      url: url,
      method: "post", 
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: "secret-pin",
      },
    });

    if (!result) {
      setClassStatus("alert alert-danger");
    }
    setClassStatus("alert alert-success");
  } catch (err) {
    setClassStatus("alert alert-danger");
  }
};






const handleLogin = async (data:any, url:string) => {
  setLoading(true)
  try {
    const result = await axios({
      url: url,
      method: "post", 
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: "secret-pin pls",
      },
    });

    if (!result) {
      setLoading(false)
      setClassStatus("alert alert-danger");
    }
    setClassStatus("alert alert-success");

    console.log(result)
    window.localStorage.setItem("user_data",JSON.stringify(result.data))
    
    window.location.href = "/"
  } catch (err :any) {
    setClassStatus("alert alert-danger");
    console.log(err.response.data.error)           
  }     
  setLoading(false)

  {classStatus !== "" && (
    <div className={classStatus}>
      {classStatus.split("-").includes("success")
        ? "Saved success"
        : " "}
    </div>
  )}
};


const handleRegiister= async (data:any, url:string) => {
  setLoading(true)

  try {
    const result = await axios({
      url: url,
      method: "post", 
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: "secret-pin pls",
      },
    });

    if (!result) {
      setLoading(false)
      setClassStatus("alert alert-danger");
    }
    console.log(result)
    setClassStatus("alert alert-success");
  } catch (err: any) {
    setClassStatus("alert alert-danger");
    console.log(err.response.data.error)
    
  }
  setLoading(false)

  
  {classStatus !== "" && (
    <div className={classStatus}>
      {classStatus.split("-").includes("success")
        ? "Saved success"
        : "not save"}
    </div>
  )}
};

const handleUpdateProduct = async (data: any) => {
  
  try {
    const result = await axios({
      url: `https://ecommerce-trading.onrender.com/api/products/update/`,
      method: "put",
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: "secret-pin",
      },
    });
      
    

    if (!result) {
      setClassStatus("alert alert-danger");
      console.log("No product info saved");
    }
    console.log("Data saved");
    setClassStatus("alert alert-success");
  } 
  catch (err) {
    console.log("No product info saved");
    setClassStatus("alert alert-danger");
  }
};


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
    handleDelete,
    handleCreateProduct,
    classStatus,
    loading,
    handleLogin,
    handleRegiister,
    handleUpdateProduct,
    

    
    
    
     
  };

 
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

