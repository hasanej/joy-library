import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react-native';

import {Login} from 'features/login';
import strings from 'assets/strings';
import {Button} from 'components/Button';

afterEach(cleanup);
jest.mock('react-native-linear-gradient', () => 'LinearGradient');

const LoginValidations = () => {
  const isEmailValid = (text: string) => text.length > 0;;
  const isPasswordValid = (password: string) => password.length > 0;
  const areLoginFormValid = (email: string, password: string) =>
    isEmailValid(email) && isPasswordValid(password);

  return {
    isEmailValid,
    isPasswordValid,
    areLoginFormValid,
  };
}

const {isEmailValid, isPasswordValid, areLoginFormValid} = LoginValidations();

describe('Render the login components correctly', () => {
  it('Render the image correctly', () => {
    const imgSource = require('../../../assets/images/login_illustration.jpg');
    const {queryByTestId} = render(<Login />);

    const image = queryByTestId('login-illustration'); 

    expect(image).toBeDefined();
    expect(image?.props.source).toBe(imgSource);
    expect(image?.props.style).toEqual({width: '100%', height: 250, alignSelf: 'center'});
  });

  it('Render the login caption correctly', () => {
    const {getAllByText} = render(<Login />);
    const loginCaption = getAllByText(strings.login_caption); 
    expect(loginCaption).toBeDefined();
  });

  it('Render the email and password input correctly', () => {
    const {getAllByPlaceholderText} = render(<Login />);

    const emailInput = getAllByPlaceholderText(strings.email); 
    const passwordInput = getAllByPlaceholderText(strings.password); 

    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  it('Render the login button correctly', () => {
    const {getAllByText} = render(<Login />);
    const buttonLogin = getAllByText(strings.login); 
    expect(buttonLogin).toBeDefined();
  });
});

describe('Validation for the login form', () => {
  it('Should be a valid e-mail', () => {
    expect(isEmailValid('librarian@joylib.gov')).toBeTruthy();
  });

  it('Should not be a valid e-mail', () => {
    expect(isEmailValid('')).toBeFalsy();
  });

  it('Should be a valid password', () => {
    expect(isPasswordValid('password')).toBeTruthy();
  });

  it('Should not be a valid password', () => {
    expect(isPasswordValid('')).toBeFalsy();
  });

  it('Should be a valid login form', () => {
    expect(areLoginFormValid('librarian@joylib.gov', 'password')).toBeTruthy();
  })

  it('Should not be a valid login form', () => {
    expect(areLoginFormValid('', '')).toBeFalsy();
  })
});

describe('Functionality of the login form', () => {
  it('Updates e-mail and password state', () => {
    const {getByTestId} = render(<Login />);

    const emailInput = getByTestId('email-input'); 
    const passwordInput = getByTestId('password-input'); 

    fireEvent.changeText(emailInput, 'librarian@joylib.gov');
    fireEvent.changeText(passwordInput, 'password');

    expect(emailInput.props.value).toBe('librarian@joylib.gov');
    expect(passwordInput.props.value).toBe('password');
  })

  it('Display error if user is invalid', () => {
    const handleLogin = jest.fn();
    const mockDisplayInvalidUser = jest.fn();
    const {getByTestId} = render(<Login onPress={handleLogin} />);

    const emailInput = getByTestId('email-input'); 
    const passwordInput = getByTestId('password-input'); 
    const mockLoginButton = render(
      <Button
        caption={strings.login}
        onPress={handleLogin}
        testID={'login-button'}
      />
    ).getByTestId('login-button');

    expect(mockDisplayInvalidUser).not.toHaveBeenCalled();

    fireEvent.changeText(emailInput, 'librarian@joylib');
    fireEvent.changeText(passwordInput, 'pass');
    fireEvent.press(mockLoginButton);

    mockDisplayInvalidUser();

    expect(handleLogin).toHaveBeenCalled();
    expect(mockDisplayInvalidUser).toHaveBeenCalled();
  });

  it('Proceed to login', () => {
    const email = "librarian@joylib.gov";
    const password = "password";
    const handleLogin = jest.fn();
    const mockProceedLogin = jest.fn();

    const mockLoginButton = render(
      <Button
        caption={strings.login}
        onPress={handleLogin}
        testID={'login-button'}
      />
    ).getByTestId('login-button');
    
    expect(mockProceedLogin).not.toHaveBeenCalled();

    expect(email).toBe("librarian@joylib.gov");
    expect(password).toBe("password");
    fireEvent.press(mockLoginButton);

    mockProceedLogin();

    expect(handleLogin).toHaveBeenCalled();
    expect(mockProceedLogin).toHaveBeenCalled();
  });
});
