import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import MainScreen from "./components/MainScreen/MainScreen";
import Search from "./components/SearchScreen/Search";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </Layout>
  );
}

export default App;
