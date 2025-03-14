async function getUser(id) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    // console.log(data);
    return data.result;
}
export default async function Page({ params }) {
    let userdetails = await params;
    let userdata = await getUser(userdetails.userid)
    return (
        <>
            <div className="container">
                <h1>User Details</h1>
                <div className="bg-primary text-white p-4">
                    {
                        userdata.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h5>ID :- {item.id}</h5>
                                    <h5>Full Name :- {item.fullname}</h5>
                                    <h5>Age :- {item.age}</h5>
                                    <h5>Email :- {item.email}</h5>
                                    <h5>Password :- {item.password}</h5>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}