// ==================== DATA ====================
const POPUP_TEXTS = [
    "Happy New Year! 🎉",
    "Welcome 2026 ✨",
    "Naya Saal Mubarak 🥂",
    "New Year, New Vibes 🔥",
    "Cheers to 2026! 🍾",
    "Nayi Shuruat 🌟",
    "2026 Is Here! 🚀",
    "Khushiyan Hamesha ❤️"
];
const SQUAD_MEMBERS = [
    {
        id: "ritik", name: "Ritik", role: "Silent Hero", pass: "ritik@zero1", badge: "💪 Silent Hero", color: "#feca57", img: "ritik.jpeg",
        links: { insta: "ritikmaurya980", whatsapp: "910000000000", twitter: "ritik_x" }
    },
    {
        id: "himanshu", name: "Himanshu", role: "Legendary Player", pass: "himanshu@best", badge: "🏆 Legend Player", color: "#e94560", img: "HIMANSHU.jpeg",
        links: { insta: "himanshu_12aa", whatsapp: "910000000000", twitter: "himanshu_x" }
    },
    {
        id: "aarif", name: "Aarif", role: "Professional Player", pass: "aarif@vibe", badge: "🎉 Pro Player", color: "#ff6b6b", img: "AARIF.jpeg",
        links: { insta: "_aarif__malik_", whatsapp: "910000000000", twitter: "aarif_x" }
    },
    {
        id: "ujjaval", name: "Ujjaval", role: "Strategy Mastermind", pass: "ujjaval@99", badge: "🧠 Master Mind", color: "#48dbfb", img: "ujjaval.jpeg",
        links: { insta: "ujjaval_mehta_45", whatsapp: "910000000000", twitter: "ujjaval_x" }
    },
    {
        id: "mayank", name: "Mayank", role: "Senior Developer", pass: "mayank@dev", badge: "💻 Code Wizard", color: "#54a0ff", img: "mayank.jpeg",
        links: { insta: "mayank_dev", whatsapp: "910000000000", twitter: "mayank_x" }
    },
    {
        id: "aanand", name: "Aanand", role: "Professional Rider", pass: "aanand@joy", badge: "😄 Rider", color: "#ff9ff3", img: "ANAND.jpeg",
        links: { insta: "mr_anandsingh99", whatsapp: "910000000000", twitter: "anand_x" }
    },
    {
        id: "sumant", name: "Sumant", role: "Medical Specialist", pass: "sumant@fit", badge: "🏋️ Doctor", color: "#00d2d3", img: "sumant.jpeg",
        links: { insta: "its_sumant_018", whatsapp: "910000000000", twitter: "sumant_x" }
    },
    {
        id: "aadi", name: "Aadi", role: "Sharp Mind", pass: "aadi@rock", badge: "🎵 Clever", color: "#ee5a24", img: "aadi.jpeg",
        links: { insta: "trust_no_one_40", whatsapp: "910000000000", twitter: "aadi_x" }
    },
    {
        id: "sujit", name: "Sujitt", role: "brother", pass: "sujit@pro", badge: "<>", color: "#8854d0", img: "sujit.jpeg",
        links: { insta: "rohit_topper", whatsapp: "910000000000", twitter: "rohit_x" }
    },
    {
        id: "abhay", name: "Abhay", role: "World Explorer", pass: "abhay@explore", badge: "🏔️ Explorer", color: "#10ac84", img: "abhay.jpeg",
        links: { insta: "its_abhay_singh_br45", whatsapp: "910000000000", twitter: "rahul_x" }
    },
    {
        id: "ankit", name: "Ankit", role: "Entertainment King", pass: "ankit@lol", badge: "😂 Joker", color: "#fed330", img: "ankit.jpeg",
        links: { insta: "ankit_funny", whatsapp: "910000000000", twitter: "ankit_x" }
    },
    {
        id: "sonu", name: "Sonu", role: "Professional Photographer", pass: "sonu@click", badge: "📸 Shutterbug", color: "#0fb9b1", img: "sonu.jpeg",
        links: { insta: "sonu_singh_br45", whatsapp: "910000000000", twitter: "vikram_x" }
    },
    {
        id: "sandeep", name: "Sandeep", role: "Doctor", pass: "sandeep@night", badge: "🦉 Late Nighter", color: "#a55eea", img: "sandeep.jpeg",
        links: { insta: "amit_night", whatsapp: "910000000000", twitter: "amit_x" }
    },
    {
        id: "prince", name: "Prince", role: "Social Hub", pass: "Prince@hub", badge: "🦋 Connector", color: "#fa8231", img: "prince.jpeg",
        links: { insta: "raj_social", whatsapp: "910000000000", twitter: "raj_x" }
    },
    {
        id: "arjun", name: "Arjun", role: "Public Speaker", pass: "arjun@inspire", badge: "🌟 Inspirer", color: "#26de81", img: "arjun.jpeg",
        links: { insta: "arjun_inspires", whatsapp: "910000000000", twitter: "arjun_x" }
    },
    {
        id: "gimi", name: "gimi", role: "Researcher", pass: "gimi@read", badge: "📚 Pet", color: "#2e86de", img: "gimi.jpeg",
        links: { insta: "karan_books", whatsapp: "910000000000", twitter: "karan_x" }
    },
    {
        id: "saurabh", name: "Saurabh", role: "Master Chef", pass: "saurabh@cook", badge: "🍕 Food Expert", color: "#ff9f43", img: "saurabh.jpeg",
        links: { insta: "saurabh_kitchen", whatsapp: "910000000000", twitter: "saurabh_x" }
    },
    {
        id: "varun", name: "Varun", role: "Fashion Designer", pass: "varun@style", badge: "👗 Stylist", color: "#eb3b5a", img: "varun.jpeg",
        links: { insta: "varun_style", whatsapp: "910000000000", twitter: "varun_x" }
    },
    {
        id: "pankaj", name: "Pankaj", role: "Game Strategist", pass: "pankaj@plan", badge: "♟️ Strategist", color: "#45aaf2", img: "pankaj.jpeg",
        links: { insta: "pankaj_gamer", whatsapp: "910000000000", twitter: "pankaj_x" }
    },
    {
        id: "sunny", name: "Sunny", role: "Speed Runner", pass: "sunny@fast", badge: "⚡ Flash", color: "#2bcbba", img: "sunny.jpeg",
        links: { insta: "sunny_fast", whatsapp: "910000000000", twitter: "sunny_x" }
    }
];
const MEMORY_IMAGES = [
    { url: "bhf1.jpeg", title: "Dashahara ☕ Festival-Victory-Mela-Sweets-Lights-Joy-Tradition", likes: 156 },
    { url: "cf1.jpeg", title: "College 🥳 Campus-Friends-Lectures-Canteen-Exams-Memories-Fun", likes: 234 },
    { url: "sudhir.jpeg", title: "Best Brother 🎉 Lifeline-Trust-Support-Party-Always", likes: 100 },
    { url: "image.png", title: "Quotes ✨ Inspiration-Wisdom-Thoughts-Motivation-Life-Energy", likes: 189 },
    { url: "bhf2.jpeg", title: "Moj-Masti 🎸 Music-Dance-Laughs-Vibes-Crazy-Friends-Chill", likes: 312 },
    { url: "cf2.jpeg", title: "Ring Ceremony 💍 Promise-Love-Family-Tradition-Happiness-Future", likes: 278 },
    { url: "fores1.jpeg", title: "Adhaura Trip 🚗 Drive-Road-Mountains-Music-Journey-Friends", likes: 198 },
    { url: "rithm.jpeg", title: "Best Friend 🎵 Trust-Bond-Loyalty-Brother-Forever-Heart", likes: 267 },
    { url: "bhf3.jpeg", title: "Kaimur Hills 💪 Trekking-Heights-Greenery-Adventure-Nature-Peace", likes: 345 },
    { url: "clf3.jpeg", title: "Study Time 🤝 Library-Notes-Group-Exams-LateNight-Success", likes: 423 },
    { url: "forest2.jpeg", title: "Free Day 🏖️ Relax-Sleep-Movie-Peace-Refresh-Comfort", likes: 387 },
    { url: "party3.jpeg", title: "Farewell 🍛 Goodbye-Hugs-Tears-Speech-Memories-Promise", likes: 142 },
    { url: "clf4.jpeg", title: "Photo Shoot 🍿 Poses-Camera-Style-Smile-Editing-Clicks", likes: 98 },
    { url: "hmt.jpeg", title: "Gym Partners 🏋️‍♂️ Workout-Muscle-Discipline-Health-Fitness", likes: 210 },
    { url: "AARIF.jpeg", title: "Golden Man 🌅 Shine-Success-Aura-Confidence-King", likes: 567 },
    { url: "forest4.jpeg", title: "Friends Gathering 🪔 Unity-Jokes-Celebration-Together-Fun", likes: 432 },
    { url: "clf6.jpeg", title: "Discipline Life 🏫 Rules-Respect-Punctuality-Learning-Growth", likes: 315 },
    { url: "jungle.jpeg", title: "Forest Explore ⛰️ Trees-Silence-Adventure-Oxygen-Nature", likes: 289 },
    { url: "party1var.jpeg", title: "Varanasi 🎮 Ghats-Ganga-Temples-Aarti-Culture-Divine", likes: 176 },
    { url: "party5.jpeg", title: "Night Party ☕🌧️ Music-Rain-Lights-Coffee-Vibes-Mood", likes: 245 },
    { url: "sonu.jpeg", title: "Langotiya yar 🎉 -Support Always", likes: 888 },
    { url: "sandeep.jpeg", title: "Best Brother 🎉 Lifeline-Trust-Support-Party-Always", likes: 88 },
    { url: "ANAND.jpeg", title: "Best Brother 🎉 Time is money / Helth is welth", likes: 988 },
    { url: "abhay.jpeg", title: "Big Brother 🎉 Lifeline-Trust-Support-Party-Always", likes: 908 },
    { url: "sujit.jpeg", title: "Best Brother 🎉 Lifeline-Trust-Support-Party-Always", likes: 778 },
    { url: "sudhir-photo.jpeg", title: "Best Brother 🎉 Lifeline-Trust-Support-Party-Always", likes: 1238 },
    { url: "prince.jpeg", title: "Best Brother 🎉 Lifeline-Trust-Support-Party-Always", likes: 988 },
    { url: "gimi.jpeg", title: "Best Brother 🎉 Lifeline-Trust-Support-Party-Always", likes: 100000}
];


