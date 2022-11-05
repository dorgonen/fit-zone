export const fittingPageData = {
  headline: "התאמת אופניים",
  bgImg: "images/fitting-cover-min.jpg",
  mobileBgPosition: 'bottom'
};

export const bikeFittingData = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  headline: "התאמה אישית בטכנולוגיה מתקדמת",
  descriptions: <>
    <p>
      התאמת האופניים לרוכב בסטודיו פיטזון מותאמת אישית עבור כל רוכב ומתבצעת בשיטת Retül.
      <br></br>
      באמצעות מיכשור מיוחד וטכנולוגיית התאמה תלת מימדית של אופניים, מערכת Retül מודדת במדויק כל דרגת תנועה ומילימטר של מרחק באמצעות חיישנים המחוברים לגופו של הרוכב ומשדרים מידע המנותח בזמן אמת.
    </p>
    <p>
      השיטה מאפשרת לרוכבים למקסם את הכוח, הסיבולת והנוחות. במהלך הפגישה האישית שלך בסטודיו שלנו, מומחה כושר מיומן יעריך את הצרכים האישיים שלך ויתאים באופן שיטתי את מיקום האופניים והציוד לגוף שלך בהתאמה אישית.
    </p>
    <p>
      בחרנו להשתמש בשיטה זו כיוון שחברת
      Retül חורטת על דגלה להיות מקור הטכנולוגיה המתקדם ביותר מבחינה טכנית להתאמת אופניים והתאמת מוצרים הזמינה בשוק.
    </p>
  </>,
  // video: "https://www.youtube.com/v/neEUF_3MVDo&t=28s",
  alt: "BikeFit",
};

export const fittingProcessData = {
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  headline: "תהליך ההתאמה",
  descriptions: <>
    <p>
      תהליך ההתאמה בסטודיו פיטזון מתחלק לחמישה שלבים. התהליך מתחיל בהערכה גופנית מוקדמת הכוללת התחשבות במגבלות הגוף שלך, פציעות קודמות וכאבים נוכחיים, והבנת המטרות שלך על האופניים. לאחר מכן, אנו משתמשים במערכת טכנולוגית לאיסוף נתונים תלת מימדיים בזמן אמת מכל דיווש פדל ויוצרים חווית התאמה דינמית.
    </p>
  </>,
  video: "https://www.youtube.com/v/neEUF_3MVDo&t=28s",
  alt: "BikeFit",
};

export const homeObjTwo = {
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  headline: "שיפור הביצועים",
  description:
    "מיקום אופטימלי לא רק מגביר את הנוחות, הוא ממקסם גם את הכוח וגם את הסיבולת.",
  img: "images/chain-cartoon-min.png",
  alt: "Repaire",
  route: "/repairing",

};

export const homeObjThree = {
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  headline: "מניעת פציעות",
  description:
    "המיקום הנכון שומר על הגוף שלך מיושר על האופניים, ומסייע במניעת פציעות.",
  img: "images/chair-cartoon-min.png",
  alt: "Ride",
  route: "/lessons",
};

export const homeObjFour = {
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  headline: "נוחות מוגברת",
  description: "לא משנה מהי רמת הרכיבה שלך, הנוחות היא קריטית לשמירה על זמן הרכיבה על האופניים.",
  img: "images/tool-cartoon-min.png",
  alt: "BikeFit",
  route: "/fitting",
};

export const splitSectionData = {
  items: [homeObjTwo, homeObjFour, homeObjThree],
  headline: "רכיבה יעילה ובריאה מתחילה בהתאמת אופניים",
  description: "התאמה נכונה של אופניים מאפשרת חווית רכיבה טובה יותר בכך שהיא הופכת אותך ליעיל/ה יותר תוך הפחתת סיכויי הפציעה, הגברת הנוחות ושיפור הביצועים.",
  // bgImg: "images/bicycle-bg-transparent-min.png"
}

export const cardsItems = [
  {
    text: "זה הזמן ומהקום לבלבל לכם את המוח במלא בולשיט על ההתאמה הכי לא משתלמת שתמצאו. כן כן, זוהי התאמה לפני קניה.",
    title: "התאמה לפני קנייה",
    img: "images/fitting-cover-min.jpg",
  },
  {
    text: "זה הזמן ומהקום לבלבל לכם את המוח במלא בולשיט על ההתאמה הכי לא משתלמת שתמצאו. כן כן, זוהי התאמה לפני קניה.",
    title: "התאמה לכל סוגי האופניים",
    img: "images/main-pic-2-min.png",
  },
  {
    text: "זה הזמן ומהקום לבלבל לכם את המוח במלא בולשיט על ההתאמה הכי לא משתלמת שתמצאו. כן כן, זוהי התאמה לפני קניה.",
    title: "התאמה חוזרת",
    img: 'images/bgpic-min.jpg',
  },
];

export const fittingPhotos = [
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/qDkso9nvCg0/600x799"></img>
      )
    },
  },
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/iecJiKe_RNg/600x799"></img>
      )
    },
  },
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/epcsn8Ed8kY/600x799"></img>
      )
    },
  },
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/zh7GEuORbUw/600x799"></img>
      )
    },
  },
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/qDkso9nvCg0/600x799"></img>
      )
    },
  },
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/iecJiKe_RNg/600x799"></img>
      )
    },
  },
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/epcsn8Ed8kY/600x799"></img>
      )
    },
  },
  {
    renderItem: () => {
      return (
        <img src="https://source.unsplash.com/zh7GEuORbUw/600x799"></img>
      )
    },
  },
];
