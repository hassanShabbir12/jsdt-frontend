import { FC } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}

export const LoggedIn: FC = (props: Props) => {
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
        d='M9 11L12 14L20 6'
        stroke={stroke}
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20 12V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H15'
        stroke={stroke}
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
