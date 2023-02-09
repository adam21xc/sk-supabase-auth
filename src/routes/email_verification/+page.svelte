<script>
let email 
import { supabaseClient } from '$lib/supabase';

async function resetPassword(email) { 
	console.log("resetPassword")
  const { data, error } = await supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:5173/reset_password',
  });

  if (error) { 
	console.log(error)
    throw new Error(error); 
	
  }

  console.log(data)
  return data;
}


$: console.log(email)
</script>



<main>
	<h1>Reset Password</h1>
	<!-- <form action="?/login" method="POST" class="auth-form">
		<label for="" > Email </label>
		<input type="email" name="email" bind:value={email} />
		<button type="submit" class="btn btn-primary" on:click={resetPassword(email)}>Continue</button>
	</form>   -->
	<h3>Type in Email</h3>
	<input type="email" name="email" bind:value={email} />
	<button type="submit" class="btn btn-primary" on:click={resetPassword(email)}>Continue</button>
	
	
</main> 
