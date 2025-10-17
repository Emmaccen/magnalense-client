import CustomersFavoritesGrid from './CustomersFavorites';

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


const CustomersFavoritesEyewearProductPage: React.FC = () => {
    // Sample data that matches the images
    const demoProducts: Product[] = [
      {
        id: '1',
        name: 'Carlton',
        price: 15,
        image: '/images/image41.png',
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
        image: '/images/image42.png',
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
        image: '/images/image43.png',
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
        image: '/images/image44.png',
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
        image: '/images/image45.png',
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
        image: '/images/image46.png',
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
        image: '/images/image47.png',
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
        image: '/images/image48.png',
        label: 'Best Seller',
        colors: [
          { id: 'white', color: 'white' },
          { id: 'gray', color: 'gray' },
          { id: 'blue', color: 'blue' },
        ],
        defaultColor: 'gray',
      },
    ];
  
    return <CustomersFavoritesGrid products={demoProducts} />;
  };
  
  export default CustomersFavoritesEyewearProductPage;
  