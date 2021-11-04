import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TEST_IDS } from '../../constants/testIds';
import { EmailInput } from './EmailInput';

describe('EmailInput', () => {
  it('should render correctly with correct props', () => {
    const mockedName = 'mocked-name';
    const Component = render(<EmailInput inputName={mockedName} />);

    expect(
      Component.getByTestId(TEST_IDS.emailInput.inputElement).getAttribute(
        'name'
      )
    ).toBe(mockedName);
  });

  it('should render error state', () => {
    const mockedName = 'mocked-name';
    const Component = render(<EmailInput inputName={mockedName} />);
    const inputElement = Component.getByTestId(
      TEST_IDS.emailInput.inputElement
    );
    userEvent.type(inputElement, 'wrong');

    expect(
      Component.getByTestId(TEST_IDS.emailInput.hasError)
    ).toBeInTheDocument();
  });

  it('should render success state', () => {
    const mockedName = 'mocked-name';
    const Component = render(<EmailInput inputName={mockedName} />);
    const inputElement = Component.getByTestId(
      TEST_IDS.emailInput.inputElement
    );
    userEvent.type(inputElement, 'test@test.com');

    expect(
      Component.getByTestId(TEST_IDS.emailInput.success)
    ).toBeInTheDocument();
  });
});

// describe('EmailInput snapshots', () => {
//   test('snap 1', () => {
//     const mockedName = 'mocked-name';
//     const Component = render(<EmailInput inputName={mockedName} />);

//     expect(Component).toMatchInlineSnapshot();
//   });
// });

describe('EmailInput shapshot', () => {
  test('snap 2', () => {
    const mockedName = 'mocked-name';
    const Component = render(<EmailInput inputName={mockedName} />);

    expect(Component).toMatchSnapshot();
  });
});
