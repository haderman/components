import * as React from 'react';
import styled from 'styled-components';
import { motion, useCycle, Variant, AnimatePresence } from 'framer-motion';

import { CardProps, Mode } from './types';

const AVATAR_URL = 'https://i.picsum.photos/id/499/536/354.jpg?hmac=8f-M63IkmYvH2AXKVRL_mE-G5R9N1Qbt2rAPNq_rXvs';

const CARD_COLLPASED_HEIGHT = '328px';

const variants: {[key in Mode]: Variant} = {
  collapsed: {
    height: CARD_COLLPASED_HEIGHT,
    transition: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.02,
      },
    }
  },
  expanded: {
    height: '100%',
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export default function Card(props: CardProps) {
  const [mode, setMode] = React.useState<Mode>('collapsed');

  function toggleMode() {
    setMode(mode === 'collapsed' ? 'expanded' : 'collapsed');
  };

  return (
    <Skeleton>
      <Layout
        layout
        data-mode={mode}
        onClick={toggleMode}
        animate={mode}
        variants={variants}
      >
        <Title layout>{props.title}</Title>
        <Description layout>{props.description}</Description>
        <AvatarContainer layout>
          <Avatar layout src={AVATAR_URL} />
        </AvatarContainer>
      </Layout>
    </Skeleton>
  );
}

const Title = styled(motion.h2)`
  color: hsl(0, 0%, 80%);
  padding: 12px;
  margin: 0;
`;

const Description = styled(motion.p)`
  color: hsl(0, 0%, 80%);
  padding: 12px;
  margin: 0;
`;

const AvatarContainer = styled(motion.picture)`
  position: relative;
`;

const Avatar = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Skeleton = styled.div`
  height: ${CARD_COLLPASED_HEIGHT};
  max-width: 400px;
  width: 100%;
`;

const Layout = styled(motion.div)`
  display: grid;
  cursor: pointer;

  &[data-mode='collapsed'] {
    position: relative;
    grid-template-columns: 1fr;
    grid-template-rows: 60%  20% 20%;
    grid-template-areas:
      "avatar"
      "title"
      "description";

    ${AvatarContainer} {
      height: 100%;
      width: 100%;
    }
  }

  &[data-mode='expanded'] {
    position: fixed;
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
