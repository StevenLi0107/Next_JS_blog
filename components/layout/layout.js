import MainNavigation from "./main-navigation";

function Layout(props) {
  return <header>
    <MainNavigation />
    <main>{props.children}</main>
  </header>
}

export default Layout;