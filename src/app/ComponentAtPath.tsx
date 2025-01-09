import { Suspense, lazy } from 'react';
import { useParams, Navigate } from 'react-router-dom';

// Define a static glob pattern to match all components
const componentFiles = import.meta.glob(`./demo/*.tsx`);

export const ComponentAtPath = () => {
  const { componentName } = useParams();

  // Dynamically select the component based on componentName
  const componentPath = `./demo/${componentName}.tsx`;

  // Check if the component is available in the glob mapping
  const Component = lazy(() => {
    if (componentFiles[componentPath]) {
      return componentFiles[componentPath]().then((module) => ({
        default: module.default,
      }));
    } else {
      return Promise.resolve({ default: () => <Navigate to="/404" /> });
    }
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};