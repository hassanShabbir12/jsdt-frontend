import { FC } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}

export const Check: FC = (props: Props) => {
  const { width = '16', height = '16', fill = 'none', ...rest } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill={fill}
      {...rest}
    >
      <path
        d='M15.75 8C15.75 12.2812 12.25 15.75 8 15.75C3.71875 15.75 0.25 12.2812 0.25 8C0.25 3.75 3.71875 0.25 8 0.25C12.25 0.25 15.75 3.75 15.75 8ZM7.09375 12.125L12.8438 6.375C13.0312 6.1875 13.0312 5.84375 12.8438 5.65625L12.125 4.96875C11.9375 4.75 11.625 4.75 11.4375 4.96875L6.75 9.65625L4.53125 7.46875C4.34375 7.25 4.03125 7.25 3.84375 7.46875L3.125 8.15625C2.9375 8.34375 2.9375 8.6875 3.125 8.875L6.375 12.125C6.5625 12.3125 6.90625 12.3125 7.09375 12.125Z'
        fill='currentColor'
      />
    </svg>
  );
};
