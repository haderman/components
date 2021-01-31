import React from 'react';
// import './button.css';

interface ButtonComponentProps {}

/**
 * Primary UI component for user interaction
 */

export default function Button(props: ButtonComponentProps) {
  return (
    <div>hola</div>
  );
}

// const Button2 = ({ primary, backgroundColor, size, label, ...props }: ButtonComponentProps) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={backgroundColor && { backgroundColor }}
//     >
//       {label}
//     </button>
//   );
// };

