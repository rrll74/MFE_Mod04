import React from "react";
import { Link } from "react-router-dom";
import { detailData, mainData } from "./mockdata";

interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [filter, setFilter] = React.useState<string>("lemoncode");


  // Filtrado de miembros por compañía
  const makeFilter = () => {
    const newList: MemberEntity[] = [];
    mainData.map((member) => {
      detailData.map((dataMember) => {
        const memberAux: MemberEntity = {
          id: member.id,
          login: member.login,
          avatar_url: member.avatar_url
        }
        if ((filter.toUpperCase() === "" || dataMember.company?.toUpperCase === filter.toUpperCase) && member.id === dataMember.id) newList.push(memberAux);
      });
    });
    setMembers(newList);
  };

  // const makeFilter = () => {
  //     fetch(`https://api.github.com/orgs/${filter}/members`)
  //       .then((response) => response.json())
  //       .then((json) => setMembers(json));
  // }

  React.useEffect(() => {
    makeFilter();
  }, []);

  return (
    <>
      <h2>Hello from List page</h2>+{" "}
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <button onClick={makeFilter}>Filtrar por Compañia</button>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
