import * as React from 'react';
import styled from 'styled-components';

import Card from './card.component';
import { CardProps } from './types';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    space: {
      description: 'basic card',
    }
  },
};


export function Basci(args: any) {
  return (
    <StyledListContainer>
      <li>
        <Card title="title-1" description="this is a description 1" />
      </li>
      <li>
        <Card title="title-2" description="this is a description 2" />
      </li>
      <li>
        <Card title="title-3" description="this is a description 3" />
      </li>
      <li>
        <Card title="title-4" description="this is a description 4" />
      </li>
      <li>
        <Card title="title-5" description="this is a description 5" />
      </li>
    </StyledListContainer>
  )
}

const StyledListContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
  height: 500px;
  overflow: auto;

  & > li {
    margin-bottom: 20px;
    padding: 0;
  }
`;
