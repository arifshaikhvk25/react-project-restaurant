import images from './images';

// const wines = [
const foods = [
  {
    title: 'Mutton curry',
    price: '$56',
    tags: 'kosha | mangsho',
  },
  {
    title: 'Kadhai Chicken',
    price: '$59',
    tags: 'Spicy | Tangy',
  },
  {
    title: 'Bombil Fry',
    price: '$44',
    tags: 'Bombay | Duck',
  },
  {
    title: 'Dal Tadka',
    price: '$31',
    tags: 'Dal | Makhan',
  },
  {
    title: 'Vegetable Biryani',
    price: '$26',
    tags: 'Veg | Biryani',
  },
];

const deserts = [
  {
    title: 'Bubble cakes.',
    price: '$20',
    tags: ' petal dust | 2 tablespoons of gelatin | luster dust',
  },
  {
    title: "chocolate pudding",
    price: '$16',
    tags: 'additional flavor | moistness | denser texture',
  },
  {
    title: '3D Cakes.',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Drip cakes.',
    price: '$31',
    tags: '3D | layered confections |  sculptures',
  },
  {
    title: 'Jelly art cake',
    price: '$26',
    tags: 'gelatin powder | high-quality gelatin ',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { foods, deserts, awards };
