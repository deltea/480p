<script lang="ts">
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
  <title>480p</title>
</svelte:head>

{@render children()}
