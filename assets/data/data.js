var deadline = new Date(Date.parse(new Date(2016, 11-1, 5, 16, 0, 0, 0)));

var teams = [
    {"pic":"assets/data/teams/qurbani2.png", "teamName":"GT Qurbani", "category":"Bollywood Fusion", "facebookLink": "https://www.facebook.com/"},
    {"pic":"assets/data/teams/satrangi.png", "teamName":"ATL Satrangi", "category":"Bollywood Fusion", "facebookLink": "https://www.facebook.com/"},
    {"pic":"assets/data/teams/gatoradaa.png", "teamName":"Gator Adaa", "category":"Bollywood Fusion", "facebookLink": "https://www.facebook.com/"},
    {"pic":"assets/data/teams/tanishq.png", "teamName":"ATL Tanishq", "category":"Bollywood Fusion", "facebookLink": "https://www.facebook.com/"},

    {"pic":"assets/data/teams/jazba.png", "teamName":"GT Bhangra", "category":"Bhangra", "facebookLink": "https://www.facebook.com/"},
    {"pic":"assets/data/teams/talwar.png", "teamName":"UGA Talwar", "category":"Bhangra", "facebookLink": "https://www.facebook.com/"},
    {"pic":"assets/data/teams/karma.png", "teamName":"Emory Karma", "category":"Bhangra", "facebookLink": "https://www.facebook.com/"},
    {"pic":"assets/data/teams/vanderbilt.png", "teamName":"Vanderbilt Bhangradores", "category":"Bhangra", "facebookLink": "https://www.facebook.com/"},

    {"pic":"assets/data/teams/saraas.png", "teamName":"Emory SaRaas", "category":"Garba Raas", "facebookLink": "https://www.facebook.com/"},
    {"pic":"assets/data/teams/raas.png", "teamName":"GT Ramblin' Raas", "category":"Garba Raas", "facebookLink": "https://www.facebook.com/"},
    {"pic":"assets/data/teams/piratesraas.png", "teamName":"Pirate Raas", "category":"Garba Raas", "facebookLink": "https://www.facebook.com/"},

    {"pic":"assets/data/teams/taaltadka.png", "teamName":"Taal Tadka", "category":"Exhibition", "facebookLink": "https://www.facebook.com/"}
];


var sponsors = [
    {"pic":"assets/data/sponsors/bezoria.png", "company":"Bezoria", "website": "https://www.bezoria.com/"},
    {"pic":"assets/data/sponsors/uconnections.png", "company":"UConnection", "website": "https://uconnection.com/index"},
    {"pic":"assets/data/sponsors/artees.png", "company":"Artees Custom Screen Printing and Embroidery", "website": "https://www.arteescorp.com/"},
    {"pic":"assets/data/sponsors/whichwich.png", "company":"Which Wich Superior Sandwiches", "website": "https://www.whichwich.com/#!/"},
];

var board = [
    {"pic":"assets/data/board/UISA-42.jpg", "boardName":"Neeraja Sarda", "boardTitle": "President"},
    {"pic":"assets/data/board/UISA-6.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"assets/data/board/UISA-47.jpg", "boardName":"Maitri Patel", "boardTitle": "VP Operations"},
    {"pic":"assets/data/board/UISA-9.jpg", "boardName":"Khushboo Sarda", "boardTitle": "VP Logistics"},
    {"pic":"assets/data/board/UISA-16.jpg", "boardName":"Keshav Raghavendran", "boardTitle": "VP Finance"},
    {"pic":"assets/data/board/UISA-18.jpg", "boardName":"Saloni Doshi", "boardTitle": "VP Marketing"},
    {"pic":"assets/data/board/UISA-12.jpg", "boardName":"Millie Bhatia", "boardTitle": "VP Social"},
    {"pic":"assets/data/board/UISA-37.jpg", "boardName":"Shivani Vasudev", "boardTitle": "Registration"},
    {"pic":"assets/data/board/UISA-31.jpg", "boardName":"Sunidhi Ramesh", "boardTitle": "Registration"},
    {"pic":"assets/data/board/UISA-29.jpg", "boardName":"Anum Jiwani", "boardTitle": "Liaison"},
    {"pic":"assets/data/board/UISA-3.jpg", "boardName":"Mayank Gandhi", "boardTitle": "Liaison"},
    {"pic":"assets/data/board/UISA-7.jpg", "boardName":"Shivam Patel", "boardTitle": "Hospitality"},
    {"pic":"assets/data/board/UISA-0.jpg", "boardName":"Prerak Joshi", "boardTitle": "Hospitality"},
    {"pic":"assets/data/board/UISA-22.jpg", "boardName":"Charmi Patel", "boardTitle": "Judges"},
    {"pic":"assets/data/board/UISA-5.jpg", "boardName":"Parth Patel", "boardTitle": "Judges"},
    {"pic":"assets/data/board/UISA-0.jpg", "boardName":"Charu Thomas", "boardTitle": "Sponsorship"},
    {"pic":"assets/data/board/UISA-10.jpg", "boardName":"Deepak	Aaron", "boardTitle": "Sponsorship"},
    {"pic":"assets/data/board/UISA-0.jpg", "boardName":"Varun Ballari", "boardTitle": "Webmaster"},
    {"pic":"assets/data/board/UISA-11.jpg", "boardName":"Viral Shah", "boardTitle": "Graphic Designer"},
    {"pic":"assets/data/board/UISA-51.jpg", "boardName":"Yagnik	Tadavarthi", "boardTitle": "Photo/Video"},
    {"pic":"assets/data/board/UISA-36.jpg", "boardName":"Pearly	Pandya", "boardTitle": "Marketing"},
    {"pic":"assets/data/board/UISA-27.jpg", "boardName":"Nikita	Bawa", "boardTitle": "Marketing"},
    {"pic":"assets/data/board/UISA-0.jpg", "boardName":"Arti Patel", "boardTitle": "Arts & Decor"},
    {"pic":"assets/data/board/UISA-39.jpg", "boardName":"Dhanusha Subramani", "boardTitle": "Arts & Decor"},
    {"pic":"assets/data/board/UISA-0.jpg", "boardName":"Manali	Desai", "boardTitle": "Arts & Decor"},
    {"pic":"assets/data/board/UISA-20.jpg", "boardName":"Aliya Abdulla", "boardTitle": "Philanthropy"},
    {"pic":"assets/data/board/UISA-24.jpg", "boardName":"Ankita	Verma", "boardTitle": "Philanthropy"},
    {"pic":"assets/data/board/UISA-34.jpg", "boardName":"Vinny Kapil", "boardTitle": "Mixer"},
    {"pic":"assets/data/board/UISA-43.jpg", "boardName":"Vamsi Reddy", "boardTitle": "Mixer"},
    {"pic":"assets/data/board/UISA-0.jpg", "boardName":"Shreya	Jain", "boardTitle": "Mixer"},
    {"pic":"assets/data/board/UISA-8.jpg", "boardName":"Rohit Devulapalli", "boardTitle": "Afterparty"},
    {"pic":"assets/data/board/UISA-15.jpg", "boardName":"Joel Joseph", "boardTitle": "Afterparty"},
    {"pic":"assets/data/board/UISA-2.jpg", "boardName":"Wiqas Nassar", "boardTitle": "Music"}
];