const CHAT_LOGIC = {
    "ritik": [
        { type: "sudhir", text: "Hii Ritik! 👋" },
        { type: "sudhir", text: "Aur batao bhai kaise ho, 2025 toh bohot sahi raha!" },
        { type: "reply" },
        { type: "sudhir", text: "Sach mein! Ye photo dekho 😂" },
        { type: "flashback", img: "ritik.jpeg", cap: "Epic Moment 2025! 🔥" },
        { type: "sudhir", text: "2026 mein kahi ghumne chalenge pakka?" },
        { type: "reply" },
        { type: "sudhir", text: "Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 🎉" },
        { type: "sudhir", text: "Ji pakka! Happy New Year 2026 bhabhi aur poore parivaar ko 💐" },
        { type: "reply" },
        { type: "sudhir", text: "Done! Happy New Year 2026 bhai 💙" },
        { type: "sudhir", text: "Sone ja raha hu bhaiyo bye bye good night take care" },
        { type: "sudhir", text: "i love you bro" }
    ],
    "himanshu": [
        { type: "sudhir", text: "Hii Himanshu! 👋" },
        { type: "sudhir", text: "Aur batao bhai kaise ho, 2025 toh bohot sahi raha!" },
        { type: "reply" },
        { type: "sudhir", text: "Sach mein! Ye photo dekh 😂" },
        { type: "flashback", img: "himanshu.jpeg", cap: "Epic Moment 2025! 🔥" },
        { type: "sudhir", text: "2026 mein kahi ghumne chalenge pakka?" },
        { type: "reply" },
        { type: "sudhir", text: "Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 🎉" },
        { type: "sudhir", text: "Ji pakka! Happy New Year 2026 bhabhi aur poore parivaar ko 💐" },
        { type: "reply" },
        { type: "sudhir", text: "Done! Happy New Year 2026 bhai 💙" },
        { type: "sudhir", text: "Sone ja raha hu bhaiyo bye bye good night take care" },
        { type: "sudhir", text: "i love you bro" }
    ],
    "aarif": [
        { type: "sudhir", text: "Hii Aarif! 👋" },
        { type: "sudhir", text: "Aur batao bhai kaise ho, 2025 toh bohot sahi raha!" },
        { type: "reply" },
        { type: "sudhir", text: "Sach mein! Ye photo dekh 😂" },
        { type: "flashback", img: "aarif.jpeg", cap: "Epic Moment 2025! 🔥" },
        { type: "sudhir", text: "2026 mein kahi ghumne chalenge pakka?" },
        { type: "reply" },
        { type: "sudhir", text: "Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 🎉" },
        { type: "sudhir", text: "Ji pakka! Happy New Year 2026 bhabhi aur poore parivaar ko 💐" },
        { type: "reply" },
        { type: "sudhir", text: "Done! Happy New Year 2026 bhai 💙" },
        { type: "sudhir", text: "Sone ja raha hu bhaiyo bye bye good night take care" },
        { type: "sudhir", text: "i love you bro" }
    ],
    "ujjaval": [
        { type: "sudhir", text: "Hii Ujjaval! 👋" },
        { type: "sudhir", text: "Aur batao bhai kaise ho, 2025 toh bohot sahi raha!" },
        { type: "reply" },
        { type: "sudhir", text: "Sach mein! Ye photo dekh 😂" },
        { type: "flashback", img: "ujjaval.jpeg", cap: "Epic Moment 2025! 🔥" },
        { type: "sudhir", text: "2026 mein kahi ghumne chalenge pakka?" },
        { type: "reply" },
        { type: "sudhir", text: "Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 🎉" },
        { type: "sudhir", text: "Ji pakka! Happy New Year 2026 bhabhi aur poore parivaar ko 💐" },
        { type: "reply" },
        { type: "sudhir", text: "Done! Happy New Year 2026 bhai 💙" },
        { type: "sudhir", text: "Sone ja raha hu bhaiyo bye bye good night take care" },
        { type: "sudhir", text: "i love you bro" }
    ],
    "mayank": [
        { type: "sudhir", text: "Hii Mayank! 👋" },
        { type: "sudhir", text: "Aur batao bhai kaise ho, 2025 toh bohot sahi raha!" },
        { type: "reply" },
        { type: "sudhir", text: "Sach mein! Ye photo dekh 😂" },
        { type: "flashback", img: "mayank.jpeg", cap: "Epic Moment 2025! 🔥" },
        { type: "sudhir", text: "2026 mein kahi ghumne chalenge pakka?" },
        { type: "reply" },
        { type: "sudhir", text: "Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 🎉" },
        { type: "sudhir", text: "Ji pakka! Happy New Year 2026 bhabhi aur poore parivaar ko 💐" },
        { type: "reply" },
        { type: "sudhir", text: "Done! Happy New Year 2026 bhai 💙" },
        { type: "sudhir", text: "Sone ja raha hu bhaiyo bye bye good night take care" },
        { type: "sudhir", text: "i love you bro" }
    ],
    "aanand": [
        { type: "sudhir", text: "Hii Aanand! 👋" },
        { type: "sudhir", text: "Aur batao bhai kaise ho, 2025 toh bohot sahi raha!" },
        { type: "reply" },
        { type: "sudhir", text: "Sach mein! Ye photo dekh 😂" },
        { type: "flashback", img: "aanand.jpeg", cap: "Epic Moment 2025! 🔥" },
        { type: "reply" },
        { type: "sudhir", text: "Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 🎉" },
        { type: "sudhir", text: "Ji pakka! Happy New Year 2026 bhabhi aur poore parivaar ko 💐" },
        { type: "sudhir", text: "2026 mein kahi ghumne chalenge pakka?" },
        { type: "reply" },
        { type: "sudhir", text: "Done! Happy New Year 2026 bhai 💙" },
        { type: "sudhir", text: "Sone ja raha hu bhaiyo bye bye good night take care" },
        { type: "sudhir", text: "i love you bro" }
    ],
    "sumant": [
        { type: "sudhir", text: "Hii Sumant! 👋" },
        { type: "sudhir", text: "Aur batao bhai kaise ho, 2025 toh bohot sahi raha!" },
        { type: "reply" },
        { type: "sudhir", text: "Sach mein! Ye photo dekh 😂" },
        { type: "flashback", img: "sumant.jpeg", cap: "Epic Moment 2025! 🔥" },
        { type: "sudhir", text: "2026 mein kahi ghumne chalenge pakka?" },
        { type: "reply" },
        { type: "sudhir", text: "Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 🎉" },
        { type: "sudhir", text: "Ji pakka! Happy New Year 2026 bhabhi aur poore parivaar ko 💐" },
        { type: "reply" },
        { type: "sudhir", text: "Done! Happy New Year 2026 bhai 💙" },
        { type: "sudhir", text: "Sone ja raha hu bhaiyo bye bye good night take care" },
        { type: "sudhir", text: "i love you bro" }
    ],
    "aadi": [
        { type: "sudhir", text: "Hii Aadi! 👋" },
        { type: "sudhir", text: "Aur batao bhai kaise ho, 2025 toh bohot sahi raha!" },
        { type: "reply" },
        { type: "sudhir", text: "Sach mein! Ye photo dekh 😂" },
        { type: "flashback", img: "aadi.jpeg", cap: "Epic Moment 2025! 🔥" },
        { type: "sudhir", text: "2026 mein kahi ghumne chalenge pakka?" },
        { type: "reply" },
        { type: "sudhir", text: "Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 🎉" },
        { type: "sudhir", text: "Ji pakka! Happy New Year 2026 bhabhi aur poore parivaar ko 💐" },
        { type: "reply" },
        { type: "sudhir", text: "Done! Happy New Year 2026 bhai 💙" },
        { type: "sudhir", text: "Sone ja raha hu bhaiyo bye bye good night take care" },
        { type: "sudhir", text: "i love you bro" }
    ],
    "rohit": [
        { type: "sudhir", text: "Hii Rohit! 👋" },
        { type: "sudhir", text: "Aur batao bhai kaise ho, 2025 toh bohot sahi raha!" },
        { type: "reply" },
        { type: "sudhir", text: "Sach mein! Ye photo dekh 😂" },
        { type: "flashback", img: "rohit.jpeg", cap: "Epic Moment 2025! 🔥" },
        { type: "sudhir", text: "2026 mein kahi ghumne chalenge pakka?" },
        { type: "reply" },
        { type: "sudhir", text: "Done! Happy New Year 2026 bhai 💙" },
        { type: "sudhir", text: "Sone ja raha hu bhaiyo bye bye good night take care" },
        { type: "sudhir", text: "i love you bro" }
    ],
    "ankit": [
        { type: "sudhir", text: "Namaste Bhabhi! 🙏" },
        { type: "sudhir", text: "Aur batayiye sab ghar par kaise hain? 2025 toh bohot achha bita!" },
        { type: "reply" },
        { type: "sudhir", text: "Bilkul! ❤️" },
        { type: "flashback", img: "family.jpeg", cap: " Memories 2025! ✨" },
        { type: "sudhir", text: "thik hain fir moj msti kariye" },
        { type: "reply" },
        { type: "sudhir", text: "party dijiyega na,study kaisi chal rahin hain" },
        { type: "reply" },
        { type: "sudhir", text: "Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 🎉" },
        { type: "sudhir", text: "Ji pakka! Happy New Year 2026 bhabhi aur aapke poore family member ko 💐" },
        { type: "sudhir", text: "Sabko meri taraf se happy new year boliyega, Good Night!" }
    ],
    "default": [
        { type: "sudhir", text: "Hey Legend! 🌟" },
        { type: "reply" },
        { type: "sudhir", text: "Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 Happy New Year 2026! 🎆 🎉" },
        { type: "reply" },
        { type: "sudhir", text: "bye bye take care👋" }

    ]
};

