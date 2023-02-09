import type { Actions } from "./$types"; 
import { fail,redirect } from "@sveltejs/kit" 
import { AuthApiError } from "@supabase/supabase-js"

//formData is a method of the Request interface that returns a FormData object 
//that represents the form data associated with the request. 
//The FormData object can be used to extract data from the form and send it to a server. 



// the function input for request is a Request object that represents the incoming request. 
//The Request object is a part of the Fetch API and is used to fetch resources (including across the network). 
//the locals 
export const actions: Actions = {
    reset_password: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())
        // const {data, error: err } = await locals.sb.auth.signInWithPassword({
        //     email: body.email as string,
        //     password: body.password as string
        // })

       
        const { data, error:err } = await locals.sb.auth.resetPasswordForEmail(
            body.email as string, {
            redirectTo: 'http://localhost:5173/reset_password',
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
        // throw redirect(303,'/check_your_email')
    }
}