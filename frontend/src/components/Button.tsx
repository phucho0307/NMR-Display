interface ButtonProps {
  children: string;
  color?: string;
  onClick: () => void;
}

const Button = ({children, onClick }: ButtonProps) => {
  return (
    <button className="bg-[#080821] hover:bg-transparent text-[#FFFFFF] font-semibold hover:text-[#FFFFFF] py-2 px-4 border hover:border-transparent rounded" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
