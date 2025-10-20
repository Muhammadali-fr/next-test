'use client'
import { useState } from 'react';

export default function Page() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  console.log('page rerendered')
  return (
    <div>
      <input placeholder='name' className='border' type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
};
