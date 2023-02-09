<script lang="ts"> 
//grabbing the form data from the +page.server.ts file
export let form  
export let data 

import { enhance, applyAction } from '$app/forms';
</script>

<main>
	<h1>Confirm Your Email</h1>
	<form action="?/verify_email" method="POST" class="auth-form" >
		<label for=""> Enter Email </label>
		<input type="text" name="email" value={form?.email ?? ''} />

        <label for=""> Verification Code </label>
		<input type="text" name="token" value={form?.token ?? ''} />
	
		<button type="submit" class="btn btn-primary">Verify</button>
	</form>  
	
	
	<a href="/email_verification" class="reset-password"><h3> Send a new code</h3></a> 
	<h4><a href="/register" class="reset-password"> Try a different email</a></h4>
</main> 

<style>
.reset-password {
	text-align: center;
}

</style>
