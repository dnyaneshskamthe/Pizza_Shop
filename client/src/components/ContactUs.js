import React from 'react'
import {Container,Row,Col,Table,Image} from 'react-bootstrap'
import {FcPhone} from 'react-icons/fc'
import {GiSmartphone} from 'react-icons/gi'
import {AiOutlineMail} from 'react-icons/ai'

const ContactUs = () => {
  return (
    <>
        <Container syle={{marginTop:'50px'}}>
            <Row>
                <Col md-6>
                    <h1>Dnyanesh-Pizza Shop</h1>
                    <p>dolor sit dolor amet lorem elit lorem amet adipisicing adipisicing consectetur elit ipsum consectetur consectetur dolor lorem adipisicing consectetur sit adipisicing. lorem adipisicing amet dolor consectetur sit consectetur amet sit adipisicing consectetur ipsum lorem dolor ipsum lorem amet sit sit. consectetur sit amet elit elit lorem ipsum adipisicing dolor consectetur amet amet elit consectetur consectetur ipsum sit lorem ipsum amet adipisicing. adipisicing elit dolor amet ipsum consectetur adipisicing sit sit consectetur amet amet lorem consectetur lorem sit amet. lorem adipisicing adipisicing elit dolor amet consectetur consectetur ipsum sit elit amet consectetur elit amet elit dolor elit elit. sit amet adipisicing amet amet consectetur consectetur amet amet dolor lorem consectetur sit sit sit amet consectetur lorem ipsum sit.</p>
                    <Table striped bordered hover className='text-center'>
                    <thead>
                        <tr>
                        <th className="bg-warning" colSpan={3}>Contact Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><FcPhone/></td>
                        <td>Phone</td>
                        <td>0123-456789</td>     
                        </tr>
                        <tr>
                        <td><GiSmartphone/></td>
                        <td>Mobile</td>
                        <td>1234567890</td>     
                        </tr>
                        <tr>
                        <td><AiOutlineMail/></td>
                        <td>Email</td>
                        <td>help@dnyaneshpizza.com</td>     
                        </tr>
                        
                        
                    </tbody>
                    </Table>
                </Col>
                <Col md-6>
                    <Image src='images/farmhouse.jpg' style={{marginTop:'50px'}}/>
                </Col>
            </Row>



        </Container>
    
    </>



  )
}

export default ContactUs