import React, { useEffect, useState } from 'react'
import axios from 'axios'
import baseURL from '../config/baseURL'
import { RiDeleteBin5Line } from "react-icons/ri"
import { AiOutlineEdit } from "react-icons/ai"
import {Link} from "react-router-dom"



export default function Home() {
    const [items, setItems]= useState([])
    
const getItems= async(e)=>{
    try{
    const allItems= await axios.get(baseURL)
   
    setItems(allItems.data.data.sort((a,b)=>a.priorityNr-b.priorityNr))
    }catch(e){
        console.log(e);
    }
}
useEffect(()=>{
    getItems()
},[])

const addItem=async(e)=>{
    e.preventDefault()
    const name = e.target.name.value
    const amount = e.target.amount.value
    const priorityNr = e.target.priority.value
   const item={
       name,
       amount,
       priorityNr
   }
   console.log('Create item', item);
try{
    const res= await axios.post(baseURL, item)
    // console.log(res);
    window.location.reload()
}catch(e){
    console.log(e);
}
    const addItem= await axios.post(baseURL)
}

const deleteItem=async(id)=>{
 
    console.log(items)
    try{
    const deleteItem= await axios.delete(baseURL+'/'+id)
    window.location.reload()
    }catch(e){
        console.log(e);
    }
}


console.log(items);

    return (
    <div className='Home container d-flex flex-column align-items-center mt-5'>
        <h1 className='grocery fs-1 text-center'>Grocery shopping list</h1>
        <div className='w-50'>
               <form className="row g-3 justify-content-center my-5" onSubmit={addItem}>
           <div className="col">
           <label htmlFor="exampleInputText" className="form-label text-dark fw-bolder fs-5">Name</label>
           <input type="text"  name='name' className="form-control" aria-label="item"/>
           </div>
           <div className="col">
           <label htmlFor="exampleInputText" className="form-label text-dark fw-bolder fs-5">Amount</label>
           <input type="number" className="form-control" name="amount" id="amount" defaultValue='1' />
           </div>
           <div className="col">
           <label htmlFor="exampleInputText" className="form-label text-dark fw-bolder fs-5">Priority</label>
           <input type="number" className="form-control" name="priority" id="priority" defaultValue='1' />
           </div>
           <div className="col d-flex flex-column-reverse ">
           <button type="submit" className="btn btn-primary ">Add Items</button>
           </div>
        </form>
        {items &&  items.map((item)=>{
            return(
               <form key={item._id} className='mt-2 '>
                <ul className="d-flex itemList  d-flex justify-content-between align-items-center w-100 rounded">

                <div className="form-check">
                  <input className="form-check-input fs-5" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label fw-bolder fs-5 text-white" htmlFor="flexCheckDefault">{item.priorityNr}. {item.name} </label>
                  </div>
             
                   <div className='d-flex'>
                   <span className='p-2 rounded fw-bolder  text-white bg-success m-2'>Amount: {item.amount}</span>
                   {/* <span className='p-2 rounded fw-bolder  text-white bg-success m-2'>Priority Nr: {item.priorityNr}</span> */}
                   <Link to={'update/'+item._id} className="btn btn-info m-2"><AiOutlineEdit/></Link>
                 
                        <button className="btn btn-danger m-2" onClick={()=>deleteItem(item._id)}><RiDeleteBin5Line/></button>
                    </div>
             
                         
                </ul>
               </form>
               
             
              
            )
        })}
        </div>
     
    </div>
    )
}
