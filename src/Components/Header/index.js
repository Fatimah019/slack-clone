import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { HelpOutline, Search, AccessTime } from "@material-ui/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

export const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          src={user?.photoURL}
          alt={user?.displayName}
          onClick={() => auth.signOut()}
        />
        <AccessTime />
      </HeaderLeft>
      <HeaderMiddle>
        <Search />
        <input type="text" placeholder="Search..." />
      </HeaderMiddle>
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  background: var(--slack-bg-color);
`;
const HeaderLeft = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;
  margin-left: 20px;
  color: white;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderMiddle = styled.div`
  flex: 0.6;
  opacity: 1;
  display: flex;
  align-items: center;
  background-color: #412f44;
  border-radius: 6px;
  text-align: center;
  padding: 0 50px;
  border: 1px gray solid;
  background-color: transparent;
  color: white;

  input {
    background-color: transparent;
    border: none;
    outline: none;
    min-width: 30vw;
    text-align: center;
    color: white;
  }
`;

const HeaderRight = styled.div`
  color: white;
  flex: 0.2;
  display: flex;
  align-items: flex-end;

  .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
