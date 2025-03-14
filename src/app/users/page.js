import Link from 'next/link'
import DeleteUser from './DeleteUser';
async function getUser() {
    let data = await fetch(`http://localhost:3000/api/users`);
    data = await data.json();
    return data;
}
export default async function Page() {
    const alluser = await getUser();
    return (
        <div className="container-fluid p-4">
            <Link href={`/`}>
                <button className='btn btn-secondary btn-sm mb-3'>Back</button>
            </Link>
            <div className="d-flex align-items-center justify-content-between">
                <h2>User List</h2>
                <Link href={`/adduser`}>
                    <button className="btn btn-primary btn-sm">Add User</button>
                </Link>
            </div>
            <hr />
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Age</th>
                            <th>Email / Username</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alluser.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.fullname}</td>
                                        <td>{item.age}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                        <td>
                                            <Link href={`users/${item.id}/update`}>
                                            <button className="btn btn-warning btn-sm mx-1">Edit</button>
                                            </Link>
                                            <DeleteUser id={item.id}/>
                                            <Link href={`users/${item.id}`}>
                                                <button className="btn btn-info btn-sm mx-1">View</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
