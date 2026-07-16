import { useState } from "react";

const Mylrn01 = () => {
  let unitPrice: number = 10;

  unitPrice = "Reza"
   
  return (
    <div>
      <h1>Learning React Book Review</h1>
      <p>This is a simple component for learning React.</p>
      <p>Unit Price: {unitPrice}</p>
    </div>
  );
};

export default Mylrn01;
