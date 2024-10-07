import { FC } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}
const Settings: FC = (props: Props) => {
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
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.8046 4.85206 14.182 5.29302 14.6907 5.50375C15.1993 5.71447 15.7779 5.6696 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.3318 8.22285 18.2871 8.80108 18.4975 9.30938C18.708 9.81768 19.1484 10.195 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.1479 13.8046 18.707 14.182 18.4963 14.6907C18.2855 15.1993 18.3304 15.7779 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C15.7771 18.3318 15.1989 18.2871 14.6906 18.4975C14.1823 18.708 13.805 19.1484 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.1954 19.1479 9.81797 18.707 9.30935 18.4963C8.80073 18.2855 8.22206 18.3304 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.66819 15.7771 5.71295 15.1989 5.50247 14.6906C5.292 14.1823 4.85157 13.805 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.85206 10.1954 5.29302 9.81797 5.50375 9.30935C5.71447 8.80073 5.6696 8.22206 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx='12'
        cy='12'
        r='3'
        stroke='currentColor'
        strokeWidth='1.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Settings;
