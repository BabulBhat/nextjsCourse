"use client"
import { useEffect, useState } from "react";
export default function Productlist() {
    useEffect(() => {
        fetchdata();
    }, [])
    const [product, setproduct] = useState([])
    const fetchdata = async () => {
        let data = await fetch(`https://dummyjson.com/products`);
        data = await data.json();
        setproduct(data.products);
    }
    return (
        <div className="container-fluid">
            <h1>Product List</h1>
            <div className="row">
                {
                    product.map((item, index) => {

                        return (
                            <div className="col-md-4 col-lg-3 mb-4" key={index}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src={item.thumbnail} className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="card-footer bg-warning">
                                        <h6 className="pb-2">{item.title}</h6>
                                        <p>{item.description}</p>
                                        <span className="badge bg-primary my-2">$ {item.price}</span>
                                        <span className="badge bg-primary my-2 mx-2">{item.brand}</span>
                                        <span className="badge bg-primary my-2 mx-2">{item.category}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}