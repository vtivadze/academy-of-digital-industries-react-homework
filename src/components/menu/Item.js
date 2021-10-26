import PropTypes from 'prop-types';
import { Link as ItemLink, MenuItem } from '../../models';
import { Link } from './Link';

export const Item = props => {
  const {
    item: { name, href, className },
  } = props;
  const link = new ItemLink(name, href, className);

  return (
    <li className={`${className} m-3`}>
      <Link link={link} />
    </li>
  );
};

Item.defaultProps = {
  item: new MenuItem(['item', '#']),
};

Item.propTypes = {
  item: PropTypes.instanceOf(MenuItem).isRequired,
};
