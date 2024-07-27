// Components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import SendMessage from "./SendMessage";

const Chats = (props) => {
  return (
    <div className="h-full col-span-8 flex flex-col gap-2 overflow-y-hidden">
      <ChatHeader selectedUser={props.selectedUser} />
      <Messages selectedUser={props.selectedUser} />
      <SendMessage selectedUser={props.selectedUser} />
    </div>
  );
};

export default Chats;
