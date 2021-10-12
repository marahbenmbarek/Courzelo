import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCourses} from '../../../redux/actions/courseAction'
import axios from 'axios'
import * as AiIcons from 'react-icons/ai'
import PaginationUsers from './paginationUsers'
// react-bootstrap components
import {
  Table,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
const initialState = {
  title: '',
  validation: '',
  err: '',
  success: ''
}
function Typography() {

const auth = useSelector(state => state.auth)
const token = useSelector(state => state.token)

const courses = useSelector(state => state.courses)

const {user, isAdmin} = auth
const [data, setData] = useState(initialState)

const [CourseImg] = useState(false)
const [ setLoading] = useState(false)
const [callback, setCallback] = useState(false)

const dispatch = useDispatch()
//pagination 
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(3);

useEffect(() => {
  dispatch(getCourses());
}, [ dispatch]);
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = courses.slice(indexOfFirstPost, indexOfLastPost);
const paginate = pageNumber => setCurrentPage(pageNumber);
const handleDelete = async (id) => {
try {

        if(window.confirm("Are you sure you want to delete this course?")){
            setLoading(true)
            await axios.delete(`course/delete/${id}`)
            setLoading(false)
            setCallback(!callback)
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
                                
                                <th>Course image </th>
                                <th>ID</th>
                                <th>Title </th>
                                <th>idUser</th>
                                <th>Validation</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentPosts.map(course => (
                                    <tr key={course._id}>
                                        <td><img src={CourseImg ? CourseImg : course.CourseImg} alt=""/></td>
                                        <td>{course._id}</td>
                                        <td>{course.title}</td>
                                        <td>{course.idUser}</td>
                                        <td>
                                            {
                                                course.validation === 1
                                                ? <AiIcons.AiOutlineCheck title="Valid"/>
                                                : <AiIcons.AiOutlineClose title="NotValid" /> 
                                            }
                                        </td>
                                        <td>
                                            <Link to={`/update_validation/${course._id}`}>
                                                <AiIcons.AiOutlineEdit title="Edit" />
                                            </Link>
                                            <AiIcons.AiOutlineDelete title="Remove"
                                            onClick={() => handleDelete(course._id)} />
                                        </td>
                                    </tr>
                                ))
                            }
                             <PaginationUsers postsPerPage={postsPerPage} totalPosts={courses.length} paginate={paginate}/>
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
export default Typography;
