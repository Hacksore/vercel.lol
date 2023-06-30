"use client";

import React from "react";
import { useEffect } from "react";

const PUCK_SPEED = 0.8;
export function Canvas() {
  const canvasRef = React.useRef < HTMLCanvasElement | null > (null);
  const ctxRef = React.useRef < CanvasRenderingContext2D | null > (null);
  const pos = React.useRef < { x: number; y: number; dx: number; dy: number } > ({
    x: 0,
    y: 0,
    dx: 1,
    dy: 1,
  });

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

    // make this bounce around the screen
    ctx.fillStyle = "green";

    let { x, y, dx, dy } = pos.current;

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    if (pos.current.y + TRIANGLE_HEIGHT >= canvasRef.current.height || pos.current.y < 0) {
      pos.current.dy *= -1;
    }

    // Reverse direction if hitting the canvas boundaries
    if (pos.current.x + TRIANGLE_WIDTH >= canvasRef.current.width || pos.current.x < 0) {
      pos.current.dx *= -1;
    }

    // Update the position
    pos.current.x += pos.current.dx * PUCK_SPEED;
    pos.current.y += pos.current.dy * PUCK_SPEED;

    // draw a solid triangle 
    ctx.fillRect(x, y, TRIANGLE_WIDTH, TRIANGLE_HEIGHT);
    // ctx.beginPath();
    // ctx.moveTo(pos.current.x, pos.current.y);
    // ctx.lineTo(x + TRIANGLE_WIDTH, y);
    // ctx.lineTo(x + TRIANGLE_WIDTH / 2, y + TRIANGLE_HEIGHT);
    // ctx.fill();

    window.requestAnimationFrame(render);
  };

  return (
    <canvas
      id="canvas"
      style={{ background: "blue" }}
      width="800"
      height="600"
    ></canvas>
  );
}
