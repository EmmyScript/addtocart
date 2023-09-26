import { ChangeEvent, useState } from "react";
import AppInput from "./AppInput";

export const ProductList = () => {
  const [prodVal, setProdVal] = useState<string>("")
  const [pricVal, setPricVal] = useState<string>("");
  const [prodImg, setProductImg] = useState<string>("")
  const[thumbNam, setThumbNam] = useState<string>("")
  const[categoVal, setCategoVal] = useState<string>("")
  const [qttyValue, setQttyValue] = useState<string>("")
  const[descripVal, setDescripVal] = useState<string>("")
  const[ratingVal, setRatingVal] = useState<string>("")
  const [sizeValue, setSizeValue] = useState<string>("")
  const [numReviews, setNunmReviews] = useState<string>("")
  const [allValue,setAllValue] = useState({
    productName: '',
    price: 0,
    
    productImage: "",
    thumbName_image:"",
    catergory:"",
    quantity: '',
    description: ""
   
  })

  const handleSizze =(e:any) => {
    setSizeValue(e.target.value)
  }
  const handleNumReViews=(e:any) => {
    setNunmReviews(e.target.value)
  }
  console.log(numReviews)

  const handleRating=(e:any) => {
    setRatingVal(e.target.value)
  }
console.log(ratingVal)

  const handlDescription=(e:any) =>{
    setDescripVal(e.target.value)
  }

  const handleQtty =(e:any) =>{
    setQttyValue(e.target.value)
  }
console.log(qttyValue)
  const handleCategory=(e:any) => {
    setCategoVal(e.target.value)
  }

  console.log(categoVal)
  
  const handleThumbName=(e:any) => {
    setThumbNam(e.target.value)
  }

  console.log(thumbNam)

  const handleProdImage =(e:any)=>{
    setProductImg(e.target.value)
  }

  console.log(prodImg)
  
  const handlePrice = (e:any) =>{
    setPricVal(e.target.value)
  }

  console.log(pricVal)
  
  
  
  const productVal = (e:any)=>{
    setProdVal(e.target.value)

  }

     

      const formdata ={
        productName:prodVal,
        price:pricVal,
        thumb:allValue.thumbName_image,

      }

      const handleSubmit = (e:any)=>{
        e.preventDefault()

        console.log(formdata)
      }

      const handleValues = (e:any)=>{

        const value = e.target.value
        const name = e.target.name
        const data = {...allValue,[name]:value}
        setAllValue(data)
      }

      console.log(allValue)

  return (
    <>
      <div className="productlist">
        <div className="container  text-black fs-5 p-2 mb-3">
          <h3 className="text-center mb-3 mt-2">Product Names</h3>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                  <AppInput
                type="text"
                label="ProductName"
                name="productName"
                value={allValue.productName}
                onChange={handleValues}        
                />
                  </div>
                  <div className="col-md-6">
                    <AppInput
                    type="text"
                    label="Price"
                    name="number"
                    value={allValue.price}
                    onChange={handleValues}
                    />
                  </div>
                <div className="col-md-6">
                  <AppInput 
                  type="text"
                  label="ProductImage"
                  name="productImage"
                  value={allValue.productImage}
                onChange={handleValues}     
                  />
                </div>

                <div className="col-md-6">
                <AppInput 
                type="text"
                label="ThumbName_image"
                name="thumbName_image"
                value={allValue.thumbName_image}
                onChange={handleValues}     
                />
                </div>
                <div className="col-md-6">
                <AppInput 
                type="text"
                label="Catergory"
                name="catergory"
                value={allValue.catergory}
                onChange={handleValues}     
                />
                </div>

                <div className="col-md-6">
                  <AppInput
                  type="text"
                  label="Quantity"
                  name="quantity"
                  value={allValue.quantity}
                onChange={handleValues}     
                  />
                </div>
                <div className="col-md-6">
                  <AppInput
                  type="text"
                  label="Description"
                  name="description"
                  value={allValue.description}
                  onChange={handleValues}     
                  />
                </div>
                <div className="col-md-6">
                  <AppInput
                  type="number"
                  label="Rating"
                  name="rating"
                  value={ratingVal}
                  onChange={(e:any) => handleRating(e)}
                  />
                </div>
                <div className="col-md-6">
                  <AppInput
                  type="text"
                  label="NumReviews"
                  name="numReviews"
                  value={numReviews}
                  onChange={(e:any) => handleNumReViews(e)}
                  />
                </div>
                <div  className="col-md-6">
                <AppInput
                type="text"
                label="Size"
                name="size"
                value={sizeValue}
                onChange={(e:any) => handleSizze(e)}
                />
                </div>
                <button type="submit"  className="btn btn-primary">
                  Submit
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;

