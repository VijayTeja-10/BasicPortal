import React, { useEffect } from 'react'
import axiosInstance from '../../axiosInstance'

const DashBoard = () => {

    const fetchData= useEffect(()=>{
        const protectedData= async ()=>{

            try{
                const response= await axiosInstance.get('/ProtectedView/')
                console.log('Success : ',response.data)
            }catch(error){
                console.log('Error : ',error)
            }
        }
        protectedData()
    },[])
  return (
    <div>DashBoard</div>
  )
}

export default DashBoard