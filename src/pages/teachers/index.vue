<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import type { Tables } from '../../../database/types'

const teachers = ref<Tables<'teachers'>[] | null>(null)

;(async () => {
  const { data, error } = await supabase.from('teachers').select()

  if (error) console.log(error)

  teachers.value = data
})()
</script>

<template>
  <div>
    <p>Teachers Page</p>
    <ul>
      <li v-for="teacher in teachers" :key="teacher.id">
        {{ teacher.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
