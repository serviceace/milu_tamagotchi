const milu_display = document.querySelector('#milu_display');
const pet_image = document.querySelector('#pet_image');
const stats_menu = document.querySelector('#stats_menu');
const pet_hungry = document.querySelector('#pet_hungry');
const pet_joy = document.querySelector('#pet_joy');
const pet_level = document.querySelector('#pet_level');
const btn_eat = document.querySelector('#btn_eat');
const btn_play = document.querySelector('#btn_play');
const btn_stats = document.querySelector('#btn_stats');

// Pet Object		--------------------------------------------------

const pet = {
	name: "Milu",
	hungry: 10,
	joy: 0,
	level: 1,
	showingStats: false,
}; 

// FUNCTIONS			--------------------------------------------------
const change_to_standby = () => {
	pet_image.style.visibility = 'visible';
	stats_menu.style.visibility = 'hidden';
	remove_animation();
	pet_image.classList.add('animation_pet_standby');
	pet_image.src = './images/milu_tikita.png'
	

	console.log('Switch Milu to standby animation');
};

const remove_animation = () => {
	pet_image.classList.remove('animation_pet_standby');
	pet_image.classList.remove('animation_pet_eating');
	pet_image.classList.remove('animation_pet_playing');
}

const milu_eat = () => {
	pet_image.src = './images/milu_comiendo.png';
	remove_animation();
	pet_image.classList.add('animation_pet_eating');
	pet.hungry--;
	setTimeout(change_to_standby, 2000);

	console.log('Milu Hungry --');
};

const milu_plays = () => {
	pet_image.src = './images/milu_jugando.png'
	remove_animation();
	pet_image.classList.add('animation_pet_playing');
	pet.joy++;
	setTimeout(change_to_standby, 2000);

	console.log('Milu Joy++');
};

const milu_status = () => {
	console.log('Showing stats points');
	remove_animation();
	showing_stats();	
};

const showing_stats = () => {
	pet_image.style.visibility = 'hidden';
	stats_menu.style.visibility = 'visible';

	pet_hungry.textContent = pet.hungry;
	pet_joy.textContent = pet.joy;
	pet_level.textContent = pet.level;


	setTimeout(() => {
	    change_to_standby();
    }, 2000);
};

const cheking_stats = () => {
	console.log('Cheking stats for up level');
		if (pet.hungry === 0 && pet.joy === 10 ) {
			console.log('Milu sube de nivel');
			pet.level++;
			pet.hungry = 10;
			pet.joy = 0;
		};

		if (pet.hungry < 0) {
			pet.hungry = 0;
		}

		if (pet.joy > 10) {
			pet.joy = 10;
		}
};

// BUTTONS ACTIONS		--------------------------------------------------
btn_eat.addEventListener('click', (e) => {	
	milu_eat();
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