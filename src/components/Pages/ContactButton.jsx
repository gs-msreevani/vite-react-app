import { useState } from "react";

const ContactButton = () => {
  const [count, setCount] = useState(0);
  const handleCustomEvent = () => {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
    if (window.aptrinsic) {
      window.aptrinsic("track", "viewbuttonclicked", { cnt: count });
    }
  };
  return (
    <div>
      <button id="view" onClick={handleCustomEvent}>
        View
      </button>
    </div>
  );
};

export default ContactButton;
