import { render, waitFor } from '@testing-library/react-native';
import App from '../App';

// test if the app renders correctly without crashing
test('renders correctly', async () => {
  const { getByText } = render(<App />);
  
  await waitFor(() => {
    const component = getByText('Home');
    expect(component).toBeTruthy();
  }, {timeout: 6000});

}, 10000);



