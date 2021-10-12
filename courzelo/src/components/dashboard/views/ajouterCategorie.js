import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCategorie } from '../../../redux/actions/categorieAction';
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col,
  } from "react-bootstrap";

  
  
 
function AjouterCategorie() {

    const token = useSelector(state => state.token);
    console.log('test1',token);
    const dispatch = useDispatch();
    const [postcourse, setCourseData] = useState({ name: '', description: '' });
    const handleSubmit = async (e) => {
        e.preventDefault();
    console.log(postcourse);
      
          dispatch(addCategorie(token,postcourse));
        
      };

  return (
   <div> 
      <>
     
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add Categorie</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>name </label>
                        <Form.Control
                          defaultValue=""
                          onChange={(e) => setCourseData({ ...postcourse, name: e.target.value })}
                          placeholder="name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label defaultValue="this is a software categorie">
                         description
                        </label>
                        <Form.Control
                        defaultValue=""
                          onChange={(e) => setCourseData({ ...postcourse, description: e.target.value })}
                          placeholder="description"
                          type="description"
                         
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    </Row>
                    
                
                  <Row>
                   
                 
                    
                   

                  
                </Row>

                 
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  
                  >
                    Add Categorie
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
        </Container>
    </>
    </div>
  );
  }
export default AjouterCategorie;
