import React, {useEffect}from 'react'
// import Allpizza from '../pizza-data'
import {useDispatch,useSelector} from 'react-redux'
import {Container, Row, Col} from 'react-bootstrap'
import Pizzas from '../components/Pizzas'
import {getAllPizzas} from '../actions/pizzaAction'

const Homescreen = () => {
  const dispatch=useDispatch()
  const pizzastate=useSelector(state=>state.getAllPizaaReducer)
  const {loading,pizzas,error}=pizzastate

  useEffect(()=>{
    dispatch(getAllPizzas());
  },[dispatch]);
  return (
    <>
    <Container>
      {
        loading? (<h1>Loading....</h1>)
                :error?(<h1>Error while fetching</h1>)
                :(<Row>
                  {pizzas.map((pizza)=>(
                       <Col md={4}>
                           <Pizzas pizza={pizza}/>
                       </Col>
                  ))}
                 
              </Row>)
      }
        
    </Container>
    
    
    </>
  )
}

export default Homescreen