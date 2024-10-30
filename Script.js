const messages = [
    "In a world full of chaos, your love is my safe haven.",
    "Every love story is beautiful, but ours is my favorite.",
    "You are the sun in my sky and the stars in my night.",
    "With you, I have found the perfect place to call home.",
    "Your smile is my favorite reason to wake up every morning.",
    "Falling for you was the easiest thing I've ever done.",
    "In your eyes, I see my forever.",
    "You’re not just my love; you’re my inspiration.",
    "Every moment with you is a precious memory waiting to happen.",
    "You make my heart race like it’s the first time every time.",
    "Loving you is like a beautiful dream I never want to wake up from.",
    "You’re the piece of my heart I never knew was missing.",
    "I fell in love with you because you loved me when I didn’t love myself.",
    "With you, I can be my true self, and that’s a beautiful thing.",
    "You’re the reason I believe in magic.",
    "I love you not just for who you are, but for who I am when I’m with you.",
    "You’re my favorite distraction in a world full of noise.",
    "When I’m with you, every moment feels like a fairy tale.",
    "You make the ordinary feel extraordinary just by being you.",
    "I could search a lifetime and never find another you.",
    "In your arms, I’ve found my perfect paradise.",
    "You are my greatest adventure and my sweetest comfort.",
    "Your love is the melody that plays in my heart.",
    "Together, we can conquer anything the world throws our way.",
    "With you, every day is a new opportunity to love deeper.",
    "You’re the answer to every prayer I never knew I had.",
    "My love for you is a journey that starts at forever and ends at never.",
    "Your happiness is my mission, and your love is my reward.",
    "I didn’t believe in soulmates until I met you.",
    "You are my love story, and I’ll never stop writing it.",
    "You make my heart sing a symphony of love.",
    "Our love is like a river; it flows endlessly and beautifully.",
    "In your laughter, I find my favorite melody.",
    "You’re my dream come true, wrapped in a beautiful reality.",
    "You light up my darkest days and make my heart smile.",
    "I love you more than words can express, and I’ll show you every day.",
    "You’re the heartbeat of my existence.",
    "In a sea of people, my eyes will always search for you.",
    "You are my compass, guiding me home no matter where I wander.",
    "Our love is a beautiful dance that never ends.",
    "I never knew what true love was until I met you.",
    "You’re my favorite person to annoy, love, and cherish.",
    "I love you beyond the stars and into the universe.",
    "Being with you feels like coming home to my heart.",
    "Your love is my anchor in the stormy seas of life.",
    "In your smile, I see a thousand reasons to be happy.",
    "I want to be with you until the stars fall from the sky.",
    "Your love is the art that colors my life.",
    "I’m grateful for every moment we share, for they are all treasures.",
    "You are my forever and always, and I’ll love you until the end of time."
];

const token = '7758138715:AAHIVBA6QnU5Lc1akhc-ypW_DAr-5RciB14'; // Replace with your bot token
const chatId = '-1002334918263'; // Replace with your channel ID

document.getElementById('sendMessage').addEventListener('click', () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    sendMessage(randomMessage);
});

function sendMessage(message) {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: message
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            console.log('Message sent:', message);
        } else {
            console.error('Error sending message:', data.description);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
                                                        }
