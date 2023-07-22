import Layout from "../components/Layout";
import { useParams } from "react-router-dom"

export function Products ({
    isFav = false,
    isCat = false
}) {
    const {name}  = useParams();
    return <Layout>
        {isFav && <h1>Любимые товары</h1>}
        {isCat && <h1>Страница категории "{name}"</h1>}
        {!isFav && !isCat && <h1>Каталог</h1>}
    </Layout>
}