// ==================== GLOBAL VARIABLES ====================
let stepIndex = 0;
let waitingForUser = false;
let currentFlow = [];
let reactionTarget = null;
let secretCode = '';
let lightboxLikes = 0;
let gameScore = 0;
let gameInterval = null;

// ==================== INITIALIZATION ====================
window.onload = () => {
    setTimeout(() => document.getElementById('loader').classList.add('hidden'), 1800);
    initSquad();
    initGallery();
    initFloatingHearts();
    setInterval(updateCountdown, 1000);
    setInterval(createPopups, 5500);
    initScrollReveal();
    initEasterEgg();
    initParallax();
};

// ==================== FLOATING HEARTS ====================
function initFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    const emojis = ['❤️', '💖', '✨', '🌟', '💫', '🎉'];

    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 10 + 's';
            heart.style.animationDuration = (15 + Math.random() * 10) + 's';
            heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            container.appendChild(heart);
        }, i * 800);
    }
}

// ==================== PARALLAX ====================
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const bg = document.getElementById('hero-bg');
        if (bg && scrolled < window.innerHeight) {
            bg.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });
}

// ==================== SQUAD ====================

function initSquad() {
    const grid = document.getElementById('squad-grid');
    if (!grid) return;

    SQUAD_MEMBERS.forEach((m, index) => {
        const card = document.createElement('div');
        card.className = 'squad-card glass p-6 text-center cursor-pointer reveal-scale pt-10';
        card.style.animationDelay = `${index * 0.05}s`;

        const imageUrl = m.img ? m.img : `https://i.pravatar.cc/150?u=${m.id}`;

        // Yahan links ko dynamic banaya gaya hai
        card.innerHTML = `
            <div class="achievement-badge">${m.badge}</div>
            <img src="${imageUrl}" alt="${m.name}" class="w-18 h-18 rounded-full mx-auto mb-5 border-3 transition-transform duration-500 hover:scale-110 object-cover" style="border-color: ${m.color}; width: 72px; height: 72px;" onerror="this.src='https://i.pravatar.cc/150?u=${m.id}'">
            <h3 class="text-lg font-bold mb-1" style="color: ${m.color}">${m.name}</h3>
            <p class="text-[11px] uppercase mb-5 tracking-wider text-gray-400">${m.role}</p>
            
            <div class="flex justify-center gap-3">
                <a href="https://instagram.com/${m.links.insta}" target="_blank" class="social-icon-card instagram" onclick="event.stopPropagation()">
                    <i class="fab fa-instagram text-sm"></i>
                </a>
                
                <a href="https://api.whatsapp.com/send?phone=${m.links.phone}&text=Hi ${m.name}, Happy New Year 2026!" target="_blank" class="social-icon-card whatsapp" onclick="event.stopPropagation()">
                    <i class="fab fa-whatsapp text-sm"></i>
                </a>
                
                <a href="https://twitter.com/${m.links.twitter}" target="_blank" class="social-icon-card twitter" onclick="event.stopPropagation()">
                    <i class="fab fa-twitter text-sm"></i>
                </a>
            </div>`;

        card.onclick = () => showAchievements(m.id);
        grid.appendChild(card);
    });
}




