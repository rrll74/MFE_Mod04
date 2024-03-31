import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "./pagination";
import { MyContext, MyContextProvider } from "./pagination.context";

interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}


export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [filter, setFilter] = React.useState<string>("lemoncode");
  
  const myContext = React.useContext(MyContext);

  const makeFilter = () => {
    fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) => response.json())
      .then((json) => {
        // console.log(typeof json, json);
        json = typeof json === "object" && !json.message ? json : [];
        setMembers(json);
      })
      .catch(() => {
        setMembers([]);
        myContext.setPage(1);
      });
  };

  React.useEffect(() => {
    makeFilter();
    console.log("hay cambio");
  }, [myContext.page]);

  return (
    <MyContextProvider>
      <React.Fragment>
        <h2>Hello from List page</h2>+{" "}
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
        <button onClick={makeFilter}>Filtrar por organización</button>
        {members.length !== 0 ? (
          <React.Fragment>
            <div className="list-user-list-container">
              <span className="list-header">Avatar</span>
              <span className="list-header">Id</span>
              <span className="list-header">Name</span>
              {members.map((member, index) =>
                index < myContext.page * 5 &&
                index >= (myContext.page - 1) * 5 ? (
                  <React.Fragment key={member.id}>
                    <img src={member.avatar_url} />
                    <span>{member.id}</span>
                    <Link to={`/detail/${member.login}`}>{member.login}</Link>
                  </React.Fragment>
                ) : (
                  ""
                )
              )}
            </div>
            <Pagination page={myContext.page} totals={members.length} />
          </React.Fragment>
        ) : (
          <h3>"Organization doesn't exist or has no users."</h3>
        )}
        <Link to="/detail">Navigate to detail page</Link>
      </React.Fragment>
    </MyContextProvider>
  );
};
