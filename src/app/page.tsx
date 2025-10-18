'use client'

import { useEffect, useState } from "react";

export default function Page() {
  const [users, setUsers] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Failed to fetch users');
      const data = await res.json();
      setUsers(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const removeUser = () => {

    const f = users.filter((user) => user.id !== 1);
    setUsers(f);
  };

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Users</h1>
      {users?.map(user => (
        <div key={user.id}>
          <strong>{user.name}</strong> – {user.email}
        </div>
      ))}

      <button onClick={removeUser}>remove user</button>
    </div>
  );
}
