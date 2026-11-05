<template>
  <ModalShell :label="video.title" wide>
    <div class="youtube-player">
      <iframe
        :src="`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`"
        :title="video.title"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div class="modal-body">
      <h2 class="modal-title">{{ video.title }}</h2>
      <p v-if="video.description" class="youtube-video-description">{{ video.description }}</p>
    </div>
  </ModalShell>
</template>

<script setup>
import ModalShell from './ModalShell.vue';

defineProps({ video: { type: Object, required: true } });
</script>

<style>
.youtube-player { position: relative; aspect-ratio: 16 / 9; background: var(--navy); }
.youtube-player iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.youtube-player + .modal-body { padding-bottom: 12px; }
.youtube-video-description { white-space: pre-line; overflow-wrap: anywhere; }
</style>
