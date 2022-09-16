import React from 'react';
import styled from 'styled-components';
import { FlexGroup } from './HelperComponents';

import { Trans } from 'react-i18next';

export default function Language({ changeLanguage }) {
  return (
    <LanguageContainer>
      <FlexGroup align="center" justify="flex-end">
        <Trans>language</Trans>
        <LanguageButton
          onClick={() => changeLanguage('ptBr')}
          lng="ptBr"
          title="português brasileiro"
        />
        <LanguageButton
          onClick={() => changeLanguage('en')}
          lng="en"
          title="english"
        />
      </FlexGroup>
    </LanguageContainer>
  );
}

const LanguageContainer = styled.div`
font-size: 11px;
`;

function LanguageButton(props) {
  return <LanguageButtonContainer {...props} />;
}

const LanguageButtonContainer = styled.div`
  display: block;

  background: ${({ lng }) => `url(${getFlag(lng)});`}
  background-size: cover;

  width: 15px;
  height: 11px;

  cursor: pointer;

  margin: 0px 5px;

  &:hover {
    box-shadow: 0 1px 8px -3px #000c;
    scale: 1.1;
  }

  &:active {
    box-shadow: 0 1px 5px -3px #000c;
    scale: 0.95
  }
`;

function getFlag(lng) {
  switch (lng) {
    case 'ptBr':
      return 'https://flagicons.lipis.dev/flags/4x3/br.svg';
    case 'en':
      return 'https://flagicons.lipis.dev/flags/4x3/um.svg';
  }
}
