const milu_display = document.querySelector('#milu_display');
const pet_image = document.querySelector('#pet_image');
const stats_menu = document.querySelector('#stats_menu');
const pet_hungry = document.querySelector('#pet_hungry');
const pet_joy = document.querySelector('#pet_joy');
const pet_level = document.querySelector('#pet_level');
const btn_eat = document.querySelector('#btn_eat');
const btn_play = document.querySelector('#btn_play');
const btn_stats = document.querySelector('#btn_stats');
const item_cake = document.querySelector('#item_cake');
const play_sword = document.querySelector('#play_sword');
const play_gameboy = document.querySelector('#play_gameboy');
const btn_select = document.querySelector('#btn_select');
const food_icon = document.querySelector('#food_icon');
const lights_icon = document.querySelector('#lights_icon');
const game_icon = document.querySelector('#game_icon');
const medicine_icon = document.querySelector('#medicine_icon');
const bathroom_icon = document.querySelector('#bathroom_icon');
const status_icon = document.querySelector('#status_icon');
const training_icon = document.querySelector('#training_icon');



// Pet Object		--------------------------------------------------

const pet = {
	name: "Milu",
	hungry: 10,
	joy: 0,
	level: 1,
	menuOption: 0,
}; 

// FUNCTIONS			--------------------------------------------------
const change_to_standby = () => {
	pet_image.style.visibility = 'visible';
	stats_menu.style.visibility = 'hidden';
	remove_animation();
	remove_item();
	pet_image.classList.add('animation_pet_standby');
	pet_image.src = './images/milu_feliz.png'
	
	console.log('Switch Milu to standby animation');
};

const remove_animation = () => {
	pet_image.classList.remove('animation_pet_standby');
	pet_image.classList.remove('animation_pet_eating');
	pet_image.classList.remove('animation_pet_playing');
}

const remove_item = () => {
	item_cake.style.visibility = 'hidden';
	play_sword.style.visibility = 'hidden';
	play_gameboy.style.visibility = 'hidden';
}

const milu_eat = () => {
	item_cake.style.visibility = 'visible';
	pet_image.src = './images/milu_boca_abierta.png';
	remove_animation();
	pet_image.classList.add('animation_pet_eating');
	pet.hungry--;
	setTimeout(change_to_standby, 2000);

	console.log('Milu Hungry --');
};

const milu_plays = () => {
	play_sword.style.visibility = 'visible';
	play_gameboy.style.visibility = 'visible';
	pet_image.src = './images/milu_frente.png'
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

const select_option =  () => {
		
		if (pet.menuOption == 0) {
			pet.menuOption++
			console.log('food');
			food_icon.classList.remove('hidden');
			food_icon.classList.add('visible');
		} else if (pet.menuOption == 1) {
			pet.menuOption++
			console.log('ligths');
			food_icon.classList.remove('visible');
			food_icon.classList.add('hidden');
			lights_icon.classList.remove('hidden');
			lights_icon.classList.add('visible');
		} else if (pet.menuOption == 2) {
			pet.menuOption++
			console.log('play');
			lights_icon.classList.remove('visible');
			lights_icon.classList.add('hidden');
			game_icon.classList.remove('hidden');
			game_icon.classList.add('visible');
		} else if (pet.menuOption == 3) {
			pet.menuOption++
			console.log('medicine');
			game_icon.classList.remove('visible');
			game_icon.classList.add('hidden');
			medicine_icon.classList.remove('hidden');
			medicine_icon.classList.add('visible');
		} else if (pet.menuOption == 4) {
			pet.menuOption++
			console.log('bath');
			medicine_icon.classList.remove('visible');
			medicine_icon.classList.add('hidden');
			bathroom_icon.classList.remove('hidden');
			bathroom_icon.classList.add('visible');
		} else if (pet.menuOption == 5) {
			pet.menuOption++
			console.log('status');
			bathroom_icon.classList.remove('visible');
			bathroom_icon.classList.add('hidden');
			status_icon.classList.remove('hidden');
			status_icon.classList.add('visible');
		} else if (pet.menuOption == 6) {
			pet.menuOption++
			console.log('training');
			status_icon.classList.remove('visible');
			status_icon.classList.add('hidden');
			training_icon.classList.remove('hidden');
			training_icon.classList.add('visible');
		} else if (pet.menuOption >= 6) {
			console.log('time');
			pet.menuOption = 0;
			training_icon.classList.remove('visible');
			training_icon.classList.add('hidden');
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

btn_select.addEventListener('click', (e) => {
	select_option();
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