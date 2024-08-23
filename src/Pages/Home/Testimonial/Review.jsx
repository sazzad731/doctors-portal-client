
const Review = ({reviewData}) => {
  const { name, img, country, description } = reviewData;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="mb-9">{description}</p>
      <div className="flex items-center">
        <img className="me-4 rounded-full border-4 p-1 border-secondary w-20 h-20" src={img} alt="user" />
        <div>
          <h5 className="text-xl font-semibold">{name}</h5>
          <p>{country}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Review;