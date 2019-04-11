const Menu = () => {
  return (
    <Router>
      <div>
        <nav className="menu">
          <NavLink
            className="menu__item"
            exact
            activeClassName={"menu__item-active"}
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className="menu__item"
            activeClassName={"menu__item-active"}
            to="/drift"
          >
            Дрифт-такси
          </NavLink>
          <NavLink
            className="menu__item"
            activeClassName={"menu__item-active"}
            to="/timeattack"
          >
            Time Attack
          </NavLink>
          <NavLink
            className="menu__item"
            activeClassName={"menu__item-active"}
            to="/forza"
          >
            Forza Karting
          </NavLink>
        </nav>
        <Switch>
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};
