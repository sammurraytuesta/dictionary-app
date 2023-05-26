import Svg, { Path, Circle, G } from 'react-native-svg';

const PlayIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
    <G fill="#A445ED" fillRule="evenodd">
      <Circle cx={25} cy={25} r={25} opacity={0.25} />
      <Path d="M19 17.5v14l14-7z" />
    </G>
  </Svg>
);

export default PlayIcon;
