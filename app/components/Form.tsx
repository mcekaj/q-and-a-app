const Form = ({
  onSubmit,
  children,
}: {
  onSubmit: () => void;
  children: React.ReactNode;
}) => {
  return (
    <form
      className="flex max-w-5xl flex-col items-center justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <>{children}</>
    </form>
  );
};
export default Form;
