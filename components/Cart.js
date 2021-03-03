import styled from "styled-components";
import { FiX } from 'react-icons/fi';
import useCart from "../hooks/useCart";

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  background: white;
  width: 300px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transform: translateX(${props => props.isOpen ? '0' : '100%' });
  transition: transform 0.2s ease-in;
`;

const XIcon = styled(FiX)`
  font-size: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const XIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.div`
  padding: 1rem 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  border-bottom: 2px solid #f1f1f1;
`;

const Ulist = styled.ul`
  padding-left: 0;
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #f1f1f1;
  padding: 0.5rem 0;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Button = styled.button`
  background: #DDD9D4;
  font-size: 1.2rem;
  color: inherit;
  outline: none;
  border: none;
  margin-top: 1rem;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  color: #fff;

  &:hover {
    opacity: 0.85;
  }
`;

const Cart = () => {
  const { cart, isOpen, openCart, closeCart } = useCart();
  const handleClick = () => {
    closeCart();
  };
  return (
    <Container isOpen={isOpen}>
      <XIconContainer>
        <XIcon onClick={handleClick} />
      </XIconContainer>
      <Content>
        <Title>Cart</Title>
        <Ulist>
          {cart.map(item => {
            return (
              <Item>
                <span>{item.qty} x {item.name}</span>
                <span>${item.price/100}</span>
              </Item>
            )
          })}
        </Ulist>

        <Total>
          <span>Total</span>
          <span>$500</span>
        </Total>

        <Button>Checkout</Button>
      </Content>
    </Container>
  );
};

export default Cart;