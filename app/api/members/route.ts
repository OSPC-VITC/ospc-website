import { supabase } from "@/utils/supabaseClient";

export async function GET() {
    const { data, error } = await supabase
        .from("tshirt_members")
        .select("Name,Department,Picture,Describe,Instagram,LinkedIn,GitHub");

    return Response.json({
        data: data,
        error: error,
    });
}
