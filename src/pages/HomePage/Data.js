import Review from "../../components/Review/Review";

export const homeObjOne = {
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  // topLine: 'Exclusive Access',
  headlineUpper: "שפרו את",
  headlineMiddle: ["הנוחות", "היעילות", "הביצועים", "ההנאה"],
  headlineFooter: "ברכיבה שלכם",
  buttonLabel: "קראו עוד",
  imgStart: "",
  img: "images/main-pic-min.png",
  alt: "Credit Card",
  route: "/fitting",
};

export const homeObjTwo = {
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  // topLine: 'מקצועיות היא שם המשחק',
  headline: "סדנאת תיקונים",
  description:
    "אצלנו תמצאו סדנאת תיקונים המופעלת על ידי מכונאים בעלי עשרות שנות ניסיון.",
  buttonLabel: "למידע נוסף",
  imgStart: "",
  img: "images/chain-cartoon-min.png",
  alt: "Repaire",
  route: "/repairing",

};

export const homeObjThree = {
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  // topLine: 'EASY SETUP',
  headline: "חוגי רכיבה",
  description:
    "אנו מפעילים חוגי רכיבה אשר בהם נלווה אתכם מסיבוב הגלגל הראשון ועד שובכם הביתה.",
  buttonLabel: "התחילו לרכב",
  imgStart: "start",
  img: "images/chair-cartoon-min.png",
  alt: "Ride",
  route: "/lessons",
};

export const homeObjFour = {
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  // topLine: 'EASY SETUP',
  headline: "התאמת אופניים",
  description: "אצלנו תוכלו לבצע התאמת אופניים מושלמת בשיטת ריטול המחורטטת. הביא לנו את כספכם ונברח איתו.",
  buttonLabel: "קבעו התאמה",
  imgStart: "",
  img: "images/tool-cartoon-min.png",
  alt: "BikeFit",
  route: "/fitting",
};

export const AboutUs = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  // topLine: 'FitZone',
  headline: "מי אנחנו",
  description:
    "פיטזון הוא סטודיו מקצועי לרוכב הפועל מאז שנת 1921. ברשותנו צוות מטורף המפעיל מלא ציוד ועושה ארגזים של כסף על חשבונכם. פה נבלבל לכם קצת את המוח על מי אנחנו ולמה אנחנו וכמה אנחנו כדי שתחשבו שאנחנו חנות מקצועית ותפלו בפח.",
  buttonLabel: "הכירו אותנו",
  imgStart: "",
  img: "images/main-pic-2-min.png",
  alt: "BikeFit",
  route: "/contact",

};

export const reviews = [
  {
    key: "1",
    renderItem: () => {
      return (
        <Review
          text="שירות מצויין ומוצר מהמם. תודה רבה לאורן גונן שפשוטו כמשמעו גנב לנו את כל הכסף. תודה"
          author="ישראל ישראלי"
          stars={4.5}
          avatar="images/img_avatar.png"
        ></Review>
      );
    },
  },
  {
    key: "2",
    renderItem: () => {
      return (
        <Review
          text="ביצעתי התאמת אופניים בסטודיו המקצועי ויצאתי חסר מילים. תודה על מי שאתם ומה שאתם ואיך שאתם וכמה שאתם ולמה שאתם ומתי שאתם ואיך שאתם וכיצד שאתם ומתי שאתם ולמה שאתם. תודה"
          author="שאול שאולי"
          stars={5}
          avatar="images/img_avatar2.png"

        ></Review>
      );
    },
  },
];

export const splitSectionData = {
  items: [homeObjTwo, homeObjFour, homeObjThree],
  headline: "השירותים שלנו",
  bgImg: "images/bicycle-bg-transparent-min.png"
}

export const photos = [
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/qDkso9nvCg0/600x799" alt=""></img>
      )
    },
  },
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/iecJiKe_RNg/600x799" alt=""></img>
      )
    },
  },
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/epcsn8Ed8kY/600x799" alt=""></img>
      )
    },
  },
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/zh7GEuORbUw/600x799" alt=""></img>
      )
    },
  },
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/qDkso9nvCg0/600x799" alt=""></img>
      )
    },
  },
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/iecJiKe_RNg/600x799" alt=""></img>
      )
    },
  },
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/epcsn8Ed8kY/600x799" alt=""></img>
      )
    },
  },
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/zh7GEuORbUw/600x799" alt=""></img>
      )
    },
  },
];


