import Link from "next/link";
import DeleteProduct from "./DeleteProduct";
async function getData() {
    const response = await fetch(`http://localhost:3000/api/product`, {
        method: "GET"
    })
    let result = await response.json();
    return result.result;

}
export default async function Page() {
    let alldata = await getData();
    return (
        <div className=" p-4">
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h3>Product Listing</h3>
                </div>
                <div>
                    <Link className="btn btn-primary btn-sm" href={'./products/addproduct'}>Add Product</Link>
                </div>
            </div>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Company</th>
                            <th>Color</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            alldata.map((item, index) => {
                                index = index + 1;
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.company}</td>
                                        <td>{item.color}</td>
                                        <td>{item.category}</td>
                                        <td>
                                            <Link className="btn btn-warning btn-sm mx-1" href={`/products/${item._id}`}>Edit</Link>
                                            <DeleteProduct id={item._id} />
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}