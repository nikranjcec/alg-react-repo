import "./App.css";
import Layout from "./components/Layout";
import ParentFuncComp from "./components/ParentFuncComp";

function App() {
  return (
    <div className="App">
      <Layout>
        <ParentFuncComp />
      </Layout>
    </div>
  );
}

export default App;
