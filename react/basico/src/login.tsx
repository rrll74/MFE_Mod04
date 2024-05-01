import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
  OutlinedInput,
} from "@mui/material";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <Card sx={{ padding: "20px", maxWidth: "300px" }}>
      <CardHeader title="Login" />
      <CardContent>
        <form onSubmit={handleNavigation}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <TextField
              required
              variant="outlined"
              label="User Name"
              defaultValue=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              required
              variant="outlined"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant="contained" type="submit">
              Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
