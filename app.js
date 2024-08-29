const startBtn = document.querySelector(".start-btn");
const infoBox = document.querySelector(".info-box");
const exitBtn = document.querySelector("#exit-btn");
const contBtn = document.querySelector("#cont-btn");
const quizCard = document.querySelector(".quiz-card");
const quizOptions = document.querySelectorAll(".quiz-option");
const quizQuestion = document.querySelector(".quiz-question");
const nextBtn = document.querySelector("#quiz-card-footer-btn");
const tickIcon = document.querySelector(".correct-icon");
const xIcon = document.querySelector(".wrong-icon");
const pageNumber = document.querySelector("#page-number");
const progressBar = document.querySelector(".progress");
const timer = document.querySelector("#timer");
const scoreCard = document.querySelector(".score-card");
const score = document.querySelectorAll(".score");
const miss = document.querySelector(".miss");
let countdownDuration = 15;
progressBar.style.width = "0%";
let optionClicked = false;

startBtn.addEventListener("click", function(){
    startBtn.style.display = "none";
    infoBox.classList.remove("inactive");
});

exitBtn.addEventListener("click", function(){
    infoBox.classList.add("inactive");
    startBtn.style.display = "block";
});
const updateTimer = () =>{
    let multiplier = 0;
    countdownDuration =15;
    countdownInterval = setInterval(() => {
        let baseNum = 0.445;
        timer.textContent = countdownDuration--;
        const percentage = 15 * (baseNum * multiplier);
        console.log(percentage);
        multiplier++
        console.log(multiplier);
        progressBar.style.transition = "width 1s linear";
        progressBar.style.width = `${percentage}%`;
        if (countdownDuration< 0 || optionClicked){
            clearInterval(countdownInterval);
            optionClicked = true;

        }
        
    }, 1000);
    
    
}
contBtn.addEventListener("click", function(){
    infoBox.classList.add("inactive");
    quizCard.classList.remove("quiz-card-inactive");    
    updateTimer();
});

let numberPassed = 0;
let numberMissed = 0;

