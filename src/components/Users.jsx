import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from '../redux/actions/userActions';

function Users() {
    const dispatch = useDispatch();
    const { loading, err , users} = useSelector((state) => state.users)
    // console.log(loading, err,users)

    useEffect(()=>{
        dispatch(userAction())
    }, [])

  return (
    <div>Users</div>
  )
}

export default Users