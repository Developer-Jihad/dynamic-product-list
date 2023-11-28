import React, { useState, useEffect } from "react";
import "./FormData.css";
import ProductTable from "../ProductTable/ProductTable";
import getData from "../../Utils/localStorageData";

export default function FormData() {
  
  const [formData, setFormData] = useState(getData());

  // Set Datas in Local Storage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = {};
    const inputElements = [...e.target.elements];
    inputElements.forEach((element) => {
      if (element.tagName !== "BUTTON") {
        input[element.name] = element.value;
        element.value = "";
      }
    });
    setFormData([...formData, input]);
  };

  const deleteElement = (id) => {
    const filteredData = formData.filter((data) => data.productId !== id);
    setFormData(filteredData);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex">
          <label>
            Product Name: <br />
            <input type="text" name="productName" required />
          </label>

          <label>
            Product ID: <br />
            <input type="number" name="productId" required />
          </label>

          <label>
            Price: <br />
            <input type="number" name="price" required />
          </label>

          <label>
            Quantity: <br />
            <input type="number" name="quantity" required />
          </label>
        </div>

        <div className="flex">
          <label>
            Description: <br />
            <textarea
              maxLength="50"
              name="description"
              required
            />
          </label>

          <label>
            Color:
            <select required name="color">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green" selected>
                Green
              </option>
            </select>
          </label>

          <button type="submit">Submit</button>
        </div>
      </form>
      <ProductTable deleteElement={deleteElement} formData={formData} />
    </>
  );
}
