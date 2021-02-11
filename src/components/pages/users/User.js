import React, {useState,useEffect} from 'react';
import {Link , useParams} from "react-router-dom";
import axios from "axios";

const User = () => {
    const[user , setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
   });
   const {id} = useParams();

   useEffect(() =>{
       LoadUser();
   },[])

   const LoadUser = async() => {

    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
    console.log(result);
 }
    return(
        <div className="container py-4">
           <Link className="btn btn-primary" to="/">Back</Link>
           <h1 className="display-4">User Id :{id}</h1>
           <hr/>
           <ul className="list-group w-50">
               <li className="list-group-item">name: {user.name}</li>
               <li className="list-group-item">user name: {user.username}</li>
               <li className="list-group-item">email: {user.email}</li>
               <li className="list-group-item">phone: {user.phone}</li>
               <li className="list-group-item">website : {user.website}</li>

           </ul>

        </div>
    )
}

export default User;