export const Button = ({ text, bgColor = "bg-white", type = "button", textColor = "text-black", className = "" }) => {
  return (
    <>
      <button type={type} className={`${bgColor} ${textColor} ${className}`}>{text}</button>
    </>
  );
};
