<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue";

const props = defineProps<{
  code: string;
}>();

const container = ref<HTMLElement | null>(null);
const error = ref("");

let renderCount = 0;

async function renderDiagram() {
  if (!container.value) return;

  const source = decodeURIComponent(props.code);
  const id = `mermaid-${Date.now()}-${renderCount++}`;

  try {
    error.value = "";
    const mermaidModule = await import(
      /* @vite-ignore */ "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs"
    );
    const mermaid = mermaidModule.default;

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: document.documentElement.classList.contains("dark") ? "dark" : "default"
    });

    const result = await mermaid.render(id, source);
    container.value.innerHTML = result.svg;
  } catch (err) {
    error.value = err instanceof Error ? err.message : "Mermaid render failed";
    container.value.textContent = "";
  }
}

onMounted(async () => {
  await nextTick();
  await renderDiagram();
});

watch(
  () => props.code,
  async () => {
    await nextTick();
    await renderDiagram();
  }
);
</script>

<template>
  <div class="mermaid-diagram">
    <div ref="container" />
    <pre v-if="error" class="mermaid-diagram__fallback">{{ decodeURIComponent(code) }}</pre>
  </div>
</template>
