import { Link } from "react-router-dom";

// 디자인은 임시
function Header() {
  return (
    <ul>
      <li>
        <Link to="/">메인</Link>
      </li>
      <li>
        <Link to="/temp">임시</Link>
      </li>
    </ul>
  );
}

export default Header;
