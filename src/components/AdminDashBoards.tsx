import CartTable from "../cartlist/CartTable"
import Gallery from "../galleryPhoto/Gallery"


const AdminDashBoards = () => {
  return (
    <>
    <div className="container-fluid">
    
      <div className="admindashboard">

      <CartTable/>
    <Gallery photo={[]}/>
    
       
    </div>
   </div>
    </>
  )
}

export default AdminDashBoards