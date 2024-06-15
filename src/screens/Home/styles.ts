import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #1a1a1a;
`
export const ContainerAdd = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: -27px;
`
export const Input = styled.TextInput`
  font-size: 16px;
  padding: 16px;
  width: 100%;
  height: 54px;
  background-color: #262626;
  flex-direction: row;
  align-items: center;

  border-radius: 6px;
  border-width: 1px;
  color: #f2f2f2;
  border-style: solid;
`
export const ButtonAdd = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  background-color: #1e6f9f;
  color: #f2f2f2;
  margin-left: 4px;

  border-radius: 6px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ImageAdd = styled.Image`
  height: 16px;
  width: 16px;
  color: #f2f2f2;
  align-items: center;
`
export const Counters = styled.View`
  justify-content: space-between;
  flex-direction: row;

  margin-left: 24px;
  margin-right: 24px;
  margin-top: 32px;
`
export const CountersView = styled.View`
  flex-direction: row;
`

export const Created = styled.Text`
  color: #4ea8de;
  font-size: 14px;
`

export const Done = styled.Text`
  color: #8284fa;
  font-size: 14px;
`

export const CountNumber = styled.Text`
  color: #d9d9d9;
  font-size: 12px;
  background-color: #333333;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 8px;
  width: 25px;
  height: 19px;
`
export const Tasks = styled.View`
  align-items: center;
  width: 100%;
`
