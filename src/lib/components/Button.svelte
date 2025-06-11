<script lang="ts">
  import type { Snippet } from "svelte";

  let { children, disabled, onNext, primary = false }: {
    disabled: boolean,
    onNext: () => void,
    children: Snippet,
    primary?: boolean,
  } = $props();
</script>

<button
  class="h-12 px-4 font-bold cursor-pointer disabled:bg-faded disabled:text-bg outline-none {primary ? "bg-fg text-bg" : "bg-faded text-fg"}"
  {disabled}
  onclick={onNext}
>
  {@render children()}
</button>
