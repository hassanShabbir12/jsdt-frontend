import { FC } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}

export const Question: FC = (props: Props) => {
  const { width = '24', height = '24', stroke = 'currentColor', ...rest } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      {...rest}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13 7C14.1046 7 15 7.89543 15 9V21L10 18L5 21V9C5 7.89543 5.89543 7 7 7H13Z'
        stroke={stroke}
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.26489 4C9.62268 3.38029 10.2843 2.99895 10.9999 3H16.9999C18.1045 3 18.9999 3.89543 18.9999 5V17L17.9999 16.4'
        stroke={stroke}
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
