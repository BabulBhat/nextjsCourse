"use client"
export default function DeleteUser(props){
    let userid = props.id;
    const handleDelete = async() => {
        let result = await fetch(`http://localhost:3000/api/users/${userid}`,{
            method : 'DELETE'
        })
        let response = await result.json();
        
        if(response){
            alert("Success");
        }
        else{
            alert("Failed");
        }
        
    }
    return(
        <button className="btn btn-danger btn-sm mx-1" onClick={handleDelete}>Delete</button>
    )
}