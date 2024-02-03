'use client';
import { TESTCASE } from '@/constants/scrollData';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useEffect, useRef, useState } from 'react';

interface Test {
  id: number;
  question: string;
  firstAnswer: string;
  secondAnswer: string;
}

function Home() {
  const [items, setItems] = useState<Test[]>([]);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const observerInitialized = useRef(false);
  let page = 0;

  const fetchData = async () => {
    const data = TESTCASE[page]?.questions;

    if (data) {
      setItems((prev) => [...prev, ...data]);
      page++;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useInfiniteScroll({ target, fetchData });

  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx} style={{ fontSize: '20px' }}>
          <div>{item.id}</div>
          <div>{item.question}</div>
          <div>{item.firstAnswer}</div>
          <div>{item.secondAnswer}</div>
        </div>
      ))}
      <div ref={(ref) => setTarget(ref)}>This is Target.</div>
    </div>
  );
}

export default Home;
