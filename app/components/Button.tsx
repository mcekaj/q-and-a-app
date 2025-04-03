import { ButtonHTMLAttributes } from 'react';

const Button = ({
  title,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className="w-5xs mt-5 h-[42px] cursor-pointer rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-50"
      type="submit"
    >
      {title}
    </button>
  );
};
export default Button;
