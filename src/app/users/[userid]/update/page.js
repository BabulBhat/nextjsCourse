"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Page() {
    // let param = await params;
    const params = useParams();
    let id = params.userid;

    const [updateform, setupdateform] = useState({ fullname: "", age: "", email: "", password: "" })
    useEffect(() => {
        getUserDetails()
    }, [])
    const handleChange = (e) => {
        let { name, value } = e.target;
        setupdateform({
            ...updateform,
            [name]: value
        })
    }



    const getUserDetails = async () => {
        let data = await fetch(`http://localhost:3000/api/users/${id}`);
        data = await data.json();
        const item = data.result.find((item) => item.id == id);
        setupdateform(item);
    }

    const handleUpdate = async () => {
        const { fullname, age, email, password } = updateform;
        let result = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                fullname,age,email,password
            })
        })
        let response = await result.json();
        if(response.success){
            alert("Success");
        }
        else{
            alert("Failed");
        }
    }

    return (
        <div>
            <h1>User Update Page</h1>
            <input type="text"
                className="form-control"
                placeholder="Enter Full Name"
                name="fullname"
                onChange={handleChange}
                value={updateform.fullname}
            />

            <input type="text"
                className="form-control"
                placeholder="Enter Age"
                name="age"
                onChange={handleChange}
                value={updateform.age}
            />

            <input type="text"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                onChange={handleChange}
                value={updateform.email}
            />

            <input type="text"
                className="form-control"
                placeholder="Enter Password"
                name="password"
                onChange={handleChange}
                value={updateform.password}
            />

            <div className="col-12 mt-3">
                <button className="btn btn-primary btn-sm" onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )
}