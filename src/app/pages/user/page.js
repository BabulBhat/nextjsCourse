import Link from "next/link";
import Layout from "../../components/Layout";
import DeleteBtn from "./DeleteBtn";
async function allData() {
    const response = await fetch(`http://localhost:3000/api/user`, {
        method: "GET"
    })
    let result = await response.json();    
    return result.result;
}

export default async function Page() {
    let data = await allData();
    return (
        <Layout>
            <div className="card mx-3 mt-3">
                <div className="card-header bg-success text-white">
                    <div className="d-flex align-items-center justify-content-between">
                        <h4 className="m-0 py-2">Add User</h4>
                        <Link href={"/pages/user/adduser"} className="btn btn-light">Add User</Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    data.map((item, index) => {
                                        index = index + 1;
                                        return (
                                            <tr key={index}>
                                                <td>{index}</td>
                                                <td>{item.fullname}</td>
                                                <td>{item.email}</td>
                                                <td>{item.password}</td>
                                                <td>
                                                    <Link href={`/pages/user/${item._id}`} className="btn btn-warning btn-sm mx-1">Edit</Link>
                                                    <DeleteBtn id={item._id} />
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