import ChatListHeader from "@/components/Chatlist/ChatListHeader";
import ContactsList from "@/components/Chatlist/ContactsList";
import List from "@/components/Chatlist/List";
import SearchBar from "@/components/Chatlist/SearchBar";
import { useStateProvider } from "@/context/StateContext";
import React, { useEffect, useState } from "react";

function ChatList() {
  const [{ contactsPage }] = useStateProvider();
  const [pageType, setPageType] = useState("default");

  useEffect(() => {
    if (contactsPage) {
      setPageType("all-contacts");
    } else {
      setPageType("default");
    }
  }, [contactsPage]);

  return (
    <div className="bg-panel-header-background flex flex-col max-h-screen z-20">
      {pageType === "default" && (
        <>
          <ChatListHeader />
          <SearchBar />
          <List />
        </>
      )}
      {pageType === "all-contacts" && <ContactsList />}
    </div>
  );
}

export default ChatList;
