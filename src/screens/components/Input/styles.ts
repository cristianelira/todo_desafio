import styled from 'styled-components/native'

interface InputProps {
  active: boolean
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: -27px;
`
export const Input = styled.TextInput<InputProps>`
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
  border-color: ${({ active }) => (active ? '#5E60CE' : '#0D0D0D')};
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
