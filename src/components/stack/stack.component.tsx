import React, { ReactNode} from 'react';
import { Space } from './types';

import './stack.css';

interface StackComponentProps {
  children: ReactNode;
  space: Space;
  as: keyof JSX.IntrinsicElements;
}

/**
 * Primary UI component for user interaction
 */

export default function Stack({ space = 'medium', as: ElementType = 'div', children }: StackComponentProps) {
  const containerClass = `stack-${space}`;
  return (
    <ElementType className={containerClass}>
      {children}
    </ElementType>
  );
}

