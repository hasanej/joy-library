import type {ReactNode} from 'react';
import {renderHook, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import fetchMock from 'jest-fetch-mock';

import {store} from 'app/store';
import {useGetBooksQuery} from 'app/api/BookApi';

jest.mock('react-native-config', () => 'Config');

function Wrapper(props: {children: ReactNode}) {
  return <Provider store={store}>{props.children}</Provider>;
}

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('Hit useGetBooksQuery and retrieve the expected result', () => {
  const mockConfig = {BOOK_API_URL: "https://openlibrary.org"};
  const endpointName = 'getBooks';
  const subject = 'love';
  const data = {};

  beforeAll(() => {
    fetchMock.mockOnceIf(`${mockConfig.BOOK_API_URL}/subjects/${subject}.json`, () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify({data})
      })
    );
  });

  it('Successfully retrieved useGetBooksQuery response', async () => {
    const {result} = renderHook(() => useGetBooksQuery(subject), {
      wrapper: Wrapper
    });

    expect(result.current).toMatchObject({
      status: 'pending',
      endpointName,
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(fetchMock).toHaveBeenCalledTimes(1);

    expect(result.current).toMatchObject({
      status: 'fulfilled',
      endpointName,
      data,
      isLoading: false,
      isSuccess: true,
      isError: false,
      currentData: data,
      isFetching: false
    });
  });
});
