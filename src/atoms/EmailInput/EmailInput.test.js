import { render } from '@testing-library/react';
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
});

// describe('EmailInput snapshots', () => {
//   describe('snap 1', () => {
//     const mockedName = 'mocked-name';
//     const Component = render(<EmailInput inputName={mockedName} />);

//     expect(Component).toMatchInlineSnapshot();
//   });
// });
