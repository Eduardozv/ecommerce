interface Clothe {
  category: string;
  sale: string;
  image: string;
  imageTwo: string;
  oldPrice: number;
  newPrice: number;
  title: string;
  rating: any;
  status: string;
  location: string;
  brand: string;
  sku: number;
  quantity: number;
  id: number
}

const clothes: Clothe[] = [
  {
    title: "men's wear printed shirt",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_2.jpg",
    category: "men's wear",
    oldPrice: 59.0,
    newPrice: 87.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 41,
    quantity: 1,
    rating: 3,
    status: "Available",
  },
  {
    title: "Princess Look fashion Dress",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_2.jpg",
    category: "women's wear",
    oldPrice: 58.0,
    newPrice: 65.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 132,
    quantity: 1,
    rating: 3,
    status: "Available",
  },
  {
    title: "Men's stylish printed shirt",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
    category: "men's wear",
    oldPrice: 59.0,
    newPrice: 87.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 71,
    quantity: 1,
    rating: 3,
    status: "Available",
  },
  {
    title: "Stylish printed women's dress",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
    category: "women's wear",
    oldPrice: 78.0,
    newPrice: 85.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 134,
    quantity: 1,
    rating: 4,
    status: "Out Of Stock",
  },
  {
    title: "Men's wear printed shirt",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/36_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/36_2.jpg",
    category: "men's wear",
    oldPrice: 25.0,
    newPrice: 35.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 41,
    quantity: 1,
    rating: 2,
    status: "Available",
  },
  {
    title: "Cotton Clothes Sets for Boys",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/37_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/37_2.jpg",
    category: "Baby Wear",
    oldPrice: 45.0,
    newPrice: 56.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 86,
    quantity: 1,
    rating: 1,
    status: "Available",
  },
  {
    title: "Men's Jacket Fashion Coat",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/38_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/38_2.jpg",
    category: "Winter Wear",
    oldPrice: 49.0,
    newPrice: 65.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 87,
    quantity: 1,
    rating: 45,
    status: "Available",
  },
  {
    title: "Printed Round Neck Tshirt",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_2.jpg",
    category: "unisex",
    oldPrice: 32.0,
    newPrice: 45.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23232,
    id: 75,
    quantity: 1,
    rating: 3,
    status: "Out Of Stock",
  },
];

export default clothes;
