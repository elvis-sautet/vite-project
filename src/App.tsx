import React, { ReactElement, ReactNode, useState } from "react";
import "./App.css";

interface TestProps {
  name: string;
}

function TestComponent(props: TestProps): ReactElement {
  return (
    <>
      <div>
        <h1>Test Component</h1>
        <p>{props.name}</p>
        <p>hello sautet</p>
      </div>
    </>
  );
}
// conventional props
function Heading({
  title,
  children,
}: {
  title: String;
  children?: ReactNode;
}): ReactElement {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}

const defaultContainerProps = {
  heading: "Default Heading",
  children: <p>Default Children</p>,
};
type ContainerProps = {
  children?: ReactNode;
} & typeof defaultContainerProps;
// default props
function Container({ heading, children }: ContainerProps): ReactElement {
  return (
    <>
      <h1>{heading}</h1>
      {children}
    </>
  );
}

Container.defaultProps = defaultContainerProps;

// functional props
function TextWithNumber({
  children,
}: {
  children: (num: number) => ReactNode;
}) {
  const [state, setState] = React.useState<number | null>(null);
  type Error = {
    message: string;
  };
  const [error, setError] = useState<Error | null>(null);

   return (
    <div>
      <div>{error?.message}</div>
      <div>{typeof state === "number" ? children(state) : "Loading..."}</div>
      <button onClick={() => setState(state === null ? 0 : state + 1)}>
        asdd
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <Heading title="Hello World">
        <p>Testing</p>
      </Heading>
      <Container heading="Heading">
        <p>Testing</p>
      </Container>
      <TestComponent name="Test" />
      <TextWithNumber>
        {(num: number) => <p>Today number is {num}</p>}
      </TextWithNumber>
    </>
  );
}

export default App;
