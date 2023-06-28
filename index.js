// Write your code in this file!
let currentUser = 'Simon';
const upperCaseCurrentUser = currentUser.toUpperCase();
const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = `${welcomeMessage.toUpperCase()}, ${upperCaseCurrentUser}!`;

const shortGreeting = `Welcome, ${firstInitial}!`;