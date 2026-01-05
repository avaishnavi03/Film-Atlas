import "./button.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
};

function Button({ children, variant = "primary", onClick }: ButtonProps) {
  return (
    <button
      className={`btn-custom ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
