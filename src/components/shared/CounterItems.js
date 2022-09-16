import React from 'react';
import styled from 'styled-components';
import { showIf } from '../../utils';

import { FlexGroup } from '../HelperComponents';

/**
 * @props {
 *  count,
 *  _showHasAdded,
 *  onDown(),
 *  onUp(),
 * 'data-added'
 * }
 */
export default function CounterItems(props) {
  return (
    <FlexGroup align="center">
      <RemoveButton {...props.states} onClick={props.onDown} />
      <NumItems {...props.states}>{props.count}</NumItems>
      <AddButton
        {...props.states}
        onClick={() => props.states._showHasAdded && props.onUp()}
      />
      {props.children}
    </FlexGroup>
  );
}

/**
 * Shared Button Style
 */
const SharedButtonStyle = styled.button`
 border-radius: 40px;
 border: 1px solid #999;
 line-height: 1;
 width: 23px;
 height: 23px;
 cursor: pointer;

 background: transparent;

 &:hover {
   background: var(--btnSurface, #fff) !important;
 }

 &:active {
   background: var(--greyC, #ccc) !important;
 }
`;

/**
 * Add Button
 */

export const AddButton = (props) => <AddButtonContainer {...props} />;

const AddButtonContainer = styled(SharedButtonStyle)`
 border: solid 1px var(--green);

 &:after {
   content: '+';
   color: var(--green);
 }

 &[data-added='true'] {
   border-color: var(--outlineGreen);

   &:after {
     color: var(--outlineGreen);
   }

   &:hover {
     border-color: var(--green);
     &:after {
       color: var(--green);
     }
   }
 }
`;

/**
 * Remove Button
 */
const RemoveButton = (props) => {
  return showIf(props._showHasAdded, <RemoveButtonContainer {...props} />);
};

const RemoveButtonContainer = styled(SharedButtonStyle)`
  border: solid 1px var(--outlineRed);

  &:after {
    content: '-';
    color: var(--outlineRed);
  }

  &[data-added='true'] {
   border-color: var(--outlineGreen);

    &:after {
      color: var(--outlineGreen);
    }

    &:hover {
      border-color: var(--outlineRed);
      &:after {
        color: var(--outlineRed);
      }
    }
  }
`;

/**
 * Num Items
 */

const NumItems = (props) =>
  showIf(
    props._showHasAdded,
    <NumItemsContainer>{props.children}</NumItemsContainer>
  );

const NumItemsContainer = styled.span`
 padding: 10px;
 font-weight: 600;
`;
