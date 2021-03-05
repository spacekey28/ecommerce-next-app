import { useEffect } from "react";
import Page from "../components/styled/Page";
import useCart from "../hooks/useCart";

const Success = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <Page>
      <h1>Payment Succeessful</h1>
      <p>Thank you for your purchase.</p>
    </Page>
  );
}

export default Success;
