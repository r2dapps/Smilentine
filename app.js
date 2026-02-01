/* =====================
   CONFIG & STATE
===================== */
const CONFIG = {
    name: "Smiley",
    brand: "Smilentine",
    startDate: "2026-02-07",
    valentineDate: "2026-02-14",
    isLive: true // SET TO TRUE FOR FINAL DEPLOYMENT
};

/**
 * Social & Playful Challenges
 * These are now picked RANDOMLY every refresh to keep it fresh!
 */
const PLAYFUL_CHALLENGES = [
    {
        task: "Quick! Send Smiley a screenshot of this page and tell him your favorite color right now. 🎨",
        interact: "Sent! 😉",
        onComplete: () => celebrate()
    },
    {
        task: "Is your smile truly the cutest thing in the world? 😉 (Ask your best friend for a second opinion!)",
        interact: ["Yes", "Definitely Yes"],
        onComplete: (choice) => {
            showSequence([
                "I knew you'd say that! 😍",
                "Actually, it's a scientific fact at this point. 🧬",
                "Even your friends would agree! 💖"
            ]);
        }
    },
    {
        task: "Challenge: Don't blink! Click this heart as many times as you can before it runs away. 💓",
        interact: "Start Challenge!",
        onComplete: () => celebrate()
    },
    {
        task: "Think of a song that reminds you of us... then play it and click 'Done'! 🎵",
        interact: "Listening... 🎧",
        onComplete: () => celebrate()
    },
    {
        task: "Catch the falling star! It's moving fast today. ✨",
        interact: "Catch it!",
        onComplete: () => celebrate()
    },
    {
        task: "Truth time: On a scale of 1-10, how excited are you for the 14th? 🔥",
        interact: ["10", "11!!"],
        onComplete: () => {
            showSequence([
                "The excitement is mutual! 😍",
                "I've been planning this for a while...",
                "Ready for the magic? ✨"
            ]);
        }
    },
    {
        task: "If we were in a romantic movie, who would play us? Tell me your answer! 🎬",
        interact: "I have the cast! 🍿",
        onComplete: () => celebrate()
    },
    {
        task: "What's the one thing that always makes you smile, no matter what? 😊",
        interact: "Besides you? 😉",
        onComplete: () => celebrate()
    },
    {
        task: "Send me a voice note saying 'Magic is coming' to unlock today's vibe. �",
        interact: "Unlocked! 🔓",
        onComplete: () => celebrate()
    },
    {
        task: "Which city should we visit together first? ✈️🌍",
        interact: "Pack your bags! 🧳",
        onComplete: () => celebrate()
    },
    {
        task: "If you could rename me to something cute, what would it be? 📛",
        interact: "I have a name! 🥰",
        onComplete: () => celebrate()
    },
    {
        task: "Quick challenge: Close your eyes and think of our best memory. Click when you see it! ✨",
        interact: "Memories... ❤️",
        onComplete: () => celebrate()
    },
    {
        task: "Send me a heart emoji on WhatsApp right now and then click this! 📱💖",
        interact: "Sent! 💌",
        onComplete: () => celebrate()
    }
];

