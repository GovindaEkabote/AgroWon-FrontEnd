import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import ProductModal from "./Components/productModal";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/signUp";
import Sidebar from "./Components/Sidebar";
import { fetchDataFromApi } from "./utils/api";

const MyContext = createContext();

function App() {
  const [stateList, setStateList] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [isOpenProductModal, setisOpenProductModal] = useState({
    id: "",
    open: false,
  });
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [productData, setProductData] = useState();
  const [categoryData, setCategoryData] = useState([])
  const [activeCate, setActiveCat] = useState('');

  useEffect(() => {
    getCountry("http://localhost:4000/api/get");

  
    fetchDataFromApi("/api/v1/get-category").then((res) =>{
      setCategoryData(res.categoryList)
    })
  }, []);

  useEffect(() => {
    if (isOpenProductModal.id) {
      fetchDataFromApi(`/api/v1/get/${isOpenProductModal.id}`)
        .then((res) => {
          setProductData(res.product); // Store just the product object
          console.log("Fetched data:", res.product); // Debug
        })
        .catch((error) => console.error("Fetch error:", error));
    }
  }, [isOpenProductModal]);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      if (response.data && response.data.states) {
        setStateList(response.data.states);
      } else {
        console.error("Unexpected response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching states:", error.message);
    }
  };

  const values = {
    stateList,
    setSelectedState,
    selectedState,
    isOpenProductModal,
    setisOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setIsLogin,
    categoryData, 
    setCategoryData,
  };
  return (
    <>
      <MyContext.Provider value={values}>
        {isHeaderFooterShow === true && <Header />}
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/get-category/:id" exact={true} element={<Listing />} />
          <Route
            path="/product/:id"
            exact={true}
            element={<ProductDetails/>}
          />
          <Route path="/cart" exact={true} element={<Cart />} />
          <Route path="/signIn" exact={true} element={<SignIn />} />
          <Route path="/signUp" exact={true} element={<SignUp />} />
          <Route path="/slider" exact={true} element={<Sidebar />} />
        </Routes>
        {isHeaderFooterShow === true && <Footer />}

        {isOpenProductModal.open && productData && (
          <ProductModal data={productData} />
        )}
      </MyContext.Provider>
    </>
  );
}

export default App;

export { MyContext };
