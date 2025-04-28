export const getCategories = () => {
    return [
      { id: 1, name: 'Patio', slug: 'patio', image: '/patio.jpg' },
      { id: 2, name: 'Bistro', slug: 'bistro', image: '/bistro.jpg' },
      { id: 3, name: 'Dining', slug: 'dining', image: '/dining.jpg' },
      { id: 4, name: 'Home Decor', slug: 'home-decor', image: '/decor.jpg' },
      { id: 5, name: 'Office', slug: 'office', image: '/office.jpg' },
      { id: 6, name: 'Bedroom', slug: 'bedroom', image: '/bedroom.jpg' }
    ]
  }
  
  export const getProductsByCategory = (categorySlug) => {
    const allProducts = {
      'patio': [
        { id: 1, name: 'Patio Chair Set', price: 399, image: '/patio-chair.jpg' },
        { id: 2, name: 'Outdoor Table', price: 299, image: '/patio-table.jpg' },
        { id: 3, name: 'Sun Lounger', price: 199, image: '/lounger.jpg' },
        { id: 4, name: 'Patio Umbrella', price: 129, image: '/umbrella.jpg' },
        { id: 5, name: 'Outdoor Sofa', price: 599, image: '/outdoor-sofa.jpg' },
        { id: 6, name: 'Garden Bench', price: 249, image: '/bench.jpg' }
      ],
      'bistro': [
        { id: 7, name: 'Bistro Table', price: 179, image: '/bistro-table.jpg' },
        { id: 8, name: 'Cafe Chairs', price: 89, image: '/bistro-chair.jpg' },
        { id: 9, name: 'Bar Stool', price: 129, image: '/bar-stool.jpg' },
        { id: 10, name: 'Bistro Set', price: 349, image: '/bistro-set.jpg' },
        { id: 11, name: 'Metal Side Table', price: 79, image: '/side-table.jpg' },
        { id: 12, name: 'Folding Bistro Chair', price: 59, image: '/folding-chair.jpg' }
      ],
      // Similar arrays for other categories...
      'dining': [
        { id: 13, name: 'Dining Table', price: 499, image: '/dining-table.jpg' },
        { id: 14, name: 'Dining Chairs (Set of 4)', price: 399, image: '/dining-chairs.jpg' },
        { id: 15, name: 'Buffet Cabinet', price: 599, image: '/buffet.jpg' },
        { id: 16, name: 'Bar Cart', price: 199, image: '/bar-cart.jpg' },
        { id: 17, name: 'China Cabinet', price: 699, image: '/china-cabinet.jpg' },
        { id: 18, name: 'Bench Seat', price: 249, image: '/dining-bench.jpg' }
      ],
      'home-decor': [
        { id: 19, name: 'Decorative Mirror', price: 129, image: '/mirror.jpg' },
        { id: 20, name: 'Throw Pillow Set', price: 59, image: '/pillows.jpg' },
        { id: 21, name: 'Wall Art', price: 89, image: '/wall-art.jpg' },
        { id: 22, name: 'Vase Set', price: 49, image: '/vases.jpg' },
        { id: 23, name: 'Table Lamp', price: 79, image: '/lamp.jpg' },
        { id: 24, name: 'Area Rug', price: 199, image: '/rug.jpg' }
      ],
      'office': [
        { id: 25, name: 'Desk', price: 299, image: '/desk.jpg' },
        { id: 26, name: 'Office Chair', price: 199, image: '/office-chair.jpg' },
        { id: 27, name: 'Bookcase', price: 249, image: '/bookcase.jpg' },
        { id: 28, name: 'Filing Cabinet', price: 179, image: '/filing-cabinet.jpg' },
        { id: 29, name: 'Monitor Stand', price: 89, image: '/monitor-stand.jpg' },
        { id: 30, name: 'Desk Organizer', price: 39, image: '/organizer.jpg' }
      ],
      'bedroom': [
        { id: 31, name: 'Queen Bed Frame', price: 499, image: '/bed-frame.jpg' },
        { id: 32, name: 'Nightstand', price: 149, image: '/nightstand.jpg' },
        { id: 33, name: 'Dresser', price: 399, image: '/dresser.jpg' },
        { id: 34, name: 'Armoire', price: 599, image: '/armoire.jpg' },
        { id: 35, name: 'Vanity Table', price: 349, image: '/vanity.jpg' },
        { id: 36, name: 'Bedside Lamp', price: 69, image: '/bedside-lamp.jpg' }
      ]
    }
    
    return allProducts[categorySlug] || []
  }