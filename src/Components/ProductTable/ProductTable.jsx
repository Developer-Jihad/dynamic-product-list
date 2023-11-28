import React from "react";
import "./ProductTable.css";
import { MdDeleteForever } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
export default function ProductTable({ formData, deleteElement }) {
  return (
    <>
      <div>
        {formData && (
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product ID</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>Color</th>
                <th>
                  <MdDeleteForever />
                </th>
              </tr>
            </thead>
            <tbody>
              {formData.map((data, index) => (
                <tr key={index}>
                  <td>{data.productName}</td>
                  <td>{data.productId}</td>
                  <td>{data.price}</td>
                  <td>{data.quantity}</td>
                  <td>{data.description}</td>
                  <td>{data.color}</td>
                  <td>
                    <RiDeleteBack2Fill
                      onClick={() => deleteElement(data.productId)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
