import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>Proyecto</header>
      <Outlet />
    </div>
  );
}
