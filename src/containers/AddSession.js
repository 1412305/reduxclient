import { connect } from 'react-redux'
import { addSession } from '../actions'
import Login from '../components/Login'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (username, password) => {
      dispatch(addSession(username, password))
    }
  }
}

const AddSession = connect(
    null,
  mapDispatchToProps
)(Login)

export default AddSession