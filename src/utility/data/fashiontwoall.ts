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
    color1 : any;
    color2 : any;
    color3 : any;
    size1: string;
    size2: string;
    id: number;
  }
  
  const fashiontwoall: Category[] = [ 
    {
      title: "Men's stylish printed shirt",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_2.jpg",
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
      sku: 24433,
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
      sku: 24433,
      id: 73,
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
      title: "Stylish printed women's dress",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/33_1.jpg",
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
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "S",
      size2: "M"
    },
    {
      title: "Printed Round Neck Tshirt",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/39_2.jpg",
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
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
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
      sku: 24433,
      id: 63,
      quantity: 1,
      rating: 3,
      status: "Available",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "S",
      size2: "M"
    },
    {
      title: "Women's sport shoes",
      sale: "Sale",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/45_1.jpg",
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
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
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
      sku: 24433,
      id: 62,
      quantity: 1,
      rating: 3,
      status: "Available",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "S",
      size2: "M"
    },
    {
      title: "Men's stylish printed shirt",
      sale: "",
      image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_1.jpg",
      imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/32_2.jpg",
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
      color1: '',
      color2: '',
      color3: '',
      size1: "",
      size2: ""
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
      sku: 24433,
      id: 2,
      quantity: 1,
      rating: 4,
      status: "Out Of Stock",
      color1: 1,
      color2: 2,
      color3: 3,
      size1: "S",
      size2: "M"
    },
  ];
  
  export default fashiontwoall;
  