import React from 'react';


class Header extends React.Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper orange">
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Header;
