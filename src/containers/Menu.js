
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Menu from '../components/Menu'
import * as cartActions from '../actions/cart'
import uniqBy from 'lodash/uniqBy'

const mapStateToProps = ({ cart ,id }) => ({ 
    totalPrice: cart.items.reduce((total,book)=> total + book.price,0),
    count: cart.items.length,
    items: uniqBy(cart.items, c => c.id),
    countItems: JSON.stringify(
      cart.items.reduce((acc, el) => {
        acc[el.title] = (acc[el.title] || 0) + 1;
        return acc;
      }, {}), null, 2)
 }
)

    
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
  })
export default connect(mapStateToProps,mapDispatchToProps)(Menu)