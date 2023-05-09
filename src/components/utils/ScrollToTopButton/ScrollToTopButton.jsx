import { useEffect, useState } from 'react';

import { ButtonStyled } from './ScrollToTopButton.styled';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
function ScrollButton() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    setIsAtTop(window.scrollY === 0);
  }

  function handleClick() {
    if (isAtTop) {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  return (
    <ButtonStyled onClick={handleClick}>
      {isAtTop ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
    </ButtonStyled>
  );
}

export default ScrollButton;
