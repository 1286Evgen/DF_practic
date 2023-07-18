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
    return ( 
        <>
            <Banner {...bannersData[0]} pattern={false} bgPos="0 20%"/> 
            <Layout>
                <Adds {...addsData[0]} pattern={false}/>
            </Layout>
            {goodsData.length > 0 && 
            <Layout dt={4} mb={2} title="Новинки">
                {goodsData.map(el => <Card rey={el._id} {...el}/>)}
            </Layout>
            }
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
            {goodsData.length > 0 && 
            <Layout dt={4} mb={2} title="Популярные товары">
                {goodsData.map(el => <Card rey={el._id} {...el}/>)}
            </Layout>
            }
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
        </>
    )
}