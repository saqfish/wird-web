import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "theme-ui";

const Canvas = (props) => {
  const { id, page, first, verse } = props;
  const [loading, setLoading] = useState(true);
  const canvasRef = useRef(null);
  const mounted = useRef(true);

  const drawMaqra = (ctx, canvas) => {
    let sec = 0;
    const line = canvas.height / 15;
    if (first) sec = line * (verse.line < 14 ? verse.line : 0);
    ctx.fillStyle = "rgba(0,255,127,0.2)";
    ctx.fillRect(0, sec, canvas.width, canvas.height);
  };

  const drawImage = (image) => {
    if (canvasRef.current) {
      setLoading(false);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.height = image.height;
      canvas.width = image.width;
      canvas.style.maxHeight =
        image.height < window.innerHeight ? image.height : "100vh";
      canvas.style.maxWidth =
        image.width < window.innerWidth ? image.width : "100vw";
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(image, 0, 0);
      if (page > 4) drawMaqra(ctx, canvas);
    }
  };

  useEffect(() => {
    let img = new Image();

    (async () => {
      if (mounted.current) {
        setLoading(true);
        img.src = `${process.env.PUBLIC_URL}/mushaf/cropped/${page}.png`;
        img.onload = () => {
          drawImage(img);
        };
      }
    })();

    return () => {
      mounted.current = false;
      img.src = "";
    };
  }, []);

  const scrollToNextPage = (id) => {
    const canvas = document.getElementById(`canvas-${id + 1}`);
    if (canvas) {
      canvas.scrollIntoView();
    } else scrollToNextPage(0);
  };

  return (
    <>
      {loading ? <Spinner /> : null}
      <canvas
        onClick={() => scrollToNextPage(id)}
        ref={canvasRef}
        id={`canvas-${id}`}
      ></canvas>
    </>
  );
};

export default Canvas;
