import { supabase } from "@/utils/supabaseClient";

export async function GET() {
    const { data, error } = await supabase
        .from("Points Table 25-26")
        .select("Name, OSPC_ID, REG_NO, Points");

    return Response.json({
        data: data,
        error: error,
    });
}
