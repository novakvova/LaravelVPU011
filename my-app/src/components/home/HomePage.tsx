import { useEffect, useState } from "react";
import http from "../../http_common";
import { IProductItem, IProductResponse } from "./types";

const HomePage = () => {
  const [list, setList] = useState<Array<IProductItem>>([]);

  useEffect(() => {
    //console.log("Use efect working");
    http.get<IProductResponse>("/api/products").then((resp)=> {
        //console.log("Response server", resp);
      setList(resp.data.data);
    });
  }, []);

const data = list.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.detail}</td>
    </tr>
  ));

  return (
    <>
      <h1>Головна сторінка</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </>
  );
};

export default HomePage;