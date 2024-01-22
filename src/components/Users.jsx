import axios from "axios";
import React from 'react'

const baseURL = "https://www.essenzadfiori.com.br/api-stk/public/api/user";

export default function Users() {
  const [user, setUser] = React.useState(null);
  const config = {
    headers: {
      "Authorization": 'Bearer 3|TjISRkoazT0FICQjFyaVym5GHJlDsd7OVJoxVsbncc9d4f2c'
    }
  }
  React.useEffect(() => {
    axios.get(baseURL, config).then((response) => {
      setUser(response.data);
    });
  }, []);

  if (!user) return null;

  console.log(user)

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
