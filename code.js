const milu_display = document.querySelector('#milu_display');
const pet_image = document.querySelector('#pet_image');
const btn_eat = document.querySelector('#btn_eat');
const btn_play = document.querySelector('#btn_play');
const btn_stats = document.querySelector('#btn_stats');

// Pet Object		--------------------------------------------------

const pet = {
	name: "Milu",
	hungry: 10,
	joy: 0,
	level: 0,
}; 

// FUNCTIONS			--------------------------------------------------
const change_to_standby = () => {
	milu_display.innerHTML = `
	<img  id="pet_image" src="./images/milu_tikita.png">`;
    console.log('Switch Milu to standby animation');
};

const milu_eat = () => {
	milu_display.innerHTML = `
	<img  id="pet_image" src="./images/milu_comiendo.png">`;
	console.log('Milu Hungry --');

	setTimeout(change_to_standby, 2000);
};


const milu_plays = () => {
	milu_display.innerHTML = `
	<img  id="pet_image" src="./images/milu_jugando.png">`;
	console.log('Milu Joy++');
	pet.joy++;

		if (pet.joy > 10) {
			pet.joy = 10;
		};

	setTimeout(change_to_standby, 2000);
};

const milu_status = () => {
	console.log('Showing stats points');
	showing_stats();	
};

const showing_stats = () => {
	milu_display.innerHTML = `
	<div class='stats_menu'>
		<p>Hambre: ${pet.hungry}</p>
		<p>Felicidad: ${pet.joy}</p>
		<p>Nivel : ${pet.level}</p>
	</div>`;

	setTimeout(() => {
	    change_to_standby();
    }, 2000);
};

const cheking_stats = () => {
	console.log('Cheking stats for up level');
		if (pet.hungry === 0 && pet.joy === 10) {
			pet.level++;
			pet.hungry = 10;
			pet.joy = 0;
		};
};



// BUTTONS ACTIONS		--------------------------------------------------
btn_eat.addEventListener('click', (e) => {	
	milu_eat();
	pet_eat_animation();
	cheking_stats(); 
});

btn_play.addEventListener('click', (e) => {
	milu_plays();
	cheking_stats();
});

btn_stats.addEventListener('click', (e) => {
	milu_status();
	
});


// Others			--------------------------------------------------

const show_patch_notes = document.querySelector('#show_patch_notes');
const patch_notes_section = document.querySelector('#patch_notes_section');

let show_notes = false;
show_patch_notes.addEventListener('click', (e) => {
	console.log('changing notes state');
	console.log(show_notes);
	if (show_notes == false) {
		patch_notes_section.style.visibility = 'visible';
		show_notes = true;
	} else {
		patch_notes_section.style.visibility = 'hidden';
		show_notes = false;
	}
});