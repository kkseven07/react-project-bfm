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
    componentDidMount(){
        const { book_id, type } = this.props.match.params;
        if(type==="endPage"){
            localStorage.removeItem("bookKey_"+book_id)
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
        // const uploads = values(pages)
        //     .filter(
        //         page =>
        //             page.type === "framefridge" ||
        //             page.type === "pastPhoto" ||
        //             page.type === "relaxPhoto"
        //     )
        //     .map(page => "https://www.bookfrom.me"+page.data.image_url);

        // if (type === "initmister") {
        //     return (
        //         <div>
        //             {uploads.map(
        //                 url =>
        //                     url &&
        //                     <img
        //                         key={url}
        //                         src={url}
        //                         style={{ width: 300, height: 300 }}
        //                     />
        //             )}
        //         </div>
        //     );
        // }
        return (
            <Page
                id={`${page.type}`}
                url={this.props.url}
                print
                book={bData}
                page={page}
            />
        );
        // return (
        //     <div style={{ width: 7048, display: "flex", flexWrap: "wrap" }}>
        //         {page.map(page => {
        //             return (
        //                 <Page
        //                     key={page.type}
        //                     id={`${page.type}`}
        //                     url={this.props.url}
        //                     print
        //                     book={bData}
        //                     page={page}
        //                 />
        //             );
        //         })}

        //     </div>
        // );
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
