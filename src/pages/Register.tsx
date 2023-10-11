import { useContext, useState } from "react"
import AppInput from "../components/AppInput"
import { ShopContext } from "../shop/ShopContext"


const Register = () => {

  const {handleRegiister, classStatus} = useContext(ShopContext);
  const [allValue, setAllValue] = useState({
    email: "",
    password: "",
    isAdmin: "",
    fullname: "",
    phoneNumber: "",

  });
  const formdata = {
    email: allValue.email,
    password: allValue.password,
    isAdmin : allValue.isAdmin,
    fullname: allValue.fullname,
    phoneNumber: allValue.phoneNumber,
  };

  const handleSubmit = async (e: any) => {

    const url:string =  "http://localhost:4000/api/auth/register"
    e.preventDefault();
    handleRegiister(formdata,url)
  };

  const handleValues = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    const data = { ...allValue, [name]: value };
    setAllValue(data);
  };
  return (
    <div className="register">
        
   

        <div className="container col-xs-1 bg-dark text-white p-4 mt-4">
        <h3 className="text-center mb-3 mt-2"> Admin Register</h3>

        {classStatus &&
                <div className="spinner-grow text-warning text-center" role="status">
                <span className="sr-only">Loading...</span>
              </div>
          }
          {classStatus !== "" && (
            <div className={classStatus}>
              {classStatus.split("-").includes("success")
                ? "Saved success"
                : "Not saved"}
            </div>
          )}
        <div className="row">

            <div className="col-md-2"></div>
            <form onSubmit={handleSubmit}>
            <div className="col-md-8">
        
            <div className=" col-md-6 mb-3">
    <AppInput 
    type="email"
    label="Email"
     name="email"
      value={allValue.email}
      onChange={handleValues}
      />
     </div>
     <div className=" col-md-6 mb-3">
    <AppInput 
    type="number"
    label="Password"
     name="password"
      value={allValue.password}
      onChange={handleValues}
      />
     </div>
     <div className=" col-md-6 mb-3">
    <AppInput 
    type="text"
    label="IsAdmin"
     name="isAdmin"
      value={allValue.isAdmin}
      onChange={handleValues}
      />
     </div>
     <div className=" col-md-6 mb-3">
    <AppInput 
    type="text"
    label="Fullname"
     name="fullname"
      value={allValue.fullname}
      onChange={handleValues}
      />
     </div>

     <div className=" col-md-6 mb-3">
    <AppInput 
    type="number"
    label="PhoneNumber"
     name="phoneNumber"
      value={allValue.phoneNumber}
      onChange={handleValues}
      />
     </div>
  

  <button type="submit" className="btn btn-primary">Submit</button>
 


            </div>
            </form>
            
        </div>
        
</div>

        </div>
  )
}

export default Register


