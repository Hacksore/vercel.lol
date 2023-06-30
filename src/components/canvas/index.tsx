"use client";

import React from "react";
import { useEffect } from "react";

// TODO: because refs were too hard we use globals
let x = 0;
let y = 0;
let dx = 1;
let dy = 1;

// I am sorry for this
let viewportHeight = 0;
let viewportWidth = 0;
let currentColorId = 0;

const PUCK_SPEED = 0.8;

// https://github.com/vercel/turbo/blob/261d22177f6c7301f9c5e93518112b025b15d7aa/cli/internal/colorcache/colorcache.go#L14
const COLORS = ["#00FFFF", "#FF00FF", "#00FF00", "#FF8800", "#4444FF"];
let currentT = 1;

export function Canvas() {
  // bg blob
  const blobRef = React.useRef<HTMLDivElement | null>(null);
  // subtitle
  const h3Ref = React.useRef<HTMLDivElement | null>(null);

  // T4 title stack
  const t1Ref = React.useRef<HTMLDivElement | null>(null);
  const t2Ref = React.useRef<HTMLDivElement | null>(null);
  const t3Ref = React.useRef<HTMLDivElement | null>(null);
  const t4Ref = React.useRef<HTMLDivElement | null>(null);

  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  const TRIANGLE_HEIGHT = 64;
  const TRIANGLE_WIDTH = 64;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const blob = document.getElementById("cursorthing") as HTMLDivElement;
    blobRef.current = blob;

    const h3 = document.getElementById("subtitle") as HTMLDivElement;
    h3Ref.current = h3;

    const t1 = document.getElementById("t1") as HTMLDivElement;
    t1Ref.current = t1;
    const t2 = document.getElementById("t2") as HTMLDivElement;
    t2Ref.current = t2;
    const t3 = document.getElementById("t3") as HTMLDivElement;
    t3Ref.current = t3;
    const t4 = document.getElementById("t4") as HTMLDivElement;
    t4Ref.current = t4;

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    canvasRef.current = canvas;

    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    window.requestAnimationFrame(render);

    // get size of the viewport
    window.addEventListener("resize", () => {
      // set canvas size to match
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      viewportHeight = window.innerHeight;
      viewportWidth = window.innerWidth;
    });

    window.addEventListener("mousemove", (e) => {
      blob.style.translate = `${e.clientX - blob.clientWidth / 2}px ${
        e.clientY - blob.clientHeight / 2
      }px`;
    });

    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;

    // set canvas size to match
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }, []);

  const render = () => {
    const ctx = ctxRef.current;
    if (!ctx) {
      return;
    }

    if (!canvasRef.current) {
      return;
    }

    ctx.clearRect(0, 0, viewportWidth, viewportHeight);

    if (y + TRIANGLE_HEIGHT >= canvasRef.current.height || y < 0) {
      currentColorId === COLORS.length - 1
        ? (currentColorId = 0)
        : currentColorId++;
      currentT === 4 ? (currentT = 1) : currentT++;
      dy *= -1;
    }

    // Reverse direction if hitting the canvas boundaries
    if (x + TRIANGLE_WIDTH >= canvasRef.current.width || x < 0) {
      currentColorId === COLORS.length - 1
        ? (currentColorId = 0)
        : currentColorId++;
      currentT === 4 ? (currentT = 1) : currentT++;
      dx *= -1;
    }

    // Update the position
    x += dx * PUCK_SPEED;
    y += dy * PUCK_SPEED;

    // draw a solid triangle
    ctx.fillStyle = COLORS[currentColorId];

    // change blob bg
    const blob = blobRef.current;
    if (blob) {
      blob.style.background = COLORS[currentColorId];
    }
    const h3 = h3Ref.current;
    if (h3) {
      h3.style.background = COLORS[currentColorId];
    }

    const t1 = t1Ref.current as HTMLElement;
    const t2 = t2Ref.current as HTMLElement;
    const t3 = t3Ref.current as HTMLElement;
    const t4 = t4Ref.current as HTMLElement;

    if (currentT === 1) {
      t1.style.color = COLORS[currentColorId];
      t2.style.color = "white";
      t3.style.color = "white";
      t4.style.color = "white";
    }
    if (currentT === 2) {
      t1.style.color = "white";
      t2.style.color = COLORS[currentColorId];
      t3.style.color = "white";
      t4.style.color = "white";
    }
    if (currentT === 3) {
      t1.style.color = "white";
      t2.style.color = "white";
      t3.style.color = COLORS[currentColorId];
      t4.style.color = "white";
    }
    if (currentT === 4) {
      t1.style.color = "white";
      t2.style.color = "white";
      t3.style.color = "white";
      t4.style.color = COLORS[currentColorId];
    }

    // draw a triangle with the tip pointing up
    ctx.beginPath();
    ctx.moveTo(x + TRIANGLE_WIDTH / 2, y);
    ctx.lineTo(x + TRIANGLE_WIDTH, y + TRIANGLE_HEIGHT);
    ctx.lineTo(x, y + TRIANGLE_HEIGHT);
    ctx.fill();

    window.requestAnimationFrame(render);
  };

  return (
    <>
      <div
        id="cursorthing"
        className="pointer-events-none w-64 h-64 fixed opacity-50 blur-[10rem] z-10 rounded-full"
      />
      <canvas
        id="canvas"
        style={{ background: "#000" }}
        width="100%"
        height="100%"
      />
    </>
  );
}
