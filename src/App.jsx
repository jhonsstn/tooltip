import { useState } from 'react';
import styled from 'styled-components';
import TooltipSelector from './components/selector/ttselector';
import Tooltip from './components/tooltip';
import './styles.css';

const TooltipTarget = styled.span`
  color: #fff;
`;

export default function App() {
  const [position, setPosition] = useState('left');

  const handleChange = (value) => {
    setPosition(value);
  };

  return (
    <div className='App'>
      <TooltipSelector onChange={handleChange} />
      <Tooltip text='I am a tooltip' position={position} background='ffffff'>
        <TooltipTarget>Hover over me!</TooltipTarget>
      </Tooltip>
      {/* <Tooltip text="I am a tooltip" position="top" background="222831">
        <TooltipTarget>Top</TooltipTarget>
      </Tooltip>
      <Tooltip text="I am a tooltip" position="bottom" background="393e46">
        <TooltipTarget>Bottom</TooltipTarget>
      </Tooltip>
      <Tooltip text="I am a tooltip" position="right" background="eeeeee">
        <TooltipTarget>Right</TooltipTarget>
      </Tooltip> */}
      {/* <p>
        This is a{" "}
        <Tooltip text="I am within paragraph" position="top" styleMe={false}>
          <TooltipTarget>tooltip</TooltipTarget>
        </Tooltip>{" "}
        within a paragraph.
      </p> */}
    </div>
  );
}
