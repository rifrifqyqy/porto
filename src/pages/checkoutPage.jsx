import { useParams } from "react-router-dom";
export default function CheckoutPage() {
  const { id } = useParams();
  return (
    <>
      page checkout
      <div>{id}</div>
    </>
  );
}
