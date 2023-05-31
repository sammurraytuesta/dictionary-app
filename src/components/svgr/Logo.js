import Svg, { Path, G } from 'react-native-svg';

const Logo = (props) => (
  <Svg width={28} height={31} {...props}>
    <G stroke="#838383" strokeWidth={1.5}>
      <Path d="M1 26.4V4a3.2 3.2 0 0 1 3.2-3.2h21.44A0.96 0.96 0 0 1 26.8 1.2v22.5M4 23.3h22.4M4 29.6h22.5" />
      <Path d="M4 29.6a3.2 3.2 0 1 1 0-6.4" />
      <Path d="M8.8 7.2h9.6" />
    </G>
  </Svg>
);

export default Logo;