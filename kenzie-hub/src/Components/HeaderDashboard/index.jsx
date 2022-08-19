import { HeaderDash } from "../HeaderStyle/styles";

function HeaderDashboard({ logout }) {
  return (
    <HeaderDash>
      <h1>Kenzie Hub </h1>
      <button onClick={logout}>Sair</button>
    </HeaderDash>
  );
}
export default HeaderDashboard;
