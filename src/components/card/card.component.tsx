import * as React from 'react';
import styled from 'styled-components';
import { motion, useCycle, Variant } from 'framer-motion';

import { CardProps, Mode } from './types';

const AVATAR_URL = 'https://i.picsum.photos/id/499/536/354.jpg?hmac=8f-M63IkmYvH2AXKVRL_mE-G5R9N1Qbt2rAPNq_rXvs';

const variants: {[key in Mode]: Variant} = {
  collapsed: {
    height: '128px',
    transition: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
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
  const [animate, toggleFocus] = useCycle(
    { height: "25rem", top: "0rem", overflowX: "auto" },
    { height: "100%", top: "-4.4rem", overflowX: "hidden" }
  )

  const toggleMode = () => {
    setMode(mode === 'collapsed' ? 'expanded' : 'collapsed');
    // toggleFocus();
  };


  return (
    <Layout
      data-mode={mode}
      onClick={toggleMode}
      animate={mode}
      variants={variants}
    >
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

const Layout = styled(motion.div)`
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
