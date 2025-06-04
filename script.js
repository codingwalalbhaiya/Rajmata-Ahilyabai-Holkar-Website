
const themes = {
    "default": {background: "#ffffff", color: "#000"},
    "dark": {background: "#121212", color: "#fff"},
    "royal": {background: "#5D4037", color: "#C19A6B"}
};

function applyTheme(theme) {
    document.body.style.background = themes[theme].background;
    document.body.style.color = themes[theme].color;
    localStorage.setItem("selectedTheme", theme);
}

document.getElementById("themeSelect").addEventListener("change", function() {
    applyTheme(this.value);
});


if (localStorage.getItem("selectedTheme")) {
    applyTheme(localStorage.getItem("selectedTheme"));
}

const timelineItems = document.querySelectorAll(".timeline-item");

function showTimelineItems() {
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            item.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showTimelineItems);













// 📌 सही डेटा

const historyData = {

    "ahilyabai": {
        "title": "Ahilyabai Holkar",
        "text": `महारानी अहिल्याबाई होलकर (1725-1795) एक असाधारण शासिका थीं, जिन्होंने मालवा को व्यवस्थित प्रशासन, आर्थिक सुधारों और सांस्कृतिक प्रगति से समृद्ध बनाया। महाराष्ट्र के चोंडी गाँव में जन्मी, 
        उन्होंने शिक्षा प्राप्त कर सामाजिक परंपराओं को चुनौती दी और बाद में भारत की सबसे प्रभावशाली नेताओं में से एक बनीं। अपने पति खंडेराव होलकर और ससुर मल्हारराव होलकर के निधन के बाद, 1767 में उन्होंने शासन संभाला और अपनी राजधानी महेश्वर स्थानांतरित की। उन्होंने अपने राज्य को आक्रमणकारियों से बचाने के लिए व्यक्तिगत रूप से युद्ध में सेना का नेतृत्व किया और तुकोजीराव होलकर को सैन्य प्रमुख नियुक्त किया।

उन्होंने मालवा की आर्थिक संरचना को पुनर्गठित किया, व्यापार, कृषि और हस्तशिल्प को बढ़ावा दिया, विशेष रूप से महेश्वरी वस्त्र उद्योग की स्थापना की। उनके धार्मिक योगदान भी उल्लेखनीय थे—उन्होंने काशी विश्वनाथ, सोमनाथ और दशाश्वमेध घाट जैसे प्रसिद्ध मंदिरों का निर्माण कराया।

प्रशासन के अलावा, अहिल्याबाई महिला सशक्तिकरण की अग्रणी थीं, उन्होंने महिलाओं को संपत्ति के अधिकार दिए और शिक्षा को बढ़ावा दिया। उनके परोपकारी कार्य पूरे भारत में फैले हुए थे, जिसमें धर्मशालाओं, घाटों और सार्वजनिक सेवाओं के लिए अनुदान शामिल थे।

अहिल्याबाई की विरासत आज भी जीवित है—इंदौर विश्वविद्यालय देवी अहिल्या विश्वविद्यालय, और देवी अहिल्याबाई होलकर एयरपोर्ट उनके योगदान का प्रमाण हैं। उन्हें “पुण्यश्लोक” की उपाधि दी गई, जो उनकी दूरदर्शिता और परोपकारी कार्यों को दर्शाती है।

🔹 प्रारंभिक जीवन और सत्ता में उदय
             जन्म: 31 मई 1725, चोंडी, महाराष्ट्र।
             पिता: मंकोजीराव शिंदे, जिन्होंने उन्हें शिक्षित किया।
             विवाह: 1733 में खंडेराव होलकर से विवाह।
             दुखद घटनाएँ: 1754 में खंडेराव की मृत्यु, 1766 में मल्हारराव होलकर का निधन।  
             शासन ग्रहण: 1767 में मालवा की सत्ता संभाली, राजधानी महेश्वर स्थानांतरित की।

🔹 प्रशासनिक और सैन्य उपलब्धियाँ
         . न्यायसंगत कर प्रणाली – व्यापार और कृषि को बढ़ावा दिया।
         . सार्वजनिक निर्माण – सड़कें, कुएँ, धर्मशालाएँ और व्यापारिक केंद्र बनाए। 
         . सैन्य नेतृत्व – स्वयं युद्धों का नेतृत्व किया, तुकोजीराव होलकर को सैन्य प्रमुख नियुक्त किया। 
         . न्याय प्रणाली – तेज़ और निष्पक्ष न्याय व्यवस्था लागू की।

🔹 धार्मिक और सांस्कृतिक योगदान
         . मंदिरों का पुनर्निर्माण – काशी विश्वनाथ, सोमनाथ, ओंकारेश्वर मंदिरों का निर्माण कराया।
         . महेश्वरी वस्त्र उद्योग की स्थापना – महेश्वर को वस्त्र उद्योग का केंद्र बनाया। 
         . साहित्य और कला को प्रोत्साहन – साहित्य, संगीत और सांस्कृतिक कार्यक्रमों का आयोजन किया।

🔹 विरासत और प्रभाव
         निधन: 13 अगस्त 1795, इंदौर।
         उत्तराधिकारी: तुकोजीराव होलकर।

सम्मान: 
          . देवी अहिल्या विश्वविद्यालय (इंदौर विश्वविद्यालय)।
          . देवी अहिल्याबाई होलकर एयरपोर्ट (इंदौर)। 
          . भारत में विभिन्न स्मारकों और मूर्तियों की स्थापना।
    `}
};


