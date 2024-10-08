import { FC } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}

export const RatingStar: FC = (props: Props) => {
  const { width = '28', height = '27', fill = 'none', ...rest } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 28 27'
      fill={fill}
      {...rest}
    >
      <path
        d='M14 21.7463L22.24 26.875L20.0533 17.2088L27.3333 10.705L17.7466 9.86625L14 0.75L10.2533 9.86625L0.666626 10.705L7.94663 17.2088L5.75996 26.875L14 21.7463Z'
        fill='currentColor'
      />
    </svg>
  );
};
