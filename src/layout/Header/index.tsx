import React from 'react';

import BeTalentLogo from '../../assets/images/svg/Logo.svg';

// Styles
import * as Styles from './styles';

export default function Header() {
  return (
    <Styles.HeaderContainer>
      <img src={BeTalentLogo} alt="BeTalent Logo" />
    </Styles.HeaderContainer>
  );
}
