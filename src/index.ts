export { default as Stack } from './components/stack';
export { default as BuyCoffee } from './components/buy-coffee';

import StackComponent from './components/stack';
import BuyCoffeeComponent from './components/buy-coffee';

export {
  StackComponent,
  BuyCoffeeComponent,
};

const componentMap = {
  stack: StackComponent,
  buyCoffee: BuyCoffeeComponent,
};

export default componentMap;
