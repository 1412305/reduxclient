import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: (state.session !== 'anonymous') ? true : false
  }
}

const Nav = connect(
  mapStateToProps,
  null
)(Navbar)

export default Nav