import { column, defineDb, defineTable } from 'astro:db'

const Project = defineTable({
  columns: {
    image: column.json(),
    title: column.text(),
    description: column.text()
  }
})

export default defineDb({
  tables: { Project }
})
