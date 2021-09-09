export const Chat = ({ messageList }) => {
  return (
    <div className="Chat">
      {messageList.map((newMessage) => {
        return (
          <div key={newMessage.id} className="chatMessage">
            {newMessage.author}: "{newMessage.text}"
          </div>
        );
      })}
    </div>
  );
};
