const ServiceCard = ({card}) => {
  const {title, img, description} = card;
  return (
    <div className="card bg-base-100 shadow-lg">
      <figure className="px-10 pt-10">
        <img src={img} alt="Teeth" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;