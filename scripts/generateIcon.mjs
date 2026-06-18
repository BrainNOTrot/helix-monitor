import sharp from 'sharp'
import { mkdirSync } from 'fs'

mkdirSync('assets', { recursive: true })

await sharp('public/icon.svg')
  .resize(512, 512)
  .png()
  .toFile('assets/icon.png')

console.log('✓ Icon generated at assets/icon.png')