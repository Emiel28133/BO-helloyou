const readline = require('readline-sync');


// The story begins
function question1() {
    console.log("Welcome to this game. i (the nerrator with the voice of morgan freeman) will lay out the backstory. this story plays in the year... (the future) the world has been hit with a second ice age, most of the worlds inhabittors have died, you (as the mayor of your town) had the idea to take the surviving few and start looking... looking for a place whare you can keep your people alive, after a long long time... a very long time. you find a pig hole in the ground, just big enough for a new town with a giant furnace in the middle to keep everyone alive. keep your people alive.");
   
    const answer = readline.question("(A)Soup thare must always be soup for your people wenever they are hungry.  (B)Child labour children have to work. (C)fighting arena thare has to be an arena for people to settle thair differences. (D)corpse disposal chuck dead people on a pile ").toLowerCase();
    
    if (answer === 'a') {
        question2a();
    } else if (answer === 'b') {
        question2b();
    } else if (answer === 'c') {
        question2c();
    } else if (answer === 'd') {
        question2d();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', or 'Quit'.");
        question1();
    }
}

function question2a() {
    console.log('You chose soup.')
    console.log(" now you have to start building your city, what do you do first?");
    const answer = readline.question("(A)Build a cookhouse. (B)go mine for coal ").toLowerCase();
    
    if (answer === 'a') {
        ending1();
    } else if (answer === 'b') {
        question3b();
    } else if (answer === 'back') {
        question1();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        question2a();
    }
}

function Women() {
    console.log('Nice.')
    console.log(" a women comes up to you and says she and her family have gotten disconnected and she asks you for help finding them");
    const answer = readline.question("(A)send some of your men on an expedition to go find them. (B)too bad i have no time for you woman. ").toLowerCase();
    
    if (answer === 'a') {
        women1();
    } else if (answer === 'b') {
        women2();
    } else if (answer === 'back') {
        question2a();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        Women();
    }
}

function women1() {
    console.log('You chose to send the expedition. the expedition failed and you lost four of your men. you did not find the womes family.')
    console.log("2 survivours find your city and say they found an old abandoned outpost. you consider going to loot it.");
    const answer = readline.question("(A)you go to loot it. (B)you dont go to loot it. ").toLowerCase();
    
    if (answer === 'a') {
        ending1();
    } else if (answer === 'b') {
        question3b();
    } else if (answer === 'back') {
        Women();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        women1();
    }
}

function women2() {
    console.log('You send the women away, you later find out she killed herself.')
    console.log("2 survivours find your city and say they found an old abandoned outpost. you consider going to loot it.");
    const answer = readline.question("(A)you go to loot it. (B)you dont go to loot it. ").toLowerCase();
    
    if (answer === 'a') {
        ending1();
    } else if (answer === 'b') {
        question3b();
    } else if (answer === 'back') {
        Women();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        women2();
    }
}






function question2b() {
    console.log("you chose child labour");
    console.log('A protective mother, a mother refuses to let het child go to work in fear that she might get injured.')
    const answer = readline.question("(A)Let her have a day off (B)BOOHOO Back to work!").toLowerCase();
    
    if (answer === 'a') {
        noob1();
    } else if (answer === 'b') {
        bnoob1();
    } else if (answer === 'back') {
        question1();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        question2b();
    }
}

function noob1() {
    console.log("you chose the day off");
    console.log('a man comes to you and says he will give you a kissykiss if you kill this innocent ghirls mom.')
    const answer = readline.question("(A)kill (B)no kill").toLowerCase();
    
    if (answer === 'a') {
        noob2();
    } else if (answer === 'b') {
        bnoob1();
    } else if (answer === 'back') {
        question2b();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        noob1();
    }
}

function noob2() {
    console.log("you chose to kill.");
    console.log('people are getting angry cus of the killing, what will you do?.')
    const answer = readline.question("(A)spread missinformation (B)appolagise ").toLowerCase();
    
    if (answer === 'a') {
        noob3();
    } else if (answer === 'b') {
        bnoob1();
    } else if (answer === 'back') {
        noob1();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        noob2();
    }
}

