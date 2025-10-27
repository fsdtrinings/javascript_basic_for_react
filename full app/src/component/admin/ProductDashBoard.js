import React from "react";
import DisplayProducts from "./DisplayProducts";
import ProductSubmit from "./ProductSubmit";

const ProductDashBoard = () => {
  return (
    <div>
      <table width="100%">
        <tbody>
          <tr>
            <td valign="top">
              <ProductSubmit />
            </td>
            <td valign="top">
              <DisplayProducts />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDashBoard;
