import { Nav } from './Nav';
import '../../styles/English.css';
import { useState } from 'react';
import { Course } from './Course';

export function CoursePage() {
  const [current, setCurrent] = useState(1);
  return (
    <>
      <Nav current={current} setCurrent={setCurrent} />
      <Course current={current} setCurrent={setCurrent} />
    </>
  );
}
