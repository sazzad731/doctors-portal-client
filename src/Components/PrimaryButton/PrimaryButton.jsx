const PrimaryButton = ({ children, openModal }) => {
  return (
    <button
      onClick={() => openModal === undefined ? "" : openModal()}
      className="btn btn-secondary bg-gradient-to-r primary-gradient text-white"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;