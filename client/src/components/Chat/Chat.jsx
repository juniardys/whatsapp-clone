import ChatContainer from "@/components/Chat/ChatContainer";
import ChatHeader from "@/components/Chat/ChatHeader";
import MessageBar from "@/components/Chat/MessageBar";
import React from "react";

function Chat() {
  return (
    <div className="border-conversation-border border-1 w-full bg-conversation-panel-background flex flex-col h-[100vh] z-10">
      <ChatHeader />
      <ChatContainer />
      <MessageBar />
    </div>
  );
}

export default Chat;
