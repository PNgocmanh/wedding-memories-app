import { Suspense } from 'react';

import Loader from './Loader';

const Loading = (Component) => (props) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loading;