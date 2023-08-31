import React, { useState } from 'react';
import { addorEditLink } from '../firebase';
import { getProducts, onUpdate } from '../firebase';
import { useAppSelector, useAppDispatch } from '../hooks/hooksRedux';
import { ProductsUpdater } from '../redux/products/actions';

interface Product {
  name: string;
  description: string;
  price: string;
  createdAt: Date
}

const ProductForm: React.FC = () => {
  const currentDateTime = new Date();

  
  const dispatch = useAppDispatch()

  const getData = async () =>{
    const productsData = await getProducts()
    const productsArray = productsData.docs.map((doc) => ({id: doc.id, ...doc.data()}))
    dispatch(ProductsUpdater(productsArray))
  }


  const [productData, setProductData] = useState<Product>({
    name: '',
    description: '',
    price: '',
    createdAt: currentDateTime
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
    addorEditLink(productData)
    event.preventDefault();
    setProductData({
      name: '',
      description: '',
      price: '',
      createdAt: currentDateTime
    });
    getData()
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