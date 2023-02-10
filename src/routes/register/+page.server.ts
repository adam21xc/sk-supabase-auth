import { AuthApiError } from "@supabase/supabase-js"
import { fail,redirect } from "@sveltejs/kit"
import type { Actions } from "./$types" 


export const actions: Actions = {
    register: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData()) 
        console.log(body)
        
        const first_name = body.first_name as string

        console.log(first_name,'first_name string')
        console.log(first_name.length, 'first_name length') 
        
        //  if (first_name.length < 6) {
        //         return fail(400, {
        //         error: true,
        //             message: 'Name must be at least six characters.', 
                
            
        //     })
        // }

        const { data, error: err } = await locals.sb.auth.signUp({
            email: body.email as string,
            password: body.password as string, 
            options: {
                data: {
                    first_name: body.first_name as string, 
                    last_name: body.last_name as string, 
                    phone_number: body.phone as string, 

                }
            }
        })
        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: 'Invalid email or password',
                })
            }
            return fail(500, {
                error: 'Server error. Please try again later'
            })
        } 
        throw redirect(303,'/confirmation')
    } 
    
};