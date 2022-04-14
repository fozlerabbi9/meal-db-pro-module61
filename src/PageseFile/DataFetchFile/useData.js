import { useEffect, useState } from "react";

const useData = () =>{

    const [products , setProducts] = useState();
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => res.json())
        .then(data => setProducts(data.categories))
    },[])
    return [products];
}

export default useData;
