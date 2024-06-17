import { FlatListProps } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.FlatList.attrs({})``

export const EmptyContainer = styled.View`
  margin-top: 2px;
  justify-content: space-between;
  flex-direction: row;

  margin-left: 24px;
  margin-right: 24px;
`
export const BorderEmpty = styled.View`
  align-items: center;
  text-align: center;

  border-top-width: 1px;
  border-color: #808080;
  border-style: solid;

  height: 100%;
  width: 100%;
`

export const ImageEmpty = styled.Image`
  width: 56px;
  height: 56px;
  margin-bottom: 16px;
  margin-top: 48px;
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
