// import { useEffect } from 'react';
import { withUserList } from '../../hoc/withUserList';

const Profile = props => {
  // useEffect(() => {
  //   document.body.style.background = 'yellow';

  //   return () => {
  //     // cleanup function
  //     document.body.style.background = 'initial';

  //     // reset AJAX

  //     // Abort controller WEB API
  //   };
  // }, []);

  return (
    <>
      <h1 className="title">Profile Page</h1>
      <p>{props.parameter}</p>
    </>
  );
};

export default withUserList(Profile);