const QUOTES = [
    "Some surprises are worth waiting for 😌",
    "Mee smile ki oka proper day kavali 💗",
    "Konchem patience… magic work avuthundi 😉",
    "Ee wait ki result chaala cute ga untundi",
    "February lo okka page… chaala feelings 💕",
    "Suspense ante idhe 😏",
    "Mee smile gurinchi alochisthe time fast ga velthundi",
    "Ee wait antha worth it avuthundi ani nammakam",
    "Soft hearts need slow beginnings 💫",
    "Nee navvu chala Bavuntadi... don't hide it! 💖",
    "Patience level test avuthundemo 😉",
    "Romance antha speed lo raadu… slow ga vastundi",
    "Ee wait lo kuda oka sweetness undi",
    "Smile osthe chalu… day set",
    "Mee presence ey oka vibe",
    "Chaala simple ga start ayindi… but special ga end avuthundi",
    "Mee smile choodadam oka habit ayipoyindi",
    "Ee page open chesthe calm ga untundi",
    "Some people feel like home",
    "Ee wait lo kuda excitement undi",
    "Mee navvu = serotonin boost",
    "Chaala rojulu tarvatha oka genuine feeling",
    "Ee wait motham smile tho gadapali",
    "Konni things rush cheyyakudadhu",
    "Anthe… smile osthe chaalu",
    "Cute things take time",
    "Mee smile ni celebrate cheyyali",
    "Ee wait antha oka build-up",
    "Slow burns hit harder 😌",
    "Mee navvu oka mood",
    "Ee page chusina prati sari oka thought",
    "Feelings ki timetable undadu",
    "Soft hearts need soft moments",
    "Smile osthe world slow ayipothundi",
    "Ee wait oka teaser matrame",
    "Chaala simple… chaala special",
    "Mee smile ki oka festival kavali",
    "Ee wait lo kuda romance undi",
    "Anthe… calm ga undu",
    "Good things loading…",
    "Nee smile kosam konchem wait cheyyadam kuda sweet eh 😌",
    "Nee navvu choodagane heart calm ayipothundi",
    "Konchem slow ga… kani chaala deep ga 💕",
    "Nee presence lone oka warmth undi",
    "Ee wait oka silent promise la untundi",
    "Nee smile gurinchi alochisthe time teliyadu",
    "Romance ante hurry kaadu… feel avvadam",
    "Nee navvu chala simple… kani chaala powerful",
    "Ee page open chesthe ninnu gurthosthundi",
    "Nee smile osthe chaalu… migatha anni secondary",
    "Konni feelings explain cheyyakkarledu",
    "Nee kosam wait cheyyadam burden la anipinchadu",
    "Ee wait lo kuda oka calm happiness undi",
    "Nee navvu oka soft pause la untundi",
    "Chaala slow ga start ayina feeling idi",
    "Nee smile chusaka day automatic ga better avuthundi",
    "Ee wait antha oka silent smile kosam",
    "Nee presence alone makes things lighter",
    "Cute moments rush cheyyakudadhu",
    "Nee smile… ade chaalu 💖",
    "Prathi roju ninnu chusthe, adho kotha energy 🌟",
    "Nuvvu navvuthunte, lokam antha calm ga anipisthundi",
    "Some feelings are better felt than said... like this one 💌",
    "Nee voice vinte chaalu, day motham set ayipothundi",
    "Every day is a bit better because you're in it ✨",
    "Nuvvu pakkana unte, time ela velthundo teliyadhu ⏳",
    "Mee smile is the most beautiful curve in the world 😍",
    "Konni sarlu silent ga undadam lo kuda oka prema untundi",
    "Nuvu na favorite notification vi! 📱❤️",
    "Life is short, but your smile makes it look like a dream",
    "Nee thoti gadipina prathi second oka beautiful memory"
];

const DAYS = [
    {
        date: "02-07",
        title: "Rose Day",
        img: "img/rose-day.png",
        text: "Every rose has its beauty, but none can match the radiance of your smile. This day is all about celebrating you! 💖"
    },
    {
        date: "02-08",
        title: "Propose Day",
        img: "img/propose-day.png",
        text: "I might have a thousand things to say, but for now, let's just say you make my world a lot brighter. Stay tuned for the big one! ✨"
    },
    {
        date: "02-09",
        title: "Chocolate Day",
        img: "img/chocolate-day.png",
        text: "Chocolates are sweet, but your laughter is my favorite treat. Wishing you a day as sweet as you are! 🍫"
    },
    {
        date: "02-10",
        title: "Teddy Day",
        img: "img/teddy-day.png",
        text: "Whenever you feel lonely, just remember I'm sending you a giant virtual hug today. You're my favorite teddy! 🧸"
    },
    {
        date: "02-11",
        title: "Promise Day",
        img: "img/promise-day.png",
        text: "I promise to be the reason behind your smile, to support you, and to cherish every moment we share. Always. 🤞💗"
    },
    {
        date: "02-12",
        title: "Kiss Day",
        img: "img/kiss-day.png",
        text: "Sending a million virtual kisses to the girl who stole my heart with just one look. You're simply addictive! 💋"
    },
    {
        date: "02-13",
        title: "Hug Day",
        img: "img/hug-day.png", // Ensure this image exists or provide a fallback
        text: "A warm hug can say what words cannot. Consider this a giant, warm, fuzzy virtual hug from me to you! 🤗✨"
    },
    {
        date: "02-14",
        title: "Smilentine",
        img: "img/valentines-day.png",
        text: "We've made it! After all these days, I have just one question... Will you make me the happiest person and be my Smilentine? 💖",
        proposal: true
    }
];