function showAchievements(id) {
    const member = SQUAD_MEMBERS.find(m => m.id === id);
    if (member && typeof confetti !== 'undefined') {
        confetti({
            particleCount: 80,
            spread: 70,
            colors: [member.color, '#fff', '#feca57', '#e94560'],
            origin: { y: 0.7 }
        });
    }
}

// // ==================== GALLERY ====================
// function initGallery() {
//     const tracks = [document.getElementById('gallery-track-1'), document.getElementById('gallery-track-2')];
//     tracks.forEach((track) => {
//         [...MEMORY_IMAGES, ...MEMORY_IMAGES, ...MEMORY_IMAGES].forEach(img => {
//             const item = document.createElement('div');
//             item.className = "gallery-item w-72 h-96 mx-4 flex-shrink-0";
//             item.innerHTML = `
//                 <img src="${img.url}?auto=format&fit=crop&w=500" alt="${img.title}" loading="lazy">
//                 <div class="share-btn" onclick="event.stopPropagation(); shareMemory('${img.title}')"><i class="fas fa-share-alt"></i> Share</div>
//                 <div class="like-counter" onclick="event.stopPropagation(); likeMemory(this)"><i class="fas fa-heart text-red-400"></i> <span>${img.likes}</span></div>
//                 <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-500 flex items-end p-6">
//                     <h4 class="text-white font-bold text-lg">${img.title}</h4>
//                 </div>`;
//             item.onclick = () => openLightbox(img.url, img.title, 'image');
//             track.appendChild(item);
//         });
//     });
// }



