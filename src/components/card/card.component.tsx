import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { CardProps, Mode } from './types';

const AVATAR_URL = 'https://i.picsum.photos/id/499/536/354.jpg?hmac=8f-M63IkmYvH2AXKVRL_mE-G5R9N1Qbt2rAPNq_rXvs';

export default function Card(props: CardProps) {
  const [mode, setMode] = React.useState<Mode>('collapsed');

  const toggleMode = () => {
    setMode(mode === 'collapsed' ? 'expanded' : 'collapsed');
  };

  return (
    <Layout as={motion.div} data-mode={mode} onClick={toggleMode}>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <AvatarContainer>
        <Avatar src={AVATAR_URL} />
      </AvatarContainer>
    </Layout>
  );
}

const Title = styled.h2`
  color: hsl(0, 0%, 80%);
  padding: 12px;
  margin: 0;
`;

const Description = styled.p`
  color: hsl(0, 0%, 80%);
  padding: 12px;
  margin: 0;
`;

const AvatarContainer = styled.div`
  position: relative;
`;

const Avatar = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Layout = styled.div`
  max-width: 600px;
  display: grid;
  cursor: pointer;

  &[data-mode='collapsed'] {
    position: relative;
    grid-template-columns: 30% 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "avatar title"
      "avatar description";
    ;
    height: 128px;

    ${AvatarContainer} {
      height: 100%;
      width: 100%;
    }
  }

  &[data-mode='expanded'] {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "avatar"
      "title"
      "description";
    ;

    ${AvatarContainer} {
      max-width: 100%;
      aspect-ratio: 10 / 3;
    }
  }

  ${Title} {
    grid-area: title;
  }

  ${Description} {
    grid-area: description;
  }

  ${AvatarContainer} {
    grid-area: avatar;
  }

  background-color: black;
`;
