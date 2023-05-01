import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "./index.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="column">
        <h1>Gui-guy</h1>
        <h2>Interfaces, Tech-philosophy & Dev experience</h2>
      </div>
      <div className="column"></div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
