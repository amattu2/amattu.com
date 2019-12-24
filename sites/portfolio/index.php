<?php

// Include Head
include('ui/php/head.php');
?>
<html>
	<body>
		<!-- Greeting -->
		<div class='section s1 theme-3'>
			<div class='row' style='min-height: 62px'>
				<div class='row-left' style='display: flex; align-items: center;'>
					<img width='102.4px' style='border-radius: 3px; display: inline-block' src='ui/images/favicon.png' />
					<div class='text-thin animate-h' style='display: inline-block; margin-left: 35px;'>
						<h2 id='welcome'></h2>
					</div>
				</div>
			</div>			
		</div>
		
		<!-- Info -->
		<div class='section s2 theme-2'>
			<div class='row'>
				<div class='row-left'>
					<div class='user-info'>
						<ul class='tags'>
							<li><a class='tag' title='Session Status'>&nbsp;<b><i class="fa <?php echo $session_stat_icon; ?>"></i></b></a></li>				
						</ul>					
					</div>
				</div>
			</div>
		</div>
		
		<!-- Main Info -->
		<div class='section s3 theme-2'>
			<div class='row'>
				<div class='row-left'>
					<div class='profile'><img id='profile-picture' src='/' alt='&nbsp;#%@!&nbsp;' /></div>
				</div>
				<div class='row-right'>
					<h2>About Me</h2>
					<p id='my-info'>Hi. My name is XXXX and I&#39;m <span id='age'></span> years old. Since I was a kid I&#39;ve always had an interest in programming and web development. Feel free to explore my projects or sites I've made.</p>
					<!-- Skills -->
					<ul class='tags'>
						<h4>Skills</h4>
						<li><a class='tag animate-h'>PHP</a></li>
						<li><a class='tag animate-h'>HTML</a></li>
						<li><a class='tag animate-h'>CSS</a></li>
						<li><a class='tag animate-h'>Javascript</a></li>
						<li><a class='tag animate-h'>Java</a></li>
						
					</ul>	
					<hr />
					<!-- Interests -->	
					<ul class='tags'>
						<h4 style='margin-top: 0'>Interests</h4>
						<li><a class='tag animate-h'>BMWs</a></li>
						<li><a class='tag animate-h'>Turbos</a></li>	
					</ul>
				</div>
			</div>
		</div>
				
		<!-- Projects -->
		<div class='section s4 theme-4'>
			<div class='row'>
				<h2 class='text-thin'>Project Collection</h2>
				
				<div class='row-left case theme-2'>
					<h4>Projects</h4>
					<div class='sep'></div>
					<ul>
						<li><a href='#'>XXX</a></li>
						<li><a href='#'>XXX</a></li>
						<li><a href='#'>XXX</a></li>
						<li><a href='#'>XXX</a></li>						
					</ul>
				</div>
				<div class='row-right case theme-2'>
					<h4>Websites</h4>
					<div class='sep'></div>
					<ul>
						<li><a href='#'>XXX</a></li>
						<li><a href='#'>XXX</a></li>
						<li><a href='#'>XXX</a></li>
						<li><a href='#'>XXX</a></li>						
					</ul>					
				</div>				
			</div>
		</div>
		
		<!-- Education -->
		<div class='section s5 theme-4'>
			<div class='row centered'>
				<h2 class='text-thin'>Academic Collection</h2>
				<div class='row-left case theme-2'>
					<h4>Current Classes</h4>
					<div class='sep'></div>
					<ul>
						<li><a href='#'>XXX</a></li>
						<li><a href='#'>XXX</a></li>
						<li><a href='#'>XXX</a></li>
						<li><a href='#'>XXX</a></li>
					</ul>
				</div>
				<div class='row-right case theme-2'>
					<h4>Target Degrees</h4>
					<div class='sep'></div>
					<ul>
						<li><a href='#'>XXX</a></li>
						<li><a href='#'>XXX</a></li>
						<li><a href='#'>XXX</a></li>
						<li><a href='#'>XXX</a></li>
					</ul>					
				</div>				
			</div>
		</div>

		<!-- Statistics -->
		<div class='section statistics theme-5'>
			<div class='main text-thin'>
				<h1>Statistical Data</h1>
			</div>
			
			<div class='chart'>
				<div class='data'>
					<h4 class='title'>Javascript Knowledge</h4>
					<div class='line theme-3' data-progress='65'><span id='current-progress'></span></div>
				</div>
							
				<div class='data'>
					<h4 class='title'>PHP Knowledge</h4>
					<div class='line theme-3' data-progress='87'><span id='current-progress'></span></div>
				</div>

				<div class='data'>
					<h4 class='title'>HTML/CSS Knowledge</h4>
					<div class='line theme-3' data-progress='100'><span id='current-progress'></span></div>
				</div>								
			</div>
		</div>
			
		<!-- Contact Me -->
		<div class='section contact theme-3'>			
			<div class='title text-thin'>
				<h1>Ask Me A Question</h1>
			</div>	
			
			<div class='main'>
				<form method='none' name='QA'>
					<input type='hidden' name='time' value="" />
					<input type='text' name='name' placeholder='Your Name' />
					<textarea name='question' placeholder='Your question'></textarea>
					<input type='submit' name='qa' placeholder='Ask' />
				</form>
			</div>	
		</div> 			

		<!-- Footer -->
		<div class='section footer theme-1'>
			<div class='row'>
				<h3 class='text-thin'>Nachfolger LLC, 2017</h3>
				<p>Design By Alec M. | ARR</p>		
			</div>
		</div>	
		
		<!-- Scripts -->					
		<script src='/sites/portfolio/ui/js/index.js'></script>
	</body>
</html>