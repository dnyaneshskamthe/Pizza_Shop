import React from 'react'
import Allpizza from '../pizza-data'
import {Container, Row, Col} from 'react-bootstrap'
import Pizzas from '../components/Pizzas'
const Homescreen = () => {
  return (
    <>
    <Container>
        <Row>
            {Allpizza.map((pizza)=>(
                 <Col md={4}>
                     <Pizzas pizza={pizza}/>
                 </Col>
            ))}
           
        </Row>
    </Container>
    
    
    </>
  )
}

export default Homescreen