import ChatListHeader from "@/components/Chatlist/ChatListHeader";
import List from "@/components/Chatlist/List";
import SearchBar from "@/components/Chatlist/SearchBar";
import React from "react";

function ChatList() {
  return (
    <div className="bg-panel-header-background flex flex-col max-h-screen z-20">
      <>
        <ChatListHeader />
        <SearchBar />
        <List />
      </>
    </div>
  );
}

export default ChatList;