const FINALE_OPTIONS = [
    {
        sequence: [
            "I’ve spent every day of this journey falling for you a little more... 🌹",
            "You aren’t just a wish; you’re the part of my story I never want to end... ✨",
            "So, for every today and every tomorrow... will you be my Smilentine? ❤️"
        ],
        headline: "Forever Starts Now! 😍",
        message: "You just turned a beautiful surprise into the most perfect memory. 💐<br>My heart is exactly where it’s meant to be—with you."
    },
    {
        sequence: [
            "Warning: Saying yes might lead to excessive smiling and virtual hugs... 😉",
            "Actually, I've already decided... I'm never letting go! ✨",
            "Last chance to stay 'just friends'—or will you be mine forever? 💍"
        ],
        headline: "VICTORY! 😍",
        message: "Best. Decision. Ever. 🥂<br>I promise to be the reason behind your smile every single day."
    },
    {
        sequence: [
            "In a world full of noise, your smile is my favorite song... 🎵",
            "We’ve walked through 7 days of magic, but I want a lifetime... ✨",
            "Will you hold my hand through all the seasons? 🤝💞"
        ],
        headline: "Simply Yours. ❤️",
        message: "You are the magic I was looking for. 💐<br>Thank you for making my world so much brighter."
    },
    {
        sequence: [
            "They say nothing lasts forever, but they haven't met us yet... 💫",
            "I don't need the stars when I have your eyes to guide me home... 🌌",
            "Will you give me the honor of being your forever person? 🏹❤️"
        ],
        headline: "Match Made in Heaven! ✨",
        message: "My heart just found its home. 🏠💖<br>I'll cherish you more than words could ever say."
    },
    {
        sequence: [
            "I was looking for a reason to smile, and then I found you... 😊",
            "Every second with you feels like a beautiful dream I never want to wake up from... 🌙",
            "Will you stay by my side and keep making this dream real? 🌸"
        ],
        headline: "A Dream Come True! 😍",
        message: "You're my favorite reality. 🌈✨<br>Thank you for choosing me today and every day."
    },
    {
        sequence: [
            "Life is a puzzle, and you're the piece I was missing all along... 🧩",
            "You make the ordinary feel extraordinary just by being in it... ✨",
            "Will you be the permanent companion of my soul? 💎"
        ],
        headline: "Perfectly Complete! ❤️",
        message: "The search is over. 🔍💖<br>I'm so lucky to have you as my Smilentine."
    },
    {
        sequence: [
            "If I had a flower for every time I thought of you, I'd have a garden forever... 🌷",
            "Your love is the anchor that keeps me steady in the wildest storms... ⚓",
            "Will you be the one I grow old and happy with? 👵👴❤️"
        ],
        headline: "Endless Love! 🌹",
        message: "My heart is overflowing with joy. 🌊😍<br>Let's make every moment count together."
    },
    {
        sequence: [
            "I don't believe in coincidences; I believe we were meant to happen... 🔗",
            "You're the first thing I think of when I wake up and the last before I sleep... 🌅🌌",
            "Will you be my today, my tomorrow, and my always? 🕰️💖"
        ],
        headline: "Meant to Be! 💕",
        message: "It was always you. 🎯❤️<br>You've made me the luckiest person in the world."
    },
    {
        sequence: [
            "You're the melody in my silence and the color in my gray... 🎨🎵",
            "With you, every place feels like home and every day feels like a holiday... 🏖️",
            "Will you be my partner in all of life's adventures? 🚀💗"
        ],
        headline: "Our Adventure Begins! 🗺️😍",
        message: "Let's explore the world together. 🌍✨<br>I'm so happy you said YES!"
    },
    {
        sequence: [
            "My favorite place in the world is right next to you... 📍❤️",
            "You're the best thing that ever happened to me, and I'll never forget it... 🎗️",
            "Will you be my Smilentine for the rest of eternity? ⏳💖"
        ],
        headline: "Eternity with You! 💖",
        message: "You're my everything. 🌍🔱<br>Officially and forever, mine."
    }
];

