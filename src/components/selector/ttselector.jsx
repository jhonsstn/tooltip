import styled from 'styled-components';

const Select = styled.select`
  padding: 10px;
  margin: 100px 0;
  border-radius: 5px;
  width: 200px;
  font-size: 1.25rem;
`;

function TooltipSelector({ onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Select name='tooltipselector' onChange={handleChange}>
      <option value=''>None</option>
      <option value='left'>Left</option>
      <option value='top'>Top</option>
      <option value='top-left'>Top Left</option>
      <option value='top-right'>Top Right</option>
      <option value='right'>Right</option>
      <option value='bottom'>Bottom</option>
      <option value='bottom-left'>Bottom Left</option>
      <option value='bottom-right'>Bottom Right</option>
    </Select>
  );
}

export default TooltipSelector;
