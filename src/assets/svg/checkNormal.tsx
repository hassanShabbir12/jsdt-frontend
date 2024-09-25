interface Props {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}
const CheckNormal = (props: Props) => {
  const { width = '17', height = '13', fill = 'none', ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 17 13'
      fill={fill}
      {...rest}
    >
      <path
        d='M2 7.65385L5.82353 11.5L15 1.5'
        stroke='currentColor'
        stroke-width='3'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
export default CheckNormal;
