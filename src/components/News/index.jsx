import "./index.css";

const News = ({data, isTitled=false}) => {
    return (
        <a className="news" target="_blank" href={data.url} rel="noreferrer">
            <img className="news__img" src={data.urlToImage} alt={data.title}/>
            <span className="news__content">
                {isTitled && <span className="news__title">{data.title}</span>}
                <span className="news__date">{new Date(data.publishedAt).toLocaleString()}</span>
            </span>
        </a>
    )
}

export default News;