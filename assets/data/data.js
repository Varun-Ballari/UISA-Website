var deadline = new Date(Date.parse(new Date(2016, 11, 5, 6, 0, 0, 0)));

var teams = [
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
    {"pic":"../data/teams/crown.png", "teamName":"Coming Soon", "category":"Sept. 30", "facebookLink": "https://www.facebook.com/"},
];


var sponsors = [
    {"pic":"../data/sponsors/starbucks.png", "company":"Starbucks", "website": "https://www.facebook.com/"},
    {"pic":"../data/sponsors/starbucks.png", "company":"Starbucks", "website": "https://www.facebook.com/"},
    {"pic":"../data/sponsors/starbucks.png", "company":"Starbucks", "website": "https://www.facebook.com/"},
    {"pic":"../data/sponsors/starbucks.png", "company":"Starbucks", "website": "https://www.facebook.com/"},
    {"pic":"../data/sponsors/starbucks.png", "company":"Starbucks", "website": "https://www.facebook.com/"},
    {"pic":"../data/sponsors/starbucks.png", "company":"Starbucks", "website": "https://www.facebook.com/"},
    {"pic":"../data/sponsors/starbucks.png", "company":"Starbucks", "website": "https://www.facebook.com/"},
    {"pic":"../data/sponsors/starbucks.png", "company":"Starbucks", "website": "https://www.facebook.com/"},
];

var board = [
    {"pic":"../data/board/UISA-1.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-2.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-3.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-4.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-5.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-6.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-7.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-8.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-9.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-10.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-11.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-12.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-13.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-14.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-15.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-16.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-17.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-18.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-19.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-20.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-21.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-22.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-23.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-24.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-25.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-26.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-27.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-28.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-29.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-30.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-31.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-32.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-33.jpg", "boardName":"Parth Patel", "boardTitle": "President"},
    {"pic":"../data/board/UISA-34.jpg", "boardName":"Parth Patel", "boardTitle": "President"},



];
