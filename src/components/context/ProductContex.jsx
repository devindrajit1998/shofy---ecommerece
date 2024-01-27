import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const BASE_URL = "http://localhost:1337";
  const CATEGORIES = "/api/Categories";
  const BANNER = "/api/Banners";
  const PRODUCTS = "/api/Products";

  const [category, setCategory] = useState();
  const [banner, setBanner] = useState();
  const [product, setProduct] = useState();
  const [trending, setTrending] = useState();
  const [sale, setSale] = useState();
  const [modalProduct, setModalProduct] = useState();
  // fetch category data =============================>
  const getCate = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 3da804ef8040b7da9eb79d3cd3047043bc8c0918f41f591040367d1c0a1667e7e53395e521154a516a489ec117b405451afa269454f841b8301601bdb6715c93001a928335a41385094c1289f2776b8ff692f34d717000c06df5e3821a8b8fb7272289e26c1490669a48ee55765f36775c458837d285ccff7fdaa517f7f0a53e",
      },
    };

    try {
      const fetchCategory = await fetch(
        `${BASE_URL}${CATEGORIES}?populate=*`,
        options
      );
      const response = await fetchCategory.json();
      setCategory((items) => response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  // fetch banner data ==============================>

  const getBanner = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 3da804ef8040b7da9eb79d3cd3047043bc8c0918f41f591040367d1c0a1667e7e53395e521154a516a489ec117b405451afa269454f841b8301601bdb6715c93001a928335a41385094c1289f2776b8ff692f34d717000c06df5e3821a8b8fb7272289e26c1490669a48ee55765f36775c458837d285ccff7fdaa517f7f0a53e",
      },
    };
    try {
      const fetchCategory = await fetch(
        `${BASE_URL}${BANNER}?populate=*`,
        options
      );
      const response = await fetchCategory.json();
      setBanner((items) => response.data);
      // console.log("BANNER name ===========>", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // fetch product data =============================>

  const getProduct = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 3da804ef8040b7da9eb79d3cd3047043bc8c0918f41f591040367d1c0a1667e7e53395e521154a516a489ec117b405451afa269454f841b8301601bdb6715c93001a928335a41385094c1289f2776b8ff692f34d717000c06df5e3821a8b8fb7272289e26c1490669a48ee55765f36775c458837d285ccff7fdaa517f7f0a53e",
      },
    };
    try {
      const fetchCategory = await fetch(
        `${BASE_URL}${PRODUCTS}?populate=*`,
        options
      );
      const response = await fetchCategory.json();
      setProduct((items) => response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCate();
    getBanner();
    getProduct();
  }, []);

  // filter trending products ==============>

  useEffect(() => {
    if (product) {
      const trendingProduct = product.filter(
        (item) => item.attributes.trending === true
      );
      if (trendingProduct) {
        setTrending(trendingProduct);
      }
    }
  }, [product]);

  // filter sale products ==================>

  useEffect(() => {
    if (product) {
      const saleProduct = product.filter(
        (item) => item.attributes.sale === true
      );
      console.log("trend=======>>>>>>", saleProduct);
      if (saleProduct) {
        setSale(saleProduct);
      }
    }
  }, [product]);

  // product modal function =================>

  const TargetProduct = (createdAt) => {
    const findTargetProduct = product.find(
      (items) => items.attributes.createdAt === createdAt
    );
    setModalProduct(findTargetProduct);
    console.log("findTargetProduct", findTargetProduct);
  };
  // console.log("Product", product);

  // find single product function =================>



  // Return the JSX with ProductContext.Provider

  return (
    <ProductContext.Provider
      value={{
        category,
        banner,
        product,
        BASE_URL,
        trending,
        sale,
        modalProduct,
        TargetProduct,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductProvider = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider, useProductProvider };
