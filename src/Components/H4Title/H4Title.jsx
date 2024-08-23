const H4Title = ({children, className}) => {
  return (
    <h4 className={`text-secondary text-xl font-bold ${className}`}>
      {children}
    </h4>
  );
};

export default H4Title;