import "./App.css";
import Layout from "./components/Layout";
import ParentFuncComp from "./components/ParentFuncComp";
import PropTypeComp from "./components/PropTypeComp";

function App() {
  return (
    <div className="App">
      <Layout>
        <ParentFuncComp />
      </Layout>

      <h2>Prop Type component</h2>
      <PropTypeComp
        marka="Mazda"
        model="3"
        boja="Bijela"
        godina={2021}
        mjenjac="R"
      />
    </div>
  );
}

export default App;
