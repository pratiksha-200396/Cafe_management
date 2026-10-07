import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderDetails() {

  const [orders, setOrders] = useState([]);

  // useEffect(() => {

  //   fetch("http://localhost:3000/orders")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setOrders(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  // }, []);

  let navigate = useNavigate();
  async function getAllorder(){
    try{
      let result = await axios.get("http://localhost:8080/cafe/getall")
     setOrders(result.data);
    }
    catch(error){
      console.log(error);
      
    }
  }

  let deleteorder = async (id)=>{
    if(confirm('you want to delete this reconrd' + id)){
      await axios.delete('http://localhost:8080/cafe/delete/' + id);
      getAllorder();
    }
  }

  let onEdit = (id)=>{
    if(confirm('you want to update this record' + id)){
      navigate('/updateform/' + id);
    }
  }
  useEffect(()=>{
    getAllorder();
  },[]);

  return (
    <div>

      {/* Page Header */}
      <div className="bg-dark text-white text-center py-5">
        <h1>Order Details</h1>
        <p className="mb-0">
          Foodies Cafe customer orders
        </p>
      </div>

      {/* Order Table */}
      <div className="container py-5">

        <h3 className="mb-4">
          Customer Orders
        </h3>

        <div className="table-responsive">

          <table className="table table-bordered table-striped">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Food Item</th>
                <th>Quantity</th>
                <th>Order Type</th>
                <th>Payment</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {orders.map((order) => (

                <tr key={order.id}>

                  <td>{order.id}</td>

                  <td>{order.customerName}</td>

                  <td>{order.email}</td>

                  <td>{order.contact}</td>

                  <td>{order.foodItem}</td>

                  <td>{order.quantity}</td>

                  <td>{order.orderType}</td>

                  <td>{order.paymentMethod}</td>

                  <td>{order.address}</td>

                      <td ><button onClick={()=>deleteorder(order.id)}>Delete  </button>
                <br />
              
                <button onClick={()=>onEdit(order.id)}>Edit</button></td>
                 

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {orders.length === 0 && (
          <p className="text-center text-muted">
            No orders found.
          </p>
        )}

      </div>

    </div>
  );
}

export default OrderDetails;
