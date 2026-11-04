<template>
  <div class="paper" :class="{ small }" aria-hidden="true">
    <span class="p-brand">THE OWNER’S TRIBE</span>
    <span class="p-title">{{ res.title }}</span>
    <span v-for="(item, n) in res.inside" :key="item" class="p-line">
      <span class="p-box" :class="{ done: n === 0 }"></span>{{ item }}
    </span>
    <span class="p-line"><span class="p-box"></span><span class="p-bar"></span></span>
    <span class="p-line"><span class="p-box"></span><span class="p-bar short"></span></span>
  </div>
</template>

<script setup>
defineProps({
  res: { type: Object, required: true },
  small: Boolean
});
</script>

<style>
.paper {
  position: relative; display: flex; flex-direction: column; background: #FFFFFF; color: var(--navy);
  border-radius: 6px; padding: 30px 28px 34px; aspect-ratio: 8.5 / 11; width: 100%; max-width: 330px;
  margin-inline: auto; box-shadow: 0 34px 60px -30px rgba(0, 0, 0, 0.65); transform: rotate(-2.5deg);
  overflow: hidden;
}
.paper::after {
  content: ""; position: absolute; right: 0; top: 0; width: 34px; height: 34px;
  background: linear-gradient(225deg, var(--band) 50%, #E3E8EE 50%);
}
.paper::before {
  content: ""; position: absolute; left: 28px; right: 28px; bottom: 20px; height: 4px; border-radius: 2px; background: var(--gold);
}
.p-brand { font-size: 0.6rem; font-weight: 700; font-stretch: 118%; letter-spacing: 0.26em; color: #8A6512; }
.p-title {
  display: block; font-size: 1.32rem; font-weight: 900; font-stretch: 110%; line-height: 1.05; margin: 10px 0 18px;
}
.p-line {
  display: flex; align-items: center; gap: 10px; padding: 9px 0; border-bottom: 1px solid #E3E8EE; font-size: 0.76rem; line-height: 1.3; color: #3A4552;
}
.p-box { flex: none; width: 14px; height: 14px; border: 2px solid var(--teal); border-radius: 3px; }
.p-box.done { background: var(--teal); }
.p-bar { display: block; height: 7px; width: 72%; border-radius: 4px; background: #E8EDF2; }
.p-bar.short { width: 48%; }
.paper.small { max-width: 220px; padding: 22px 20px 26px; transform: rotate(-2deg); }
.paper.small .p-title { font-size: 1.02rem; margin: 8px 0 12px; }
.paper.small .p-line { padding: 7px 0; font-size: 0.66rem; }
.paper.small::before { left: 20px; right: 20px; bottom: 14px; }
</style>