function noob3() {
    console.log("you chose to spread missinformation");
    console.log('for a while it seemed like everything was going a okay but then one of your generals ratted on u. what will u do?.')
    const answer = readline.question("(A)Hold a speech to try to talk it right to the people (B)execute your general, make an example out of him.").toLowerCase();
    
    if (answer === 'a') {
        noobending1();
    } else if (answer === 'b') {
        noob4();
    } else if (answer === 'back') {
        noob2();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        noob3();
    }
}

function noob4() {
    console.log("you chose to become a tirant");
    console.log('becoming a tirant seemed to have worked. you are feared by all. work productivity has gone up, but now, after a month thare was one man, one self proclaimed hero who has rallyd the troops and convinsed your people to storm the capital. what will u do?.')
    const answer = readline.question("(A)block them out (B)overheat the reactor and kill everyone").toLowerCase();
    
    if (answer === 'a') {
        noobending2();
    } else if (answer === 'b') {
        noobending3();
    } else if (answer === 'back') {
        noob3();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        noob4();
    }
}

function bnoob1() {
    console.log("good");
    console.log('normal question.')
    const answer = readline.question("(A)..... (B).....").toLowerCase();
    
    if (answer === 'a') {
        question3c();
    } else if (answer === 'b') {
        question3d();
    } else if (answer === 'back') {
        question2b();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        bnoob1();
    }
}




function question2c() {
    console.log("Question 2a: ");
    const answer = readline.question("What's your choice? (A/B/Back/Quit): ").toLowerCase();
    
    if (answer === 'a') {
        question3a();
    } else if (answer === 'b') {
        question3b();
    } else if (answer === 'back') {
        question1();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        question2c();
    }
}




function question2d() {
    console.log("Question 2a: ");
    const answer = readline.question("What's your choice? (A/B/Back/Quit): ").toLowerCase();
    
    if (answer === 'a') {
        question3a();
    } else if (answer === 'b') {
        question3b();
    } else if (answer === 'back') {
        question1();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        question2d();
    }
}



// Endings
function ending1() {
    console.log("with no coal the furnace that was keeping everyone alive stopt working and everyone died.");
    quitGame();
}

function noobending1() {
    console.log("during your speech a kid threw an axe at you, it hit you right in the eye. you didnt survive.");
    quitGame();
}

function noobending2() {
    console.log("you didnt succeed in blocking them out. your people broke threw your baricade and killed you.");
    quitGame();
}

function noobending3() {
    console.log("you blew everyone up.");
    console.log(".");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠆⠜⣿");
    console.log("⣿⣿⣿⣿⠿⠿⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿");
    console.log("⣿⣿⡏⠁⠀⠀⠀⠀⠀⣀⣠⣤⣤⣶⣶⣶⣶⣶⣦⣤⡄⠀⠀⠀⠀⢀⣴⣿");
    console.log("⣿⣿⣷⣄⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⡧⠇⢀⣤⣶");
    console.log("⣿⣿⣿⣿⣿⣿⣾⣮⣭⣿⡻⣽⣒⠀⣤⣜⣭⠐⢐⣒⠢⢰");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣏⣿⣿⣿⣿⣿⣿⡟⣾⣿⠂⢈⢿⣷⣞");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣷⣶⣾⡿⠿⣿⠗⠈⢻⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠻⠋⠉⠑⠀⠀⢘⢻");
    console.log("⣿⣿⣿⣿⣿⣿⣿⡿⠟⢹⣿⣿⡇⢀⣶⣶⠴⠶⠀⠀⢽");
    console.log("⣿⣿⣿⣿⣿⣿⡿⠀⠀⢸⣿⣿⠀⠀⠣⠀⠀⠀⠀⠀⡟⢿⣿");
    console.log("⣿⣿⣿⡿⠟⠋⠀⠀⠀⠀⠹⣿⣧⣀⠀⠀⠀⠀⡀⣴⠁⢘⡙");
    console.log("⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⠗⠂⠄⠀⣴⡟⠀⠀⡃");
    quitGame();
}

function quitGame() {
    console.log("Quitting the game.");
    process.exit(0);
}

// Start the story
question1();
