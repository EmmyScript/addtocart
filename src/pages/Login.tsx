import { useContext, useState } from "react";
import AppInput from "../components/AppInput";
import { ShopContext } from "../shop/ShopContext";

const Login = () => {
  const { handleLogin, loading, classStatus } = useContext(ShopContext);

  const [allValue, setAllValue] = useState({
    email: "",
    password: "",
    fullname: "",
    phoneNumber: "",
  });
  const formdata = {
    email: allValue.email,
    password: allValue.password,
  };

  const handleSubmit = async (e: any) => {
    const url: string = "https://ecommerce-trading.onrender.com/api/auth/login";
    e.preventDefault();
    handleLogin(formdata, url);
  };

  const handleValues = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    const data = { ...allValue, [name]: value };
    setAllValue(data);
  };
  return (
    <div className="login">
      <div className="container text-white ">
    
         
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 bg-dark p-3">
            <h3 className="text-center">Login</h3>
            {loading && (
            <div
              className="spinner-grow text-warning text-center"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          )}
          {classStatus !== "" && (
    <div className={classStatus}>
      {classStatus.split("-").includes("success")
        ? "Saved success" 
        : "Not saved"}
    </div>
  )}
        
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <AppInput
                    type="text"
                    label="Email"
                    name="email"
                    value={allValue.email}
                    onChange={handleValues}
                  />
                </div>
                <div className="mb-3">
                  <AppInput
                    type="password"
                    label="Password"
                    name="password"
                    value={allValue.password}
                    onChange={handleValues}
                  />
                </div>
                <div className="col-md-6">
    <label className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required />
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
