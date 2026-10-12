import { useState } from "react";

function InputDisplay() {
  const [name, setName] = useState("Guest");
  const [payment, setPayment] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handlePaymentChange = (e) => setPayment(e.target.value);
  return (
    <>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name:{name}</p>

      <select name="Select payment" onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="cash">Cash</option>
        <option value="credit card">Credit Card</option>
      </select>
      <p>Payment: {payment}</p>
    </>
  );
}
export default InputDisplay;
