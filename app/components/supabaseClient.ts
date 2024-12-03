import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gcogfjemxpjgvnwnhkvv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjb2dmamVteHBqZ3Zud25oa3Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyMzU2ODQsImV4cCI6MjA0ODgxMTY4NH0.U517HRSjTvpCyQ_WTSHniWtQETVbxCeWhfFDm2nVMvI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)