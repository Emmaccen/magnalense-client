import FeaturedGrid from './Featured';

// Example usage with demo data

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


const FeaturedEyewearProductPage: React.FC = () => {
    // Sample data that matches the images
    const demoProducts: Product[] = [
      {
        id: '1',
        name: 'Carlton',
        price: 15,
        image: '/images/image14.png',
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
        image: '/images/image19.png',
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
        image: '/images/image40.png',
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
        image: '/images/image20.png',
        label: 'Best Seller',
        colors: [
          { id: 'white', color: 'white' },
          { id: 'gray', color: 'gray' },
          { id: 'blue', color: 'blue' },
        ],
        defaultColor: 'gray',
      },
      {
        id: '5',
        name: 'Carlton',
        price: 15,
        image: '/images/image25.png',
        label: 'Best Seller',
        colors: [
          { id: 'white', color: 'white' },
          { id: 'gray', color: 'gray' },
          { id: 'blue', color: 'blue' },
        ],
        defaultColor: 'gray',
      },
      {
        id: '6',
        name: 'Carlton',
        price: 15,
        image: '/images/image29.png',
        label: 'Best Seller',
        colors: [
          { id: 'white', color: 'white' },
          { id: 'gray', color: 'gray' },
          { id: 'blue', color: 'blue' },
        ],
        defaultColor: 'gray',
      },
      {
        id: '7',
        name: 'Carlton',
        price: 15,
        image: '/images/image24.png',
        label: 'Best Seller',
        colors: [
          { id: 'white', color: 'white' },
          { id: 'gray', color: 'gray' },
          { id: 'blue', color: 'blue' },
        ],
        defaultColor: 'gray',
      },
      {
        id: '8',
        name: 'Carlton',
        price: 15,
        image: '/images/image18.png',
        label: 'Best Seller',
        colors: [
          { id: 'white', color: 'white' },
          { id: 'gray', color: 'gray' },
          { id: 'blue', color: 'blue' },
        ],
        defaultColor: 'gray',
      },
    ];
  
    return <FeaturedGrid products={demoProducts} />;
  };
  
  export default FeaturedEyewearProductPage;
  