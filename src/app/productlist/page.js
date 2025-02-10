async function productList() {
    let data = await fetch('https://dummyjson.com/products');
    data = await data.json();
    return data.products;
}

export default async function Page() {
    let product = await productList();
    return (
        <div>
            <h2>Product List</h2>
            {
                product.map((item, index) => {
                    return (
                        <div>
                            <h3>Name : {item.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}