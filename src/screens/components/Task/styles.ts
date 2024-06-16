import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 88%;
  height: 64px;
  background-color: #333333;
  border-radius: 8px;
  margin-top: 20px;
  margin-left: 24px;
  margin-right: 24px;
`
export const Check = styled.TouchableOpacity``

export const ImageCheck = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  margin-left: 12px;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const TextTask = styled.Text`
  font-size: 14px;
  color: #f2f2f2;
  margin-top: 12px;
  margin-bottom: 12px;
  flex: 1;
`
export const TextTaskDone = styled.Text`
  font-size: 14px;
  color: #808080;
  margin-top: 12px;
  margin-bottom: 12px;
  flex: 1;
  text-decoration-line: line-through;
`

export const Delete = styled.TouchableOpacity``

export const ImageDelete = styled.Image`
  width: 32px;
  height: 32px;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 8px;
  margin-right: 8px;
`
