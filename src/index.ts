export { default as Stack } from './components/stack';
export { default as Chart } from './components/chart';

import StackComponent from './components/stack';
import ChartComponent from './components/chart';

export {
  StackComponent,
  ChartComponent,
};

const componentMap = {
  stack: StackComponent,
  chart: ChartComponent,
};

export default componentMap;