const data = [
    {
        quizNum: 1,
        quizQuestion: "Who invented the Python programming language?",
        quizOptions: ["Paul McCarthy", "Guido Van Rossum", "Charles Babbage", "Ada Lovelace"],
        quizAnswer: "Guido Van Rossum"
    },
    {
        quizNum: 2,
        quizQuestion: "What does HTML stand for?",
        quizOptions: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "HyperText Machine Language"],
        quizAnswer: "HyperText Markup Language"
    },
    {
        quizNum: 3,
        quizQuestion: "Which data structure uses LIFO (Last In, First Out)?",
        quizOptions: ["Queue", "Stack", "Array", "Linked List"],
        quizAnswer: "Stack"
    },
    {
        quizNum: 4,
        quizQuestion: "What is the main purpose of an operating system?",
        quizOptions: ["To compile programs", "To manage computer hardware and software resources", "To edit documents", "To connect to the internet"],
        quizAnswer: "To manage computer hardware and software resources"
    },
    {
        quizNum: 5,
        quizQuestion: "Which algorithm is commonly used to find the shortest path in a graph?",
        quizOptions: ["Binary Search", "Quick Sort", "Dijkstra's Algorithm", "Merge Sort"],
        quizAnswer: "Dijkstra's Algorithm"
    },
    {
        quizNum: 6,
        quizQuestion: "In which year was the first version of Java released?",
        quizOptions: ["1991", "1995", "2000", "2005"],
        quizAnswer: "1995"
    },
    {
        quizNum: 7,
        quizQuestion: "What does CSS stand for?",
        quizOptions: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        quizAnswer: "Cascading Style Sheets"
    },
    {
        quizNum: 8,
        quizQuestion: "Which sorting algorithm has the worst-case time complexity of O(n^2)?",
        quizOptions: ["Quick Sort", "Merge Sort", "Bubble Sort", "Heap Sort"],
        quizAnswer: "Bubble Sort"
    },
    {
        quizNum: 9,
        quizQuestion: "Which of the following is a NoSQL database?",
        quizOptions: ["MySQL", "MongoDB", "Oracle", "SQL Server"],
        quizAnswer: "MongoDB"
    },
    {
        quizNum: 10,
        quizQuestion: "What is the purpose of the 'this' keyword in JavaScript?",
        quizOptions: ["To refer to the current object", "To refer to the global object", "To refer to a parent object", "To refer to a child object"],
        quizAnswer: "To refer to the current object"
    },
    {
        quizNum: 11,
        quizQuestion: "What does API stand for?",
        quizOptions: ["Application Programming Interface", "Advanced Programming Interface", "Application Processing Interface", "Automatic Programming Interface"],
        quizAnswer: "Application Programming Interface"
    },
    {
        quizNum: 12,
        quizQuestion: "Which company developed the C# programming language?",
        quizOptions: ["Sun Microsystems", "Microsoft", "Apple", "Google"],
        quizAnswer: "Microsoft"
    },
    {
        quizNum: 13,
        quizQuestion: "What does SQL stand for?",
        quizOptions: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Structured Question Language"],
        quizAnswer: "Structured Query Language"
    },
    {
        quizNum: 14,
        quizQuestion: "Which design pattern is used to provide a unified interface to a set of interfaces in a subsystem?",
        quizOptions: ["Singleton", "Factory", "Facade", "Observer"],
        quizAnswer: "Facade"
    },
    {
        quizNum: 15,
        quizQuestion: "Which of the following is a functional programming language?",
        quizOptions: ["Java", "C++", "Haskell", "Python"],
        quizAnswer: "Haskell"
    },
    {
        quizNum: 16,
        quizQuestion: "In which programming language is the term 'duck typing' commonly used?",
        quizOptions: ["Java", "C++", "Python", "C#"],
        quizAnswer: "Python"
    },
    {
        quizNum: 17,
        quizQuestion: "Which part of a computer is considered the brain?",
        quizOptions: ["RAM", "Hard Drive", "CPU", "Motherboard"],
        quizAnswer: "CPU"
    },
    {
        quizNum: 18,
        quizQuestion: "Which HTTP method is used to update data on a server?",
        quizOptions: ["GET", "POST", "PUT", "DELETE"],
        quizAnswer: "PUT"
    },
    {
        quizNum: 19,
        quizQuestion: "Which programming language is known as the mother of all languages?",
        quizOptions: ["C", "Assembly", "Fortran", "COBOL"],
        quizAnswer: "Fortran"
    },
    {
        quizNum: 20,
        quizQuestion: "What does 'MVC' stand for in software design?",
        quizOptions: ["Model View Controller", "Module View Control", "Model View Command", "Module View Component"],
        quizAnswer: "Model View Controller"
    },
    {
        quizNum: 21,
        quizQuestion: "Which of the following is an example of a version control system?",
        quizOptions: ["Git", "Docker", "Kubernetes", "Jenkins"],
        quizAnswer: "Git"
    },
    {
        quizNum: 22,
        quizQuestion: "What is the term for a self-replicating program that spreads itself across networks?",
        quizOptions: ["Worm", "Trojan", "Virus", "Spyware"],
        quizAnswer: "Worm"
    },
    {
        quizNum: 23,
        quizQuestion: "Which company developed the Go programming language?",
        quizOptions: ["Microsoft", "Apple", "Google", "Amazon"],
        quizAnswer: "Google"
    },
    {
        quizNum: 24,
        quizQuestion: "What is the primary function of DNS?",
        quizOptions: ["To translate domain names to IP addresses", "To secure data transmission", "To store data", "To manage email services"],
        quizAnswer: "To translate domain names to IP addresses"
    },
    {
        quizNum: 25,
        quizQuestion: "Which of the following is a front-end JavaScript framework?",
        quizOptions: ["Django", "Flask", "Angular", "Spring"],
        quizAnswer: "Angular"
    },
    {
        quizNum: 26,
        quizQuestion: "Which data structure uses FIFO (First In, First Out)?",
        quizOptions: ["Stack", "Queue", "Array", "Hash Table"],
        quizAnswer: "Queue"
    },
    {
        quizNum: 27,
        quizQuestion: "Which programming paradigm focuses on objects and data rather than actions?",
        quizOptions: ["Procedural Programming", "Functional Programming", "Object-Oriented Programming", "Logical Programming"],
        quizAnswer: "Object-Oriented Programming"
    },
    {
        quizNum: 28,
        quizQuestion: "What does RAM stand for?",
        quizOptions: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Regular Access Memory"],
        quizAnswer: "Random Access Memory"
    },
    {
        quizNum: 29,
        quizQuestion: "Which of the following is a low-level programming language?",
        quizOptions: ["Java", "Python", "Assembly", "C++"],
        quizAnswer: "Assembly"
    },
    {
        quizNum: 30,
        quizQuestion: "Which algorithm is used to encrypt data?",
        quizOptions: ["Bubble Sort", "AES", "Dijkstra's Algorithm", "Binary Search"],
        quizAnswer: "AES"
    },
    {
        quizNum: 31,
        quizQuestion: "Which data structure is optimal for implementing a priority queue?",
        quizOptions: ["Stack", "Queue", "Heap", "Linked List"],
        quizAnswer: "Heap"
    },
    {
        quizNum: 32,
        quizQuestion: "Which of the following is a relational database management system?",
        quizOptions: ["MySQL", "MongoDB", "Redis", "Cassandra"],
        quizAnswer: "MySQL"
    },
    {
        quizNum: 33,
        quizQuestion: "Which of the following is a key characteristic of the Agile methodology?",
        quizOptions: ["Waterfall approach", "Iterative development", "Rigid planning", "Infrequent delivery"],
        quizAnswer: "Iterative development"
    },
    {
        quizNum: 34,
        quizQuestion: "Which software development model involves developing a system in incremental steps?",
        quizOptions: ["Waterfall", "Spiral", "Agile", "V-Model"],
        quizAnswer: "Agile"
    },
    {
        quizNum: 35,
        quizQuestion: "What does the acronym 'OOP' stand for?",
        quizOptions: ["Operational Output Programming", "Object-Oriented Programming", "Object Operational Protocol", "Oriented Object Processing"],
        quizAnswer: "Object-Oriented Programming"
    },
    {
        quizNum: 36,
        quizQuestion: "Which of the following is a cloud computing service model?",
        quizOptions: ["SaaS", "DNS", "SMTP", "FTP"],
        quizAnswer: "SaaS"
    },
    {
        quizNum: 37,
        quizQuestion: "Which of the following is a key feature of RESTful APIs?",
        quizOptions: ["Statefulness", "Statelessness", "Platform dependence", "Tightly coupled architecture"],
        quizAnswer: "Statelessness"
    },
    {
        quizNum: 38,
        quizQuestion: "Which of the following is a commonly used database normalization form?",
        quizOptions: ["First Normal Form", "Second Normal Form", "Third Normal Form", "All of the above"],
        quizAnswer: "All of the above"
    },
    {
        quizNum: 39,
        quizQuestion: "Which of the following is a popular version control system?",
        quizOptions: ["Git", "Docker", "Kubernetes", "Maven"],
        quizAnswer: "Git"
    },
    {
        quizNum: 40,
        quizQuestion: "What does 'DRY' stand for in software development?",
        quizOptions: ["Don't Repeat Yourself", "Design Repeat Yourself", "Develop Rapidly Yourself", "Deploy Regularly Yourself"],
        quizAnswer: "Don't Repeat Yourself"
    },
    {
        quizNum: 41,
        quizQuestion: "Which of the following is used to manage dependencies in Java projects?",
        quizOptions: ["npm", "pip", "Maven", "Composer"],
        quizAnswer: "Maven"
    },
    {
        quizNum: 42,
        quizQuestion: "Which data structure is used to implement recursion?",
        quizOptions: ["Queue", "Stack", "Array", "Heap"],
        quizAnswer: "Stack"
    },
    {
        quizNum: 43,
        quizQuestion: "Which of the following is a web server software?",
        quizOptions: ["Apache", "Jenkins", "Git", "Docker"],
        quizAnswer: "Apache"
    },
    {
        quizNum: 44,
        quizQuestion: "Which of the following is an open-source operating system?",
        quizOptions: ["Windows", "macOS", "Linux", "Unix"],
        quizAnswer: "Linux"
    },
    {
        quizNum: 45,
        quizQuestion: "What does TCP stand for?",
        quizOptions: ["Transmission Control Protocol", "Transfer Communication Protocol", "Transmission Communication Protocol", "Transfer Control Protocol"],
        quizAnswer: "Transmission Control Protocol"
    },
    {
        quizNum: 46,
        quizQuestion: "Which of the following is a front-end web development framework?",
        quizOptions: ["Angular", "Node.js", "Django", "Flask"],
        quizAnswer: "Angular"
    },
    {
        quizNum: 47,
        quizQuestion: "Which of the following is an advantage of using cloud computing?",
        quizOptions: ["Scalability", "High upfront costs", "Complex infrastructure management", "Limited accessibility"],
        quizAnswer: "Scalability"
    },
    {
        quizNum: 48,
        quizQuestion: "What is the time complexity of binary search?",
        quizOptions: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
        quizAnswer: "O(log n)"
    },
    {
        quizNum: 49,
        quizQuestion: "Which of the following is a commonly used cryptographic hash function?",
        quizOptions: ["SHA-256", "AES", "RSA", "DES"],
        quizAnswer: "SHA-256"
    },
    {
        quizNum: 50,
        quizQuestion: "What does 'MVC' stand for in software development?",
        quizOptions: ["Model View Controller", "Module View Controller", "Model View Control", "Module View Control"],
        quizAnswer: "Model View Controller"
    }
];
let page = 0;

