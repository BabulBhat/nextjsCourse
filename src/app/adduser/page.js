"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter();
    const [form, setform] = useState({ fullname: "", age: "", email: "", password: "" })
    const handleChange = (e) => {
        let { name, value } = e.target;
        setform({
            ...form,
            [name]: value
        })
    }

    const handleClick = async () => {
        let response = await fetch(`http://localhost:3000/api/users`, {
            method: "POST",
            body: JSON.stringify(form)
        });
        response = await response.json();
        if (response.success) {
            alert("Success");
            router.push('/users');
        }
        else {
            alert("Error")
        }

    }

    return (
        <div className="container-fluid">
            <h2>Add New User</h2>
            <hr />
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" placeholder="Full Name" name="fullname" onChange={handleChange} value={form.fullname} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Age</label>
                        <input type="text" className="form-control" placeholder="Age" name="age" onChange={handleChange} value={form.age} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Email" name="email" onChange={handleChange} value={form.email} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" placeholder="Password" name="password" onChange={handleChange} value={form.password} />
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <button className="btn btn-primary btn-sm" onClick={handleClick}>Save</button>
                </div>
            </div>
        </div>
    )
}