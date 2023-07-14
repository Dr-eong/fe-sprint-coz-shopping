import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
// import Header from "./Header";
// import BookmarkPage from "./Pages/BookmarkPage";
// import ProductListPage from "./Pages/ProductListPage";
// import MainPage from "./Pages/MainPage";
import BookmarkBtn from "./components/BookmarkBtn";
import ProductCard from "./components/ProductCard";
import axios from "axios";

axios
  .get("http://cozshopping.codestates-seb.link/api/v1/products")
  .then((res) => console.log(res.data));

function App() {
  return (
    <>
      <ProductCard />
      <BookmarkBtn />
    </>
  );
}

export default App;
/*<>
      <BrowserRouter>
        <Header />
        <ProductCard />
        <Routes>
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/productlistpage" component={ProductListPage}></Route>
          <Route path="/bookmarkpage" component={BookmarkPage}></Route>
        </Routes>
      </BrowserRouter>
  </>*/
