import styled from 'styled-components';
export const HeaderButton = styled.button`
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  a {
    color: #FFFFFF;
  }
  &:hover {
    background-color: #33399b;
  }
`
export const Header = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`
export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`
export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
