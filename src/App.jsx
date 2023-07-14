import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";

import BookmarkPage from "./Pages/BookmarkPage";
import ProductListPage from "./Pages/ProductListPage";
import MainPage from "./Pages/MainPage";
import BookmarkBtn from "./components/BookmarkBtn";

// 임시

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <BookmarkBtn />
        <MainPage />
        <Routes>
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/productlistpage" component={ProductListPage}></Route>
          <Route path="/bookmarkpage" component={BookmarkPage}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
