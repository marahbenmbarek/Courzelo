import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllUsers, dispatchGetAllUsers} from '../../../redux/actions/usersAction'
import axios from 'axios'
import * as AiIcons from 'react-icons/ai'
import PaginationUsers from './paginationUsers'
// react-bootstrap components
import {

  Card,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const initialState = {
  name: '',
  password: '',
  cf_password: '',
  err: '',
  success: ''
}

function TableList() {
  const auth = useSelector(state => state.auth)
  const token = useSelector(state => state.token)

  const users = useSelector(state => state.users)

  const {user, isAdmin} = auth
  const [data, setData] = useState(initialState)

  const [avatar] = useState(false)
  const [ setLoading] = useState(false)
  const [callback, setCallback] = useState(false)
  const dispatch = useDispatch()
  //pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);



useEffect(() => {
    if(isAdmin){
        fetchAllUsers(token).then(res =>{
            dispatch(dispatchGetAllUsers(res))
        })
    }
},[token, isAdmin, dispatch, callback])

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
const paginate = pageNumber => setCurrentPage(pageNumber);
const handleDelete = async (id) => {
  try {
      if(user._id !== id){
          if(window.confirm("Are you sure you want to delete this account?")){
              setLoading(true)
              await axios.delete(`/user/delete/${id}`, {
                  headers: {Authorization: token}
              })
              setLoading(false)
              setCallback(!callback)
          }
      }
      
  } catch (err) {
      setData({...data, err: err.response.data.msg , success: ''})
  }
}
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Table on Plain Background</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                <thead>
                            <tr>
                                
                                <th>Avatar</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentPosts.map(user => (
                                    <tr key={user._id}>
                                        <td><img src={avatar ? avatar : user.avatar} alt=""/></td>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {
                                                user.role === 1
                                                ? <AiIcons.AiOutlineCheck title="Admin"/>
                                                : <AiIcons.AiOutlineClose title="User" /> 
                                            }
                                        </td>
                                        <td>
                                            <Link to={`/edit_user/${user._id}`}>
                                                <AiIcons.AiOutlineEdit title="Edit" />
                                            </Link>
                                            <AiIcons.AiOutlineDelete title="Remove"
                                            onClick={() => handleDelete(user._id)} />
                                        </td>
                                    </tr>
                                ))
                            }
                            <PaginationUsers postsPerPage={postsPerPage} totalPosts={users.length} paginate={paginate}/>
                        </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
