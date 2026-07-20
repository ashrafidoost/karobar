const Mylrn01 = () => {
  const unitPrice: number[] = [0, 1, 2, 3, 5, 8, 13, 21];

  type product = { name: string; unitPrice?: number; discount?: number };

  type Purchase = (quantity: number) => void;

  type productLux = product & {
    brand?: string;
    madein: string;
    purchase: Purchase;
  };

  const table: productLux = {
    name: "Computer",
    unitPrice: 150,
    discount: 80,
    brand: "Dell",
    madein: "USA",
    purchase: (quantity: number) => {
      console.log(`Purchased ${quantity} units of ${table.name}`);
    },
  };

  return (
    <div>
      <h1>Learning React Book Review</h1>
      <p>This is a simple component for learning React.</p>
      <p>
        Unit Price: {table.name} - {table.unitPrice} -- {table.discount ?? 0} -------- {table.brand} - {table.madein}
      </p>
      <p>Price list: {unitPrice.join(", ")}</p>
    </div>
  );
};

export default Mylrn01;