const displayQuestion =() =>{
    optionClicked = false;
    
    quizOptions.forEach((quiz, index)=>{
        quiz.innerHTML = `<p>${data[page].quizOptions[index]}</p>`;
        quiz.classList.remove("correct", "incorrect");
        
    })
    quizQuestion.textContent = data[page].quizQuestion;
    
    quizOptions.forEach((quiz, index)=>{
        
        quiz.addEventListener("click", function(){
            if (optionClicked) {
                return;
            }
            clearInterval(countdownInterval);
            if (quiz.children[0].textContent == data[page - 1].quizAnswer){
                numberPassed++
                quiz.classList.add("correct");
                quiz.appendChild(tickIcon);
                optionClicked = true;
            }else{
                numberMissed++;
                quiz.classList.add("incorrect");
                quiz.appendChild(xIcon);
                optionClicked = true;
            }

            console.log(numberPassed);
            console.log("----=");
            console.log(numberMissed);
        })
    })
    page++;
    
}
displayQuestion();
const displayRightAnswer = () =>{

}

nextBtn.addEventListener("click", function(){
    progressBar.style.width = "0%";
    progressBar.style.transition = "none";
    clearInterval(countdownInterval)
    displayQuestion();
    pageNumber.textContent = page;
    updateTimer();
    if (optionClicked == false){
        numberMissed++;
    }
    if (page == 50){
        quizCard.classList.add("quiz-card-inactive");
        nextBtn.textContent = "Finish";
        scoreCard.classList.remove("active-score-card");
        score.forEach((score)=>{
            score.textContent = numberPassed;
        })
        miss.textContent = numberMissed;
    }
})




