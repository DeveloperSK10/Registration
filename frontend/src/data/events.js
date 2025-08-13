import paperImg from '../data/paper.jpg';
import debugImg from '../data/debug.jpg';
import webImg from '../data/web.jpg';
import quizImg from '../data/quiz.jpg';
import connectImg from '../data/conn.jpg';
import memeImg from '../data/meme.jpg';
import expoImg from '../data/code.jpg';

export const events = [
  {
    id: 1,
    title: "Code Surgeon (Debugging)",
    type: "Off Stage",
    teamSize: "1 Member",
    time: "1 hr 15 mins",
    image: debugImg,
    rules: [
      "Solo participation only",
      "3 Rounds: Quick Code Quiz (20 mins), Fix the Glitch (20 mins), Logic Blaster (25 mins)",
      "Languages: C, C++, Java, Python",
      "No mobile/smart devices allowed",
      "Any malpractice will result in disqualification"
    ]
  },
  {
    id: 2,
    title: "Design Pulse (Web Design)",
    type: "Off Stage",
    teamSize: "Max 2 Members",
    time: "1 hr 15 mins",
    image: webImg,
    rules: [
      "Round 1: Code Crack - MCQs (20 mins)",
      "Round 2: Web Wave - Create a website based on theme & images provided (50 mins)",
      "Technologies: HTML, CSS, JavaScript",
      "Judging: Creativity, Responsiveness, Uniqueness, Functionality"
    ]
  },
  {
    id: 3,
    title: "Tech Talk Forum (Paper Presentation)",
    type: "On Stage come Off Stage",
    teamSize: "Max 2 Members",
    time: "4 mins presentation + 2 mins Q&A",
    image: paperImg,
    rules: [
      "Topics: RPA, NLP, Generative AI, Ethical Hacking, Cloud Computing, etc.",
      "Submit papers to: mindmeshitsymposium@gmail.com",
      "Judging: Delivery, Communication, Creativity, Q&A",
      "Last Date for Submission: 28.08.2025"
    ]
  },
  {
    id: 4,
    title: "InovaTexpo (Project Expo)",
    type: "On Stage",
    teamSize: "Max 2 Members",
    time: "5 mins setup + 5 mins demo/Q&A",
    image: expoImg,
    rules: [
      "Original projects only - plagiarism will lead to disqualification",
      "Topics: Software, IoT, Web/Mobile Apps, AI/ML/DL, AR/VR, Cybersecurity, Blockchain",
      "Bring your own hardware/laptops",
      "Judging: Innovation, Complexity, Implementation, Communication"
    ]
  },
  {
    id: 5,
    title: "Knowledge Knockout (Quiz)",
    type: "On Stage",
    teamSize: "2 Members",
    time: "Multiple Rounds",
    image: quizImg,
    rules: [
      "3 Rounds: Battle of Brains, Ctrl+Alt+Compute, Spin the Wheel",
      "Topics: CS, Programming, IT Current Affairs, Algorithms, Debugging, Aptitude",
      "Tie-breakers may be used",
      "No unfair means allowed"
    ]
  },
  {
    id: 6,
    title: "Brain Links (Connection)",
    type: "On Stage",
    teamSize: "2 Members",
    time: "Multiple Rounds",
    image: connectImg,
    rules: [
      "3 Rounds: Think Tank, Decode and Connect, Clue Grid",
      "Identify correct logos, connect images, memorize & recall logos",
      "Strict time limits per question",
      "No electronic devices allowed"
    ]
  },
  {
    id: 7,
    title: "Pixel Roast (Meme Creation)",
    type: "Off Stage",
    teamSize: "1 Member",
    time: "45 mins",
    image: memeImg,
    rules: [
      "Original memes only, respectful & appropriate content",
      "No political/religious/offensive themes",
      "Tools: Picsart (mobile) or Photoshop (laptop)",
      "Format: JPG, original files also submitted",
      "Judging: Relevance, Creativity, Humor, Clarity"
    ]
  }
];
