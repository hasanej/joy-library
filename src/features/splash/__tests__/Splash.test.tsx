import React from 'react';
import {render, cleanup} from '@testing-library/react-native';

import {Splash} from 'features/splash';

afterEach(cleanup);
jest.useFakeTimers();

describe('Render the splash screen and navigate accordingly', () => {
  function splashTimer(callback) {
    setTimeout(() => {
      callback && callback();
    }, 3000);
  }

  it('Render and navigate to Login after 3 seconds', () => {
    const navigateToLogin = jest.fn();
    const splashScreen = render(<Splash />);

    expect(splashScreen).toBeDefined();

    splashTimer(navigateToLogin);

    // At this point in time, the callback should not have been called yet
    expect(navigateToLogin).not.toHaveBeenCalled();

    // Fast-forward until all timers have been executed
    jest.runAllTimers();

    // Now the callback should have been called
    expect(navigateToLogin).toHaveBeenCalled();
    expect(navigateToLogin).toHaveBeenCalledTimes(1);
  });

  it('Render and navigate to Book List after 3 seconds', () => {
    const navigateToBookList = jest.fn();
    const splashScreen = render(<Splash />);

    expect(splashScreen).toBeDefined();

    splashTimer(navigateToBookList);

    expect(navigateToBookList).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(navigateToBookList).toHaveBeenCalled();
    expect(navigateToBookList).toHaveBeenCalledTimes(1);
  });
});
