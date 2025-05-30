import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://sodlregonixbebwnvdxf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvZGxyZWdvbml4YmVid252ZHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyOTcyNTgsImV4cCI6MjA2Mzg3MzI1OH0.eyan4TXu8A1vo5YkedqofqvgC_NvmEkkgbBIXHGndak';

export const supabase = createClient(supabaseUrl, supabaseKey)