import { ChatEngine } from "react-chat-engine";
import "./App.css";

const App = () => {
  const projectId = import.meta.env.VITE_PROJECT_ID;
  return (
    <ChatEngine
      height="100vh"
      projectID={projectId}
      userName="javascriptmastery"
      userSecret="123123"
    />
  );
};

export default App;
