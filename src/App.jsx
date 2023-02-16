import { useState } from 'react';
import styled from 'styled-components';
import TooltipSelector from './components/selector/ttselector';
import Tooltip from './components/tooltip';
import './styles.css';

const TooltipTarget = styled.span`
  color: black;
`;

export default function App() {
  const [position, setPosition] = useState('left');

  const handleChange = (value) => {
    setPosition(value);
  };

  return (
    <div className='App'>
      <TooltipSelector onChange={handleChange} />
      <Tooltip
        header='This is a tooltip'
        content='Tooltips are used to describe or identify an element. In most
              scenarios, tooltips help the user understand the meaning, function
              or alt-text of an element.'
        position={position}
      >
        <TooltipTarget>Hover over me!</TooltipTarget>
      </Tooltip>
    </div>
  );
}

// background='dark'
