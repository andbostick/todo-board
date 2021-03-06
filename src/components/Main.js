import React from "react";
import Card from "./Card";
import Auth from "../firebase/Auth";

function Main({ user, todos, db }) {
  return (
    <div className="m-3">
      {!user && <Auth />}
      {user && (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-flow-row justify-items-stretch items-start gap-4">
          {todos?.docs?.map((doc) => {
            if (doc.data().id === user.uid) {
              return (
                <Card key={doc.id} todo={doc.data().todo} id={doc.id} db={db} />
              );
            }
            return "";
          })}
        </div>
      )}
    </div>
  );
}

export default Main;
