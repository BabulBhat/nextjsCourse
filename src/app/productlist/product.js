"use client"
export default function Product(props){
    return(
        <div>
            <button className="btn btn-sm btn-success" onClick={()=>alert("$"+props.price)}>Show Price</button>
        </div>
    )
}