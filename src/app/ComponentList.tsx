import { Link } from 'react-router-dom';

export const ComponentList = () => {

  const components = [
    'Button, A simple button component',
    'Card, A simple card component',
    'Dialog, Dialog which does not exist',
  ];


  return (
    <div>
      <h2>Select a Component</h2>
      <ul>
        {components.map((item) => {
          const [componentName, description] = item.split(',');
          return (
            <li key={componentName}>
              <Link to={`demo/${componentName}`}>{description || componentName}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};