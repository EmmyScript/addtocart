import { useContext, useState } from "react";
import { ShopContext } from "../shop/ShopContext";
import { UpdateModal } from "./UpdateModal";
//import { useNavigation, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { allProduct, handleDelete, loading } = useContext(ShopContext);
  const [tableData, ] = useState();
  const [showModal, setShowModal] = useState(false);

  
  const url = "https://ecommerce-trading.onrender.com/api/products/delete";

  /*
  const handleUpdate = (mydata: any) => {
    
    setTableData(mydata);
    setShowModal(true);
  };
  */

  // console.log(tableData)



  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        {loading && (
          <div className="spinner-row text-warning text-center" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
        <h1 className="updateproductlist text-center">
          <b>Update Product List </b>
        </h1>

        <div className="col-md-12 ">
          <div className="table-responsive-sm">
            <table className="table">
              <thead>
                <tr>
                  <th className="table-primary">ProductImage</th>
                  <th className="table-secondary">ProductName</th>
                  <th className="table-info">Price</th>
                  <th className="table-success">Category</th>
                  <th className="table-danger">Quantity</th>
                  <th className="table-cell">Description</th>
                  <th className="table-warning">numReviews</th>
                  <th className="table-dark">Size</th>
                  <th className="table-secondary">Option</th>
                </tr>
              </thead>
              <tbody>
                {allProduct.map((val: any) => (
                  <tr key={val._id}>
                    <td>
                      <img src={val.productImage} height={30} width={30} />
                    </td>
                    <td>{val.productName}</td>
                    <td>{val.price}</td>
                    <td>{val.category}</td>
                    <td>{val.quantity}</td>
                    <td>{val.description}</td>
                    <td>{val.numReviews}</td>
                    <td>{val.size}</td>
                    <td className="d-flex justify-content-between md-sm">
                      <button
                        className="btn btn-primary"
                        
                      >
                        Update
                      </button> 

                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(url, val._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <UpdateModal
              tableData={tableData}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;

/*


const {id} = useParams();
  useEffect(() => {
    
    axios
      .get("http://localhost:5000/users/" + id)
      .then((res) => setAllValue(res.data))

      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();

  const handleUpdate =(e:any) =>{
    e.preventDefault();
    axios
      .put("http://localhost:5000/users/"+id, allValue)
      .then(res => {
        console.log(res);
        navigate('/')
      })
      .catch(err => console.log(err))
    
  }
  const handleValues = (e:any) =>{
    const value = e.target.value;
    const name = e.target.name;
    const data = {...allValue, [name]: value}
    setAllValue(data)
  }
 
*/
