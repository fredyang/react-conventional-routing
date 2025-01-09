import { lazy, Suspense } from 'react';
import { Navigate, useParams } from 'react-router-dom';

export const ComponentAtPath = ({ prefix }: { prefix: string }) => {
  const { componentName } = useParams();
  const path = `${prefix}/${componentName}`;
  const Component = lazy(() => import(path).catch(() => ({ default: () => <Navigate to="/404" /> })));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};