import { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping cart · Order
  const [order, setOrder] = useState([]);

  // Get Products
  const [items, setItems] = useState([]);

  // Filtered items
  const [filteredItems, setFilteredItems] = useState([]);

  // Search by Title and Category
  const [searchByTitle, setSearchByTitle] = useState("");
  const [searchByCategory, setSearchByCategory] = useState("");

  // Fetch Products
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  // Filter Functions
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    switch (searchType) {
      case 'BY_TITLE':
        return filteredItemsByTitle(items, searchByTitle);
      case 'BY_CATEGORY':
        return filteredItemsByCategory(items, searchByCategory);
      case 'BY_TITLE_AND_BY_CATEGORY':
        return filteredItemsByCategory(items, searchByCategory).filter(item =>
          item.title.toLowerCase().includes(searchByTitle.toLowerCase())
        );
      default:
        return items;
    }
  };

  // Update filteredItems whenever items, searchByTitle, or searchByCategory changes
  useEffect(() => {
    const searchType = searchByTitle && searchByCategory
      ? 'BY_TITLE_AND_BY_CATEGORY'
      : searchByTitle
      ? 'BY_TITLE'
      : searchByCategory
      ? 'BY_CATEGORY'
      : '';

    setFilteredItems(filterBy(searchType, items, searchByTitle, searchByCategory));
  }, [items, searchByTitle, searchByCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
