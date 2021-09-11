import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Props di React"
    },
    {
      text: "Belajar React Hoax wkwk"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React Hoax wkwk"
    },
    {
      text: "Belajar React"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text="Belajar React" />;
      })}
    </section>
  );
};
export default Todos;
