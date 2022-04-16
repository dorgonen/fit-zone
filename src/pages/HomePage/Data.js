import Review from "../../components/Review/Review";

export const homeObjOne = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  // topLine: 'Exclusive Access',
  headline: 'התאמה מושלמת',
  description:
    'אצלנו תוכלו לבצע התאמת אופניים מקצועית לרוכב בצורה מושלמת, ואנחנו נגנוב לכם את הכסף בקלי קלות.',
  buttonLabel: 'לתיאום פגישה',
  imgStart: '',
  img: 'images/main-pic.png',
  alt: 'Credit Card'
};

export const homeObjTwo = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  // topLine: 'מקצועיות היא שם המשחק',
  headline: 'האופניים זקוקות לתיקון?',
  description:
    'אצלנו תמצאו סדנאת תיקונים המופעלת על ידי מכונאים בעלי עשרות שנות ניסיון. נסו אותנו ונגנוב לכם את הכסף ללא פשרות.',
  buttonLabel: 'למידע נוסף',
  imgStart: '',
  img: 'images/bike-fix-cartoon.png',
  alt: 'Repaire'
};

export const homeObjThree = {
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  // topLine: 'EASY SETUP',
  headline: 'רוצים לרכב יחד?',
  description:
    "אנו מפעילים חוגי רכיבה אשר בהם נלווה אתכם מסיבוב הגלגל הראשון ועד שובכם הביתה. בין אם תרצו ובין אם לא נגנוב לכם את הכסף עוד לפני שתשימו לב. רק היום רק מחר ורק כל החודש רק במחסני חשמל.",
  buttonLabel: 'התחילו לרכב',
  imgStart: 'start',
  img: 'images/ride-safe-cartoon.png',
  alt: 'Ride'
};

export const sliderItems = [
  {
    key: "1",
    renderItem:
      () => {
        return <Review text="שירות מצויין ומוצר מהמם. תודה רבה לאורן גונן שפשוטו כמשמעו גנב לנו את כל הכסף. תודה" author="ישראל ישראלי" stars={4.5}></Review>
      }
  },
  {
    key: "2",
    renderItem:
      () => {
        return <Review text="ביצעתי התאמת אופניים בסטודיו המקצועי ויצאתי חסר מילים. תודה על מי שאתם ומה שאתם ואיך שאתם וכמה שאתם ולמה שאתם ומתי שאתם ואיך שאתם וכיצד שאתם ומתי שאתם ולמה שאתם. תודה" author="שאול שאולי" stars={5}></Review>
      }
  }
];