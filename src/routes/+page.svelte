<script lang="ts">
  import Button from "$components/Button.svelte";
  import ProgressBar from "$components/ProgressBar.svelte";

  import DownscaleStep from "$lib/steps/DownscaleStep.svelte";
  import BassBoostStep from "$lib/steps/BassBoostStep.svelte";
  import ToppingStep from "$lib/steps/ToppingStep.svelte";
  import ExportStep from "$lib/steps/ExportStep.svelte";
  import UploadStep from "$lib/steps/UploadStep.svelte";

  interface VideoConfig {
    resolution: number;
    bassBoost: number;
  }

  let currentStep = 0;
  let stepDone = true;
  let videoConfig: VideoConfig = {
    resolution: 0,
    bassBoost: 0,
  };
</script>

<main class="h-screen flex flex-col items-center">
  <div class="gap-2 p-6">
    <h1 class="text-faded"><span class="font-bold text-fg">144p</span> - the easiest way to make your videos look like sh*t</h1>
  </div>

  <div class="gap-24 grow flex flex-col items-center justify-center relative">
    <ProgressBar {currentStep} />

    {#if currentStep == 0}
      <UploadStep />
    {:else if currentStep == 1}
      <DownscaleStep />
    {:else if currentStep == 2}
      <BassBoostStep />
    {:else if currentStep == 3}
      <ToppingStep />
    {:else}
      <ExportStep />
    {/if}

    <div class="flex w-full {currentStep > 0 ? "justify-between" : "justify-center"}">
      {#if currentStep > 0}
        <Button disabled={!stepDone} onNext={() => (currentStep -= +(currentStep > 0))}>
          {"< back"}
        </Button>
      {/if}

      <Button primary disabled={!stepDone} onNext={() => (currentStep += +(currentStep < 4))}>
        {currentStep < 4 ? "next >" : "finish"}
      </Button>
    </div>
  </div>
</main>
