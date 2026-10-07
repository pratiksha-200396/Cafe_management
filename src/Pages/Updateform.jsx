import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function Updateform() {

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }} = useForm();

  // const onFormSubmit = async (data) => {

  //   try {

  //     const response = await fetch("http://localhost:3000/orders", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(data)
  //     });

  //     if (response.ok) {
  //       alert("Order placed successfully!");
  //       reset();
  //     }

  //   } catch (error) {
  //     console.log(error);
  //     alert("Something went wrong!");
  //   }
  // };

       let navigate =useNavigate();

    // let onFormSubmit = async(data) =>{

        //  try{
        //  axios.post("http://localhost:8080/save" ,data);
        //          alert("order form successfully submitted");
        //  navigate('/orderdetails');

        //  }catch(error){
        //     console.log(error);
            
        //  }

          let {id} = useParams();

     let getSingledata = async()=>{
        let result = await axios.get('http://localhost:8080/cafe/get/' + id);
        console.log(result.data);
        for(let props in result.data){
            setValue(props, result.data[props])
        }

        
     }
         useEffect(()=>{
        getSingledata();
     },[]);

    let onUpdateOrder = async(data) =>{
        alert(" updateHospital form successfully submitted");
         try{
         await axios.put('http://localhost:8080/cafe/update/' +data.id,data);
         navigate('/order-details');

         }catch(error){
            console.log(error);
            
         }
    };

    
  return (
    <div>

      {/* Page Header */}
      <div className="bg-dark text-white text-center py-5">
        <h1>Place Your Order</h1>
        <p className="mb-0">
          Fill the form and place your order
        </p>
      </div>

      {/* Order Form */}
      <div className="container py-5">

        <div className="card shadow-sm">

          <div className="card-body">

            <h3 className="text-center mb-4">
              Order Form
            </h3>

            <form onSubmit={handleSubmit(onUpdateOrder)}>

              <div className="row">

                {/* Customer Name */}
                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Customer Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    {...register("customerName", {
                      required: "Customer name is required"
                    })}
                  />

                  {errors.customerName && (
                    <small className="text-danger">
                      {errors.customerName.message}
                    </small>
                  )}

                </div>

                {/* Email */}
                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    {...register("email", {
                      required: "Email is required"
                    })}
                  />

                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}

                </div>

                {/* Contact */}
                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Contact Number
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    {...register("contact", {
                      required: "Contact number is required",
                      minLength: {
                        value: 10,
                        message: "Contact must be 10 digits"
                      },
                      maxLength: {
                        value: 10,
                        message: "Contact must be 10 digits"
                      }
                    })}
                  />

                  {errors.contact && (
                    <small className="text-danger">
                      {errors.contact.message}
                    </small>
                  )}

                </div>

                {/* Food Item */}
                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Food Item
                  </label>

                  <select
                    className="form-select"
                    {...register("foodItem", {
                      required: "Please select food item"
                    })}
                  >

                    <option value="">
                      Select Food
                    </option>

                    <option value="Cappuccino">
                      Cappuccino - ₹120
                    </option>

                    <option value="Veg Burger">
                      Veg Burger - ₹150
                    </option>

                    <option value="Veg Pizza">
                      Veg Pizza - ₹250
                    </option>

                    <option value="Veg Sandwich">
                      Veg Sandwich - ₹100
                    </option>

                    <option value="White Sauce Pasta">
                      White Sauce Pasta - ₹180
                    </option>

                    <option value="Chocolate Cake">
                      Chocolate Cake - ₹140
                    </option>

                  </select>

                  {errors.foodItem && (
                    <small className="text-danger">
                      {errors.foodItem.message}
                    </small>
                  )}

                </div>

                {/* Quantity */}
                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Quantity
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    min="1"
                    {...register("quantity", {
                      required: "Quantity is required",
                      min: {
                        value: 1,
                        message: "Quantity must be at least 1"
                      }
                    })}
                  />

                  {errors.quantity && (
                    <small className="text-danger">
                      {errors.quantity.message}
                    </small>
                  )}

                </div>

                {/* Order Type */}
                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Order Type
                  </label>

                  <select
                    className="form-select"
                    {...register("orderType", {
                      required: "Please select order type"
                    })}
                  >

                    <option value="">
                      Select Order Type
                    </option>

                    <option value="Dine In">
                      Dine In
                    </option>

                    <option value="Take Away">
                      Take Away
                    </option>

                  </select>

                  {errors.orderType && (
                    <small className="text-danger">
                      {errors.orderType.message}
                    </small>
                  )}

                </div>

                {/* Payment Method */}
                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Payment Method
                  </label>

                  <select
                    className="form-select"
                    {...register("paymentMethod", {
                      required: "Please select payment method"
                    })}
                  >

                    <option value="">
                      Select Payment Method
                    </option>

                    <option value="Cash">
                      Cash
                    </option>

                    <option value="UPI">
                      UPI
                    </option>

                    <option value="Card">
                      Card
                    </option>

                  </select>

                  {errors.paymentMethod && (
                    <small className="text-danger">
                      {errors.paymentMethod.message}
                    </small>
                  )}

                </div>

                {/* Address */}
                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Address
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    {...register("address", {
                      required: "Address is required"
                    })}
                  />

                  {errors.address && (
                    <small className="text-danger">
                      {errors.address.message}
                    </small>
                  )}

                </div>

                {/* Special Request */}
                <div className="col-12 mb-3">

                  <label className="form-label">
                    Special Request
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Any special request..."
                    {...register("specialRequest")}
                  ></textarea>

                </div>

                {/* Submit */}
                <div className="col-12 text-center mt-3">

                  <button
                    type="submit"
                    className="btn btn-dark px-5"
                  >
                    Place Order
                  </button>

                </div>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Updateform;