import React from "react";
import "../components/componets-css/Product.css";
import Card from "./Card";
import { useEffect, useState } from "react";

//we will fetch the api here and will shao the results here.


const Product = () => {
    var [product, setproduct] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            const results = await fetch("https://fakestoreapi.com/products");
            const data = await results.json();
            setproduct(data);
            console.log("THIS IS DATA.");
            console.log(data);

        }
        fetchdata()
    }, [])

    return (
        <div className="productwrapper">
            {
                product.map((item) => {
                    return (
                        <>
                            <Card key={item.id} price={item.price} name={item.title} image={item.image} stars={item.rating.rate} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default Product;