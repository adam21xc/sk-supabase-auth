<script lang="ts"> 
//grabbing the form data from the +page.server.ts file
export let form  
export let data 

import { enhance, applyAction } from '$app/forms';
</script>

<main>
	<h1>Login</h1>
	<form action="?/login" method="POST" class="auth-form" 
	use:enhance={({ form }) => {
			// Before form submission to server
			return async ({ result, update }) => {
				// After form submission to server
				if (result.type === 'success') {
					form.reset();
				}
				if (result.type === 'invalid') {
					await applyAction(result);
				}
				update();
			};
		}}
	>
		<label for=""> Email </label>
		<input type="text" name="email" value={form?.email ?? ''} />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button type="submit" class="btn btn-primary">Login</button>
	</form>  
	<!-- create an a tag to reset password --> 
	
	<a href="/email_verification" class="reset-password"><h3> Forgot Password?</h3></a> 
	<h4> Don't have an account <a href="/register" class="reset-password"> Sign up</a></h4>
</main> 

<style>
.reset-password {
	text-align: center;
}

</style>
