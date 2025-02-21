interface Accessorise {
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
    color1 : any;
    color2 : any;
    color3 : any;
    size1: string;
    size2: string;
    id: number
  }
  
  const fashiontwoaccessorise: Accessorise[] = [
    {
      title: "Women's wallet Hand Purse",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/48_1.jpg",
      category: "wallet",
      oldPrice: 50.0,
      newPrice: 70.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 56438,
      id: 1,
      quantity: 1,
      rating: 4,
      status: "Available",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "S",
      size2: "M"
    },
    {
      title: "Men's Leather Belt",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/49_1.jpg",
      category: "Belt",
      oldPrice: 15.0,
      newPrice: 17.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 56438,
      id: 62,
      quantity: 1,
      rating: 3,
      status: "Out Of Stock",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "S",
      size2: "M"
    },
    {
      title: "Long lasting perfume",
      sale: "Sale",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/50_1.jpg",
      category: "perfume",
      oldPrice: 25.0,
      newPrice: 30.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 56438,
      id: 63,
      quantity: 1,
      rating: 3,
      status: "Available",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "anti dandruff shampoo",
      sale: "New",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/51_1.jpg",
      category: "shampoo",
      oldPrice: 5.0,
      newPrice: 7.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 56438,
      id: 114,
      quantity: 1,
      rating: 2,
      status: "Available",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "Body Lotion for Dry Skin",
      sale: "New",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/52_1.jpg",
      category: "Body Lotion",
      oldPrice: 2.0,
      newPrice: 3.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 56438,
      id: 115,
      quantity: 1,
      rating: 5,
      status: "Out Of Stock",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "S",
      size2: "M"
    },
    {
      title: "Rose Gold Earring",
      sale: "Sale",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/53_1.jpg",
      category: "jewellery",
      oldPrice: 60.0,
      newPrice: 80.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 56438,
      id: 2,
      quantity: 1,
      rating: 4,
      status: "Available",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "Liquid Matte Lipstick",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
      category: "Lipstick",
      oldPrice: 20.0,
      newPrice: 30.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 56438,
      id: 73,
      quantity: 1,
      rating: 2,
      status: "Available",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "S",
      size2: "M"
    },
    {
      title: "Compact makeup kit",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
      category: "makeup kit",
      oldPrice: 78.0,
      newPrice: 85.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 56438,
      id: 68,
      quantity: 1,
      rating: 4,
      status: "Out Of Stock",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "Liquid Matte Lipstick",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/54_1.jpg",
      category: "Lipstick",
      oldPrice: 20.0,
      newPrice: 30.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 56438,
      id: 73,
      quantity: 1,
      rating: 3,
      status: "Available",
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
    },
    {
      title: "Compact makeup kit",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/55_1.jpg",
      category: "makeup kit",
      oldPrice: 78.0,
      newPrice: 85.0,
      location: "Online",
      brand: "Bhisma Organice",
      sku: 56438,
      id: 68,
      quantity: 1,
      rating: 4,
      status: "Available",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "S",
      size2: "M"
    },
  ];
  
  export default fashiontwoaccessorise;
  