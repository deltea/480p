<script lang="ts">
  import Slider from "$components/Slider.svelte";

  let amount = 50;
</script>

<div class="w-full flex flex-col gap-6 items-center">
  <h2 class="text-faded"><b>step 3:</b> destroy your viewer's eardrums</h2>

  <Slider ticks={["original", "ear-bleeding", "earrape"]} />
</div>
