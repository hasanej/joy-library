import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react-native';

import {BookDetail} from 'features/BookDetail';
import strings from 'assets/strings';

afterEach(cleanup);

describe('User fill the form and submit it', () => {
  it('Fill the form and submit', () => {
    const mockSelectDate = jest.fn();
    const mockSelectTime = jest.fn();
    const mockSetDateTime = jest.fn();

    expect(mockSelectDate).not.toHaveBeenCalled();
    expect(mockSelectTime).not.toHaveBeenCalled();
    expect(mockSetDateTime).not.toHaveBeenCalled();

    mockSelectDate();
    mockSetDateTime();

    mockSelectTime();
    mockSetDateTime();

    expect(mockSelectDate).toHaveBeenCalled();
    expect(mockSelectTime).toHaveBeenCalled();

    expect(mockSetDateTime).toHaveBeenCalled();
    expect(mockSetDateTime).toHaveBeenCalledTimes(2);
  });
});