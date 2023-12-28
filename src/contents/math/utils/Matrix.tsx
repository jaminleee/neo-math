import { useEffect } from 'react';
import styled from '@emotion/styled';

interface Props {
  id: number;
  placeHolder: string[];
  inputValue: string[][];
  setInputValue: React.Dispatch<React.SetStateAction<string[][]>>;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const Matrix = (props: Props) => {
  const { id, placeHolder, inputValue, setInputValue, toggle, setToggle } =
    props;

  const handleOnchange = (targetId: number, newContent: string) => {
    const data = inputValue;
    data[id][targetId] = newContent;
    setInputValue(data);
    setToggle(!toggle);
  };

  return (
    <MatrixWrapper>
      <MatrixContainer>
        {[...Array(12)].map((_, idx) => (
          <MatrixBorder
            key={idx}
            onChange={e => handleOnchange(idx, e.target.value)}
            defaultValue={placeHolder ? placeHolder[idx] : ''}
          />
        ))}
      </MatrixContainer>
    </MatrixWrapper>
  );
};

const MatrixWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
  padding-right: 0.5rem;
`;

const MatrixContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px dashed #929292;
  border-left: 1px dashed #929292;
`;

const MatrixBorder = styled.input`
  width: 80px;
  height: 100px;
  border-right: 1px dashed #929292;
  border-bottom: 1px dashed #929292;
  border-left: none;
  border-top: none;
  text-align: center;
  font-size: 3rem;
  outline: none;
`;
export default Matrix;
