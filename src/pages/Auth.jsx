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
            <hr/>
            <Select values={[1,2,3,4]}/>
            <hr/>
            <Textarea/>
            <hr/>
            <Search/>
        </div>
    </Layout>
    )
}