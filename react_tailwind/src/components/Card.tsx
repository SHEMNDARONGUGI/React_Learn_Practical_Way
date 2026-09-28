import sampleImage from "../assets/sample/Pasted image.png";
const Card = () => {
  return (
    <div className="w-62 bg-indigo-950 rounded-xl shadow-teal-200 shadow--sm/50">
      <img className="rounded-t-xl" src={sampleImage} alt="First Image" />
      <div className="p-5">
        <h1 className="font-bold text-teal-500">Sample heading</h1>
        <p className="text-white">This is a sample description for my image</p>
      </div>
    </div>
  );
};

export default Card;
