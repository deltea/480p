<script lang="ts">
  import { Slider } from "bits-ui";

  let { value = $bindable(), ticks = [], onChange = (() => {}) }: {
    value?: number,
    ticks?: string[],
    onChange?: () => void
  } = $props();
</script>

<div class="w-full space-y-3 text-faded">
  <div class="flex justify-between w-full">
    {#each ticks as tick}
      <p>{tick}</p>
    {/each}
  </div>

  <Slider.Root
    type="single"
    min={0}
    max={100}
    step={1}
    bind:value
    onchange={() => onChange()}
    class="relative flex items-center hover:cursor-grab active:cursor-grabbing"
  >
    <span class="h-2 w-full bg-faded">
      <Slider.Range class="bg-fg h-full absolute" />
    </span>
    <Slider.Thumb
      index={0}
      class="h-6 w-4 bg-fg outline-none"
    />
  </Slider.Root>
</div>

