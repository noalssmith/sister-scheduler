/* eslint-env node */

import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SR_KEY)

const logErrorAndExit = (tableName, error) => {
  console.error(
    `An error occurred in table '${tableName}' with code ${error.code}: ${error.message}`,
  )
  process.exit(1)
}

const logStep = (stepMessage) => {
  console.log(stepMessage)
}

const seedTeachers = async (numEntries) => {
  logStep('Seeding teachers...')
  const teachers = []

  for (let i = 0; i < numEntries; i++) {
    teachers.push({ name: faker.person.fullName() })
  }

  const { data, error } = await supabase.from('teachers').insert(teachers).select('id')

  if (error) return logErrorAndExit('Teachers', error)

  logStep('Teachers seeded successfully')

  return data
}

const numEntries = 5

seedTeachers(numEntries)
