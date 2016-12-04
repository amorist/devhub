// @flow

import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Octicons';

import CreateColumnUtils from './utils/CreateColumnUtils';
import Themable from './hoc/Themable';
import type { ActionCreators } from '../utils/types';

const Column = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.base02};
  border-radius: ${({ radius }) => radius || 0};
`;

const NewColumnButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const NewColumnText = styled.Text`
  align-self: center;
  text-align: center;
  font-size: 20;
  color: ${({ theme }) => theme.base05};
`;

@Themable
export default class extends React.PureComponent {
  onPress = () => {
    CreateColumnUtils.showColumnTypeSelectAlert(this.props.actions);
  };

  props: {
    actions: ActionCreators,
    radius?: number,
    style?: ?Object,
  };

  render() {
    const { radius, ...props } = this.props;

    return (
      <Column radius={radius} {...props}>
        <NewColumnButton onPress={this.onPress}>
          <NewColumnText>
            <Icon name="plus" size={30} />{'\n'}
            add new column
          </NewColumnText>
        </NewColumnButton>
      </Column>
    );
  }
}