import React from 'react'
import { useEffect, useState } from 'react';

export default function Prc() {
    const [input, setInput] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuery(input);
    }, 500);

    return () => clearTimeout(timeout);
  }, [input]);

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Searching for: {query}</p>
    </>
  );
}


