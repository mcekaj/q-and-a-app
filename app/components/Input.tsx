import { InputHTMLAttributes } from 'react';

const Input = ({
  value,
  onChange,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      value={value}
      onChange={onChange}
      type="text"
      className="w-100 rounded-md border border-gray-300 p-2 focus:ring focus:ring-blue-200 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-50"
      placeholder="Ask a question..."
    />
  );
};
export default Input;
