import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #1a1a1a;
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
