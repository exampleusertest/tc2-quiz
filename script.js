const questions = [
    { question: "What class can cloak in TC2?", options: ["Arsonist", "Flanker", "Agent", "Mechanic"], answer: "Agent" },
    { question: "Which weapon is unique to the Trooper class?", options: ["Rocket Launcher", "Shotgun", "Minigun", "Knife"], answer: "Rocket Launcher" },
    { question: "What is the maximum health of the Brute class?", options: ["175", "300", "400", "250"], answer: "300" },
    { question: "Which class uses a Flamethrower?", options: ["Mechanic", "Arsonist", "Agent", "Trooper"], answer: "Arsonist" },
    { question: "What is the main weapon of the Mechanic?", options: ["Wrench", "Shotgun", "Pistol", "Minigun"], answer: "Wrench" },
    { question: "Which class is the fastest?", options: ["Flanker", "Brute", "Trooper", "Doctor"], answer: "Flanker" },
    { question: "What ability does the Doctor have?", options: ["Healing teammates", "Invisibility", "Deploying turrets", "High damage"], answer: "Healing teammates" },
    { question: "What is the purpose of the game TC2?", options: ["Capture points", "Destroy enemy base", "Collect items", "Explore the map"], answer: "Capture points" },
    { question: "Which class has a shotgun as its primary weapon?", options: ["Flanker", "Doctor", "Arsonist", "Mechanic"], answer: "Mechanic" },
    { question: "What does the Agent use as their primary weapon?", options: ["Knife", "Rocket Launcher", "Flamethrower", "Sniper Rifle"], answer: "Knife" },
    { question: "Which class has the highest health?", options: ["Brute", "Agent", "Flanker", "Doctor"], answer: "Brute" },
    { question: "Which class can heal other players?", options: ["Doctor", "Mechanic", "Agent", "Arsonist"], answer: "Doctor" },
    { question: "What is the Trooper's special ability?", options: ["Double jump", "Rocket jump", "Healing", "Building turrets"], answer: "Rocket jump" },
    { question: "Which class can set enemies on fire?", options: ["Arsonist", "Doctor", "Agent", "Mechanic"], answer: "Arsonist" },
    { question: "What is the main objective in Capture the Flag mode?", options: ["Capture points", "Destroy enemy base", "Collect the enemy flag", "Kill the most enemies"], answer: "Collect the enemy flag" },
    { question: "Which class can deploy sentry guns?", options: ["Mechanic", "Trooper", "Brute", "Agent"], answer: "Mechanic" },
    { question: "What is the Arsonist's primary weapon?", options: ["Flamethrower", "Rocket Launcher", "Knife", "Sniper Rifle"], answer: "Flamethrower" },
    { question: "Which class has a sniper rifle?", options: ["Marksman", "Trooper", "Doctor", "Mechanic"], answer: "Marksman" },
    { question: "What role does the Flanker play?", options: ["Fast attacker", "Defense builder", "Healer", "Sniper"], answer: "Fast attacker" },
    { question: "Which class can disguise as enemies?", options: ["Agent", "Brute", "Flanker", "Doctor"], answer: "Agent" },
    { question: "How does the Doctor heal?", options: ["Medigun", "Sentry gun", "Flamethrower", "Rocket Launcher"], answer: "Medigun" },
    { question: "Which weapon does the Brute use?", options: ["Minigun", "Rocket Launcher", "Knife", "Shotgun"], answer: "Minigun" },
    { question: "Which class has the ability to double jump?", options: ["Flanker", "Brute", "Trooper", "Mechanic"], answer: "Flanker" },
    { question: "What is the main role of the Marksman?", options: ["Long-range damage", "Building defenses", "Healing teammates", "Setting traps"], answer: "Long-range damage" },
    { question: "Which class has a disguise kit?", options: ["Agent", "Brute", "Doctor", "Flanker"], answer: "Agent" },
    { question: "What mode requires capturing control points?", options: ["Control Points", "Capture the Flag", "Deathmatch", "Payload"], answer: "Control Points" },
    { question: "Which class has the highest movement speed?", options: ["Flanker", "Doctor", "Marksman", "Mechanic"], answer: "Flanker" },
    { question: "What is the Mechanic's primary tool?", options: ["Wrench", "Shotgun", "Medigun", "Knife"], answer: "Wrench" },
    { question: "Which class can build teleporters?", options: ["Mechanic", "Trooper", "Arsonist", "Doctor"], answer: "Mechanic" },
    { question: "What weapon does the Marksman use?", options: ["Sniper Rifle", "Minigun", "Rocket Launcher", "Flamethrower"], answer: "Sniper Rifle" },
    { question: "Which class has the most ammo capacity?", options: ["Brute", "Mechanic", "Agent", "Flanker"], answer: "Brute" },
    { question: "What class can use a rocket jump?", options: ["Trooper", "Doctor", "Agent", "Marksman"], answer: "Trooper" },
    { question: "Who can use a knife as their primary weapon?", options: ["Agent", "Doctor", "Trooper", "Arsonist"], answer: "Agent" },
    { question: "Which weapon does the Flanker primarily use?", options: ["Scattergun", "Rocket Launcher", "Flamethrower", "Sniper Rifle"], answer: "Scattergun" },
    { question: "What class is known for healing?", options: ["Doctor", "Agent", "Trooper", "Flanker"], answer: "Doctor" },
    { question: "What is the Doctor's primary role?", options: ["Healing teammates", "High DPS", "Building defenses", "Tank"], answer: "Healing teammates" },
    { question: "Which class has the lowest health?", options: ["Agent", "Brute", "Marksman", "Doctor"], answer: "Agent" },
    { question: "Which class can cloak and disguise?", options: ["Agent", "Brute", "Flanker", "Marksman"], answer: "Agent" },
    { question: "What is the objective of Payload mode?", options: ["Push the cart", "Capture flags", "Kill enemies", "Control points"], answer: "Push the cart" },
    { question: "What weapon is unique to the Arsonist?", options: ["Flamethrower", "Shotgun", "Sniper Rifle", "Knife"], answer: "Flamethrower" },
    { question: "What class uses the Minigun?", options: ["Brute", "Flanker", "Doctor", "Agent"], answer: "Brute" },
    { question: "Who can rocket jump?", options: ["Trooper", "Mechanic", "Marksman", "Doctor"], answer: "Trooper" },
    { question: "What does the Mechanic build?", options: ["Sentry guns", "Teleporters", "Disguises", "Shields"], answer: "Sentry guns" },
    { question: "Which class is good at close-range combat?", options: ["Brute", "Marksman", "Doctor", "Flanker"], answer: "Brute" },
    { question: "What is the Arsonist's secondary weapon?", options: ["Shotgun", "Rocket Launcher", "Sniper Rifle", "Knife"], answer: "Shotgun" },
    { question: "What is the Medic's secondary weapon?", options: ["Pistol", "Shotgun", "Sniper Rifle", "Rocket Launcher"], answer: "Pistol" },
    { question: "What class can deploy teleporters?", options: ["Mechanic", "Trooper", "Marksman", "Doctor"], answer: "Mechanic" },
    { question: "Which weapon is unique to the Agent?", options: ["Knife", "Rocket Launcher", "Minigun", "Flamethrower"], answer: "Knife" },
    { question: "What does the Trooper specialize in?", options: ["Rocket jumping", "Healing", "Close combat", "Long-range"], answer: "Rocket jumping" },
    { question: "Which class has a Medigun?", options: ["Doctor", "Trooper", "Brute", "Agent"], answer: "Doctor" },
    { question: "Who can deploy sentries?", options: ["Mechanic", "Trooper", "Doctor", "Agent"], answer: "Mechanic" }
];