// 📌 चैटबॉट के उत्तर
const answers = {
"who is ahilyabai": "Ahilyabai Holkar was a great ruler of Malwa, known for her progressive administration and social reforms.",
"ahilyabai kaun thi": "अहिल्याबाई होलकर एक महान शासिका थीं, जिन्होंने मालवा को समृद्ध बनाया।",
"legacy": "Her contributions to Indian culture and governance are still remembered today.",
"virasat": "उनका योगदान भारतीय संस्कृति और प्रशासन में आज भी याद किया जाता है।"
};

// 📌 यूज़र इनपुट को पढ़ें और उत्तर दें
function getResponse() {
const userText = document.getElementById("userInput").value.trim().toLowerCase();
let response = answers[userText] || searchLocalData(userText);

showPopup(response);
}

// 📌 स्थानीय डेटा खोजें
function searchLocalData(query) {
const localData = {
"history": "Ahilyabai Holkar transformed Malwa into a thriving cultural and economic center.",
"इतिहास": "अहिल्याबाई होलकर ने मालवा को एक समृद्ध सांस्कृतिक और आर्थिक केंद्र में बदल दिया।",
};

return localData[query] || "Click on the image to explore the rich history of Ahilyabai Holkar " ;
}

// 📌 पॉपअप दिखाएँ (सुधारा गया)
function showPopup(response) {
document.getElementById("popup-title").innerText = "Answer";
document.getElementById("popup-text").innerText = response;
document.getElementById("popup").style.display = "block";
}

// 📌 पॉपअप बंद करें
function closePopup() {
document.getElementById("popup").style.display = "none";
}



// 📌 अहिल्याबाई का इतिहास डेटा
// const historyData = {
//     "ahilyabai": {
//         "title": "Ahilyabai Holkar",
//         "text": `महारानी अहिल्याबाई होलकर (1725-1795) एक असाधारण शासिका थीं, जिन्होंने मालवा को समृद्ध बनाया...`
//     }
// };

// 📌 पॉपअप खोलने का फ़ंक्शन
function toggleHistoryDiv(topic) {
    const historyDiv = document.getElementById("popupContainer");

    if (topic && historyData[topic]) {
        document.getElementById("popupTitle").innerText = historyData[topic].title;
        document.getElementById("popupText").innerText = historyData[topic].text;
        historyDiv.style.display = "block"; // `div` को दिखाओ
    } else {
        console.log("Error: Topic not found!");
    }
}

// 📌 **पॉपअप बंद करने का सही फ़ंक्शन (अब सही जगह पर है)**
function hclosePopup() { 
    document.getElementById("popupContainer").style.display = "none";
}

