"use client"
import { useState } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    console.log(router);
    
    const [form, setform] = useState({
        fullname: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setform({
            ...form,
            [name]: value
        })
    }
    const handleSave = async () => {
        const { fullname, email, password } = form;
        const response = await fetch('http://localhost:3000/api/user', {
            method: "POST",
            body: JSON.stringify({ fullname, email, password })
        })
        let result = await response.json();
        if (result.success) {
            alert("Success");
            router.push('/pages/user');
        }
        else {
            alert("Failed")
        }
    }
    return (
        <Layout>
            <div className="card mx-3 mt-3">
                <div className="card-header bg-success text-white">
                    <h4 className="m-0 py-2">Add User</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Enter Your Fullname</label>
                                <input type="text" className="form-control" name="fullname" onChange={handleChange} placeholder="Enter Your Fullname" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Enter Your Email</label>
                                <input type="text" className="form-control" name="email" onChange={handleChange} placeholder="Enter Your Email" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="">Enter Your Password</label>
                                <input type="text" className="form-control" name="password" onChange={handleChange} placeholder="Enter Your Password" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mt-3">
                                <button className="btn btn-success" onClick={handleSave}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}