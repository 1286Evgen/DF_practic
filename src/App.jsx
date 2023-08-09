import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  About,
  AddProd,
  Auth,
  Basket, 
  Delivery,
  Home,
  Products,
  Profile,
  SingleProd
} from "./pages";
import Main from "./context/main";
import Api from "./Api";

import Header from "./components/Header";
import Footer from "./components/Footer";

import staticNews from "./assets/data/news.json";

function App() {
  let news_1 = sessionStorage.getItem("dog-news");
  if (news_1) {
    news_1 = JSON.parse(news_1);
  };

  let news_2 = sessionStorage.getItem("lenta-news");
  if (news_2) {
    news_2 = JSON.parse(news_2);
  };

  const [news, setNews] = useState(news_1 || []);
  const [newsLenta, setNewsLenta] = useState(news_2 || []);
  const [token, setToken] = useState(localStorage.getItem("user-token"));
  const [userId, setUserId] = useState(localStorage.getItem("user-id"));
  const [api, setApi] = useState(new Api(token));
  const [screen, setScreen] = useState(window.innerWidth)

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      if (!news.length) {
        fetch(`https://newsapi.org/v2/everything?q=собаки&apiKey=e14179669afd4dbfb8fc853dc7f67c0e`)
          .then(res => res.json())
          .then(data => {
            const result = data.articles.filter(el => el.source.name === "Techinsider.ru");
            sessionStorage.setItem("dogs-news", JSON.stringify(result));
            setNews(result);
          })
      }
      if (!newsLenta.length) {
        fetch(`https://newsapi.org/v2/everything?q=собаки&sources=lenta&apiKey=e14179669afd4dbfb8fc853dc7f67c0e`)
          .then(res => res.json())
          .then(data => {
            sessionStorage.setItem("lenta-news", JSON.stringify(data.articles));
            setNewsLenta(data.articles);
          })
      }
    }
    else {
      setNews(staticNews);
    }
    window.addEventListener("resize", () => {
      setScreen(window.innerWidth);
    })
  }, []);

  useEffect(() => {
    setApi(new Api(token))
  }, [token])

  useEffect(() => {
    setToken(localStorage.getItem("user-token"))
  }, [userId])

  const mainCtx = {
    news,
    newsLenta,
    api,
    userId,
    setUserId,
    screen
  }

  return (
    <Main.Provider value={mainCtx}>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/category/:name" element={<Products isCat={true}/>}/>
          <Route path="/products/favorites" element={<Products isFav={true}/>}/>
          <Route path="/product/:id" element={<SingleProd/>}/>
          <Route path="/product/add" element={<AddProd/>}/>
          <Route path="/basket" element={<Basket/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/delivery" element={<Delivery/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </main>
      <Footer/>
    </Main.Provider>
  );
}

export default App;