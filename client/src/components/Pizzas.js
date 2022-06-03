import React ,{useState}from 'react'
import {Card,Button,Row,Col} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
const Pizzas = ({pizza}) => {
    const [varient,setVarient]=useState('small');
    const [quantity,setQuantity]=useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  


    return (
    <>
        <Card style={{ width: '20rem', marginTop:'1rem' }}>
  <Card.Img variant="top" 
  src={pizza.image} 
  style={{height:'20rem',width: '20rem',cursor:'pointer'}}
  onClick={handleShow}/>
  <Card.Body>
    <Card.Title>{pizza.name}</Card.Title><hr/>
    <Card.Text>
      <Row>
          <Col md={6}>
              <h6>Varient</h6>
              <select value={varient} onChange={e=>setVarient(e.target.value)}>
                  {pizza.varients.map((varient)=>(
                      <option  >{varient}</option>
                  ))}
              </select>
          </Col>
          <Col md={6}>
                <h6>Quantity</h6>
                <select value={quantity} onChange={e=>setQuantity(e.target.value)}>
                    {[...Array(10).keys()].map((val,ind)=>(
                        <option  >{ind+1}</option>
                    ))}
                </select>
          </Col>
      </Row>
    </Card.Text>
    <Row>
        <Col md={6}>Price:{pizza.prices[0][varient]*quantity}</Col>
        <Col md={6}>
            <Button className="bg-warning text-dark">Add To Cart</Button>
        </Col>
    </Row>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
{/* modal */}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <Card.Img variant="top" 
                src={pizza.image} 
                style={{height:'20rem'}}/>
            </div>
            <div>
                <h5>Description</h5>
                <h6>{pizza.description}</h6>
            </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Pizzas