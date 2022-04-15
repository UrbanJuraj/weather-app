import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { fetchCityWeather } from "./store/city-actions";

import Layout from "./components/layout/Layout";
import MainScreen from "./components/MainScreen/MainScreen";
import SearchScreen from "./components/SearchScreen/SearchScreen";
import NotFound from "./components/NotFoundScreen/NotFoundScreen";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCityWeather(48.6667, 21.3333));
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
