import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, Icon, IconButton } from "@mui/material";
import { Person } from "@mui/icons-material";

interface MemberDetailEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
}

const createDefaultMemberDetail = () => ({
  id: "",
  login: "",
  name: "",
  company: "",
  bio: "",
});

export const DetailPage: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <CardHeader>Detail page</CardHeader>
        <CardContent>
          <h3>
            <Person />
            User Id: {id}
          </h3>
          <p> id: {member.id}</p>
          <p> login: {member.login}</p>
          <p> name: {member.name}</p>
          <p> company: {member.company}</p>
          <p> bio: {member.bio}</p>
        </CardContent>
        <Link to="/list">Back to list page</Link>
      </CardContent>
    </Card>
  );
};
