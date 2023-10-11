

const CartCanvas = () => {
  return (
    <>
      <button
        className="btn btn-primary mb-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        update
      </button>
    
        
      

      <div
        className="offcanvas offcanvas-start"
        data-bs-backdrop="static"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            Updateproduct
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
        <div className="mb-3">
        <label  className="form-label">Name</label>
  <input type="text" className="form-control" placeholder="full-name" />
        <label className="form-label">  Address</label>
  <input type="text" className="form-control" placeholder="enter-address" />
  <label  className="form-label">Password</label>
<input type="password" id="inputPassword5" className="form-control" 
aria-describedby="passwordHelpBlock"/>

  <label  className="form-label">Phone</label>
  <input type="pwd" className="form-control" placeholder="number" />

</div>
<div className="mb-3">
  <label className="form-label">Textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1"  placeholder="Comment"></textarea>
  
</div>
<div className="btn btn-primary ml-5">Submit</div>
        </div>
        

        
      </div>
    
    </>
  );
};

export default CartCanvas;

