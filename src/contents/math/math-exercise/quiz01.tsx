import { Data13Quiz as QuizData } from '../Data/Book1';
// import { useEffect, useState } from 'react';
import DayLayout from '../Layout/Day1';
import Styled from '../../{example}/style';
import ConfirmBtn from '../utils/ConfirmBtn';
import { SubJustCal, ThirdGrade1Day1 } from '../utils/handleTitle';
import SingleQuiz from './Single1-3';

import type { Data12QuizProps as DataProps } from '../Type/Type1';

const Quiz01 = () => {
  return (
    <DayLayout title={ThirdGrade1Day1.title} subTitle={SubJustCal}>
      <Styled.PaddingBox1>
        <Styled.RowWrapBox>
          {QuizData.map((item: DataProps, idx) => (
            <SingleQuiz
              key={idx}
              id={item.id}
              quiz1={item.quiz1}
              quiz2={item.quiz2}
            />
          ))}
        </Styled.RowWrapBox>
      </Styled.PaddingBox1>
      <ConfirmBtn type={true} day={1} />
    </DayLayout>
  );
};

export default Quiz01;
