import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectChannelRoomId } from "../../store/channelrooms";
import ChatInput from "./chatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Message from "./message";

const Chat = () => {
  const chatRef = useRef();
  const channelRoomId = useSelector(selectChannelRoomId);
  const [channelDetails] = useDocument(
    channelRoomId && db.collection("channelrooms").doc(channelRoomId)
  );
  const [channelRoomMessages, loading] = useCollection(
    channelRoomId &&
      db
        .collection("channelrooms")
        .doc(channelRoomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    return chatRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [channelRoomId, loading]);

  return (
    <>
      {!channelDetails && !channelRoomMessages && !channelRoomId ? (
        <ChatContainerEmpty>
          <h1>Welcome To Slack</h1>
          <h2>Add A Channel Or Join A Channel</h2>
        </ChatContainerEmpty>
      ) : (
        <ChatContainer>
          <ChatContainerHeader>
            <HeaderLeft>
              <h4>
                <strong>#{channelDetails?.data()?.name}</strong>
              </h4>
              <StarBorderOutlined />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlined /> Details
              </p>
            </HeaderRight>
          </ChatContainerHeader>
          <ChatMessages ref={chatRef}>
            {channelRoomMessages?.docs?.map((doc, index) => {
              const { message, timestamp, user, useImage } = doc?.data();
              console.log(doc?.data());
              return (
                <Message
                  key={index}
                  message={message}
                  user={user}
                  timestamp={timestamp}
                  userImage={useImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput
            chatRef={chatRef}
            channelId={channelRoomId}
            channelName={channelDetails?.data().name}
          />
        </ChatContainer>
      )}
    </>
  );
};

export default Chat;
const ChatContainerEmpty = styled.div`
  flex: 0.7;
  flex-grow: 1;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const ChatContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 20px;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`;

const ChatMessages = styled.div``;
const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
