<script lang="ts">
  import { onMount } from "svelte";
  import Slider from "$components/Slider.svelte";

  const BASE_RESOLUTION = 400;

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null;
  let img: HTMLImageElement;

  let scale = 50;

  function updateImageExample() {
    if (!ctx) {
      console.error("couldn't get canvas context");
      return;
    }

    console.log(img.width);

    canvas.width = 100;
    canvas.height = 100 * (16 / 9);

    ctx.drawImage(img, 0, 0, img.width / 10, img.height / 10);
    ctx.scale(10, 10);
  }

  onMount(() => {
    ctx = canvas.getContext("2d");

    img = new Image();
    img.src = "/images/resolution-example/480p.webp";
    img.onload = updateImageExample;
  });
</script>

<div class="w-full flex flex-col gap-6 items-center">
  <h2 class="text-faded"><b>step 2:</b> pixelate your video into oblivion</h2>

  <canvas
    bind:this={canvas}
    class="w-3/5 aspect-video border-2 border-fg inline-block"
  ></canvas>

  <Slider
    bind:value={scale}
    ticks={["original", "destroyed", "obliterated"]}
    onChange={updateImageExample}
  />
</div>
