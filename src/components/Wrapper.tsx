import { messages } from "../const";
import { TWrapperProps } from "../types";

const Wrapper = ({ children, status }: TWrapperProps): JSX.Element => {
  if (status === "rejected") {
    return <h1>{messages[status]}</h1>;
  }
  if (status === "pending") {
    return <h1>{messages[status]}</h1>;
  }
  return (
    <div className="container mx-auto w-full">
      <h2 className="text-3xl text-center mt-3">Книги</h2>
      {children}
    </div>
  );
};

export default Wrapper;
