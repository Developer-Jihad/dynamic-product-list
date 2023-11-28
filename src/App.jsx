import FormData from "./Components/FormData/FormData";
import ProductTable from "./Components/ProductTable/ProductTable";
import "./App.css";

function App() {
  return (
    <>
      <h2 className="title">
        Products Data list Application with CRUD Operations
      </h2>
      <br />
      <FormData />
      <ProductTable />
    </>
  );
}

export default App;
