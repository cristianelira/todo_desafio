import { FlatListProps } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.FlatList.attrs({})``

export const EmptyContainer = styled.View`
  align-items: center;
  margin-top: 48px;
`
export const ImageEmpty = styled.Image`
  width: 56px;
  height: 56px;
  margin-bottom: 16px;
`
export const TextEmpty = styled.Text`
  font-size: 14px;
  color: #808080;
  font-weight: bold;
`
export const SubTextEmpty = styled.Text`
  font-size: 14px;
  color: #808080;
`
