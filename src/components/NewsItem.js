import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, newsUrl, url, author, date, name } = this.props;

    return (
      <section>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !newsUrl
                ? "https://www.wfla.com/wp-content/uploads/sites/71/2022/09/TROPICAL-TRACK-2-16.png?w=1280"
                : newsUrl
            }
            className="card-img-top"
            alt="..."
            loading="lazy"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <h6>
              <span className="badge bg-danger">{name}</span>
            </h6>
            <p className="card-text">
              <small className="text-muted">
                By Author: {author} on {date}
              </small>
            </p>
            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    );
  }
}