/* =====================
   CORE LOGIC - ELEMENTS
===================== */
const card = document.getElementById("card");
const audio = document.getElementById("bgMusic");
const musicIcon = document.getElementById("musicIcon");
const musicText = document.getElementById("musicText");
const today = new Date();
const mmdd = today.toISOString().slice(5, 10);
const startDateTime = new Date(CONFIG.startDate + "T00:00:00").getTime();

const PLAYLIST = [
    { title: "Love 1", file: "music/Love (1).mp3" },
    { title: "Love 2", file: "music/Love (2).mp3" },
    { title: "Love 3", file: "music/Love (3).mp3" },
    { title: "Love 4", file: "music/Love (4).mp3" },
    { title: "Love 5", file: "music/Love (5).mp3" },
    { title: "Love 6", file: "music/Love (6).mp3" },
    { title: "Love 7", file: "music/Love (7).mp3" },
    { title: "Love 8", file: "music/Love (8).mp3" },
    { title: "Love 9", file: "music/Love (9).mp3" }
];

let currentTrack = 0;
let isPlaying = false;

/* =====================
   INITIALIZATION
===================== */
function init() {
    createFloatingHearts();
    updateBackgroundState();
    initMusicControls();

    const now = Date.now();
    if (!CONFIG.isLive) {
        renderAllDays();
    } else if (now < startDateTime) {
        renderWaitingRoom();
    } else {
        renderCurrentDay();
    }
}

// Start everything
init();

function updateBackgroundState() {
    const body = document.body;
    const now = Date.now();
    const valentineTime = new Date(CONFIG.valentineDate + "T00:00:00").getTime();

    if (now >= valentineTime) {
        body.style.background = "linear-gradient(135deg, #ff4d6d 0%, #b1005a 100%)";
    } else if (now >= startDateTime) {
        body.style.background = "linear-gradient(135deg, #ffdde1 0%, #ee9ca7 100%)";
    } else {
        body.style.background = "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)";
    }
}

/* =====================
   WAITING ROOM
===================== */
function renderWaitingRoom() {
    // Pick a completely random challenge on refresh
    const challengeIndex = Math.floor(Math.random() * PLAYFUL_CHALLENGES.length);
    const challenge = PLAYFUL_CHALLENGES[challengeIndex];

    card.innerHTML = `
        <div style="margin-bottom: 20px;">
            <img src="img/hearts.png" alt="Love" style="width: 80px; height: auto;">
        </div>
        <h1 style="font-size: 2.5rem; margin-top: 10px;">${CONFIG.brand}</h1>
        <h2 style="font-family: 'Dancing Script'; font-size: 1.8rem;">Hey ${CONFIG.name}, welcome!</h2>
        <p><i>"${randomQuote()}"</i></p>
        
        <div class="countdown-box">
            <p style="margin-bottom: 5px; font-weight: 600;">The magic begins in:</p>
            <div class="countdown-timer" id="timer">${updateTimer()}</div>
        </div>

        <div class="challenge-section" style="margin-top: 20px; border-top: 1px solid rgba(255,77,109,0.2); padding-top: 20px;">
            <p style="font-size: 0.9rem; color: var(--primary);"><b>Today's Playful Task:</b></p>
            <p style="font-size: 1.1rem; margin-bottom: 15px;">${challenge.task}</p>
            <div id="challenge-action" style="min-height: 100px; display: flex; justify-content: center; align-items: center;">
                ${Array.isArray(challenge.interact)
            ? challenge.interact.map(btn => `<button class="yes" style="margin: 5px;" onmouseover="handleTaskInteraction(event, ${challengeIndex})" onclick="handleTaskInteraction(event, ${challengeIndex}, true, '${btn}')">${btn}</button>`).join('')
            : `<button class="yes" onmouseover="handleTaskInteraction(event, ${challengeIndex})" onclick="handleTaskInteraction(event, ${challengeIndex}, true, null)">${challenge.interact}</button>`
        }
            </div>
        </div>
    `;

    setInterval(() => {
        const timerEl = document.getElementById("timer");
        if (timerEl) timerEl.innerText = updateTimer();
    }, 1000);
}

