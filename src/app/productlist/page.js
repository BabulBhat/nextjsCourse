import Product from "./product";

async function productList() {
    let data = await fetch('https://dummyjson.com/products');
    data = await data.json();
    return data.products;
}

export default async function Page() {
    let product = await productList();
    return (
        <div className="container-fluid">
            <div className="row">
                <h2>Product List</h2>
                {
                    product.map((item, index) => {
                        return (
                            <div className="col-md-4 col-lg-3 mb-4">
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