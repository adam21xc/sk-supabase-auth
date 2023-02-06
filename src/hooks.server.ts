import '$lib/supabase' 
import {getSupabase} from "@supabase/auth-helpers-sveltekit"
import type { Handle } from "@sveltejs/kit" 


export const handle: Handle = async ({ event, resolve }) => {
    const { session, supabaseClient } = await getSupabase(event) 
    event.locals.sb = supabaseClient 
    event.locals.session = session 
    return resolve(event)
} 

// import type { RequestHandler } from './$types'
// import { getSupabase } from '@supabase/auth-helpers-sveltekit'
// import { redirect, error } from '@sveltejs/kit'

// export const handle: Handle = async ({ event, resolve }) => {
//   // protect requests to all routes that start with /protected-routes
//   if (event.url.pathname.startsWith('/homepage')) {
//     const { session, supabaseClient } = await getSupabase(event)

//     if (!session) {
//       throw redirect(303, '/login')
//     }
//   }

//   // protect POST requests to all routes that start with /protected-posts
//   if (event.url.pathname.startsWith('/') && event.request.method === 'POST') {
//     const { session, supabaseClient } = await getSupabase(event)

//     if (!session) {
//       throw error(303, '/')
//     }
//   }

//   return resolve(event)
// }