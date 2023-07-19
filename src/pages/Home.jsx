import { useContext } from "react";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Adds from "../components/Adds";
import News from "../components/News";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

import MainCtx from "../context/main";

import bannersData from "../assets/data/banners.json";
import addsData from "../assets/data/adds.json";
import goodsData from "../assets/data/goods.json";

export function Home () {
    const { news } = useContext(MainCtx);
    const { newsLenta } = useContext(MainCtx);
    const favGoods = goodsData.filter(el => el.reviews.length !== 0).sort((a,b) => {
        return (
            b.reviews.reduce((acc, el) => acc + el.rating, 0)/b.reviews.length -
            a.reviews.reduce((acc, el) => acc + el.rating, 0)/a.reviews.length 
        )
    })
    const newGoods = [...goodsData].sort((a,b) => {
        return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
    })

    return ( 
        <>
            <Banner {...bannersData[0]} pattern={false} bgPos="0 20%"/> 
            <Layout>
                <Adds {...addsData[0]} pattern={false}/>
            </Layout>
            {newGoods.length > 0 && 
            <Layout dt={4} mb={2} title="Новинки">
                {newGoods.map(el => <Card key={el._id} {...el}/>)}
            </Layout>}
            {news.length > 0 && 
            <Layout mb={2} dt={4} title="Последние новости">
                <Carousel 
                data={news.map((el, i) => <News key={`new-${i}`} data={el} isTitled={true}/>)}
                cnt={window.innerWidth < 1064 ? 2 : 4}
                />
            </Layout>}
            <Layout dt={2}>
                <Adds {...addsData[1]}/>
                <Adds {...addsData[2]}/>
            </Layout>
            {favGoods.length > 0 && 
            <Layout dt={4} mb={2} title="Популярные товары">
                {favGoods.map(el => <Card key={el._id} {...el}/>)}
            </Layout>}
            <Layout mb={1} dt={2} title="Новости Lenta.ru">
                {newsLenta.length > 0 && <Carousel 
                data={newsLenta.map((el, i) => <News key={`new-${i}`} data={el}/>)}
                cnt={window.innerWidth < 1064 ? 1 : 2}
                />}
            </Layout>
            <Layout dt={2}>
                <Adds {...addsData[3]}/>
                <Adds {...addsData[4]}/>
            </Layout>
            {goodsData.length > 0 && 
            <Layout dt={4} mb={2} title="Недавно просмотренные товары">
                {goodsData.map(el => <Card key={el._id} {...el}/>)}
            </Layout>}
            <Layout>
                <Adds {...addsData[5]}/>
            </Layout>
        </>
    )
}