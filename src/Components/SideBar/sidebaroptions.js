import React from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { addChannelRoom } from "../../store/channelrooms";

const SidebarOptions = ({ Icon, title, addChannelOption, id }) => {
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt("Enter channel name");

    if (channelName) {
      db.collection("channelrooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        addChannelRoom({
          channelRoomId: id,
        })
      );
    }
  };
  return (
    <SideBarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionsChannel>
          <span>#</span> {title}
        </SidebarOptionsChannel>
      )}
    </SideBarOptionContainer>
  );
};

export default SidebarOptions;

const SideBarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  padding-left: 2px;
  padding-right: 2px;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionsChannel = styled.h3`
  font-weight: 300;
  padding: 10px 0;
`;
