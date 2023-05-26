import Svg, { Path } from 'react-native-svg';

const SearchIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 15 13" {...props}>
    <Path
      fill="none"
      stroke="#A445ED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.398 10.398 2.777 2.777M0.875 5.398a5.398 5.398 0 1 0 10.796 0 5.398 5.398 0 0 0-10.796 0Z"
    />
  </Svg>
);

export default SearchIcon;