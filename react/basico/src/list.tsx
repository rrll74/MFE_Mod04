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
  const [pag, setPag] = React.useState<number>(1);

  const myContext = React.useContext(MyContext);

  const applyFilter = () => {
    fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) => response.json())
      .then((json) => {
        // console.log(typeof json, json);
        json = typeof json === "object" && !json.message ? json : [];
        setPag(pag);
        setMembers(json);
        console.log("recarga");
      })
      .catch(() => {
        setMembers([]);
        // myContext.setPage(myContext.page);
      });
  };

  React.useEffect(() => {
    applyFilter();
    console.log("hay cambio");
  }, [pag]);

  const rerender = (nro: number) => {
    setPag(nro);
    console.log("list", myContext.page, nro);
  };

  const calcPages = () => {
    const totals = members.length;
    const totalPages = totals % 5 === 0 ? totals / 5 : totals / 5 + 1;
    const arrayPages = [];
    for (let index = 1; index <= totalPages; index++) {
      arrayPages.push(index);
    }
    console.log(arrayPages);
    return arrayPages;
  };

  return (
    <MyContextProvider>
      <React.Fragment>
        <h2>Hello from List page</h2>+{" "}
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
        <button
          onClick={() => {
            setPag(1);
            myContext.setPage(1);
            applyFilter();
          }}
        >
          Filtrar por organización
        </button>
        {members.length !== 0 ? (
          <React.Fragment>
            <div className="list-user-list-container">
              <span className="list-header">Avatar</span>
              <span className="list-header">Id</span>
              <span className="list-header">Name</span>
              {members.map((member, index) =>
                index < pag * 5 && index >= (pag - 1) * 5 ? (
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
            <Pagination
              totals={members.length}
              onChange={rerender}
              totalPages={calcPages()}
              currentPage={pag}
            />
          </React.Fragment>
        ) : (
          <h3>"Organization doesn't exist or has no users."</h3>
        )}
        <Link to="/detail">Navigate to detail page</Link>
      </React.Fragment>
    </MyContextProvider>
  );
};
