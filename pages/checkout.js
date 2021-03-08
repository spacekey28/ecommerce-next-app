import Page from "../components/styled/Page";
import useCart from "../hooks/useCart";
import styled from "styled-components";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

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

const Checkout = () => {
  const { cart, total } = useCart();

  const processPayment = async () => {
    const url = '/.netlify/functions/charge-card';
    const newCart = cart.map(({ id, qty }) => ({
      id,
      qty,
    }));

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    const { data } = await axios.post(url, { cart: newCart });
    await stripe.redirectToCheckout({ sessionId: data.id });
  }


  return (
    <Page>
      <h1>Checkout</h1>
      {cart.length > 0 ? (
        <>
          <Ulist>
            {cart.map(item => {
              return (
                <Item>
                  <span>{item.qty} x {item.name}</span>
                  <span>${item.price / 100}</span>
                </Item>
              )
            })}
          </Ulist>

          <Total>
            <span>Total</span>
            <span>${total/100}</span>
          </Total>

          <Button onClick={processPayment}>Process Payment</Button>
        </>
      ) : (
        <p>You do not appear to have any items in your cart!</p>
      )}
    </Page>
  );
}

export default Checkout;