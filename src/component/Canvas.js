import React, { useRef, useEffect } from "react";
import "./Canvas.css";
const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
  return (
    <>
      <canvas id="canvas" width="512" height="256" ref={canvasRef} {...rest} />
      {/* <p id="controls">
        <input
          type="button"
          id="start_button"
          value="Start"
          onClick={startbutton}
        />
        &nbsp; &nbsp;
        <input
          type="button"
          id="stop_button"
          value="Stop"
          onClick={stopbutton}
        />
      </p>
      <p id="msg"></p> */}
    </>
  );
};
export default Canvas;
