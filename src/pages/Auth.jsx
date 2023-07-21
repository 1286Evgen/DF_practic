import {
    Input,
    Search,
    Select,
    Textarea
} from "../components/Form";
import Layout from "../components/Layout";

export function Auth () {
    return (
    <Layout>
        <h1>Страница авториции</h1>
        <div>
            <Input/>
            <Select values={[1,2,3,4]}/>
            <Textarea/>
            <Search/>
        </div>
    </Layout>
    )
}