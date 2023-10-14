import { useForm } from "react-hook-form";
import { Formdatas } from "../pages/Login";

interface IType {
  label: string;
  type: string;
  onChange?: any;
  name: string;
  value?: string | number;
  id?:string
}
function AppInput({ label, type, name, onChange, value,id }: IType) {
  const {
    register,
    formState: { errors },
  } = useForm<Formdatas | any>();

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
      {...register(type, { required: true, minLength: 5 })}
        type={type}
        className="form-control"
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default AppInput;
