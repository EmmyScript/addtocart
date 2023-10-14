import { useContext, useState } from "react";
import AppInput from "../components/AppInput";
import { ShopContext } from "../shop/ShopContext";
import { FieldValues, useForm } from "react-hook-form";

export interface Formdatas {
  email: string;
  password: string | number;
  onSubmit: any;
}

const Login = () => {
  const { handleLogin, loading, classStatus } = useContext(ShopContext);

  const [allValue, setAllValue] = useState({
    email: "",
    password: "",
  });
  const formdata = {
    email: allValue.email,
    password: allValue.password,
  };

  const {
    
    register,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = (data: FieldValues) => console.log(data);
  

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
          <div className="col-md-6 bg-success p-3">
            <h3 className="text-center">Login</h3>
            {loading && (
              <div
                className="spinner-row text-warning text-center"
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
              <input
                {...register("email", { required: true, minLength: 5 })}
                type={"text"}
                className="form-control"
                name={"email"}
                id={"email"}
              />
              <div className="mb-3">
                {errors.email?.type === "required" && (
                  <p className="text-danger">enter the required character</p>
                )}
                {errors.email?.type === "minLength" && (
                  <p>pls enter five character</p>
                )}
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
