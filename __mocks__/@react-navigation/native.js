export const useNavigation = jest.fn('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  const mockedNavigate = jest.fn();
  const mockedGoBack = jest.fn();
  const mockedPush = jest.fn();
  return {
    ...actualNav,
    useNavigation: () => ({
      //we mock useNavigation and its child methods
      navigate: mockedNavigate, //assign each child method with the mock one
      dispatch: jest.fn(),
      goBack: mockedGoBack,
      push: mockedPush,
    }),
    useRoute: jest.fn(),
  };
});
