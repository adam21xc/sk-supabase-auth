<script>
let password_input
import { supabaseClient } from '$lib/supabase';



async function updatePassword(password_input) { 
	console.log("updatePassword") 
    console.log("password_input: " + password_input)
     const { data, error } = await supabaseClient.auth.updateUser({password: password_input})

  if (error) { 
	console.log(error)
    throw new Error(error); 
	
  }

  console.log(data)
  return data;
}

$: console.log(password_input)
</script>


<main>
	<h1>Enter New Password</h1>
	<!-- <form action="?/login" method="POST" class="auth-form">
		<p>Enter your email address and we will send you instructions to reset your password</p>
		<label for=""> New Password </label>
		<input type="password" name="password" bind:value={password_input} />
		<a href="/login"><button type="submit" class="btn btn-primary" on:click={updatePassword} >Update Password</button></a>
	</form>   -->

        <input type="password" name="password" bind:value={password_input} />   
		<a href="/login"><button type="submit" class="btn btn-primary" on:click={updatePassword(password_input)} >Update Password</button></a>
</main>