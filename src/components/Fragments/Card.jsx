import { Link } from "react-router-dom";

const Card = ({ children, id }) => {
  return (
    <>
      <div className="bg-green-300  hover:bg-indigo-100 hover:text-blue-700 rounded-lg shadow-2xl p-3  hover:border-2 hover:border-violet-800">
        <Link to={`/detail/${id}`}> <div className="flex items-center">{children}</div></Link>
      </div>
    </>
  );
};

const CardHeading = ({ id, name_simple, translated_name }) => {
  return (
    <div className="m-2  custom-star-shapel flex justify-center">
      <div className="border-double text-center border-4 border-indigo-700 rounded-full">
        <h1 className="text-sm font-bold text-indigo-600 p-3">
          {id}
        </h1>
      </div>
      <div className=" ml-3">
        <p className="text-sm">{name_simple}</p>
        <p className="text-sm">{translated_name}</p>
      </div>
    </div>
  );
};
const CardBody = ({ name_arabic, verses_count, classname }) => {
  return (
    <div
      className="flex justify-between flex-grow"
      style={{ direction: "rtl" }}
    >
      <div className="ml-2 mr-4">
        <p className={`text-sm ${classname}`} >{name_arabic}</p>
        <p className="text-sm arabic-text">Ayat : {verses_count}</p>
      </div>
    </div>
  );
};

Card.CardBody = CardBody;
Card.CardHeading = CardHeading;

export default Card;
