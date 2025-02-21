interface Deal {
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
  id: number;
}

const Categorydeal: Deal[] = [
  {
    title: "Mixed Nuts Berries Pack",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/35_2.jpg",
    category: "Fashion",
    oldPrice: 45.0,
    newPrice: 56.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23122,
    id: 51,
    quantity: 1,
    rating: 3,
    status: "Out Of Stock",
  },
  {
    title: "Princess Look fashion Dress",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/34_2.jpg",
    category: "women's wear",
    oldPrice: 58.0,
    newPrice: 65.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23122,
    id: 132,
    quantity: 1,
    rating: 2,
    status: "Available",
  },
  {
    title: "Women's casual shoes",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    category: "Sports",
    oldPrice: 500.0,
    newPrice: 600.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23122,
    id: 105,
    quantity: 1,
    rating: 4,
    status: "Available",
  },
  {
    title: "Body Lotion for Dry Skin",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
    category: "Body Lotion",
    oldPrice: 2.0,
    newPrice: 3.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23122,
    id: 115,
    quantity: 1,
    rating: 5,
    status: "Available",
  },
  {
    title: "Liquid Matte Lipstick",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    category: "Lipstick",
    oldPrice: 20.0,
    newPrice: 30.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23122,
    id: 73,
    quantity: 1,
    rating: 1,
    status: "Available",
  },
  {
    title: "Women's wallet Hand Purse",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    category: "wallet",
    oldPrice: 50.0,
    newPrice: 70.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23122,
    id: 1,
    quantity: 1,
    rating: 2,
    status: "Available",
  },
  {
    title: "anti dandruff shampoo",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
    category: "shampoo",
    oldPrice: 5.0,
    newPrice: 7.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23122,
    id: 114,
    quantity: 1,
    rating: 3,
    status: "Available",
  },
];

export default Categorydeal;
