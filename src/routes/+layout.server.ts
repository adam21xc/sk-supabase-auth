import { getServerSession } from "@supabase/auth-helpers-sveltekit" 
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event) => { 
    console.log("ran layout load")
    return {
        session: await getServerSession(event),
    }
}