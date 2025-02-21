interface Footwear {
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

const footwear: Footwear[] = [
  {
    title: "Men's sport shoes black",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/40_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/40_2.jpg",
    category: "Sports",
    oldPrice: 100.0,
    newPrice: 120.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 100,
    quantity: 1,
    rating: 3,
    status: "Available",
  },
  {
    title: "Men's sport shoes blue",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/41_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/41_1.jpg",
    category: "Sports",
    oldPrice: 150.0,
    newPrice: 170.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 101,
    quantity: 1,
    rating: 2,
    status: "Available",
  },
  {
    title: "Men's Formal Shoes",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/42_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/42_2.jpg",
    category: "party wear",
    oldPrice: 110.0,
    newPrice: 120.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 102,
    quantity: 1,
    rating: 4,
    status: "Out Of Stock",
  },
  {
    title: "women's Formal Shoes",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/43_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/43_1.jpg",
    category: "party wear",
    oldPrice: 200.0,
    newPrice: 240.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 103,
    quantity: 1,
    rating: 5,
    status: "Available",
  },
  {
    title: "Men's sport shoes",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/44_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/44_2.jpg",
    category: "Unisex",
    oldPrice: 250.0,
    newPrice: 350.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 104,
    quantity: 1,
    rating: 2,
    status: "Available",
  },
  {
    title: "Women's casual shoes",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    category: "Sports",
    oldPrice: 500.0,
    newPrice: 600.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 105,
    quantity: 1,
    rating: 1,
    status: "Out Of Stock",
  },
  {
    title: "Women's sport shoes",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/46_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/46_1.jpg",
    category: "Casual",
    oldPrice: 110.0,
    newPrice: 120.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 106,
    quantity: 1,
    rating: 3,
    status: "Available",
  },

  {
    title: "Baby printed shoes",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/47_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/47_1.jpg",
    category: "Baby shoes",
    oldPrice: 150.0,
    newPrice: 170.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 107,
    quantity: 1,
    rating: 4,
    status: "Available",
  },
];

export default footwear;
