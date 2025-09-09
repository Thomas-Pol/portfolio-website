import { getPayload } from 'payload'
import config from './src/payload.config'

async function migrateDB() {
  const payload = await getPayload({ config })
  
  console.log('Database migration completed')
  process.exit(0)
}

migrateDB().catch((error) => {
  console.error('Migration failed:', error)
  process.exit(1)
})
