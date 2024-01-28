import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const BASE_URL = "http://localhost:1337";
  const CATEGORIES = "/api/Categories";
  const BANNER = "/api/Banners";
  const PRODUCTS = "/api/Products";
  const SHIPPING = "/api/free-shipping";

  const [category, setCategory] = useState();
  const [banner, setBanner] = useState();
  const [product, setProduct] = useState();
  const [trending, setTrending] = useState();
  const [sale, setSale] = useState();
  const [modalProduct, setModalProduct] = useState();
  const [singleProduct, setSingleProduct] = useState();
  const [cart, setCart] = useState([]);
  const [cartLoaded, setCartLoaded] = useState(false);
  const [sales, setSales] = useState();
  const [shipping, setShipping] = useState();
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

  // fetch category data =============================>

  const getfreeShipping = async () => {
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
        `${BASE_URL}${SHIPPING}?populate=*`,
        options
      );
      const response = await fetchCategory.json();
      setShipping((items) => response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log("ship", shipping?.attributes.amount)
  useEffect(() => {
    getCate();
    getBanner();
    getProduct();
    getfreeShipping();
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
      // console.log("trend=======>>>>>>", saleProduct);
      if (saleProduct) {
        setSale(saleProduct);
      }
    }
  }, [product]);

  // product modal function =================>
  useEffect(() => {
    setModalProduct(JSON.parse(localStorage.getItem("targetProduct")));
  }, []);

  const TargetProduct = (createdAt) => {
    const findTargetProduct = product.find(
      (items) => items.attributes.createdAt === createdAt
    );
    localStorage.setItem("targetProduct", JSON.stringify(findTargetProduct));

    setModalProduct(findTargetProduct);
    // console.log("findTargetProduct", findTargetProduct);
  };
  console.log("Product", product);

  // find single product function =================>

  useEffect(() => {
    setSingleProduct(JSON.parse(localStorage.getItem("SingleProduct")));
  }, []);

  const getSingleProduct = (createdAt) => {
    const getData = product.find(
      (item) => item.attributes.createdAt === createdAt
    );
    localStorage.setItem("SingleProduct", JSON.stringify(getData));
    setSingleProduct(getData);
    TargetProduct(createdAt);
  };

  // console.log("singleProduct", singleProduct);

  // Add to cart function =================>

  const findCart = (createdAt) => {
    const data = product.find(
      (item) => item.attributes.createdAt === createdAt
    );

    // find duplicate in cart ===>
    const findDuplicate = cart.some(
      (item) => item.data.attributes.createdAt === createdAt
    );

    if (!findDuplicate) {
      setCart((prevItem) => [
        ...prevItem,
        {
          data: {
            ...data,
            attributes: {
              ...data.attributes,
              quantity: 1,
              stocks: data.attributes.stocks -1,
            },
          },
        },
      ]);
    } else {
      setCart((prevItem) =>
        prevItem.map((item) =>
          item.data.attributes.createdAt === createdAt
            ? {
                ...item,
                data: {
                  ...item.data,
                  attributes: {
                    ...item.data.attributes,
                    quantity: item.data.attributes.quantity + 1,
                    stocks: item.data.attributes.stocks - 1,
                  },
                },
              }
            : item
        )
      );
    }

    setProduct((PrevItem) =>
      PrevItem.map((items) =>
        items?.attributes?.createdAt === createdAt
          ? {
              ...items,
              attributes: {
                ...items.attributes,
                stocks: items.attributes.stocks - 1,
              },
            }
          : items
      )
    );
  };

  console.log("cart", cart);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("cartData"));
    const getProduct = JSON.parse(localStorage.getItem("allproducts"));
    setCart(getData);
    setProduct(getProduct);
    setCartLoaded(true);
  }, []);

  useEffect(() => {
    if (cartLoaded) {
      localStorage.setItem("cartData", JSON.stringify(cart));
      localStorage.setItem("allproducts", JSON.stringify(product));
    }
  }, [cart, product]);

  // Remove to cart function =========================>

  const RemoveSingle = (createdAt) => {
    const findData = cart.filter(
      (item) => item.data.attributes.createdAt !== createdAt
    );
    setCart(findData);
  };

  // filter by sale, trending & feature ==============>

  const saleFilter = () => {
    const filterSale = product?.filter(
      (items) => items.data?.attributes.sale === true
    );
    setSales(filterSale);
  };

  // Get total Price ==============>

  const subTotal = cart.reduce((acc, obj) => {
    return acc + obj.data.attributes.offerPrice * obj.data.attributes.quantity;
  }, 0);

  console.log("subTotal", subTotal);
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
        singleProduct,
        cart,
        subTotal,
        shipping,
        TargetProduct,
        getSingleProduct,
        findCart,
        RemoveSingle,
        saleFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductProvider = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider, useProductProvider };
