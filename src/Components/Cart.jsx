import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const Cart=()=> {
    const myCartData=useSelector((state)=>state.myCart.cart)
    const cartItem=myCartData.map((key)=>{
        return(
            <tbody>
            <tr>
            <td>{key.image}</td>
            <td>{key.brand}</td>
            <td>{key.price}</td>
            <td>{key.description}</td>
            
            </tr>
            </tbody>
        )
    })
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>About</th>
          <th>Price</th>
        </tr>
      </thead>
      {cartItem}
    </Table>
  );
}

export default Cart;