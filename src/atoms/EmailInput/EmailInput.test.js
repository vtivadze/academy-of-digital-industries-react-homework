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

describe('EmailInput snapshots', () => {
  test('snap 1', () => {
    const mockedName = 'mocked-name';
    const Component = render(<EmailInput inputName={mockedName} />);

    expect(Component).toMatchInlineSnapshot(`
      Object {
        "asFragment": [Function],
        "baseElement": <body>
          <div>
            <div
              class="control has-icons-left has-icons-right"
            >
              <input
                autocomplete="email"
                class="input"
                data-testid="emailInput"
                name="mocked-name"
                placeholder="Email"
                required=""
                type="email"
                value=""
              />
              <span
                class="icon is-small is-left"
              >
                <i
                  class="fas fa-envelope"
                />
              </span>
              
            </div>
          </div>
        </body>,
        "container": <div>
          <div
            class="control has-icons-left has-icons-right"
          >
            <input
              autocomplete="email"
              class="input"
              data-testid="emailInput"
              name="mocked-name"
              placeholder="Email"
              required=""
              type="email"
              value=""
            />
            <span
              class="icon is-small is-left"
            >
              <i
                class="fas fa-envelope"
              />
            </span>
            
          </div>
        </div>,
        "debug": [Function],
        "findAllByAltText": [Function],
        "findAllByDisplayValue": [Function],
        "findAllByLabelText": [Function],
        "findAllByPlaceholderText": [Function],
        "findAllByRole": [Function],
        "findAllByTestId": [Function],
        "findAllByText": [Function],
        "findAllByTitle": [Function],
        "findByAltText": [Function],
        "findByDisplayValue": [Function],
        "findByLabelText": [Function],
        "findByPlaceholderText": [Function],
        "findByRole": [Function],
        "findByTestId": [Function],
        "findByText": [Function],
        "findByTitle": [Function],
        "getAllByAltText": [Function],
        "getAllByDisplayValue": [Function],
        "getAllByLabelText": [Function],
        "getAllByPlaceholderText": [Function],
        "getAllByRole": [Function],
        "getAllByTestId": [Function],
        "getAllByText": [Function],
        "getAllByTitle": [Function],
        "getByAltText": [Function],
        "getByDisplayValue": [Function],
        "getByLabelText": [Function],
        "getByPlaceholderText": [Function],
        "getByRole": [Function],
        "getByTestId": [Function],
        "getByText": [Function],
        "getByTitle": [Function],
        "queryAllByAltText": [Function],
        "queryAllByDisplayValue": [Function],
        "queryAllByLabelText": [Function],
        "queryAllByPlaceholderText": [Function],
        "queryAllByRole": [Function],
        "queryAllByTestId": [Function],
        "queryAllByText": [Function],
        "queryAllByTitle": [Function],
        "queryByAltText": [Function],
        "queryByDisplayValue": [Function],
        "queryByLabelText": [Function],
        "queryByPlaceholderText": [Function],
        "queryByRole": [Function],
        "queryByTestId": [Function],
        "queryByText": [Function],
        "queryByTitle": [Function],
        "rerender": [Function],
        "unmount": [Function],
      }
    `);
  });
});
