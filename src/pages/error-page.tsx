import { useRouteError } from "react-router-dom";

const ErrorPage = (): JSX.Element => {
  const error = useRouteError();
  console.error(error);
  return <h1>Error Page</h1>;
};

export default ErrorPage;
