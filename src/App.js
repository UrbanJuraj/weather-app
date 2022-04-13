import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import WeatherInformation from "./components/MainScreen/WeatherInformation";
import Search from "./components/SearchScreen/Search";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WeatherInformation />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </Layout>
  );
}

export default App;
