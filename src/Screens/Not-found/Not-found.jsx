import { ChatList } from "../../Components/chatList";

export const NotFound = ({ chats, chatId }) => {
  return (
    <div>
      <ChatList chats={chats} chatId={chatId} />
      <div>404</div>
      <div>PAGE NOT FOUND</div>
      <div>PLEASE, ENTER THE CORRECT CHAT'S ID</div>
    </div>
  );
};
