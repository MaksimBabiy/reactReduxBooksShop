import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import BookCard from '../components/BookCard'
import * as cartActions from '../actions/cart'

const mapStateToProps = ({ cart },{id}) => ({ 
    addedCount: cart.items.reduce((count, book)=> {
     return count + (book.id === id ? 1 : 0)
    },0)
  });

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
  })


export default connect(mapStateToProps,mapDispatchToProps)(BookCard)