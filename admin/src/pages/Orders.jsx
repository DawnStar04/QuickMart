import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {backendUrl, currency} from '../App'
import {toast} from 'react-toastify'
import { assets } from '../assets/assets'


const Orders = ({token}) => {

  const [orders,setOrders] = useState([])
  const fetchAllOrders = async () => {
    if(!token){
      return null;
    }
    try {
      const response = await axios.post(backendUrl+'/api/order/list',{},{headers:{token}})
      if(response.data.success){
        setOrders(response.data.orders.reverse())
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (event,orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status',{orderId,status:event.target.value} , {headers:{token}})
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  }

  useEffect(()=>{
    fetchAllOrders();
  },[token])

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Order Page</h3>
      <div className="space-y-4 md:space-y-6">
        {
          orders.map((order, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center"
            >
              <img
                src={assets.parcel_icon}
                alt=""
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
              <div className="flex-1 w-full">
                <div className="mb-2 md:mb-4 flex flex-wrap gap-x-2">
                  {order.items.map((item, idx) => (
                    <span key={idx} className="inline">
                      {item.name} x {item.quantity}
                      <span className="ml-1 text-xs text-gray-500">{item.size}</span>
                      {idx !== order.items.length - 1 && <span>, </span>}
                    </span>
                  ))}
                </div>
                <div className="mb-2 md:mb-4">
                  <p className="font-semibold">{order.address.firstName + " " + order.address.lastName}</p>
                  <div className="text-gray-600 text-xs md:text-sm">
                    <p>{order.address.street + " , "}</p>
                    <p>
                      {order.address.city + " , " + order.address.state + " , " +
                        order.address.country + " , " + order.address.zipcode}
                    </p>
                  </div>
                  <p className="text-gray-700 text-xs md:text-sm">{order.address.phone}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 md:gap-2 min-w-[150px] md:min-w-[180px] w-full md:w-auto">
                <p className="text-xs md:text-base">
                  Items: <span className="font-medium">{order.items.length}</span>
                </p>
                <p className="text-xs md:text-base">
                  Method: <span className="font-medium">{order.paymentMethod}</span>
                </p>
                <p className="text-xs md:text-base">
                  Payment:{" "}
                  <span className={`font-medium ${order.payment ? 'text-green-600' : 'text-red-600'}`}>
                    {order.payment ? 'Done' : 'Pending'}
                  </span>
                </p>
                <p className="text-xs md:text-base">
                  Date: <span className="font-medium">{new Date(order.date).toLocaleDateString()}</span>
                </p>
                <p className="text-base md:text-lg font-bold text-blue-700">
                  {currency}{order.amount}
                </p>
                <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="border rounded px-2 py-1 mt-2 text-xs md:text-base font-semibold">
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
