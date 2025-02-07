import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import User from "./User";


const UserLayout = () => {
    const [users, setUsers] = useState([]);
    useEffect(  ()=> {
        (async ()=>{
            const respone = await fetch('https://jsonplaceholder.typicode.com/users')
            if(!respone.ok) {
                setUsers([]);
            } else {
                setUsers((await respone.json( )))
            }
        })();
    }, []);
    return <div className="container p-5">
        <h1>User Pages</h1>
        <div className="container mt-5">
            {users.map( user => <User username={user.username} email={user.email} ></User> )}
        </div>
    </div>
}

export default UserLayout;