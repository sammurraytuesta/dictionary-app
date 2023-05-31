import { fireEvent, render, waitFor } from '@testing-library/react-native';
import DisplayWord from '../src/screens/DisplayWord';
import HomeScreen from '../src/screens/HomeScreen';
import InputArea from '../src/screens/InputArea';

//test if home screen can preload a word
test('renders correctly', async () => {
    const { getByTestId } = render(<HomeScreen />);
    
    await waitFor(() => {
      const component = getByTestId('home-screen');
      expect(component).toBeTruthy();
    }, {timeout: 6000});
  
  }, 10000);

//test if components in HomeScreen have the right background color
test('test background color', async () => {
    const { getByTestId } = render(<HomeScreen />);

    await waitFor(
        () => {
            const card = getByTestId('home-screen');
            const style = card.props.contentContainerStyle[1];
            expect(style.backgroundColor).toBe('#fff');
        },
        {timeout: 6000});
  }, 10000);

//Test if word search can be made successfully 
test('test if searchButton triggers handleSearch function', async () => {
    const handleSearch = jest.fn();
    const word = jest.fn();
    const setWord = jest.fn();
    const { getByTestId } = render(
        <InputArea 
        handleSearch={handleSearch}
        word={word}
        setWord={setWord}
        />
    );
    const searchButton = getByTestId('search-button');
    fireEvent.press(searchButton);
    expect(handleSearch).toHaveBeenCalled();
});



