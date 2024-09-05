import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCom from "../components/ProductCom";
function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3636/products").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <NavBar />
      <div className="flex lg:w-screen md:w-screen mx-auto justify-evenly flex-wrap border ">
      {data.map((result, key) => (
          <ProductCom id={result.id} value={result} />
        ))}
        </div>
      <Footer />
    </div>
  );
}

export default Products;
