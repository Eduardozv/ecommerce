interface Category {
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

const fashionall: Category[] = [
  {
    title: "Men's stylish printed shirt",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_2.jpg",
    category: "men's wear",
    oldPrice: 59.0,
    newPrice: 87.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 24433,
    id: 71,
    quantity: 1,
    rating: 4,
    status: "Available",
  },
  {
    title: "Rose Gold Earring",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    category: "jewellery",
    oldPrice: 60.0,
    newPrice: 80.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 24433,
    id: 2,
    quantity: 1,
    rating: 4,
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
    sku: 24433,
    id: 73,
    quantity: 1,
    rating: 2,
    status: "Available",
  },
  {
    title: "Stylish printed women's dress",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
    category: "women's wear",
    oldPrice: 78.0,
    newPrice: 85.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 24433,
    id: 134,
    quantity: 1,
    rating: 3,
    status: "Out Of Stock",
  },
  {
    title: "Printed Round Neck Tshirt",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_2.jpg",
    category: "Unisex",
    oldPrice: 32.0,
    newPrice: 45.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 24433,
    id: 75,
    quantity: 1,
    rating: 4,
    status: "Available",
  },
  {
    title: "Long lasting perfume",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
    category: "perfume",
    oldPrice: 25.0,
    newPrice: 30.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 24433,
    id: 63,
    quantity: 1,
    rating: 3,
    status: "Available",
  },
  {
    title: "Women's sport shoes",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
    category: "Sports",
    oldPrice: 500.0,
    newPrice: 600.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 24433,
    id: 106,
    quantity: 1,
    rating: 4,
    status: "Available",
  },
  {
    title: "Men's Leather Belt",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
    category: "Belt",
    oldPrice: 15.0,
    newPrice: 17.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 24433,
    id: 62,
    quantity: 1,
    rating: 3,
    status: "Available",
  },
  {
    title: "Men's stylish printed shirt",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_2.jpg",
    category: "men's wear",
    oldPrice: 59.0,
    newPrice: 87.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 24433,
    id: 71,
    quantity: 1,
    rating: 4,
    status: "Available",
  },
  {
    title: "Rose Gold Earring",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
    category: "jewellery",
    oldPrice: 60.0,
    newPrice: 80.0,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 24433,
    id: 2,
    quantity: 1,
    rating: 4,
    status: "Out Of Stock",
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
    location: "in Store, Online",
    brand: "Bhisma Organice",
    sku: 55555,
    id: 1,
    quantity: 1,
    rating: 3,
    status: "Available",
  },
  {
    title: "Compact makeup kit",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
    imageTwo:
      process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
    category: "makeup kit",
    oldPrice: 78.0,
    newPrice: 85.0,
    rating: 2,
    location: "Online",
    brand: "Bhisma Organice",
    sku: 55555,
    id: 68,
    quantity: 1,
    status: "Out Off Stock",
  },
];

export default fashionall;
