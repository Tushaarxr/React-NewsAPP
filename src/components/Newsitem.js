import React from 'react'


const Newsitem = (props) => {
    let { title, description, urlToImage, url, author, date, source } = props;
    return (
        <div className='my-3 mx-2'>
            <div className="card" >
                <div className="container">
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '50%', zIndex: '1' }}>
                        {source ? source : "Unknown"}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>

                <img src={!urlToImage ? "https://demofree.sirv.com/nope-not-here.jpg" : urlToImage} className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {date ? date : "Unknown"}</small></p>
                    <a href={url} className="btn btn-dark" target='_blank' rel='noopener noreferrer'>Read more</a>
                </div>
            </div>

        </div>
    )

}

export default Newsitem

// https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pagesize}
