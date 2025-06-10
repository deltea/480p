<script lang="ts">
  let { disabled }: { disabled: boolean } = $props();
</script>

<button
  class="h-12 px-4 bg-fg text-bg font-bold cursor-pointer disabled:bg-faded disabled:text-bg"
  {disabled}
>
  {"next >"}
</button>
