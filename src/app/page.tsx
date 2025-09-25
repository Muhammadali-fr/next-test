'use client'
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  })

  const  handleChange = (e: any) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  };

  console.log(user);

  return (
    <div>
      <form>
        <input name="name" className="border" onChange={handleChange} type="text" />
        <input name="username" className="border" onChange={handleChange} type="text" />
        <input name="email" className="border" onChange={handleChange} type="email" />
        <input name="password" className="border" onChange={handleChange} type="password" />
      </form>
    </div>
  );
}
