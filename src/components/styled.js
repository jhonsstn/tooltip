import styled, { css } from 'styled-components';

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const TooltipTarget = styled.button`
  border: none;
  background: inherit;
  padding: 5px;
  margin: -1px;
  font-size: inherit;
  color: inherit;
  cursor: inherit;
  display: flex;
`;

export const CenterContainer = styled.div`
  position: absolute;
  width: 320px;
  margin-left: -160px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: calc(100% + 5px);
  pointer-events: none;

  ${({ position }) => {
    switch (position) {
      case 'bottom':
        return css`
          bottom: unset !important;
          top: calc(100% + 5px);
        `;
      case 'bottom-left':
        return css`
          bottom: unset !important;
          top: calc(100% + 5px);
          transform: translateX(25%);
        `;
      case 'bottom-right':
        return css`
          bottom: unset !important;
          top: calc(100% + 5px);
          transform: translateX(-25%);
        `;
      case 'left':
        return css`
          margin-right: 0;
          width: 100%;
          left: unset;
          top: 50%;
          right: calc(100% + 5px);
          width: max-content;
        `;
      case 'right':
        return css`
          margin-left: 0;
          width: 100%;
          top: 50%;
          left: calc(100% + 5px);
          width: max-content;
        `;
      case 'top-left':
        return css`
          transform: translateX(25%);
        `;
      case 'top-right':
        return css`
          transform: translateX(-25%);
        `;
      default:
        return css`
          bottom: calc(100% + 5px);
        `;
    }
  }}
`;

export const TooltipBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  background-color: #${(props) => (props.background === 'dark' ? '0d2860' : 'fff')};
  border-radius: 8px;
  padding: ${(props) => (props.content ? '12px' : '8px 12px')};
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.13));

  ${({ position }) => {
    switch (position) {
      case 'top':
        return css`
          &:after {
            content: '';
            position: absolute;
            width: 1px;
            height: 1px;
            border-width: 5px;
            border-style: solid;
            border-color: #${(props) =>
                props.background === 'dark' ? '0d2860' : 'fff'} transparent transparent
              transparent;
            left: calc(50% - 4.5px);
            top: 100%;
          }
        `;
      case 'top-left':
        return css`
          &:after {
            content: '';
            position: absolute;
            width: 1px;
            height: 1px;
            border-width: 5px;
            border-style: solid;
            border-color: #${(props) =>
                props.background === 'dark' ? '0d2860' : 'fff'} transparent transparent
              transparent;
            left: calc(25% - 4.5px);
            top: 100%;
          }
        `;
      case 'top-right':
        return css`
          &:after {
            content: '';
            position: absolute;
            width: 1px;
            height: 1px;
            border-width: 5px;
            border-style: solid;
            border-color: #${(props) =>
                props.background === 'dark' ? '0d2860' : 'fff'} transparent transparent
              transparent;
            left: calc(75% - 4.5px);
            top: 100%;
          }
        `;
      case 'bottom':
        return css`
          &:after {
            content: '';
            position: absolute;
            border-style: solid;
            border-width: 5px;
            border-color: transparent transparent #${(props) =>
                props.background === 'dark' ? '0d2860' : 'fff'} transparent;
            top: unset;
            width: 1px;
            height: 1px;
            bottom: 100%;
            left: calc(50% - 5px);
          }
        `;
      case 'bottom-left':
        return css`
          &:after {
            content: '';
            position: absolute;
            width: 1px;
            height: 1px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent #${(props) =>
                props.background === 'dark' ? '0d2860' : 'fff'} transparent;
            top: unset;
            bottom: 100%;
            left: calc(25% - 5px);
          }
        `;
      case 'bottom-right':
        return css`
          &:after {
            content: '';
            position: absolute;
            width: 1px;
            height: 1px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent #${(props) =>
                props.background === 'dark' ? '0d2860' : 'fff'} transparent;
            top: unset;
            bottom: 100%;
            left: calc(75% - 5px);
          }
        `;
      case 'left':
        return css`
          &:after {
            content: '';
            position: absolute;
            width: 1px;
            height: 1px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent transparent #${(props) => (props.background === 'dark' ? '0d2860' : 'fff')};
            left: 100%;
            top: calc(50% - 5px);
          }
        `;
      case 'right':
        return css`
          &:after {
            content: '';
            position: absolute;
            width: 1px;
            height: 1px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent #${(props) =>
                props.background === 'dark' ? '0d2860' : 'fff'} transparent transparent;
            right: 100%;
            left: unset;
            top: calc(50% - 5px);
          }
        `;
      default:
        return css``;
    }
  }}
`;

export const TooltipHeader = styled.h3`
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  margin: 0;
  color: #${(props) => (props.background === 'dark' ? 'fff' : '0d2860')};
`;

export const TooltipContent = styled.div`
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  max-width: 320px;
  text-align: left;
  margin: 0;
  color: #${(props) => (props.background === 'dark' ? 'fff' : '475467')};
`;
