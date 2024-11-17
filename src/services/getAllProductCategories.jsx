const getAllProductCategories = () => {
  return [
    {
      id: 'FWALL',
      slug: 'all',
      name: 'All'
    },
    {
      id: 'FMEN',
      slug: 'men-shoes',
      name: `Men's Shoes`
    },
    {
      id: 'FWMEN',
      slug: 'women-shoes',
      name: `Women's Shoes`
    },
    {
      id: 'MCLTH',
      slug: 'men-clothing',
      name: "Men Clothing"
    },
    {
      id: 'WCLTH',
      slug: 'women-clothing',
      name: "Women Clothing"
    },
  ];
};

export default getAllProductCategories;
