import React, {Component} from 'react'
import './pages.css'
import Page from './page'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import values from 'lodash/values'
import * as actions from '../../business/actions/index.js'
const BOOK_ID = 157

class BookRoute extends Component{
    componentWillMount() {
        !this.props.location.pathname.match(/\/books\//)&&
            this.props.actions.genPages("1_42", BOOK_ID)
    }
    componentDidMount() {
       window.scrollTo(0,0);
    }
    render(){
        let {bookId, book} = this.props
        console.log("my book", book)
        let gift, data = [], bData
        if(book[bookId]){
            data = values(book[bookId].pages)
            const {pages, ...rest} = book[bookId]
            bData=rest
        }
        let pages = [{type: "colorChooser"}].concat(data)
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


