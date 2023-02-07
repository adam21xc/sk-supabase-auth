<script lang="ts"> 
    export let data:PageData  
    import { supabaseClient } from '$lib/supabase';

   const submitLogout:SubmitFunction=async({cancel})=>{
		const {error}=await supabaseClient.auth.signOut()
		if(error){
			console.log(error)
		}
		cancel()
		
	}
// if submitLogout function is clicked then the +server.ts file 
// runs export const POST: RequestHandler, which redirects to ('/') 
// could also set it as ('/login')
</script>

<main>

	{#if data.session}  
    <h2>Homepage</h2> 
	<p>Welcome, {data.session.user.email}</p>
		<form action="/logout" method="POST" use:enhance={submitLogout} >
			<button type="submit" class="btn btn-primary">Logout</button> 
		</form>	
	{:else}
	<p>Please login or create an account below</p>
	<div class="auth-buttons">
		<a href="/login" class="btn btn-primary">Login</a>
		<a href="/register" class="btn btn-secondary">Register</a>
	</div> 
	{/if}
</main>
