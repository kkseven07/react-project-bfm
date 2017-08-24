import React from "react";
import Page from "./page";
import { connect } from "react-redux";
import * as actions from "../../business/actions";
import { bindActionCreators } from "redux";
import values from "lodash/values";
class Print extends React.Component {
    componentWillMount() {
        const { book_id, type } = this.props.match.params;
        let book = JSON.parse(localStorage.getItem("bookKey_" + book_id));
        if (book) {
            console.log("getting book from cache");
            this.props.actions.loadFromCache(book);
        } else {
            this.props.actions.getBook(book_id, true);
        }
    }
    componentDidMount() {
        const { book_id, type } = this.props.match.params;
        if (type === "endPage") {
            localStorage.removeItem("bookKey_" + book_id);
            // localStorage.clear()
        }
    }

    render() {
        const { book_id, type } = this.props.match.params;
        console.log(type);
        let { bookId, book } = this.props;
        console.log(book);
        if (!book[bookId]) return null;
        const { pages, ...rest } = book[book_id];
        const bData = rest;
        const page = values(pages).filter(page => page.type === type)[0];

        if (type.indexOf("-") > -1) {
            //condition for booklet print
            let typePair = type
                .split("-")
                .map(
                    type => values(pages).filter(page => page.type === type)[0]
                );
            return (
                <div className="flex" style={{ width: 1896 }}>
                    <div style={{width:'948px', height:'976px', overflow:'hidden' }}>
                        <Page
                            id={`${typePair[0].type}`}
                            url={this.props.url}
                            print
                            book={bData}
                            page={typePair[0]}

                        />
                    </div>
                    <div style={{
                        width:'948px',
                        height:'976px',
                        overflow:'hidden',
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'flex-end'
                    }}>
                        <Page
                            id={`${typePair[1].type}`}
                            url={this.props.url}
                            print
                            book={bData}
                            page={typePair[1]}
                            // style={{width:'1197px', height:'1220px' }}
                        />
                    </div>

                </div>
            );
        }

        if (type !== "all") {
            return (
                <Page
                    id={`${page.type}`}
                    url={this.props.url}
                    digital
                    book={bData}
                    page={page}
                />
            );
        }

        return (
            <div style={{ width: 7048, display: "flex", flexWrap: "wrap" }}>
                {values(pages).map(page => {
                    return (
                        <Page
                            key={page.type}
                            id={`${page.type}`}
                            url={this.props.url}
                            print
                            book={bData}
                            page={page}
                        />
                    );
                })}

            </div>
        );
    }
}
const mapStateToProps = state => ({
    url: state.init.url,
    book: state.book,
    bookId: state.book.currentBookId
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Print);
// return (

//                 <Page id={`${page.type}`} url={this.props.url} print book={bData} page={page} />
//         )
