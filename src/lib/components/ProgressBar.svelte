<script lang="ts">
  const stages = ["upload", "downscale", "bass-boost", "toppings", "export!"];
  let { currentStage }: { currentStage: number } = $props();
</script>

<header class="flex items-center mb-8">
  {#each stages as stage, i}
    <span class="border-2 size-12 flex justify-center items-center font-bold {currentStage >= i ? "border-fg bg-fg text-bg" : "border-faded text-faded"}  relative">
      <h2>{i + 1}</h2>
      <div class="absolute top-16 w-24 text-center {currentStage >= i ? "text-fg" : "text-faded"}">{stage}</div>
    </span>

    {#if i != stages.length - 1}
      <hr class="border-1 w-16 {currentStage - 1 >= i ? "border-fg" : "border-faded"}" />
    {/if}
  {/each}
</header>
