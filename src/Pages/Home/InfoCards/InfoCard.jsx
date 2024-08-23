const InfoCard = ({card}) => {
  const { name, icon, description, bgClass,} = card;
  return (
    <div
      className={`card md:card-side ${bgClass} shadow-xl py-12 px-6 text-white`}
    >
      <figure>
        <img src={icon} alt="icon" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;