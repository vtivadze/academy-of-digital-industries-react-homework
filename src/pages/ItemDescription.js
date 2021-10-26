import { memo } from 'react';

const ItemDescription = () => {
  console.log("ItemDescription rerendering");
  return (
    <span className="tag has-background-grey has-text-grey-light">
      This Is a Page Title
    </span>
  );
};

export default memo(ItemDescription);
