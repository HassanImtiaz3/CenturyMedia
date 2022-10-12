import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// import { Link } from "react-router-dom";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "bussiness",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [
    {
      source: {
        id: null,
        name: "WFLA",
      },
      author: "Nathaniel Rodriguez",
      title:
        "Hurricane Ian tracker 2 am: Life-threatening storm surge, ‘catastrophic’ winds expected in Florida - WFLA",
      description:
        "The National Hurricane Center is anticipating “life-threatening storm surge” and “catastrophic winds” as Hurricane Ian is projected to make landfall on Florida’s West Coast Wednesday.",
      url: "https://www.wfla.com/weather/tracking-the-tropics/hurricane-ian-tracker-sarasota-naples-area-under-great-threat-from-hurricane-ian/",
      urlToImage:
        "https://www.wfla.com/wp-content/uploads/sites/71/2022/09/TROPICAL-TRACK-2-16.png?w=1280",
      publishedAt: "2022-09-28T05:02:41Z",
      content:
        "TAMPA, Fla. (WFLA) The National Hurricane Center is anticipating “life-threatening storm surge” and “catastrophic winds” in Florida on Wednesday as Hurricane Ian is projected to make landfall along t… [+5059 chars]",
    },
    {
      source: {
        id: null,
        name: "Sports Illustrated",
      },
      author: "Nick Selbe",
      title:
        "Watch: Aaron Rodgers Explains Viral Jumbotron Quote After Sunday’s Win Over Bucs - Sports Illustrated",
      description:
        "Rodgers: “I thought I saw something … I don’t know if that had any real impact on that play.”",
      url: "https://www.si.com/nfl/2022/09/27/aaron-rodgers-explains-viral-jumbotron-quote-bucs",
      urlToImage:
        "https://www.si.com/.image/t_share/MTkyNjM3OTY0OTY1MTI3ODY2/aaron-rodgers.jpg",
      publishedAt: "2022-09-27T22:54:14Z",
      content:
        "Following the Packers’ 14–12 win over the Buccaneers on Sunday, quarterback Aaron Rodgers drew some raised eyebrows with his post-game comments in which he said he noticed something about the Bucs’ f… [+1788 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Seana Smith",
      title:
        "Stocks trending after hours: Goldman Sachs, Lyft, Mind Medicine and more - Yahoo Finance",
      description:
        "Big banks, Mind Medicine, and Lyft  are among the top trending stocks on Yahoo Finance on Tuesday, September 27, 2022.",
      url: "https://finance.yahoo.com/news/stocks-trending-after-hours-goldman-sachs-lyft-mind-medicine-and-more-222737818.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/O8lbogheqsF0aWL1QuemJA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-09/24334430-3eac-11ed-b3ba-28f476dc9205",
      publishedAt: "2022-09-27T22:27:37Z",
      content:
        "Goldman Sachs (GS), Morgan Stanley (MS), Bank of America (BAC), Citigroup (C): Wall Street banks were hit with $1.8 billion in fines Tuesday tied to probes into how the firms failed to monitor employ… [+1525 chars]",
    },
  ];

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - CenturyMedia`;

   

  }

  async updateMews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b92de4bff06d46b59ae7bcba79e5c876&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    // it wait till the render body work then it start
    this.updateMews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b92de4bff06d46b59ae7bcba79e5c876&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        <section>
          <div className="container my-4 " align="center">
            <h1>
              News - Top{" "}
              <span style={{ color: "red" }}>
                {this.capitalizeFirstLetter(this.props.category)}
              </span>{" "}
              Headlines
            </h1>
            <hr />
            {/* {this.state.loading && <Spinner />} */}
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner />}
            >
              <div className="container">
                <div className="row">
                  {this.state.articles.map((element, index) => {
                    return (
                      <div className="col md-4 my-1" key={index}>
                        <NewsItem
                          title={element.title ? element.title : "..."}
                          description={
                            element.title ? element.description : "..."
                          }
                          newsUrl={element.urlToImage}
                          url={element.url}
                          author={element.author ? element.author : "unknown"}
                          date={new Date(element.publishedAt).toGMTString()}
                          name={element.source.name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </InfiniteScroll>
          </div>
        </section>
      </>
    );
  }
}
