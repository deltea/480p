<script lang="ts">
  import NextButton from "$components/NextButton.svelte";
  import ProgressBar from "$components/ProgressBar.svelte";
  import { onMount } from "svelte";

  interface VideoConfig {
    resolution: "480p" | "360p" | "240p";
  }

  const baseResolution = 400;

  let currentStage = 0;
  let videoConfig = {

  };

  let scale = 0;

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let img: HTMLImageElement;

  function updateImageExample() {
    const newW = img.width * scale;
    const newH = img.height * scale;

    canvas.width = newW;
    canvas.height = newH;

    canvas.style.width = `400px`;
    canvas.style.height = `${(newH / newW) * 400}px`;

    ctx.drawImage(img, 0, 0, 10 + scale, 10 + scale);
    ctx.scale(10, 10);
  }

  onMount(() => {
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) {
      console.error("couldn't get canvas context");
      return;
    }

    img = new Image();
    img.src = "/images/resolution-example/480p.webp";
    img.onload = updateImageExample;
  });
</script>

<main class="gap-16 flex flex-col justify-center items-center h-screen">
  <div class="flex gap-2 text-lg">
    <h1 class="font-bold decoration-2">480p</h1>
    <p class="text-faded">- the easiest way to make your videos look like sh*t</p>
  </div>

  <ProgressBar {currentStage} />

  {#if currentStage == 0}
    <input
      type="range"
      name="resolution"
      id="resolution"
      min={0}
      max={1}
      step={0.01}
      bind:value={scale}
      on:input={updateImageExample}
    >

    <canvas bind:this={canvas} class="w-96"></canvas>

    <NextButton disabled />
  {:else if currentStage == 1}
    <p>downscale</p>
    <NextButton disabled />
  {:else if currentStage == 2}
    <p>bass-boost</p>
    <NextButton disabled />
  {:else if currentStage == 3}
    <p>toppings</p>
    <NextButton disabled />
  {:else}
    <p>upload</p>
    <NextButton disabled />
  {/if}
</main>
