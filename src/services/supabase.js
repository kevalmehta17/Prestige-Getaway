import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qnldgrldoxjeruuzqrra.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFubGRncmxkb3hqZXJ1dXpxcnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1MjkyMTQsImV4cCI6MjA1MDEwNTIxNH0.5_wBQGlXRFmYO73lwd9VTve0hE-8h9rnbDf8v7R1-EE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
