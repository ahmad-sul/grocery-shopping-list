import React, { useEffect, useState } from 'react'
import axios from 'axios'
import baseURL from '../config/baseURL'
import { useParams } from 'react-router-dom'

export default function UpdateItem() {
    const [item,setItem]=useState()
    const {id} = useParams()
    console.log(id);
    const getItem=async(e)=>{
        const res=await axios.get(baseURL+'items/'+id)
        console.log(res.data);
        setItem(res.data)
    }
    useEffect(()=>{
        getItem()
    },[])

    const UpdateItem=async(e)=>{
        e.preventDefault()
        console.log('press update');
  const item={
      name:e.target.name.value,
      amount:e.target.amount.value
  }
  console.log('itemmmmmmm', item);
try{
        const UpdateItem= await axios.post(baseURL+'items/'+id,item)
        window.location.replace('/')
        }catch(e){
            console.log(e);
        }
}
    return item? (
        <div className='update'>
            <h5 className='text-white text-center mt-3'>Update Item</h5>
            <form className="row g-3 justify-content-center align-items-center flex-column mt-3" onSubmit={UpdateItem}>
            <div className="col-6">
            <label htmlFor="exampleInputText" className="form-label text-white">Name</label>
            <input type="text"  name='name' className="form-control" aria-label="item" defaultValue={item.name}/>
            </div>
            <div className="col-6">
            <label htmlFor="exampleInputText" className="form-label text-white">Amount</label>
                <input type="number" className="form-control" name="amount" id="amount" defaultValue={item.amount} />
            </div>
            <div className="col-6">
            <button type="submit" className="btn btn-primary mb-3 w-100">update Item</button>
            </div>
         </form>
        </div>
    ) : <div>Loading</div>
}
