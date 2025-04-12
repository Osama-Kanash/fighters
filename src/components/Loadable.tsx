import { ElementType, Suspense } from "react";

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<></>}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