function handleTaskInteraction(event, challengeIndex, isClick = false, choice = null) {
    const btn = event.target;
    const challenge = PLAYFUL_CHALLENGES[challengeIndex];

    if (!btn.dataset.interacts) btn.dataset.interacts = 0;
    if (!btn.dataset.maxMoves) btn.dataset.maxMoves = Math.floor(Math.random() * 4) + 4; // Random 4-7 moves

    const count = parseInt(btn.dataset.interacts);
    const maxMoves = parseInt(btn.dataset.maxMoves);

    // Mini-Game: Escape and Grow for RANDOM number of attempts
    if (count < maxMoves) {
        btn.dataset.interacts = count + 1;

        if (btn.parentElement !== document.body) {
            const rect = btn.getBoundingClientRect();
            document.body.appendChild(btn);
            btn.style.position = "fixed";
            btn.style.left = rect.left + "px";
            btn.style.top = rect.top + "px";
            btn.style.zIndex = "10000";
        }

        btn.style.transition = "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";
        const padding = 80;
        const x = Math.random() * (window.innerWidth - btn.offsetWidth - padding * 2) + padding;
        const y = Math.random() * (window.innerHeight - btn.offsetHeight - padding * 2) + padding;

        const scale = 1 + (parseInt(btn.dataset.interacts) * 0.2);

        btn.style.left = x + "px";
        btn.style.top = y + "px";
        btn.style.transform = `scale(${scale})`;

        if (isClick) btn.style.animation = "heartBeat 0.3s";
        return;
    }

    if (isClick && count >= maxMoves) {
        spawnButtonHearts(btn);
        if (challenge.onComplete) challenge.onComplete(choice);
        if (btn.parentElement === document.body) btn.remove();

        const actionEl = document.getElementById("challenge-action");
        if (actionEl && !document.getElementById("seqNext")) {
            actionEl.innerHTML = `<p style="color: var(--primary); font-weight: 600;">Task Completed! 💖✨</p>`;
        }
    }
}

