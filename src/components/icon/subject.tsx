import { FC } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}

export const Subject: FC = (props: Props) => {
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
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M19 4V20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4H19Z'
        stroke={stroke}
        stroke-width='1.75'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M19 16H7C5.89543 16 5 16.8954 5 18'
        stroke={stroke}
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9 8H15'
        stroke={stroke}
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
