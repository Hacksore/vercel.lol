"use client";

import React from "react";
import { useEffect } from "react";

// TODO: because refs were too hard we use globals
let x = 0;
let y = 0;
let dx = 1;
let dy = 1;

const PUCK_SPEED = 0.8;
export function Canvas() {
  const canvasRef = React.useRef < HTMLCanvasElement | null > (null);
  const ctxRef = React.useRef < CanvasRenderingContext2D | null > (null);

  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 600;
  const TRIANGLE_HEIGHT = 64;
  const TRIANGLE_WIDTH = 64;

  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    canvasRef.current = canvas;

    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    window.requestAnimationFrame(render);
  }, []);

  const render = () => {
    const ctx = ctxRef.current;
    if (!ctx) {
      return;
    }

    if (!canvasRef.current) {
      return;
    }

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    if (y + TRIANGLE_HEIGHT >= canvasRef.current.height || y < 0) {
      dy *= -1;
    }

    // Reverse direction if hitting the canvas boundaries
    if (x + TRIANGLE_WIDTH >= canvasRef.current.width || x < 0) {
      dx *= -1;
    }

    // Update the position
    x += dx * PUCK_SPEED;
    y += dy * PUCK_SPEED;

    // draw a solid triangle 
    ctx.fillStyle = "#fff";

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + TRIANGLE_WIDTH, y);
    ctx.lineTo(x + TRIANGLE_WIDTH / 2, y + TRIANGLE_HEIGHT);
    ctx.fill();

    window.requestAnimationFrame(render);
  };

  return (
  <>
    <canvas
      id="canvas"
      style={{ background: "#000" }}
      width="800"
      height="600"
    ></canvas>
    </>
  );
}
