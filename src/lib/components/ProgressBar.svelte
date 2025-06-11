<script lang="ts">
  const STEPS = ["upload", "downscale", "bass-boost", "toppings", "export!"];
  let { currentStep }: { currentStep: number } = $props();
</script>

<header class="flex items-center mb-8">
  {#each STEPS as step, i}
    <span class="border-2 size-12 flex justify-center items-center font-bold {currentStep >= i ? "border-fg bg-fg text-bg" : "border-faded text-faded"}  relative">
      <h2>{i + 1}</h2>
      <div class="absolute top-16 w-max text-center font-normal {currentStep >= i ? "text-fg" : "text-faded"}">{step}</div>
    </span>

    {#if i != STEPS.length - 1}
      <hr class="border-1 w-24 {currentStep - 1 >= i ? "border-fg" : "border-faded"}" />
    {/if}
  {/each}
</header>
