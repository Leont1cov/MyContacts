import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vmoezykgzntljneizszx.supabase.co'
const supabaseAnonKey = 'sb_publishable_1dIZouGQcKS8oFwxSKa7XQ_BbarAwwV'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)