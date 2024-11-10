import { useState } from "react";
import List from "./components/List";
import Details from "./components/Details";

interface User {
  id: number;
  name: string;
}

function App() {
  
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="container-app">
      <List onSelectUser={handleSelectUser} />
      <Details info={selectedUser} />
    </div>
  );
}

export default App
