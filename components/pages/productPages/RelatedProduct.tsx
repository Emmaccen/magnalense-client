"use client"

import ProductCard from "./ProductCard"

// Define types for our component
interface ProductColor {
    id: string;
    color: string;
  }

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    label: 'Best Seller' | 'Flash Sale' | '';
    colors: ProductColor[];
    defaultColor: string;
  }


const RelatedProducts: React.FC = () => {
    const demoProducts: Product[] = [
      {
        id: '1',
        name: 'Carlton',
        price: 15,
        image: '/images/imageProduct14.png',
        label: 'Best Seller',
        colors: [
          { id: 'white', color: 'white' },
          { id: 'gray', color: 'gray' },
          { id: 'blue', color: 'blue' },
        ],
        defaultColor: 'gray',
      },
      {
        id: '2',
        name: 'Carlton',
        price: 15,
        image: '/images/imageProduct19.png',
        label: 'Best Seller',
        colors: [
          { id: 'white', color: 'white' },
          { id: 'gray', color: 'gray' },
          { id: 'blue', color: 'blue' },
        ],
        defaultColor: 'gray',
      },
      {
        id: '3',
        name: 'Carlton',
        price: 15,
        
        image: '/images/imageProduct40.png',
        label: 'Flash Sale',
        colors: [
          { id: 'white', color: 'white' },
          { id: 'gray', color: 'gray' },
          { id: 'blue', color: 'blue' },
        ],
        defaultColor: 'gray',
      },
      {
        id: '4',
        name: 'Carlton',
        price: 15,
        image: '/images/imageProduct20.png',
        label: 'Best Seller',
        colors: [
          { id: 'white', color: 'white' },
          { id: 'gray', color: 'gray' },
          { id: 'blue', color: 'blue' },
        ],
        defaultColor: 'gray',
      },
    ];
  
    return <ProductCard products={demoProducts} />;
  };
  
  export default RelatedProducts;
  