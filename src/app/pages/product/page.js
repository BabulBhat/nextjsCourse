import Link from "next/link";
import Layout from "../../components/Layout";
import './productstyle.css'
import DeleteBtn from "./DeleteBtn";
const showData = async () => {
    const response = await fetch(`http://localhost:3000/api/product/`, {
        method: "GET"
    })
    let result = await response.json();
    return result;
}
export default async function Page() {
    let data = await showData();
    return (
        <Layout>
            <div className="card mx-3 mt-3">
                <div className="card-header bg-success text-white">
                    <div className="d-flex align-items-center justify-content-between">
                        <h4 className="m-0 py-2">Product</h4>
                        <Link href={'/pages/product/addproduct'} className="btn btn-light">Add Product</Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                    <th>Product Company</th>
                                    <th>Product Color</th>
                                    <th>Product Category</th>
                                    <th>Product Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.result.map((item, index) => {
                                        index = index + 1;
                                        return (
                                            <tr key={index}>
                                                <td>{index}</td>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>{item.company}</td>
                                                <td>{item.color}</td>
                                                <td>{item.category}</td>
                                                <td>{item.description}</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <Link href={`/pages/product/${item._id}`} className="btn btn-warning btn-sm mx-1">Edit</Link>
                                                        <DeleteBtn id={item._id}/>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}