// ==================== GALLERY (3 Lines Version) ====================
function initGallery() {
    // 1. Teeno tracks ko select kiya
    const track1 = document.getElementById('gallery-track-1');
    const track2 = document.getElementById('gallery-track-2');
    const track3 = document.getElementById('gallery-track-3');

    const tracks = [track1, track2, track3];

    // 2. Agar koi track miss hai toh error na aaye
    if (!track1 || !track2 || !track3) return;

    // 3. Images ko 3 hisson mein baantna (Optional but looks better)
    const size = Math.ceil(MEMORY_IMAGES.length / 3);
    const rows = [
        MEMORY_IMAGES.slice(0, size),           // First 1/3 images
        MEMORY_IMAGES.slice(size, size * 2),     // Middle 1/3 images
        MEMORY_IMAGES.slice(size * 2)            // Last 1/3 images
    ];

    tracks.forEach((track, index) => {
        // Har row ki images ko 3 baar repeat kar rahe hain taaki animation smooth chale
        [...rows[index], ...rows[index], ...rows[index]].forEach(img => {
            const item = document.createElement('div');
            // w-72 h-96 ko thoda adjust kar sakte ho agar screen par jagah kam lage
            item.className = "gallery-item w-72 h-80 mx-4 flex-shrink-0";
            item.innerHTML = `
                <img src="${img.url}?auto=format&fit=crop&w=500" alt="${img.title}" loading="lazy">
                <div class="share-btn" onclick="event.stopPropagation(); shareMemory('${img.title}')"><i class="fas fa-share-alt"></i> Share</div>
                <div class="like-counter" onclick="event.stopPropagation(); likeMemory(this)"><i class="fas fa-heart text-red-400"></i> <span>${img.likes}</span></div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <h4 class="text-white font-bold text-lg">${img.title}</h4>
                </div>`;
            item.onclick = () => openLightbox(img.url, img.title, 'image');
            track.appendChild(item);
        });
    });
}



