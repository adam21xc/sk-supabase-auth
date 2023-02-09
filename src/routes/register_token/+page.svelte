<script lang="ts">
	import type {PageData} from "./$types"; 
	import { enhance, applyAction } from '$app/forms'; 
	export let form
</script>

<main>
	<h1>Register</h1>
	<form action="?/register" method="POST" class="auth-form"> 
		
		<label for=""> First Name </label>
		<input type="text" name="first_name" required /> 

		<label for=""> Last Name </label>
		<input type="text" name="last_name"  required /> 

		<label for=""> Phone Number </label>
		<input type="tel" name="phone"  required />

		<label for=""> Email </label>
		<input type="text" name="email"  required />
		<label for=""> Password </label>
		<input type="password" name="password"  required />
		<button class="btn btn-primary">Register</button>
	</form>
</main>
