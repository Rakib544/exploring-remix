import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  children: string;
};

const Code = ({ children }: Props) => {
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Code;
