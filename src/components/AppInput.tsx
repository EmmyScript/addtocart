import {  useFormContext } from "react-hook-form";
import AppErrorMessage from "./AppErrorMessage";

interface IType {
  label: string;
  type: string;
  onChange?: any;
  name: string;
  value?: string | number;
  id?: string;
  required: boolean;
  minLength?:number;
  
}
function AppInput({ label, type, name, required,minLength,value }: IType) {
  console.log(value,"value")
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        {...register(name, { required: required, minLength:minLength})}
        type={type}
        className="form-control"
        name={name}
        id={name}
        value={value}
      />
      <AppErrorMessage errors={errors} name={name} required={required} minLength={minLength}/>
    </div>
  );
}

export default AppInput;
