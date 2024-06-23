import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TopContent from './TopContent';
const TopNav=()=>{
    return(
      <>
      <Container fluid className='bg-black'>
      <Row>
        <TopContent/>
      </Row>
    </Container>
      </>
    )
  }
  export default TopNav; 