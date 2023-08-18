import React, { useState } from 'react';


interface Product {
  name: string;
  description: string;
  price: string;
}

const ProductForm: React.FC = () => {
  const [productData, setProductData] = useState<Product>({
    name: '',
    description: '',
    price: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setProductData({
      name: '',
      description: '',
      price: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm