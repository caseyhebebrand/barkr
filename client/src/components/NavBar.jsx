import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const NavBar = (props) => (
  <Menu attached="top" color="red" size="massive" inverted>
    <Menu.Item>
      <Icon name="paw"/>
    </Menu.Item>
    <Menu.Item name="Barkr"></Menu.Item>
  </Menu>
)

export default NavBar;
