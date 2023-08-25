import ChatListHeader from "@/components/ChatList/ChatListHeader";
import ContactsList from "@/components/ChatList/ContactsList";
import List from "@/components/ChatList/List";
import SearchBar from "@/components/ChatList/SearchBar";
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