// Dynamically generate the quiz questions
const quizContainer = document.getElementById('quiz-container');
questions.forEach((q, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
    
    q.options.forEach(option => {
        const optionLabel = document.createElement('label');
        optionLabel.innerHTML = `
            <input type="radio" name="question${index}" value="${option}">
            ${option}
        `;
        questionElement.appendChild(optionLabel);
    });
    
    quizContainer.appendChild(questionElement);
});

// Function to create sparkles
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    document.body.appendChild(sparkle);
    
    // Remove sparkle after animation
    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}

// Function to trigger jumpscare
function triggerJumpscare() {
    const jumpscare = document.getElementById('jumpscare');
    jumpscare.style.display = 'block';
    
    // Hide the jumpscare after 1.5 seconds
    setTimeout(() => {
        jumpscare.style.display = 'none';
    }, 1500);
}

// Randomly trigger jumpscare
setInterval(() => {
    if (Math.random() < 0.1) { // 10% chance every 5 seconds
        triggerJumpscare();
    }
}, 5000);

// Function to check answers and display result
function submitQuiz() {
    let score = 0;
    
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    
    const result = document.getElementById('result');
    result.textContent = `Your score: ${score} out of 50`;

    // Create sparkles if score is more than 30
    if (score > 30) {
        for (let i = 0; i < 30; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createSparkle(x, y);
        }
    }
}
