import { useState } from "react";
import { useAxios } from "../hooks/useAxios";

export default function Cards() {
    const axios = useAxios();g
    const [products, setProducts] = useState([]);
    const lang = localStorage.getItem("lang") || "eng"
    axios({ url: "/products"}).then((res) => setProducts(res));
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-4">

    {
        products.map((product) => (
            <div key={product.id} className="bg-white p-4 m-4 rounded-md shadow-md">
                <h2 className="text-lg font-semibold">{product.title[lang]}</h2>
                <p>{product.description[lang]}</p>
                <p>{product.price}</p>
            </div>
        ))
    }
    </div>
    </>
  )
}
