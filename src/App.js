import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { fetchCityWeather } from "./store/city-actions";

import Layout from "./components/layout/Layout";
import MainScreen from "./components/MainScreen/MainScreen";
import SearchScreen from "./components/SearchScreen/SearchScreen";
import Notification from "./components/NotificationScreen/Notification";

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCityWeather(48.6667, 21.3333));
  }, [dispatch]);

  if (notification) {
    return (
      <div className="failed-fetch">
        <Notification message={notification} />;
      </div>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="*" element={<Notification message="Page not found!" />} />
      </Routes>
    </Layout>
  );
}

export default App;
