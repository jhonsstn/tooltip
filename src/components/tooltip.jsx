import { useRef, useState } from 'react';
import {
  CenterContainer,
  TooltipBox,
  TooltipContent,
  TooltipHeader,
  TooltipTarget,
  TooltipWrapper,
} from './styled';

function Tooltip({ position, header, children, background, content }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef(null);
  const showTooltip = isHovered || isFocused;

  const handleClick = (e) => {
    e.preventDefault();
    if (targetRef.current) {
      targetRef.current.blur();
    }
  };

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={handleClick}
        ref={targetRef}
        highlightOnHover={isHovered}
        showOnFocus={isFocused}
      >
        {children}
      </TooltipTarget>
      {showTooltip && (
        <CenterContainer position={position}>
          <TooltipBox
            background={background}
            position={position}
            content={content}
          >
            <TooltipHeader background={background}>{header}</TooltipHeader>
            <TooltipContent background={background}>{content}</TooltipContent>
          </TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
}

export default Tooltip;
