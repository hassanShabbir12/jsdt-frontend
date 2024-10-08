import { FC } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}

export const Logout: FC = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { width = '24', height = '24', stroke = 'none', ...rest } = props;

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
        d='M16 15L19 12L16 9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13 12H9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.364 18.3642C15.79 20.9382 11.9189 21.7082 8.55585 20.3152C5.19278 18.9222 3 15.6404 3 12.0003C3 8.3601 5.19278 5.07838 8.55585 3.68535C11.9189 2.29232 15.79 3.06232 18.364 5.6363'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
