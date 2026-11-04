<template>
  <div>
    <PageHero
      title="Courses for Business Owners"
      lede="Self-paced courses that turn the ideas from the podcast into a plan for your business. Learn the numbers, build the tools, and lead with confidence."
    />

    <section class="section">
      <div class="wrap">
        <SectionHead
          title="Learn at Your Own Pace"
          text="Each course is short, practical, and built around the decisions owners actually make. Start with Financial Clarity Fundamentals if you’re not sure where to begin."
        />
        <div class="offer-grid">
          <CourseCard v-for="c in COURSES" :key="c.id" :course="c" />
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="wrap start-free">
        <div>
          <h2>Not Ready for a Course? Start Free</h2>
          <div class="rule"></div>
          <p>The {{ FREE_CHECKLIST.title }} shows whether your books are ready to make decisions with. It’s the first step in every course.</p>
        </div>
        <LeadForm kind="download" :item="FREE_CHECKLIST" label="Email me the checklist" />
      </div>
    </section>

    <CtaBand
      heading="Prefer One-on-One Help?"
      text="A strategy call is a focused conversation with Adam about your numbers, your team, and what to do next."
    />
  </div>
</template>

<script setup>
import CourseCard from '@/components/CourseCard.vue';
import CtaBand from '@/components/CtaBand.vue';
import LeadForm from '@/components/LeadForm.vue';
import PageHero from '@/components/PageHero.vue';
import SectionHead from '@/components/SectionHead.vue';
import { COURSES } from '@/content/courses';
import { FREE_CHECKLIST } from '@/content/products';
</script>

<style>
.start-free { display: grid; gap: 32px; align-items: center; }
@media (min-width: 900px) { .start-free { grid-template-columns: 1fr 1fr; gap: 64px; } }
</style>
