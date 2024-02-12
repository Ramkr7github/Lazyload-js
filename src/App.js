

import { Suspense, lazy } from "react";

const LazyImage = lazy(()=>import('./LazyImage'))

function App() {
  return (
    <div>
      Demo of LazyLoading 

<Suspense fallback={<div> Loading... </div>}>
<LazyImage />
</Suspense>

    </div>
  );
}

export default App;
