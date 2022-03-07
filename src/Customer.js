import CUSTOMERS from "./data";
import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";
const Customer = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    const customers = CUSTOMERS;
    const c = customers.filter(customer => {
        return customer.id !== params.id
    });
    return (
      <div>
        <h1>Customer</h1>
        <h1>{`${c.first_name + ' ' + c.last_name}`}`</h1>
        <p>{`Loyalty points: ${ c.points}`}</p>
      </div>
    )
  }

export default Customer;