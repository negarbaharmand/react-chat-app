import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  const projectId = import.meta.env.VITE_PROJECT_ID;
  return (
    <ChatEngine
      height="100vh"
      projectID={projectId}
      userName="javascriptmastery"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
