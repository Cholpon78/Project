import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import SingleItemPage from "./pages/SingleItemPage";
import ShoppingCardPage from "./pages/ShoppingCardPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsListPage from "./pages/ProductListPage";
import SingleCategoryPage from "./pages/SingleCategoryPage";
import SalePage from "./pages/SalePage";
import { ToastContainer } from "react-toastify";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { ScrollToTop } from "./UI/ScrollToTop";

function App() {
  return (
    <div className="app">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="products/all" element={<ProductsListPage />} />
        <Route path="products/sale" element={<SalePage />} />
        <Route path="categories/:id" element={<SingleCategoryPage />} />
        <Route path="products/:id" element={<SingleItemPage />} />
        <Route path="shoppingcard" element={<ShoppingCardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
