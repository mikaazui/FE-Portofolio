<template>
  <div>
    <div class="text-xl font-semibold pb-3">Education</div>
    <input v-model="filter" type="text" placeholder="Search" class="input input-sm input-bordered w-full max-w-xs" />
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>institution</th>
            <th class="text-center">Periode</th>
            <th class="text-center">Major</th>
            <th class="text-center">Degree</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="edu in dataTable" :key="edu.id">
            <td>{{ edu.insituitionName }}</td>
            <td class="text-center">{{ edu.startYear }} - {{ edu.endYear ? edu.endYear : "Present" }}</td>
            <td class="text-center">{{ edu.major ? edu.major : "-" }}</td>
            <td class="text-center">{{ edu.degree ? edu.degree : "-" }}</td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
// import { useEducationStore } from 'educationStore.js';
definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
  ssr: true
})

const EduStore = useEducationStore();
onBeforeMount(async () => {
  await EduStore.get();
});

const filter = ref("");
const dataTable = computed(() => {
  console.log(filter.value)
  const search = filter.value.toLowerCase()

  if (search != '') {
    return EduStore.education.filter(edu => {
      //pastikan huruf lower
      const insituitionName = edu.insituitionName.toLowerCase();
      return insituitionName.includes(search)
    });
  }else {
    return EduStore.education
  }
});


</script>

<style></style>