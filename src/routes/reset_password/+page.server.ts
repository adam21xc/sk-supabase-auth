export const actions: Actions = {
    reset: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())
        const { data, error: err } = await locals.sb.auth.signInWithPassword({
            email: body.email as string,
            password: body.password as string
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
    //    throw redirect(303,'/homepage')  
        throw redirect(303,'/login') 
    }
}