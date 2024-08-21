type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <div className="container mx-auto w-full">
      <h2 className="text-3xl text-center mt-3">Книги</h2>

      {children}
    </div>
  );
};

export default Wrapper;
