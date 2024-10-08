import { FC } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}
const GradeDots: FC = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { width = '18', height = '4', stroke = 'none', ...rest } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 4'
      fill='none'
      stroke='none'
      {...rest}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='9'
        cy='2'
        r='1'
        transform='rotate(90 9 2)'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx='2'
        cy='2'
        r='1'
        transform='rotate(90 2 2)'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx='16'
        cy='2'
        r='1'
        transform='rotate(90 16 2)'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default GradeDots;
