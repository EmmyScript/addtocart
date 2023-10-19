

function AppErrorMessage({ errors, name,  }: any) {
  return (
    <div>
      <>
        {errors[name]?.type === "required" && (
          <p className="text-white fs-6">Input field is required</p>
        )}
      </>
      { errors[name]?.type === "minLength" && (
        <p>pls enter five character</p>
      )}
    </div>
  );
}

export default AppErrorMessage;
