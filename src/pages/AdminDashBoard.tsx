

const AdminDashBoard = () => {
  return (
    <div className="col-md-2">
        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" 
        aria-controls="offcanvasWithBothOptions">Admin DashBoard</button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true"  id="offcanvasWithBothOptions"
 aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
    </div>
  )
}

export default AdminDashBoard;