import { useState } from "react";

function Button() {
  const [buttonState, setButtonState] = useState("Open ChatBot");
  const [iFrameState, setIFrameState] = useState(false);
  const changeButtonState = () => {
    if (buttonState === "Open ChatBot") {
      setButtonState("Close ChatBot");
      setIFrameState(true);
    } else {
      setButtonState("Open ChatBot");
      setIFrameState(false);
    }
  };
  return (
    <div>
      <button onClick={changeButtonState}>{buttonState}</button>
      {iFrameState && <iframe src="http://localhost:3050" title="chatbot" />}
    </div>
  );
}

export default Button;
