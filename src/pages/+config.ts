import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'

export default {
  prerender: true,
  extends: [vikeReact]
} satisfies Config