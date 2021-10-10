import React from "react";
import styled from "styled-components";
import {
  FiberManualRecord,
  Create,
  InsertComment,
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from "@material-ui/icons";
import SidebarOptions from "./sidebaroptions";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

export default function SideBar() {
  const [channels] = useCollection(db.collection("channelrooms"));
  const [user] = useAuthState(auth);
  return (
    <SideBarContainer>
      {/* side bar header */}
      <SideBarHeader>
        <SideBarInfo>
          {" "}
          <h2>Channel NAME</h2>
          <h3>
            <FiberManualRecord />
            {user.displayName}
          </h3>
        </SideBarInfo>
        <Create />
      </SideBarHeader>
      <SidebarOptions Icon={InsertComment} title="Threads" />
      <SidebarOptions Icon={Inbox} title="Mentions & reactions" />
      <SidebarOptions Icon={Drafts} title="Saved items" />
      <SidebarOptions Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOptions Icon={PeopleAlt} title="People & user groups" />
      <SidebarOptions Icon={Apps} title="Apps" />
      <SidebarOptions Icon={FileCopy} title="File browser" />
      <SidebarOptions Icon={ExpandLess} title="Show less" />

      <hr />
      <SidebarOptions Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOptions Icon={Add} title="Add Channel" addChannelOption />

      {channels?.docs.map((doc) => (
        <SidebarOptions
          key={doc.id}
          id={doc.id}
          // addChannelOption
          title={doc?.data()?.name}
        />
      ))}
    </SideBarContainer>
  );
}

const SideBarContainer = styled.div`
  background-color: var(--slack-bg-color);
  color: white;
  flex: 0.2;
  max-width: 260px;
  margin-top: 50px;
  border-top: 2px solid #49274b;
  overflow-y: auto;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 2px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 50%;
  }
`;

const SideBarInfo = styled.div`
  flex: 1;

  > h3 {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 13px;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-right: 2px;
    color: green;
  }
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
`;
