import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jloqrkvznemaxcgwmgrt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impsb3Fya3Z6bmVtYXhjZ3dtZ3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3NzU3OTksImV4cCI6MjAxODM1MTc5OX0.FrGZcSxdHJI5RaX27949bflaFz9l9UN_Pfq3Bm22fzg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
