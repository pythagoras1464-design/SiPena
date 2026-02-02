
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://adrckbkymffhjoxyqqjr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkcmNrYmt5bWZmaGpveHlxcWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NTk4MDEsImV4cCI6MjA3NzMzNTgwMX0.mwEw1k1TN2Im4kvW8lcuTJNfDDWFiu0uAkuxt-ajXKY';

export const supabase = createClient(supabaseUrl, supabaseKey);
