import { ImSpinner9 } from "react-icons/im";

function Loading() {
  return (
    <div className="flex justify-center my-20 animate-spin text-5xl text-[#7fad39]">
      <ImSpinner9 />
    </div>
  );
}

export default Loading;
