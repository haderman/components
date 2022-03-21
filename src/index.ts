export { default as Stack } from './components/stack';
export { default as Card } from './components/card';

import StackComponent from './components/stack';
import CardComponent from './components/card';

export {
  StackComponent,
  CardComponent,
};

const componentMap = {
  stack: StackComponent,
  card: CardComponent,
};

export default componentMap;