// ==================== LIGHTBOX ====================
function openLightbox(url, title, type) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const video = document.getElementById('lightbox-video');

    if (type === 'video') {
        img.style.display = 'none';
        video.style.display = 'block';
        video.src = url;
    } else {
        video.style.display = 'none';
        img.style.display = 'block';
        img.src = url;
    }

    document.getElementById('lightbox-cap').innerText = title;
    lightboxLikes = Math.floor(Math.random() * 300) + 100;
    document.getElementById('lightbox-likes').innerText = lightboxLikes;
    lb.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
    if (e.target.id === 'lightbox' || e.target.tagName === 'BUTTON') {
        document.getElementById('lightbox').style.display = 'none';
        document.getElementById('lightbox-video').pause();
        document.body.style.overflow = 'auto';
    }
}

function shareLightbox() {
    navigator.clipboard.writeText("Check out this memory from Sudhir's 2025 Recap! " + window.location.href);
    alert('Link copied! 📋');
}

function likeLightbox() {
    lightboxLikes++;
    document.getElementById('lightbox-likes').innerText = lightboxLikes;
    document.getElementById('lightbox-like-btn').querySelector('i').className = 'fas fa-heart mr-2 text-red-400';
    confetti({ particleCount: 20, spread: 30, origin: { y: 0.3 }, colors: ['#e94560', '#ff6b6b'] });
}

function shareMemory(title) {
    navigator.clipboard.writeText(`"${title}" from Sudhir's 2025 Recap!`);
    alert('Link copied! 📋');
}

function likeMemory(el) {
    const span = el.querySelector('span');
    span.innerText = parseInt(span.innerText) + 1;
    el.querySelector('i').style.transform = 'scale(1.3)';
    setTimeout(() => el.querySelector('i').style.transform = 'scale(1)', 200);
}

// ==================== SCROLL REVEAL ====================
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el));
}

// ==================== EASTER EGG ====================
function initEasterEgg() {
    document.addEventListener('keypress', (e) => {
        secretCode += e.key;
        if (secretCode.includes('2026')) {
            secretCode = '';
            document.getElementById('secret-animation').classList.add('active');
            document.body.style.overflow = 'hidden';
            cheers();
        }
        if (secretCode.length > 10) secretCode = secretCode.slice(-10);
    });
}

function closeSecretAnimation() {
    document.getElementById('secret-animation').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ==================== LOGIN & CHAT ====================
function handleLogin() {
    const user = document.getElementById('login-name').value.toLowerCase();
    const pass = document.getElementById('login-pass').value;
    const friend = SQUAD_MEMBERS.find(f => f.id === user && f.pass === pass);


    if (friend) {
        document.getElementById('login-overlay').style.display = 'none';
        currentFlow = CHAT_LOGIC[user] || CHAT_LOGIC["default"];

        // Header mein Sudhir dikhane ke liye
        document.getElementById('chat-title').innerText = "Sudhir";

        // Image path ko fix kiya (quotes sahi kiye)
        document.getElementById('chat-avatar').src = "sudhir-photo.jpeg";

        document.getElementById('chat-modal').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        document.getElementById('chat-window').innerHTML = '';
        stepIndex = 0;
        processFlow();
    } else {
        alert("Wrong credentials! Try 'sudhir' / 'sudhir@2025'");
    }
}



async function processFlow() {
    if (stepIndex >= currentFlow.length) return;
    const current = currentFlow[stepIndex];

    if (current.type === "sudhir") {
        showTyping(true);
        await new Promise(r => setTimeout(r, 1400));
        showTyping(false);
        appendMsg("Sudhir", current.text, "bubble-sudhir");
        stepIndex++;
        processFlow();
    } else if (current.type === "reply") {
        waitingForUser = true;
    } else if (current.type === "flashback") {
        appendFlashback(current.img, current.cap);
        stepIndex++;
        setTimeout(processFlow, 900);
    }
}

function handleSendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text || !waitingForUser) return;
    appendMsg("You", text, "bubble-friend");
    input.value = "";
    waitingForUser = false;
    stepIndex++;
    processFlow();
}

