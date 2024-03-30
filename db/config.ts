import { column, defineDb, defineTable } from 'astro:db'

const Work = defineTable({
  columns: {
    image: column.json(),
    title: column.text(),
    description: column.text(),
    link1: column.text(),
    link2: column.text()
  }
})

export default defineDb({
  tables: { Work }
})
