const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_API_URL;
const supabaseApikey = process.env.SUPABASE_API_KEY;

const supabase = createClient(supabaseUrl, supabaseApikey);

module.exports = supabase;