function appendMsg(sender, text, cls) {
    const win = document.getElementById('chat-window');
    const id = 'msg-' + Date.now();
    const bubble = document.createElement('div');
    bubble.id = id;
    bubble.className = `chat-bubble ${cls}`;
    bubble.innerHTML = `<span class="text-[10px] block opacity-60 mb-2 font-bold uppercase tracking-wider">${sender}</span>${text}`;
    if (cls === 'bubble-sudhir') bubble.onclick = () => { reactionTarget = id; toggleEmojiTray(true); };
    win.appendChild(bubble);
    win.scrollTo({ top: win.scrollHeight, behavior: 'smooth' });
}

function toggleEmojiTray(show) {
    const tray = document.getElementById('emoji-tray');
    if (show === undefined) tray.classList.toggle('hidden');
    else if (show) tray.classList.remove('hidden');
    else tray.classList.add('hidden');
}

function reactToMessage(emoji) {
    if (!reactionTarget) return;
    const target = document.getElementById(reactionTarget);
    let badge = target.querySelector('.reaction-badge');
    if (!badge) {
        badge = document.createElement('span');
        badge.className = 'reaction-badge';
        target.appendChild(badge);
    }
    badge.innerText = emoji;
    toggleEmojiTray(false);
    reactionTarget = null;
}

function appendFlashback(img, cap) {
    const win = document.getElementById('chat-window');
    const div = document.createElement('div');
    div.className = "glass p-4 my-4 self-center w-[90%]";
    div.style.animation = 'bubblePop 0.5s ease';
    div.innerHTML = `<img src="${img}" class="rounded-xl w-full h-52 object-cover"><p class="text-center text-sm mt-4 font-bold text-red-300">${cap}</p>`;
    win.appendChild(div);
    win.scrollTo({ top: win.scrollHeight, behavior: 'smooth' });
}

function showTyping(show) {
    document.getElementById('typing-status-box').style.opacity = show ? "1" : "0";
}

function closeChat() {
    document.getElementById('chat-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// ==================== POPUPS ====================
function createPopups() {
    const div = document.createElement('div');
    div.className = 'float-popup';
    div.style.left = Math.random() * 70 + 15 + '%';
    div.innerText = POPUP_TEXTS[Math.floor(Math.random() * POPUP_TEXTS.length)];
    document.getElementById('popup-container').appendChild(div);
    setTimeout(() => div.remove(), 7000);
}


// ==================== COUNTDOWN ====================
function updateCountdown() {
    const target = new Date("Jan 2, 2027 00:00:00").getTime();
    const diff = target - Date.now();
    if (diff <= 0) {
        cheers();
        return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    document.getElementById('countdown').innerHTML = `
        <div class="countdown-item text-center"><span class="text-3xl md:text-5xl block font-bold text-white">${d}</span><p class="text-[11px] text-red-400 mt-2 font-semibold">DAYS</p></div>
        <div class="countdown-item text-center"><span class="text-3xl md:text-5xl block font-bold text-white">${h}</span><p class="text-[11px] text-red-400 mt-2 font-semibold">HOURS</p></div>
        <div class="countdown-item text-center"><span class="text-3xl md:text-5xl block font-bold text-white">${m}</span><p class="text-[11px] text-red-400 mt-2 font-semibold">MINS</p></div>
        <div class="countdown-item text-center"><span class="text-3xl md:text-5xl block font-bold gradient-text">${s}</span><p class="text-[11px] text-red-400 mt-2 font-semibold">SECS</p></div>
    `;
}

// ==================== MUSIC ====================
function toggleMusic() {
    const m = document.getElementById('bg-music');
    const i = document.getElementById('music-icon');
    if (m.paused) {
        m.play();
        i.className = "fas fa-pause text-white text-xl";
    } else {
        m.pause();
        i.className = "fas fa-music text-white text-xl";
    }
}

// ==================== CELEBRATION ====================

const CELEBRATION_MUSIC = "happy.mp3";

// Celebration sound object (global)
let celebrationAudio = null;

function cheers() {
    const colors = ['#e94560', '#ff6b6b', '#feca57', '#fff', '#48dbfb'];

    if (typeof confetti !== 'undefined') {
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6, x: 0.3 }, colors: colors });
        setTimeout(() => confetti({ particleCount: 150, spread: 80, origin: { y: 0.6, x: 0.7 }, colors: colors }), 200);
        setTimeout(() => confetti({ particleCount: 100, spread: 100, origin: { y: 0.5 }, colors: colors }), 400);
    }

    playCelebrationSound();
}

function playCelebrationSound() {
    try {
        // Pehle se playing ho toh stop karo
        if (celebrationAudio) {
            celebrationAudio.pause();
            celebrationAudio.currentTime = 0;
        }

        // Custom music file play karo
        celebrationAudio = new Audio(CELEBRATION_MUSIC);
        celebrationAudio.volume = 0.7; // Volume (0.0 to 1.0)
        celebrationAudio.play().catch(err => {
            console.log('Custom audio failed, playing default tune');
            playDefaultTune(); // Agar file nahi mili toh default tune bajao
        });

        // 10 seconds baad automatically stop (optional - remove if you want full song)
        setTimeout(() => {
            if (celebrationAudio) {
                celebrationAudio.pause();
                celebrationAudio.currentTime = 0;
            }
        }, 10000);

    } catch (e) {
        console.log('Audio error, playing default tune');
        playDefaultTune();
    }
}

