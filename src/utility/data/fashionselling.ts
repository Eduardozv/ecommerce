interface Fashion {
  name: string;
  image: string;
  title: string;
  oldPrice: number;
  newPrice: number;
  quantity: number;
  id: number;
}

const fashionselling: Fashion[] = [
  {
    id: 73,
    name: "Lipstick",
    title: "Liquid Matte Lipstick",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
    quantity: 1,
    oldPrice: 50.00,
    newPrice: 55.00,
  },
  {
    id: 1,
    name: "wallet",
    title: "Women's wallet Hand Purse",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
    quantity: 1,
    oldPrice: 52.00,
    newPrice: 55.00,
  },
  {
    id: 63,
    name: "perfume",
    title: "Long lasting perfume",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
    quantity: 1,
    oldPrice: 10.00,
    newPrice: 11.00,
  },
  {
    id: 86,
    name: "Baby Wear",
    title: "Cotton Clothes Sets for Boys",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/37_1.jpg",
    quantity: 1,
    oldPrice: 25.00,
    newPrice: 30.00,
  },
  {
    id: 101,
    name: "shoes",
    title: "Men's sport shoes blue",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/41_1.jpg",
    quantity: 1,
    oldPrice: 20.00,
    newPrice: 30.00,
  },
  {
    id: 114,
    name: "shampoo",
    title: "anti dandruff shampoo",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
    quantity: 1,
    oldPrice: 20.00,
    newPrice: 30.00,
  }
]
export default fashionselling;