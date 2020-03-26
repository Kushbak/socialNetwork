import Users from './Users';
import { UnfollowAC, FollowAC, setUsersAC } from '../../redux/usersReducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        follow: (userID) => {
            dispatch(FollowAC(userID));
        },
        unFollow: (userID) => {
            dispatch(UnfollowAC(userID) );
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;


