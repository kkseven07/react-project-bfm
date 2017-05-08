import React, {Component} from 'react'
import './pages.css'
import Page from './page/zpage.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import values from 'lodash/values'
import * as actions from '../../business/actions/index.js'
const BOOK_ID = 21

class BookRoute extends Component{  
    componentWillMount() {
        !this.props.location.pathname.match(/\/books\//)&&
            this.props.actions.genPages("2_46", BOOK_ID)
    // console.log(this.props.location)
    }
    render(){
        let {bookId, book} = this.props
        console.log("bookid", bookId)
        console.log("my book", book)
        let gift, data = [], bData
        if(book[bookId]){
            data = values(book[bookId].pages)
            const {pages, ...rest} = book[bookId]
            bData=rest
        }
        let pages = data
        // let pages = [{type: "colorChooser"}].concat(data)
        // console.log(pages)
        return (
          <div style={{backgroundColor:"white",paddingBottom:50}}>
            {book[bookId]&&<div styleName="root">
              {
                pages.map((page,i)=>
                  <Page
                    actions={this.props.actions}
                    book={bData}
                    id={page.type}
                    page={page}
                    key={i}
                    />)
              }
              </div>
            }
          </div>
        );
    }
}
const mapStateToProps = (state) => ({
  book: state.book,
  bookId: state.book.currentBookId,
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookRoute)


