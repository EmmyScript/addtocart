import { useContext} from "react";
import AppInput from "../components/AppInput";
import { ShopContext } from "../shop/ShopContext";
import { FormProvider, useForm } from "react-hook-form";

export interface Formdatas {
  email: string;
  password: string | number;
  onSubmit: any;
}
const Register = () => {
  const { handleRegiister, loading, classStatus } = useContext(ShopContext);
  const methods = useForm();
  
  const formActualData =(data: any) => {
    const url: string = "https://ecommerce-trading.onrender.com/api/auth/register";
  
  handleRegiister(data, url);

  }

  return (
    <div className="register">
      <div className="container  text-white">

        
        
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 bg-dark p-4">
            <h2 className=" text-center ">Register Users</h2>
            {loading && (
          <div className="spinner-grow text-warning text-center" role="status">
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
        
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(formActualData)}>

              <div className=" mb-3">
                <AppInput
                  type={"email"}
                  name="email"
                  
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
                <AppInput
                  type="text"
                  label="IsAdmin"
                  name="isAdmin"
                  required={true}
                  
                />
              </div>
              <div className="mb-3">
                <AppInput
                  type="text"
                  label="Fullname"
                  name="fullname"
                  required={true}
                />
              </div>

              <div className="mb-3">
                <AppInput
                  type="number"
                  label="PhoneNumber"
                  name="phoneNumber"
                  required= {true}
                  minLength={11}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
          
            
          </form>
          </FormProvider>
          
          </div>
        </div>
        <div className="mb-3"></div>
      </div>
      </div>
    
  );
};

export default Register;
