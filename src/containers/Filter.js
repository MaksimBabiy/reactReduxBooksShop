import * as filterActions from '../actions/filter'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Filter from '../components/Filter'

const mapStateToProps = ({ filterBy, books }) => ({ 
    filterBy: books.filterBy
  });

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch)
  })


export default connect(mapStateToProps,mapDispatchToProps)(Filter)