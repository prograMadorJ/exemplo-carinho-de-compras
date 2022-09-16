import React, { useState } from 'react';
import styled from 'styled-components';
import { Trans } from 'react-i18next';
import { FlexGroup } from './HelperComponents';

import Icon from './shared/Icon';

export default function SwitchTheme({ stateTheme }) {
  const light = 'lightTheme';
  const dark = 'darkTheme';
  const isLight = stateTheme.theme === light;
  const label = isLight ? 'switch to dark theme' : 'switch to light theme';

  function handleToggleTheme() {
    stateTheme.setTheme(isLight ? dark : light);
  }
  return (
    <SwitchThemeContainer className="teste" onClick={handleToggleTheme}>
      <FlexGroup align="center">
        <Icon className="fa-solid fa-circle-half-stroke" />
        <Label>
          <Trans>{label}</Trans>
        </Label>
      </FlexGroup>
    </SwitchThemeContainer>
  );
}

const SwitchThemeContainer = styled.div`
  position: relative;
  bottom: 4px;
  margin-left: 3px;
  cursor: pointer;
  padding: 3px 4px;
  border-radius: 12px;
  transition: all 0.6s ease-in-out;

  i {
    color: var(--btnSwitchTheme);
  }

  &:hover {
    box-shadow: 0 0px 10px 0px var(--greyC);
    background: var(--btnSwitchTheme);
    color: var(--btnSwitchTheme);

    i {
      color: var(--white);
    }

    small {
      width: ${(props) =>
        props.children.props.children[1].props.children.props.children.length *
        7.3}px; // pega o texto e obtem a largura em pixel
    }
  }  
`;

const Label = styled.small`

  transition: all 0.6s ease-in-out;
  margin-left: 3px;
  width: 0px;
  height: 15px;
  overflow: hidden;
  color: var(--white);
`;
