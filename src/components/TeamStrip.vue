<template>
  <section class="team-strip band grain" aria-labelledby="team-heading">
    <div class="wrap">
      <div class="team-head">
        <div>
          <h2 id="team-heading">{{ TEAM.title }}</h2>
          <div class="rule"></div>
        </div>
        <p>{{ TEAM.intro }}</p>
      </div>
      <ul class="team-list">
        <li class="team-you">
          <span class="team-icon"><AppIcon name="users" :size="22" /></span>
          <strong>You call me</strong>
          <span>Your one point of contact for everything below.</span>
        </li>
        <li v-for="m in TEAM.members" :key="m.name">
          <span class="team-icon"><AppIcon :name="m.icon" :size="22" /></span>
          <strong>{{ m.name }}</strong>
          <span>{{ m.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import AppIcon from './AppIcon.vue';
import { TEAM } from '@/content/team';
</script>

<style>
.team-strip { padding-block: clamp(64px, 8vw, 104px); }
.team-head { display: grid; gap: 4px 56px; margin-bottom: 40px; }
.team-head p { margin: 0; font-size: 1.08rem; }
.team-head .rule { margin-bottom: 0; }
@media (min-width: 900px) { .team-head { grid-template-columns: 1fr 1.2fr; align-items: end; } }
.team-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 14px; grid-template-columns: repeat(auto-fit, minmax(min(100%, 170px), 1fr)); }
.team-list li {
  display: flex; flex-direction: column; gap: 6px; padding: 22px 20px; border-radius: 16px;
  background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12);
}
.team-list strong { color: #FFFFFF; font-size: 1.05rem; font-stretch: 106%; }
.team-list span:last-child { font-size: 0.92rem; color: #B8C4D3; line-height: 1.45; }
.team-icon {
  width: 42px; height: 42px; border-radius: 11px; display: grid; place-items: center; margin-bottom: 6px;
  background: rgba(29, 165, 166, 0.18); color: #6ED3D4;
}
.team-list li.team-you { background: var(--gold); border-color: var(--gold); }
.team-list li.team-you strong, .team-list li.team-you span:last-child { color: var(--navy); }
.team-list li.team-you .team-icon { background: rgba(15, 39, 68, 0.12); color: var(--navy); }
</style>
