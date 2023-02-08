import { Link } from 'react-router-dom';

import '../styles/components/Header.css';

export default function Login() {
  return (
    <header className="header">
      <Link to="/">To Do List</Link>
    </header>
  );
}
