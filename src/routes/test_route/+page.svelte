<!-- <script lang="ts"> 
    export let data:PageData 
    import {enhance, type SubmitFunction} from '$app/forms'  
    // import {enhance, type SubmitFunction} from '$app/forms' 
    import { supabaseClient } from '$lib/supabase';

    	const submitLogout:SubmitFunction=async({cancel})=>{
		const {error}=await supabaseClient.auth.signOut()
		if(error){
			console.log(error)
		}
		cancel()
		
	}

</script>



<main>

	{#if data.session}  
    <h1>Test Route</h1> 
	<p>Welcome, {data.session.user.email}</p>
		<form action="/logout" method="POST" use:enhance={submitLogout} >
			<button type="submit" class="btn btn-primary">Logout</button> 
		</form>	
	{:else}
	<p>Let's learn how to register and login users!</p>
	<div class="auth-buttons">
		<a href="/login" class="btn btn-primary">Login</a>
		<a href="/register" class="btn btn-secondary">Register</a>
	</div> 
	{/if}
</main> -->