function spawnButtonHearts(btn) {
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement("div");
        heart.innerText = Math.random() > 0.5 ? "❤️" : "💖";
        heart.style.position = "fixed";
        heart.style.left = (rect.left + rect.width / 2) + "px";
        heart.style.top = (rect.top + rect.height / 2) + "px";
        heart.style.fontSize = Math.random() * 15 + 10 + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "10000";
        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 150 + 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        heart.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${vx}px, ${vy}px) scale(0)`, opacity: 0 }
        ], { duration: 1000, easing: 'ease-out' }).onfinish = () => heart.remove();
    }
}

function showSequence(messages, finalCallback) {
    let step = 0;
    const next = () => {
        if (step < messages.length) {
            card.innerHTML = `
                <div style="margin-bottom: 15px;">
                    <img src="img/hearts.png" alt="Wait" style="width: 60px; height: auto;">
                </div>
                <h1 style="font-size: 2.2rem; font-family: 'Dancing Script';">Wait...</h1>
                <p style="font-size: 1.2rem; margin: 20px 0; color: #6a0036;">${messages[step]}</p>
                <div class="btn-group">
                    <button class="yes" id="seqNext">Next 🌸</button>
                </div>
            `;
            document.getElementById("seqNext").onclick = () => {
                step++;
                next();
            };
        } else {
            if (finalCallback) finalCallback();
            else {
                renderWaitingRoom();
                celebrate();
            }
        }
    };
    next();
}

function updateTimer() {
    const diff = startDateTime - Date.now();
    if (diff <= 0) return "Ready! 💖";
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    return `${d}d : ${h}h : ${m}m : ${s}s`;
}

function renderCurrentDay() {
    const day = DAYS.find(d => d.date === mmdd) || DAYS[DAYS.length - 1];
    renderDay(day);
}

function renderDay(day) {
    const oldNo = document.getElementById("noBtn");
    if (oldNo) oldNo.remove();

    // Pick a random quote and challenge for this view
    const quote = randomQuote();
    const challengeIndex = Math.floor(Math.random() * PLAYFUL_CHALLENGES.length);
    const challenge = PLAYFUL_CHALLENGES[challengeIndex];

    card.innerHTML = `
        <div style="margin-bottom: 15px;">
            <img src="${day.img}" alt="${day.title}" style="width: 120px; height: auto; filter: drop-shadow(0 5px 15px rgba(255,143,163,0.3));" onerror="this.src='img/hearts.png'">
        </div>
        <h1 style="font-size: 2.8rem; font-family: 'Dancing Script';">${day.title}</h1>
        <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;">${day.text}</p>
        
        <div class="dynamic-section" style="border-top: 1px solid rgba(255,77,109,0.2); padding-top: 20px; margin-top: 10px;">
            <p style="font-style: italic; color: var(--secondary); margin-bottom: 15px;">"${quote}"</p>
            
            ${day.proposal ? `
                <div class="btn-group">
                    <button class="yes" onclick="handleYesProposal()">YES! 💕</button>
                    <button class="no" id="noBtn" onmouseover="moveNo()" onclick="moveNo()">NO 🙈</button>
                </div>
            ` : `
                <div class="challenge-box" style="background: rgba(255, 77, 109, 0.05); padding: 15px; border-radius: 20px; margin-bottom: 20px;">
                    <p style="font-size: 0.85rem; color: var(--primary); font-weight: 600; margin-bottom: 8px;">✨ Today's Vibe Task:</p>
                    <p style="font-size: 1rem; margin-bottom: 15px;">${challenge.task}</p>
                    <div id="challenge-action">
                        ${Array.isArray(challenge.interact)
            ? challenge.interact.map(btn => `<button class="yes" style="margin: 5px; padding: 10px 20px; font-size: 0.9rem;" onmouseover="handleTaskInteraction(event, ${challengeIndex})" onclick="handleTaskInteraction(event, ${challengeIndex}, true, '${btn}')">${btn}</button>`).join('')
            : `<button class="yes" style="padding: 10px 20px; font-size: 0.9rem;" onmouseover="handleTaskInteraction(event, ${challengeIndex})" onclick="handleTaskInteraction(event, ${challengeIndex}, true, null)">${challenge.interact}</button>`
        }
                    </div>
                </div>
                <button class="yes" style="width: 100%;" onclick="celebrate(); renderDay(DAYS.find(d => d.date === '${day.date}'))">Receive Love 💖</button>
            `}
        </div>
    `;
}

function handleYesProposal() {
    // Remove the "No" button immediately so it doesn't linger or grow
    const noBtn = document.getElementById("noBtn");
    if (noBtn) noBtn.remove();

    const option = FINALE_OPTIONS[Math.floor(Math.random() * FINALE_OPTIONS.length)];

    showSequence(option.sequence, () => {
        document.body.style.background = "linear-gradient(135deg, #1a1a1a 0%, #b1005a 100%)";
        card.style.background = "rgba(20, 20, 20, 0.85)";
        card.style.borderColor = "var(--primary)";
        card.style.color = "white";

        card.innerHTML = `
            <div style="background: white; border-radius: 25px; padding: 10px; display: inline-block; margin-bottom: 20px; box-shadow: 0 10px 30px rgba(255,77,109,0.3);">
                <img src="img/cute-love-bear-roses.gif" 
                     alt="Love Bear" 
                     style="width: 150px; border-radius: 15px; display: block;">
            </div>
            <h1 style="font-size: 3.5rem; color: #ff4d6d; font-family: 'Dancing Script'; text-shadow: 0 0 15px rgba(255,77,109,0.4);">${option.headline}</h1>
            <p style="font-size: 1.3rem; color: #ff8fa3;">${option.message}</p>
            <div style="margin-top: 20px;">
                <img src="img/balloons.png" style="width: 80px; animation: heartBeat 1.2s infinite alternate;">
            </div>
        `;
        celebrateLarge();
    });
}

function moveNo() {
    const noBtn = document.getElementById("noBtn");
    if (!noBtn) return;

    if (!noBtn.dataset.moves) noBtn.dataset.moves = 0;
    noBtn.dataset.moves = parseInt(noBtn.dataset.moves) + 1;

    if (noBtn.parentElement !== document.body) {
        const rect = noBtn.getBoundingClientRect();
        document.body.appendChild(noBtn);
        noBtn.style.position = "fixed";
        noBtn.style.left = rect.left + "px";
        noBtn.style.top = rect.top + "px";
        noBtn.style.zIndex = "10000";
    }

    noBtn.style.transition = "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
    const padding = 80;
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding * 2) + padding;
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding * 2) + padding;

    const scale = 1 + (Math.min(parseInt(noBtn.dataset.moves), 8) * 0.15);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.style.transform = `scale(${scale})`;
}

function createFloatingHearts() {
    const container = document.getElementById("bg-canvas");
    if (!container) return;
    const symbols = ["💖", "🌸", "✨", "❤️", "😊", "🌹"];
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        const size = Math.random() * 22 + 12 + "px";
        const drift = (Math.random() - 0.5) * 320 + "px";
        const duration = Math.random() * 7 + 5 + "s";
        heart.style.setProperty("--size", size);
        heart.style.setProperty("--drift", drift);
        heart.style.setProperty("--duration", duration);
        heart.style.left = Math.random() * 100 + "vw";
        container.appendChild(heart);
        setTimeout(() => heart.remove(), parseFloat(duration) * 1000);
    }, 1500);
}

function celebrate() {
    if (window.confetti) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#ff4d6d', '#ff8fa3', '#ffb3c1', '#ffffff'] });
    }
}

function celebrateLarge() {
    if (!window.confetti) return;
    const end = Date.now() + (5 * 1000);
    const colors = ['#ff4d6d', '#ff8fa3', '#ffb3c1', '#ffffff'];
    (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: colors });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: colors });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());
    setTimeout(() => {
        confetti({ particleCount: 200, spread: 160, origin: { y: 0.3 } });
    }, 1000);
}

function renderAllDays() {
    card.innerHTML = `
        <div style="margin-bottom: 15px;"><img src="img/hearts.png" style="width: 60px;"></div>
        <h1 style="font-size: 2.2rem; font-family: 'Dancing Script';">✨ Preview Mode</h1>
        <button class="yes" style="width: 100%; margin: 10px 0;" onclick="renderWaitingRoom()">Preview Waiting Room</button>
        ${DAYS.map(d => `
            <div style="border: 1px solid var(--primary-light); padding: 10px; margin-bottom: 10px; border-radius: 18px; text-align: left; display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.4);">
                <span style="font-weight: 600; font-size: 0.85rem;">${d.title}</span>
                <button class="yes" style="padding: 6px 12px; font-size: 0.75rem;" onclick='renderDay(${JSON.stringify(d).replace(/'/g, "&apos;")})'>View</button>
            </div>
        `).join('')}
    `;
}

function randomQuote() {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

/* =====================
   MUSIC PLAYER
===================== */
function initMusicControls() {
    const toggle = document.getElementById("musicToggle");
    const next = document.getElementById("musicNext");
    const prev = document.getElementById("musicPrev");

    if (toggle) toggle.onclick = togglePlay;
    if (next) next.onclick = nextTrack;
    if (prev) prev.onclick = prevTrack;

    audio.onended = nextTrack;

    currentTrack = Math.floor(Math.random() * PLAYLIST.length);
    loadTrack(currentTrack);
}

function loadTrack(index) {
    audio.src = PLAYLIST[index].file;
    if (isPlaying) {
        audio.play().catch(e => console.log("Play blocked"));
        musicText.innerText = "Playing...";
    }
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        musicIcon.innerText = "🎧";
        musicText.innerText = "Music Paused";
    } else {
        audio.play().catch(e => console.log("Play blocked"));
        musicIcon.innerText = "🎶";
        musicText.innerText = "Playing...";
    }
    isPlaying = !isPlaying;
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % PLAYLIST.length;
    loadTrack(currentTrack);
    if (!isPlaying) togglePlay();
}

function prevTrack() {
    currentTrack = (currentTrack - 1 + PLAYLIST.length) % PLAYLIST.length;
    loadTrack(currentTrack);
    if (!isPlaying) togglePlay();
}
