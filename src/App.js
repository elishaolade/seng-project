import logo from './logo.svg';
import './App.scss';
import CUSTOMERS from './data';
import { RouteObject } from "react-router-dom";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useRoutes,
  useParams,
  useNavigate
} from "react-router-dom"; 
import { useEffect, useState } from 'react';
import {sort, search, avg, getMaximum} from './utility';

const App = () => {
  const [customers, setCustomers] = useState([], CUSTOMERS);
  const [name, setName] = useState('');
  const [average, setAverage] = useState(0);
  const [max, setMax] = useState(0);
  const [platnium, setPlatnium] = useState([]);
  const [gold, setGold] = useState([]);
  const [silver, setSilver] = useState([]);
  const [searchRecord, setSearchRecord] = useState(null);
  useEffect(()=>{
    setCustomers(CUSTOMERS);
    const platniumCustomers = customers.filter(customer => customer.points >= 5000);
    console.log(platniumCustomers)
    setPlatnium(platniumCustomers)
    const goldCustomers = customers.filter(customer => customer.points > 1000 && customer.points < 5000);
    setGold(goldCustomers)
    const silverCustomers = customers.filter(customer => customer.points > 0 && customer.points < 1001)
    setSilver(silverCustomers)
  }, []);
  
  // Event handler for sorting
  const sortByPoints = () => {
    const copy = [...customers];
    const res = sort(copy, true);
    setCustomers(customers =>  res);
    
  }

  // Event handler for sorting by name
  const sortByName = () => {
    const copy = [...customers];
    const res = sort(copy, false);
    setCustomers(customers =>  res);
  }
  // Event handler for search
  const handleSubmit = () => {
    const copy = [...customers];
    let rec = search(copy, name);
    console.log(rec);
    setSearchRecord(rec);
    setName(name => '');
  }
  // Event handler for finding max
  const findMax = () => {
    const copy = [...customers];
    let res = getMaximum(copy);
    setMax(res);
    console.log(res);
  }
  // Event handler for finding average
  const findAvg = () => {
    const copy = [...customers];
    let res = avg(copy);
    setAverage(res);
    console.log(res);
  }
  // Event handler for change of text
  const handleChange = (event) => {
    setName(name => event.target.value);
  }
  return (
    <div className="page-template">
      <div className="page-template__inner container">
        <div className="page-template__head">
          <h1>Loyalty Program</h1>
        </div>
        <div className="page-template__body">
          <div className="d-block">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Last</th>
                  <th>First</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {customers.map(customer => {
                  return (
                    <tr>
                      <td>{ customer.id }</td>
                      <td>{ customer.last_name }</td>
                      <td>{ customer.first_name }</td>
                      <td>{ customer.points }</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className="mb-2">
              <div><strong>Max: </strong>{ max.points }</div>
              <div><strong>Avg: </strong>{ average }</div>
              <div className="my-3">
               {searchRecord && <div className="">
                  <h6 className="search-text">{`Found: ${searchRecord.last_name}, ${searchRecord.first_name}`}</h6>
                 </div>}
            </div>
            </div>

          </div>
          <div className="row">
            <div className="col-6">
              <button className="btn btn-primary w-100" onClick={sortByPoints}>Sort by points</button>
            </div>
            <div className="col-6">
              <button className="btn btn-primary w-100 px-2" onClick={sortByName}>Sort by name</button>
            </div>
            <div className="col-8 mt-3">
              <div className="input-group">
                <input type="text" class="form-control" onChange={handleChange} value={name} placeholder="Last Name" aria-label="Last Name" aria-describedby="last-name"/>
              </div>
            </div>
            <div className="col-4 mt-3">
              <button className="btn btn-secondary" onClick={handleSubmit}>Search</button>
            </div>
            <div className="col-6 mt-3">
              <button className="btn btn-danger w-100" onClick={findMax}>Get max</button>
            </div>
            <div className="col-6 mt-3">
              <button className="btn btn-outline-danger w-100" onClick={findAvg}>Get avg</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
