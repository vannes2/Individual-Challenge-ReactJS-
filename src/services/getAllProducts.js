const getAllProducts = () => {
  return [
    {
      id: 'NAF-1-07-FMEN-001',
      slug: 'nike-air-force-1-07-men',
      name: "Nike Air Force 1 '07",
      category: `Men's Shoes`,
      categorySlug: 'men-shoes',
      price: 1_549_000,
      stock: 100,
      imageUrl: '/assets/images/AIR-FORCE-1-07.png',
      description: `The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine.`
    },
    {
      id: 'NAF-1-07-FMEN-LV8-002',
      slug: 'nike-air-force-1-07-lv8-men',
      name: "Nike Air Force 1 '07 LV8",
      category: `Men's Shoes`,
      categorySlug: 'men-shoes',
      price: 1_909_000,
      stock: 5,
      imageUrl: `/assets/images/AIR+FORCE+1+'07+LV8.png`,
      description: `Comfortable, durable and timeless—it's number 1 for a reason. The classic '80s construction pairs with bold details for style that tracks whether you're on court or on the go.`
    },
    {
      id: 'NAF-1-07-FWOMEN-003',
      slug: 'nike-air-force-1-07-women',
      name: "Nike Air Force 1 '07",
      category: `Women's Shoes`,
      categorySlug: 'women-shoes',
      price: 1_909_000,
      stock: 0,
      imageUrl: `/assets/images/WMNS+AIR+FORCE+1+'07.jpeg`,
      description: `Comfortable, durable and timeless—it's number 1 for a reason. The classic '80s construction pairs a warm suede upper with neutral accents for style that tracks whether you're on court or on the go.`
    },
    {
      id: 'MSHRT-001',
      slug: 'mens-shirt',
      name: "Men's Shirt",
      category: "Men Clothing",
      categorySlug: "men-clothing",
      price: 199_000,
      stock: 20,
      imageUrl: "/assets/images/Baju_Kemeja_Pria_Cowok.jpg",
      description: "High-quality men's shirt made from premium cotton."
    },
    {
      id: 'MSHRT-002',
      slug: 'mens-tshirt',
      name: "Men's T-Shirt",
      category: "Men Clothing",
      categorySlug: "men-clothing",
      price: 149_000,
      stock: 225_000,
      imageUrl: "/assets/images/baju_kaos_pria.jpg",
      description: "Comfortable men's t-shirt made from soft fabric, perfect for casual wear."
    },
    {
      id: 'WDRES-001',
      slug: 'womens-dress',
      name: "Women's Dress",
      category: "Women Clothing",
      categorySlug: "women-clothing",
      price: 299_000,
      stock: 15,
      imageUrl: "/assets/images/Baju_Perempuan.jpg",
      description: "Elegant women's dress perfect for formal occasions."
    },
    {
      id: 'WDRES-002',
      slug: 'womens-blouse',
      name: "Women's Blouse",
      category: "Women Clothing",
      categorySlug: "women-clothing",
      price: 189_000,
      stock: 0,
      imageUrl: "/assets/images/baju_kaos_wanita.jpg",
      description: "Stylish women's blouse made from premium materials, ideal for work or casual outings."
    },
    {
      id: 'WDRES-003',
      slug: 'womens-blouse',
      name: "Women's Blouse",
      category: "Women Clothing",
      categorySlug: "women-clothing",
      price: 200_000,
      stock: 400,
      imageUrl: "/assets/images/baju_kaos_wanita_2.jpg",
      description: "Stylish women's blouse made from premium materials, ideal for work or casual outings."
    },
  ];
};

export default getAllProducts;
