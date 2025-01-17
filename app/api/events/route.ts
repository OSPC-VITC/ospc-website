import { supabase } from "@/utils/supabaseClient";

export const GET = async () => {
    const { data, error } = await supabase
        .from("Events")
        .select("name, date, image_url, price, venue")
        .order("date", { ascending: true });
    
    return Response.json({
        data: data,
        error: error,
    });
};
