import { useContext } from "react"
import { ShopContext } from "../shop/ShopContext"

const SELECTITEM = [

    {
    id:1,
    select:"Books",
    
    },
    {
        id:2,
        select:"pen",
        
        },

        {
            id:3,
            select:"table",
            
            },
]

const SelectItem = () => {
    const{handleSelect} = useContext(ShopContext)
  return (
    <>
    <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Category:
        </button>
    
        <ul className="dropdown-menu">
        {SELECTITEM.map((selectitems) =>(
            <li key={selectitems.id} onChange={()=> handleSelect(selectitems.select)}>
                {selectitems.select}</li>
        ))}
        </ul>

    </div>
    </>
  )
}

export default SelectItem