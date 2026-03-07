import { createClient } from '@supabase/supabase-js'

const superbaseUrl = 'https://vmoezykgzntljneizszx.supabase.co'
const superbaseAnonKey = 'sb_publishable_1dIZouGQcKS8oFwxSKa7XQ_BbarAwwV'

export const client = createClient(superbaseUrl, superbaseAnonKey)