import React from 'react';

import { ButtonStyled } from './Button.styled';

const Button = ({ text, onClick, style }) => {
  return (
    <ButtonStyled onClick={onClick} style={style}>
      {text}
    </ButtonStyled>
  );
};

export default Button;

// пример
// import Button from './Button';

// const Example = () => {
//   const handleClick = () => {
//     console.log('Button clicked!');
//   };

//   const buttonStyle = {
//     backgroundColor: 'blue',
//     color: 'white',
//     padding: '10px',
//     borderRadius: '5px',
//   };

//   return (
//     <div>
//       <Button text="Click me" onClick={handleClick} style={buttonStyle} />
//       <Button text="Disabled" disabled />
//     </div>
//   );
// };

// export default Example;
