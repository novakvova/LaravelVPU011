import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import http from "../../http_common";
import { GetProductAction, IProductResponse, IProductState, ProductActionTypes } from "./types";

const HomePage = () => {
  const {list} = useSelector((store: any)=> store.product as IProductState);
  const dispatch = useDispatch();

  useEffect(() => {
    http.get<IProductResponse>("/api/products").then((resp)=> {
      const action: GetProductAction = {
        type: ProductActionTypes.GET_PRODUCTS,
        payload: {
          list: resp.data.data,
          count_page: resp.data.last_page,
          current_page: resp.data.current_page,
          total: resp.data.total,
        },
      };
      dispatch(action);
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