// Default tune (backup - agar custom file na mile)
function playDefaultTune() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        const playTone = (freq, startTime, duration) => {
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.frequency.value = freq;
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime + startTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + startTime + duration);

            oscillator.start(audioCtx.currentTime + startTime);
            oscillator.stop(audioCtx.currentTime + startTime + duration);
        };

        // Celebration melody - ascending happy notes
        playTone(523.25, 0, 0.15);    // C5
        playTone(659.25, 0.1, 0.15);  // E5
        playTone(783.99, 0.2, 0.15);  // G5
        playTone(1046.50, 0.3, 0.3);  // C6
        playTone(783.99, 0.5, 0.15);  // G5
        playTone(1046.50, 0.6, 0.4);  // C6 (longer)

    } catch (e) {
        console.log('Audio not supported');
    }
}

// Stop celebration music function (optional - use karna ho toh)
function stopCelebrationMusic() {
    if (celebrationAudio) {
        celebrationAudio.pause();
        celebrationAudio.currentTime = 0;
    }
}

// ==================== GAME ====================
function openGame() {
    document.getElementById('mini-game').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    initGame();
}

function closeGame() {
    document.getElementById('mini-game').style.display = 'none';
    document.body.style.overflow = 'auto';
    if (gameInterval) clearInterval(gameInterval);
}

function initGame() {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    gameScore = 0;
    document.getElementById('game-score').innerText = '0';

    let player = { x: 170, y: 450, w: 70, h: 22 };
    let items = [];
    const emojis = ['📸', '🎉', '🎂', '🎸', '🏝️', '❤️', '🔥', '🌟', '💎', '🎊', '🎁', '🥂'];

    if (gameInterval) clearInterval(gameInterval);

    canvas.onmousemove = (e) => {
        player.x = e.clientX - canvas.getBoundingClientRect().left - player.w / 2;
    };
    canvas.ontouchmove = (e) => {
        e.preventDefault();
        player.x = e.touches[0].clientX - canvas.getBoundingClientRect().left - player.w / 2;
    };

    gameInterval = setInterval(() => {
        // Background
        const bgGrad = ctx.createLinearGradient(0, 0, 0, 500);
        bgGrad.addColorStop(0, '#1a1a2e');
        bgGrad.addColorStop(1, '#16213e');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, 400, 500);

        if (Math.random() > 0.95) {
            items.push({
                x: Math.random() * 360,
                y: -30,
                emoji: emojis[Math.floor(Math.random() * emojis.length)]
            });
        }

        for (let i = items.length - 1; i >= 0; i--) {
            items[i].y += 5;
            ctx.font = '36px Arial';
            ctx.fillText(items[i].emoji, items[i].x, items[i].y);

            if (items[i].y > player.y - 20 && items[i].y < player.y + player.h && items[i].x > player.x - 25 && items[i].x < player.x + player.w + 25) {
                gameScore += 10;
                document.getElementById('game-score').innerText = gameScore;
                items.splice(i, 1);
                continue;
            }
            if (items[i].y > 520) items.splice(i, 1);
        }

        // Player paddle with gradient
        const gradient = ctx.createLinearGradient(player.x, player.y, player.x + player.w, player.y);
        gradient.addColorStop(0, '#e94560');
        gradient.addColorStop(0.5, '#ff6b6b');
        gradient.addColorStop(1, '#feca57');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(player.x, player.y, player.w, player.h, 10);
        ctx.fill();

        // Score display on canvas
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 16px Poppins';
        ctx.fillText('Score: ' + gameScore, 20, 30);
    }, 28);
}

// ==================== COMMENTS ====================
function addComment() {
    const input = document.getElementById('comment-input');
    const text = input.value.trim();
    if (!text) return;

    const box = document.querySelector('.comment-box');
    const item = document.createElement('div');
    item.className = 'comment-item';
    item.style.animation = 'bubblePop 0.4s ease';
    item.innerHTML = `<img src="https://i.pravatar.cc/100?u=guest${Date.now()}" class="comment-avatar"><div><p class="font-bold text-lg">You <span class="text-gray-500 text-xs ml-2 font-normal">Just now</span></p><p class="text-gray-400 text-sm mt-2">${text}</p></div>`;
    box.insertBefore(item, box.lastElementChild);
    input.value = '';
}

// ==================== SCROLL TRIGGERS ====================
window.addEventListener('scroll', () => {
    // Stats Animation
    document.querySelectorAll('.stat-progress').forEach(s => {
        if (s.getBoundingClientRect().top < window.innerHeight) {
            s.style.width = s.getAttribute('data-width');
        }
    });

    // Final Wish Animation
    const fw = document.getElementById('final-wish');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 400) {
        if (fw.style.opacity === "0" || !fw.style.opacity) {
            fw.style.opacity = "1";
            fw.style.transform = "scale(1)";
            cheers();
        }
    }
});

// Enter key for chat
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('chat-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSendMessage();
    });
});
