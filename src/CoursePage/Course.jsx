import { createElement } from 'react';
import { Tabs } from './Tabs';
import { Test } from './Test';

export function Course({ setCurrent, current }) {
  const goNext = () => {
    setCurrent((c) => c + 1);
  };

  return current === 9 ? (
    <Test />
  ) : (
    createElement(Tabs['P' + current], { goNext })
  );
}
