import { AiOutlineExclamationCircle } from "react-icons/ai";

function Error() {
  return (
    <div className="flex items-center justify-center my-20">
      <h2 className="capitalize text-gray-800 text-lg flex items-center">
        <AiOutlineExclamationCircle className="mr-2 text-2xl" /> there was an
        error...
      </h2>
    </div>
  );
}

export default Error;
