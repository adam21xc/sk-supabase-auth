<script lang="ts"> 
//grabbing the form data from the +page.server.ts file
export let form  
export let data 

console.log(form,'form from +page.svelte') 
console.log(data,'data from +page.svelte')
import { enhance, applyAction } from '$app/forms'; 

if(form?.email){
	console.log('email is present')
} 
else{
	console.log('email is not present')
} 

</script>

<main>
	<h1>Login</h1>
	<form action="?/login" method="POST" class="auth-form">
		<label for=""> Email </label>
		<input type="text" name="email" value={form?.email ?? ''} />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button type="submit" class="btn btn-primary">Login</button>
	</form>  
	<!-- create an a tag to reset password --> 
	
	<a href="/email_verification" class="reset-password"><h3> Forgot Password?</h3></a> 
	<h4> Don't have an account <a href="/register" class="reset-password"> Sign up</a></h4> 
	
	{#if form?.error} 
		<div class="error"> {form.error} </div> 
	{/if} 
	
</main> 

<style>
.reset-password {
	text-align: center;
}

</style>
