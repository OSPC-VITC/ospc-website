import { supabase } from "@/utils/supabaseClient";

export async function GET() {
    const { data, error } = await supabase
        .from("gallery_images")
        .select("img_url, event_name");

    return Response.json({
        data: data,
        error: error,
    });
}
