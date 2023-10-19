import { useContext } from "react";
import AppInput from "../components/AppInput";
import { ShopContext } from "../shop/ShopContext";
import { useForm, FormProvider } from "react-hook-form";

export interface Formdatas {
  email: string;
  password: string | number;
  onSubmit: any;
}

const Login = () => {
  const { handleLogin, loading, classStatus } = useContext(ShopContext);

  const methods = useForm();

  const formActualData = (data: any) => {

    console.log(data)

        const url: string = "https://ecommerce-trading.onrender.com/api/auth/login";
     handleLogin(data, url);
     

  }

  

  return (
    <div className="login">
      <div className="container text-white ">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 bg-dark p-3">
            <h3 className="text-center">Login</h3>
            {loading && (
              <div
                className="spinner-row text-warning text-center"
                role="status"
              >
                <span className="sr-only">Loading...</span>
                
              </div>
            )}
            
            {/* {classStatus !== "" && (
              <div className={classStatus}>
                {classStatus.split("-").includes("success")
                  ? "Saved success"
                  : "Not saved"}
              </div>
            )} */}

            
            <FormProvider {...methods}>
              <form onSubmit= {methods.handleSubmit(formActualData) } >
                <div className="mb-3">
                  <AppInput
                    type={"email"}
                    name="email"
                    // id="email"
                    label="Email"
                    required={true}
                    
                  />
                </div>
                <div className="mb-3">
                  <AppInput
                    type="password"
                    label="Password"
                    name="password"
                    required={true}
                    minLength={5}
                  />
                </div>

                <div className="mb-3">
                  <button type="submit" name="myButton" className="btn btn-primary'"
                 >
                    Submit
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
