/* ========= QUESTIONS ========= */

const questions = [
  {
    question: "When was the US Constitution adopted?",
    options: ["1776", "1787", "1789", "1800"],
    correct: "1787",
  },
  {
    question: "What is the main purpose of the US Constitution?",
    options: [
      "To control the economy",
      "To declare independence",
      "To organize the government",
      "To create political parties",
    ],
    correct: "To organize the government",
  },
  {
    question:
      "How many branches of government are established by the Constitution?",
    options: ["Two", "Three", "Four", "Five"],
    correct: "Three",
  },
  {
    question: "Which article of the Constitution describes Congress?",
    options: ["Article I", "Article II", "Article III", "Article IV"],
    correct: "Article I",
  },
  {
    question: "Congress of the USA is a ____ legislature.",
    options: ["Single-house", "Three-house", "Bicameral", "Temporary"],
    correct: "Bicameral",
  },
  {
    question: "Which two parts make up the US Congress?",
    options: [
      "President and Senate",
      "Senate and Supreme Court",
      "House of Representatives and Senate",
      "President and House",
    ],
    correct: "House of Representatives and Senate",
  },
  {
    question: "How many members are there in the US Senate?",
    options: ["50", "100", "435", "538"],
    correct: "100",
  },
  {
    question:
      "Members of the House of Representatives serve for how many years?",
    options: ["2 years", "4 years", "6 years", "8 years"],
    correct: "2 years",
  },
  {
    question: "Which power belongs to Congress?",
    options: [
      "Interpreting laws",
      "Enforcing laws",
      "Making laws",
      "Appointing judges",
    ],
    correct: "Making laws",
  },
  {
    question: "The Bill of Rights mainly protects:",
    options: [
      "Government powers",
      "State borders",
      "Individual freedoms",
      "Political parties",
    ],
    correct: "Individual freedoms",
  },
  {
    question: "Which body of water lies to the west of Great Britain?",
    options: ["English Channel", "North Sea", "Irish Sea", "Mediterranean Sea"],
    correct: "Irish Sea",
  },
  {
    question: "What is the largest island within the United Kingdom?",
    options: ["Great Britain", "Isle of Wight", "Isle of Man", "Shetland"],
    correct: "Great Britain",
  },
  {
    question: "Which mountain range runs through the north of Great Britain?",
    options: ["Alps", "Pennines", "Pyrenees", "Carpathians"],
    correct: "Pennines",
  },
  {
    question:
      "The southern coastline of Great Britain borders which body of water?",
    options: ["North Sea", "Irish Sea", "English Channel", "Bay of Biscay"],
    correct: "English Channel",
  },
  {
    question: "What is the highest mountain in Great Britain?",
    options: ["Everest", "Scafell Pike", "Mount Snowden", "Ben Nevis"],
    correct: "Ben Nevis",
  },
  {
    question:
      "Which city is famous for theatres and musicals in Great Britain?",
    options: ["Liverpool", "Manchester", "London", "Oxford"],
    correct: "London",
  },
  {
    question: "What is the traditional British drink?",
    options: ["Coffee", "Tea", "Juice", "Milk"],
    correct: "Tea",
  },
  {
    question: "Which music group is from Great Britain?",
    options: ["Queen", "BTS", "ABBA", "Imagine Dragons"],
    correct: "Queen",
  },
  {
    question: "What is a famous British cultural event?",
    options: [
      "Thanksgiving",
      "Halloween",
      "Notting Hill Carnival",
      "Independence Day",
    ],
    correct: "Notting Hill Carnival",
  },
  {
    question: "Which sport is traditionally associated with Great Britain?",
    options: ["Baseball", "Cricket", "Basketball", "Ice hockey"],
    correct: "Cricket",
  },
  {
    question: "What traditional clothing is worn by Scottish men?",
    options: ["Kimono", "Kilt", "Sari", "Toga"],
    correct: "Kilt",
  },
  {
    question:
      "Which day is celebrated with parades and horse riding at Buckingham Palace?",
    options: [
      "Remembrance Day",
      "Trooping the Colour",
      "Halloween",
      "St. George's Day",
    ],
    correct: "Trooping the Colour",
  },
  {
    question: "What is a traditional British breakfast item?",
    options: ["Full English breakfast", "Croissant", "Pizza", "Sushi"],
    correct: "Full English breakfast",
  },
  {
    question: "What is the traditional dance of England?",
    options: ["Waltz", "Morris", "Tango", "Salsa"],
    correct: "Morris",
  },
  {
    question: "Which animal is associated with the British countryside?",
    options: ["Kangaroo", "Sheep", "Elephant", "Lion"],
    correct: "Sheep",
  },
  {
    question:
      "Which newspaper is considered one of the oldest in Great Britain?",
    options: ["The Guardian", "The Times", "The Sun", "Daily Mail"],
    correct: "The Times",
  },
  {
    question: "What is the national sport of England?",
    options: ["Football", "Cricket", "Rugby", "Tennis"],
    correct: "Cricket",
  },
  {
    question: "Which channel is a public service broadcaster in the UK?",
    options: ["BBC", "CNN", "Sky News", "ITV"],
    correct: "BBC",
  },
  {
    question: "Famous British car brand?",
    options: ["Ford", "Rolls-Royce", "Toyota", "Tesla"],
    correct: "Rolls-Royce",
  },
  {
    question: "Popular British football league?",
    options: ["La Liga", "Premier League", "Serie A", "Bundesliga"],
    correct: "Premier League",
  },
  {
    question: "Which is the largest state by area in the USA?",
    options: ["Texas", "Alaska", "California", "Florida"],
    correct: "Alaska",
  },
  {
    question: "What is the most populous city in the USA?",
    options: ["Los Angeles", "Chicago", "New York", "Houston"],
    correct: "New York",
  },
  {
    question: "Which river is the longest in the USA?",
    options: ["Mississippi", "Missouri", "Colorado", "Ohio"],
    correct: "Mississippi",
  },
  {
    question: "What type of climate is common in the southeastern USA?",
    options: ["Desert", "Tropical", "Mediterranean", "Humid subtropical"],
    correct: "Humid subtropical",
  },
  {
    question: "Which animal is a symbol of the USA?",
    options: ["Bald eagle", "Grizzly bear", "Bison", "Cougar"],
    correct: "Bald eagle",
  },
  {
    question: "In which year did the USA declare independence?",
    options: ["1776", "1787", "1492", "1801"],
    correct: "1776",
  },
  {
    question: "Which war was fought between the North and South states?",
    options: [
      "World War I",
      "Civil War",
      "Revolutionary War",
      "Spanish-American War",
    ],
    correct: "Civil War",
  },
  {
    question: "Who issued the Emancipation Proclamation?",
    options: [
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson",
      "Franklin Roosevelt",
    ],
    correct: "Abraham Lincoln",
  },
  {
    question: "Which year was the US Constitution adopted?",
    options: ["1776", "1787", "1800", "1791"],
    correct: "1787",
  },
  {
    question: "Who was president during the Great Depression?",
    options: [
      "Theodore Roosevelt",
      "Franklin D. Roosevelt",
      "John F. Kennedy",
      "Harry Truman",
    ],
    correct: "Franklin D. Roosevelt",
  },
  {
    question: "Which movement fought for African-American civil rights?",
    options: [
      "Women's Rights Movement",
      "Civil Rights Movement",
      "Labor Movement",
      "Abolition Movement",
    ],
    correct: "Civil Rights Movement",
  },
  {
    question: "Which event caused the USA to enter World War II?",
    options: [
      "Battle of Midway",
      "Pearl Harbor attack",
      "D-Day",
      "Hiroshima bombing",
    ],
    correct: "Pearl Harbor attack",
  },
  {
    question: "Who was the first man to walk on the Moon?",
    options: [
      "Yuri Gagarin",
      "Neil Armstrong",
      "Buzz Aldrin",
      "Michael Collins",
    ],
    correct: "Neil Armstrong",
  },
  {
    question: "Which president signed the Declaration of Independence?",
    options: [
      "John Hancock",
      "Thomas Jefferson",
      "George Washington",
      "Benjamin Franklin",
    ],
    correct: "John Hancock",
  },
  {
    question: "Which document established the US federal government?",
    options: [
      "Bill of Rights",
      "Constitution",
      "Emancipation Proclamation",
      "Declaration of Independence",
    ],
    correct: "Constitution",
  },
  {
    question: "Which of the following national parks is located in England?",
    options: [
      "Cairngorms National Park",
      "Snowden National Park",
      "Peak District National Park",
      "Beacons National Park",
    ],
    correct: "Peak District National Park",
  },
  {
    question: "What type of climate does Great Britain predominantly have?",
    options: ["Subarctic", "Tropical", "Continental", "Temperate Maritime"],
    correct: "Temperate Maritime",
  },
  {
    question: "Which of the following is NOT a major river in Great Britain?",
    options: ["Thames", "Seine", "Mersey", "Clyde"],
    correct: "Seine",
  },
  {
    question:
      "What is the name of the famous rock formation located on the south coast of England?",
    options: [
      "The White Cliffs of Dover",
      "Giant's Causeway",
      "The Cliffs of Mother",
      "Old Man of Hoy",
    ],
    correct: "The White Cliffs of Dover",
  },
  {
    question:
      "What is the predominant type of vegetation found in the upland areas of Great Britain?",
    options: [
      "Tropical Rainforest",
      "Coniferous Forest",
      "Desert",
      "Heathland and Moorland",
    ],
    correct: "Heathland and Moorland",
  },
  {
    question: "A custom is:",
    options: [
      "A modern invention",
      "A traditional way of behavior",
      "A law",
      "A school subject",
    ],
    correct: "A traditional way of behavior",
  },
  {
    question: "Traditions are usually:",
    options: [
      "Forgotten quickly",
      "Passed from generation to generation",
      "Written only in books",
      "Changed every day",
    ],
    correct: "Passed from generation to generation",
  },
  {
    question: "Tea time is a:",
    options: ["Sport", "British tradition", "Law"],
    correct: "British tradition",
  },
  {
    question: "The Royal family belongs to the:",
    options: ["Parliament", "Monarchy", "Church"],
    correct: "Monarchy",
  },
  {
    question: "Etiquette means:",
    options: ["Eating rules only", "Rules of polite behavior", "Traffic rules"],
    correct: "Rules of polite behavior",
  },
  {
    question: "A queue is:",
    options: [
      "A celebration",
      "A line of people waiting",
      "A ceremony",
      "A greeting",
    ],
    correct: "A line of people waiting",
  },
  {
    question: "Christmas is celebrated in:",
    options: ["Summer", "Winter", "Spring", "Autumn"],
    correct: "Winter",
  },
  {
    question: "Easter is a:",
    options: [
      "National sport",
      "Religious festival",
      "Political event",
      "Cultural show only",
    ],
    correct: "Religious festival",
  },
  {
    question: "Ceremonies are usually:",
    options: ["Informal", "Formal events", "Private meetings", "Lessons"],
    correct: "Formal events",
  },
  {
    question: "A parade is:",
    options: [
      "A quiet meeting",
      "A public procession",
      "A lesson",
      "A competition",
    ],
    correct: "A public procession",
  },
  {
    question: "Economy refers to:",
    options: [
      "Education system",
      "Production and consumption of goods",
      "Cultural traditions",
      "Political structure",
    ],
    correct: "Production and consumption of goods",
  },
  {
    question: "Industry is mainly connected with:",
    options: ["Agriculture only", "Factory production", "Education", "Art"],
    correct: "Factory production",
  },
  {
    question: "Trade means:",
    options: [
      "Teaching students",
      "Buying and selling goods",
      "Playing sports",
      "Broadcasting news",
    ],
    correct: "Buying and selling goods",
  },
  {
    question: "Finance deals with:",
    options: ["History", "Money management", "Literature", "Culture"],
    correct: "Money management",
  },
  {
    question: "Banking provides services such as:",
    options: ["Painting", "Saving and lending money", "Teaching", "Acting"],
    correct: "Saving and lending money",
  },
  {
    question: "Employment means:",
    options: [
      "Being unemployed",
      "Having a paid job",
      "Being a student",
      "Being retired",
    ],
    correct: "Having a paid job",
  },
  {
    question: "Unemployment is the condition of:",
    options: [
      "Working full-time",
      "Not having a job",
      "Studying",
      "Running a business",
    ],
    correct: "Not having a job",
  },
  {
    question: "Export goods are:",
    options: [
      "Bought from abroad",
      "Sold to other countries",
      "Used only locally",
      "Produced at home",
    ],
    correct: "Sold to other countries",
  },
  {
    question: "Import goods are:",
    options: [
      "Sold abroad",
      "Bought from other countries",
      "Produced locally",
      "Not traded",
    ],
    correct: "Bought from other countries",
  },
  {
    question: "The most popular sport in Great Britain is:",
    options: ["Basketball", "Tennis", "Football", "Hockey"],
    correct: "Football",
  },
  {
    question: "The USA is located in:",
    options: ["South America", "Europe", "North America"],
    correct: "North America",
  },
  {
    question: "The geographical position of a country shows its:",
    options: ["History", "Location", "Economy", "Culture"],
    correct: "Location",
  },
  {
    question: "The USA is bordered by:",
    options: ["Two oceans", "One ocean", "No oceans", "Three oceans"],
    correct: "Two oceans",
  },
  {
    question: "The Atlantic Ocean is located on the:",
    options: [
      "North of the USA",
      "South of the USA",
      "East of the USA",
      "West of the USA",
    ],
    correct: "East of the USA",
  },
  {
    question: "The Pacific Ocean is on the:",
    options: ["East coast", "West coast", "North coast", "South coast"],
    correct: "West coast",
  },
  {
    question: "Canada borders the USA in the:",
    options: ["South", "East", "North", "West"],
    correct: "North",
  },
  {
    question: "Mexico borders the USA in the:",
    options: ["North", "East", "West", "South"],
    correct: "South",
  },
  {
    question: "Climate means:",
    options: [
      "Daily weather",
      "Long-term weather conditions",
      "Natural resources",
      "Population size",
    ],
    correct: "Long-term weather conditions",
  },
  {
    question: "Population refers to:",
    options: [
      "Territory size",
      "Number of people",
      "Natural resources",
      "Climate",
    ],
    correct: "Number of people",
  },
  {
    question: "Demography studies:",
    options: ["Economy", "History", "Population changes", "Geography only"],
    correct: "Population changes",
  },
  {
    question: "Which university is the oldest in the UK?",
    options: [
      "University of Oxford",
      "University of Cambridge",
      "University of Edinburgh",
      "University of London",
    ],
    correct: "University of Oxford",
  },
  {
    question:
      "What is the name of the exams taken by students at the age of 16 in England?",
    options: ["A-Levels", "GCSEs", "SATs", "Baccalaureate"],
    correct: "GCSEs",
  },
  {
    question:
      "Which of these countries has the smallest population among Wales, Scotland, and Northern Ireland?",
    options: ["Wales", "Scotland", "Northern Ireland", "They are all the same"],
    correct: "Northern Ireland",
  },
  {
    question: "Which mountain range is located in Wales?",
    options: [
      "The Grampians",
      "The Pennines",
      "Snowdonia",
      "The Mourne Mountains",
    ],
    correct: "Snowdonia",
  },
  {
    question: "What is the national day of Northern Ireland called?",
    options: [
      "St. Patrick's Day",
      "St. Andrew's Day",
      "St. George's Day",
      "St. David's Day",
    ],
    correct: "St. Patrick's Day",
  },
  {
    question: "What is the capital city of Wales?",
    options: ["Edinburgh", "Cardiff", "Belfast", "Glasgow"],
    correct: "Cardiff",
  },
  {
    question: "Which court is the highest in the UK judiciary?",
    options: [
      "The High Court",
      "The Supreme Court",
      "The Court of Appeal",
      "The Crown Court",
    ],
    correct: "The Supreme Court",
  },
  {
    question: "Who was the first Tudor monarch of England?",
    options: ["Henry VII", "Henry VIII", "Elizabeth I", "Richard III"],
    correct: "Henry VII",
  },
  {
    question:
      "What is the name of the funding system for higher education in the UK?",
    options: [
      "Student Loan Scheme",
      "Education Grant System",
      "Scholarship Fund",
      "Tuition Fee Loan",
    ],
    correct: "Student Loan Scheme",
  },
  {
    question:
      "Which year is considered the beginning of the Norman Conquest of England?",
    options: ["1000", "1066", "1215", "1485"],
    correct: "1066",
  },
  {
    question: "Which festival marks the end of the harvest season in Britain?",
    options: ["Easter", "Halloween", "Guy Fawkes Night", "Harvest Festival"],
    correct: "Harvest Festival",
  },
  {
    question:
      "Which British ceremony is known for the phrase 'The Queen is dead, long live the King'?",
    options: [
      "Coronation",
      "State Opening of Parliament",
      "Accession Council",
      "Royal Wedding",
    ],
    correct: "Accession Council",
  },
  {
    question: "What is traditionally eaten on Shrove Tuesday in Britain?",
    options: ["Meat pie", "Pancakes", "Fish and chips", "Yorkshire pudding"],
    correct: "Pancakes",
  },
  {
    question:
      "The annual Notting Hill Carnival in London celebrates which culture?",
    options: ["Indian", "African-Caribbean", "Irish", "Scottish"],
    correct: "African-Caribbean",
  },
  {
    question: "The British habit of 'queueing' is often seen as a symbol of:",
    options: [
      "Rebellion",
      "Patience and respect",
      "Impatience",
      "Class difference",
    ],
    correct: "Patience and respect",
  },
  {
    question:
      "Which day is associated with exchanging cards and flowers in the UK?",
    options: ["Valentine's Day", "Boxing Day", "St. George's Day", "May Day"],
    correct: "Valentine's Day",
  },
  {
    question: "The changing of the guard takes place at:",
    options: [
      "Windsor Castle",
      "Tower of London",
      "Buckingham Palace",
      "Big Ben",
    ],
    correct: "Buckingham Palace",
  },
  {
    question: "The British currency is officially known as:",
    options: ["Euro", "Pound sterling", "Dollar", "Franc"],
    correct: "Pound sterling",
  },
  {
    question: "London's financial district is called:",
    options: ["The Circle", "The Square Mile", "The Docklands", "The Exchange"],
    correct: "The Square Mile",
  },
  {
    question: "Which British sport introduced the concept of 'fair play'?",
    options: ["Football", "Cricket", "Tennis", "Rugby"],
    correct: "Cricket",
  },
  {
    id: 101,
    question: "Wimbledon is famous for which sport?",
    options: ["Cricket", "Rugby", "Tennis", "Golf"],
    correct: "Tennis",
  },
  {
    id: 102,
    question: "Which sector contributes the most to the UK economy?",
    options: ["Agriculture", "Industry", "Services", "Energy"],
    correct: "Services",
  },
  {
    id: 103,
    question: "The Premier League was officially formed in:",
    options: ["1982", "1992", "2000", "1978"],
    correct: "1992",
  },
  {
    id: 104,
    question: "The Bank of England was founded in:",
    options: ["1650", "1694", "1750", "1801"],
    correct: "1694",
  },
  {
    id: 105,
    question:
      "Which of the following cities is a major industrial center of the UK?",
    options: ["Brighton", "Manchester", "Oxford", "Cambridge"],
    correct: "Manchester",
  },
  {
    id: 106,
    question: "The USA is bordered by which two countries?",
    options: [
      "Canada and Mexico",
      "Cuba and Canada",
      "Mexico and Brazil",
      "Canada and Panama",
    ],
    correct: "Canada and Mexico",
  },
  {
    id: 107,
    question: "The longest river in the USA is:",
    options: ["Colorado", "Missouri", "Mississippi", "Hudson"],
    correct: "Mississippi",
  },
  {
    id: 108,
    question: "Which U.S. state is known as 'The Land of 10,000 Lakes'?",
    options: ["Florida", "Minnesota", "Michigan", "Alaska"],
    correct: "Minnesota",
  },
  {
    id: 109,
    question:
      "The Rocky Mountains are primarily located in which part of the USA?",
    options: ["East", "South", "West", "North"],
    correct: "West",
  },
  {
    id: 110,
    question: "The largest state by area in the USA is:",
    options: ["Texas", "California", "Alaska", "Montana"],
    correct: "Alaska",
  },
  {
    id: 111,
    question: "The U.S. has vast reserves of which natural resource?",
    options: ["Gold only", "Oil, coal, and natural gas", "Silver", "Diamonds"],
    correct: "Oil, coal, and natural gas",
  },
  {
    id: 112,
    question: "The most populated U.S. state is:",
    options: ["Texas", "California", "Florida", "New York"],
    correct: "California",
  },
  {
    id: 113,
    question: "The Great Plains are known for producing:",
    options: ["Rice", "Wheat and corn", "Coffee", "Cotton"],
    correct: "Wheat and corn",
  },
  {
    id: 114,
    question: "The Great Lakes are shared between the USA and:",
    options: ["Mexico", "Canada", "Alaska", "Greenland"],
    correct: "Canada",
  },
  {
    id: 115,
    question: "Which ocean borders the eastern coast of the USA?",
    options: ["Pacific", "Arctic", "Atlantic", "Indian"],
    correct: "Atlantic",
  },
  {
    id: 116,
    question: "The U.S. Declaration of Independence was signed in:",
    options: ["1776", "1789", "1800", "1812"],
    correct: "1776",
  },
  {
    id: 117,
    question: "The American Civil War was fought between:",
    options: [
      "USA and Britain",
      "North and South states",
      "East and West",
      "Colonies and France",
    ],
    correct: "North and South states",
  },
  {
    id: 118,
    question: "Abraham Lincoln was assassinated in:",
    options: ["1865", "1870", "1880", "1901"],
    correct: "1865",
  },
  {
    id: 119,
    question: "The Wall Street Crash occurred in:",
    options: ["1914", "1929", "1939", "1945"],
    correct: "1929",
  },
  {
    id: 120,
    question: "The first man to walk on the moon was:",
    options: ["Buzz Aldrin", "John Glenn", "Neil Armstrong", "Yuri Gagarin"],
    correct: "Neil Armstrong",
  },
  {
    id: 121,
    question:
      "What is the traditional British celebration that marks the end of the harvest season?",
    options: ["Halloween", "Harvest Festival", "Bonfire Night", "Easter"],
    correct: "Harvest Festival",
  },
  {
    id: 122,
    question: "Which region of the UK is known for its mountainous terrain?",
    options: ["Northern Ireland", "Wales", "England", "Both A and B"],
    correct: "Wales",
  },
  {
    id: 123,
    question:
      "When did Great Britain officially become the United Kingdom of Great Britain?",
    options: ["1707", "1801", "1927", "1952"],
    correct: "1707",
  },
  {
    id: 124,
    question: "In which year did Scotland vote on independence from the UK?",
    options: ["2010", "2014", "2016", "2020"],
    correct: "2014",
  },
  {
    id: 125,
    question:
      "Which British city is known for its football clubs, including Manchester United and Manchester City?",
    options: ["London", "Birmingham", "Manchester", "Liverpool"],
    correct: "Manchester",
  },
  {
    id: 126,
    question: "What is the main language of Great Britain?",
    options: ["French", "English", "German", "Spanish"],
    correct: "English",
  },
  {
    id: 127,
    question: "Which writer is considered the greatest in British literature?",
    options: [
      "Mark Twain",
      "William Shakespeare",
      "Ernest Hemingway",
      "Leo Tolstoy",
    ],
    correct: "William Shakespeare",
  },
  {
    id: 128,
    question: "What traditional British custom involves tea and snacks?",
    options: ["Morning tea", "Afternoon tea", "Evening tea", "Royal tea"],
    correct: "Afternoon tea",
  },
  {
    id: 129,
    question: "Which city is the cultural center of Great Britain?",
    options: ["Manchester", "Liverpool", "London", "Oxford"],
    correct: "London",
  },
  {
    id: 130,
    question: "Which British music band is world-famous?",
    options: ["ABBA", "BTS", "The Beatles", "U2"],
    correct: "The Beatles",
  },
  {
    id: 131,
    question: "Which sport originated in Great Britain?",
    options: ["Basketball", "Baseball", "Football", "Ice hockey"],
    correct: "Football",
  },
  {
    id: 132,
    question: "Which tennis tournament is held in Great Britain?",
    options: ["Roland Garros", "US Open", "Wimbledon", "Australian Open"],
    correct: "Wimbledon",
  },
  {
    id: 133,
    question: "Which holiday is celebrated on December 25 in Great Britain?",
    options: ["Easter", "Christmas", "Halloween", "New Year"],
    correct: "Christmas",
  },
  {
    id: 134,
    question: "Which countries are part of Great Britain?",
    options: [
      "England, Ireland, Wales",
      "England, Scotland, Wales",
      "England, Scotland, Wales, Northern Ireland",
      "England, Wales only",
    ],
    correct: "England, Scotland, Wales",
  },
  {
    id: 135,
    question: "What values are important in British culture?",
    options: [
      "Speed and risk",
      "Politeness and respect",
      "Loudness and pride",
      "Wealth and power",
    ],
    correct: "Politeness and respect",
  },
  {
    id: 136,
    question: "What are British people especially known for?",
    options: ["Loud behavior", "Politeness", "Aggressiveness", "Carelessness"],
    correct: "Politeness",
  },
  {
    id: 137,
    question: "What is an important social rule in Great Britain?",
    options: ["Shouting", "Queuing", "Running", "Interrupting"],
    correct: "Queuing",
  },
  {
    id: 138,
    question: "What is traditionally served at afternoon tea?",
    options: [
      "Coffee and bread",
      "Tea, sandwiches, and cakes",
      "Juice and fruit",
      "Milk and cereal",
    ],
    correct: "Tea, sandwiches, and cakes",
  },
  {
    id: 139,
    question: "Which tradition involves soldiers in special uniforms?",
    options: [
      "Royal speech",
      "Changing of the Guard",
      "Bonfire Night",
      "Afternoon tea",
    ],
    correct: "Changing of the Guard",
  },
  {
    id: 140,
    question: "What is celebrated on November 5 in Great Britain?",
    options: ["Christmas", "Easter", "Bonfire Night", "Halloween"],
    correct: "Bonfire Night",
  },
  {
    id: 141,
    question:
      "Which two countries make up the island of Great Britain along with England?",
    options: [
      "Wales and Northern Ireland",
      "Wales and Scotland",
      "Scotland and Ireland",
      "Ireland and Northern Ireland",
    ],
    correct: "Wales and Scotland",
  },
  {
    id: 142,
    question: "What is the largest lake in Great Britain?",
    options: ["Windermere", "Loch Ness", "Lough Neagh", "Lake District"],
    correct: "Loch Ness",
  },
  {
    id: 143,
    question: "Which battle in 1066 was a turning point in British history?",
    options: [
      "Battle of Hastings",
      "Battle of Waterloo",
      "Battle of Bosworth",
      "Battle of Agincourt",
    ],
    correct: "Battle of Hastings",
  },
  {
    id: 144,
    question: "Who was the British monarch during World War II?",
    options: ["George V", "Edward VIII", "George VI", "Elizabeth II"],
    correct: "George VI",
  },
  {
    id: 145,
    question: "Which mountain range is found in Scotland?",
    options: [
      "The Alps",
      "The Rockies",
      "The Pennines",
      "The Scottish Highlands",
    ],
    correct: "The Scottish Highlands",
  },
  {
    id: 146,
    question:
      "Which event marked the beginning of the Norman Conquest of England?",
    options: [
      "Battle of Hastings",
      "Battle of Agincourt",
      "Signing of the Magna Carta",
      "Battle of Waterloo",
    ],
    correct: "Battle of Hastings",
  },
  {
    id: 147,
    question: "What is the primary role of the UK Prime Minister?",
    options: [
      "To serve as a symbolic leader",
      "To make judicial decisions",
      "To lead the government and the Parliament",
      "To act as the head of the army",
    ],
    correct: "To lead the government and the Parliament",
  },
  {
    id: 148,
    question: "What is the main mountain range in Wales?",
    options: [
      "The Pennines",
      "The Scottish Highlands",
      "The Cambrian Mountains",
      "The Andes",
    ],
    correct: "The Cambrian Mountains",
  },
  {
    id: 149,
    question: "Which body of water borders Wales to the west?",
    options: [
      "The North Sea",
      "The Irish Sea",
      "The English Channel",
      "The Atlantic Ocean",
    ],
    correct: "The Irish Sea",
  },
  {
    id: 150,
    question: "Which Scottish poet is famous for writing 'Auld Lang Syne'?",
    options: [
      "William Wordsworth",
      "Robert Burns",
      "Samuel Taylor Coleridge",
      "Sir Walter Scott",
    ],
    correct: "Robert Burns",
  },
  {
    id: 151,
    question: "Which food is a traditional British dish?",
    options: ["Pizza", "Sushi", "Fish and chips", "Tacos"],
    correct: "Fish and chips",
  },
  {
    id: 152,
    question: "Which sport is closely connected with British tradition?",
    options: ["Basketball", "Baseball", "Cricket", "Ice hockey"],
    correct: "Cricket",
  },
  {
    id: 153,
    question: "Which tennis tournament is held in Great Britain?",
    options: ["US Open", "Wimbledon", "Roland Garros", "Australian Open"],
    correct: "Wimbledon",
  },
  {
    id: 154,
    question: "Which holiday is celebrated with gifts and family gatherings?",
    options: ["Easter", "Bonfire Night", "Christmas", "St. George's Day"],
    correct: "Christmas",
  },
  {
    id: 155,
    question: "What does British tradition mainly reflect?",
    options: ["History and respect", "Wealth", "Speed", "Technology"],
    correct: "History and respect",
  },
  {
    id: 156,
    question: "Which city is the financial center of Great Britain?",
    options: ["Manchester", "Birmingham", "London", "Liverpool"],
    correct: "London",
  },
  {
    id: 157,
    question: "What is the London Stock Exchange related to?",
    options: ["Education", "Finance", "Sport", "Media"],
    correct: "Finance",
  },
  {
    id: 158,
    question: "Which sector plays the biggest role in the British economy?",
    options: ["Agriculture", "Services", "Fishing", "Mining"],
    correct: "Services",
  },
  {
    id: 159,
    question: "Which sport is the most popular in Great Britain?",
    options: ["Cricket", "Rugby", "Football", "Tennis"],
    correct: "Football",
  },
  {
    id: 160,
    question: "What is the name of the top football league in England?",
    options: ["La Liga", "Serie A", "Premier League", "Bundesliga"],
    correct: "Premier League",
  },
  {
    id: 161,
    question: "Which tennis tournament is held in Great Britain?",
    options: ["US Open", "Australian Open", "Wimbledon", "Roland Garros"],
    correct: "Wimbledon",
  },
  {
    id: 162,
    question: "Which sport originated in Great Britain?",
    options: ["Basketball", "Football", "Baseball", "Ice hockey"],
    correct: "Football",
  },
  {
    id: 163,
    question: "Which British organization is a famous public broadcaster?",
    options: ["CNN", "BBC", "NBC", "Fox"],
    correct: "BBC",
  },
  {
    id: 164,
    question: "Which newspaper is British?",
    options: [
      "The New York Times",
      "The Guardian",
      "The Washington Post",
      "USA Today",
    ],
    correct: "The Guardian",
  },
  {
    id: 165,
    question: "What do British mass media mainly provide?",
    options: [
      "Entertainment only",
      "Information and news",
      "Sports training",
      "Food services",
    ],
    correct: "Information and news",
  },
  {
    id: 166,
    question:
      "Which religious denomination is the majority in Northern Ireland?",
    options: ["Protestant", "Catholic", "Muslim", "Jewish"],
    correct: "Catholic",
  },
  {
    id: 167,
    question: "What is the 'National Curriculum' in England?",
    options: [
      "A curriculum for private schools",
      "A set of standards and guidelines for what children should be taught in schools",
      "A university-level syllabus",
      "An optional curriculum for international students",
    ],
    correct:
      "A set of standards and guidelines for what children should be taught in schools",
  },
  {
    id: 168,
    question:
      "Which organization is responsible for inspecting schools in England?",
    options: [
      "The National Union of Teachers (NUT)",
      "Ofsted (Office for Standards in Education)",
      "The Department for Education",
      "The British Council",
    ],
    correct: "Ofsted (Office for Standards in Education)",
  },
  {
    id: 169,
    question: "What do the Isles of Scilly export in early spring?",
    options: ["Flowers", "Fish", "Vegetables", "Corns"],
    correct: "Flowers",
  },
  {
    id: 170,
    question: "What is the name of the devolved parliament in Scotland?",
    options: [
      "The Scottish Assembly",
      "The Welsh Assembly",
      "The Northern Ireland Assembly",
      "The Scottish Parliament",
    ],
    correct: "The Scottish Parliament",
  },
  {
    id: 171,
    question:
      "What was the name of the period in British history marked by a strong sense of imperial power and national pride?",
    options: [
      "The Age of Enlightenment",
      "The Victorian Era",
      "The Edwardian Era",
      "The Roaring Twenties",
    ],
    correct: "The Victorian Era",
  },
  {
    id: 172,
    question: "Which of these events led to the decline of the British Empire?",
    options: [
      "The First World War",
      "The Second World War",
      "The rise of nationalism in colonized territories",
      "All of the above",
    ],
    correct: "All of the above",
  },
  {
    id: 173,
    question: "Who was the first female Prime Minister of Great Britain?",
    options: [
      "Margaret Thatcher",
      "Theresa May",
      "Elizabeth II",
      "Winston Churchill",
    ],
    correct: "Margaret Thatcher",
  },
  {
    id: 174,
    question:
      "What was the name of the economic and social reforms implemented in Britain in the 1980s?",
    options: [
      "The New Deal",
      "The Great Society",
      "Thatcherism",
      "The Welfare State",
    ],
    correct: "Thatcherism",
  },
  {
    id: 175,
    question: "Which of these countries is NOT part of the United Kingdom?",
    options: ["Wales", "Scotland", "Northern Ireland", "Republic of Ireland"],
    correct: "Republic of Ireland",
  },
  {
    id: 176,
    question: "Which art form is especially popular in Great Britain?",
    options: ["Opera", "Theatre", "Ballet", "Circus"],
    correct: "Theatre",
  },
  {
    id: 177,
    question: "What is a traditional British drink?",
    options: ["Coffee", "Green tea", "Black tea", "Milk"],
    correct: "Black tea",
  },
  {
    id: 178,
    question: "Which holiday is celebrated on 25 December?",
    options: ["Easter", "Christmas", "Halloween", "New Year"],
    correct: "Christmas",
  },
  {
    id: 179,
    question: "What is a common British tradition in the afternoon?",
    options: ["Lunch", "Dinner", "Afternoon tea", "Supper"],
    correct: "Afternoon tea",
  },
  {
    id: 180,
    question: "Which celebration includes costumes and pumpkins?",
    options: ["Easter", "Halloween", "Christmas", "Bonfire Night"],
    correct: "Halloween",
  },
  {
    id: 181,
    question: "What does 'Bonfire Night' celebrate?",
    options: ["King's birthday", "Guy Fawkes Night", "New Year", "Harvest"],
    correct: "Guy Fawkes Night",
  },
  {
    id: 182,
    question: "British people usually value:",
    options: ["Loud behavior", "Politeness", "Aggression", "Silence only"],
    correct: "Politeness",
  },
  {
    id: 183,
    question: "Which is a famous British cultural event?",
    options: ["Cannes Festival", "Wimbledon", "Oktoberfest", "Carnival"],
    correct: "Wimbledon",
  },
  {
    id: 184,
    question: "Which music group is British?",
    options: ["BTS", "The Beatles", "ABBA", "Imagine Dragons"],
    correct: "The Beatles",
  },
  {
    id: 185,
    question: "What is typical in British communication?",
    options: [
      "Direct criticism",
      "Polite language",
      "Loud talking",
      "Emotional speech",
    ],
    correct: "Polite language",
  },
  {
    id: 186,
    question: "Which battle in 1066 was a turning point in British history?",
    options: [
      "Battle of Hastings",
      "Battle of Waterloo",
      "Battle of Bosworth",
      "Battle of Agincourt",
    ],
    correct: "Battle of Hastings",
  },
  {
    id: 187,
    question: "Who was the first Norman king of England?",
    options: [
      "Alfred the Great",
      "William the Conqueror",
      "Edward the Confessor",
      "Henry II",
    ],
    correct: "William the Conqueror",
  },
  {
    id: 188,
    question: "Which queen ruled during England's Golden Age?",
    options: ["Mary I", "Elizabeth I", "Victoria", "Elizabeth II"],
    correct: "Elizabeth I",
  },
  {
    id: 189,
    question: "Which Prime Minister led Britain during most of World War II?",
    options: [
      "Winston Churchill",
      "Neville Chamberlain",
      "Margaret Thatcher",
      "Tony Blair",
    ],
    correct: "Winston Churchill",
  },
  {
    id: 190,
    question:
      "In what year did the United Kingdom officially come into existence?",
    options: ["1603", "1801", "1707", "1922"],
    correct: "1801",
  },
  {
    id: 191,
    question: "What is the main currency of Great Britain?",
    options: ["Euro", "Dollar", "Pound sterling", "Franc"],
    correct: "Pound sterling",
  },
  {
    id: 192,
    question: "Which sport is very popular in Great Britain?",
    options: ["Basketball", "Football", "Baseball", "Hockey"],
    correct: "Football",
  },
  {
    id: 193,
    question: "Where did modern football originate?",
    options: ["USA", "Brazil", "Great Britain", "Germany"],
    correct: "Great Britain",
  },
  {
    id: 194,
    question: "Which tennis tournament is held in London?",
    options: ["Roland Garros", "Wimbledon", "US Open", "Australian Open"],
    correct: "Wimbledon",
  },
  {
    id: 195,
    question: "What is BBC?",
    options: ["A bank", "A newspaper", "A media company", "A school"],
    correct: "A media company",
  },
  {
    id: 196,
    question: "Which industry is important for the UK economy?",
    options: [
      "Agriculture only",
      "Heavy mining",
      "Services and finance",
      "Fishing",
    ],
    correct: "Services and finance",
  },
  {
    id: 197,
    question: "What does mass media include?",
    options: [
      "Only books",
      "TV, radio, newspapers",
      "Only internet",
      "Only magazines",
    ],
    correct: "TV, radio, newspapers",
  },
  {
    id: 198,
    question: "Which city is an economic center?",
    options: ["Cardiff", "Edinburgh", "London", "Belfast"],
    correct: "London",
  },
  {
    id: 199,
    question: "Which sport uses bats and balls?",
    options: ["Rugby", "Cricket", "Tennis", "Golf"],
    correct: "Cricket",
  },
  {
    id: 200,
    question: "The UK economy is known for being:",
    options: ["Closed", "Agricultural", "Industrial and service-based", "Weak"],
    correct: "Industrial and service-based",
  },

  {
    id: 201,
    question:
      "Which of the following universities is NOT part of the prestigious 'Russell Group' in the UK?",
    options: [
      "University of Oxford",
      "University of Cambridge",
      "University of Edinburgh",
      "University of Buckingham",
    ],
    correct: "University of Buckingham",
  },
  {
    id: 202,
    question:
      "What year was the Declaration of Independence of the USA signed?",
    options: ["1775", "1776", "1783", "1787"],
    correct: "1776",
  },
  {
    id: 203,
    question: "What was the primary purpose of the Emancipation Proclamation?",
    options: [
      "To abolish slavery in all U.S. states",
      "To free slaves in Confederate states",
      "To grant women the right to vote",
      "To establish equal rights for all citizens",
    ],
    correct: "To free slaves in Confederate states",
  },
  {
    id: 204,
    question: "Which U.S. territory was purchased from France in 1803?",
    options: ["Alaska", "Texas", "Florida", "Louisiana Territory"],
    correct: "Louisiana Territory",
  },
  {
    id: 205,
    question: "Which two oceans border the United States?",
    options: [
      "Atlantic and Pacific",
      "Pacific and Indian",
      "Atlantic and Arctic",
      "Indian and Arctic",
    ],
    correct: "Atlantic and Pacific",
  },
  {
    id: 206,
    question: "Which U.S. state is not part of the mainland?",
    options: ["Texas", "Hawaii", "Florida", "Alaska"],
    correct: "Hawaii",
  },
  {
    id: 207,
    question: "What mountain range runs along the eastern United States?",
    options: [
      "Rocky Mountains",
      "Appalachian Mountains",
      "Sierra Nevada",
      "Cascade Range",
    ],
    correct: "Appalachian Mountains",
  },
  {
    id: 208,
    question: "What is the largest ethnic minority group in the United States?",
    options: [
      "Asian Americans",
      "African Americans",
      "Hispanic/Latino Americans",
      "Native Americans",
    ],
    correct: "Hispanic/Latino Americans",
  },
  {
    id: 209,
    question:
      "What is the most abundant fossil fuel resource in the United States?",
    options: ["Coal", "Natural Gas", "Oil", "Uranium"],
    correct: "Coal",
  },
  {
    id: 210,
    question:
      "Where is the largest concentration of oil production in the U.S.?",
    options: [
      "Gulf of Mexico",
      "Appalachian Basin",
      "Rocky Mountains",
      "Great Lakes",
    ],
    correct: "Gulf of Mexico",
  },
  {
    id: 211,
    question: "What is an important part of British cultural life?",
    options: ["Agriculture", "Theatre", "Mining", "Transport"],
    correct: "Theatre",
  },
  {
    id: 212,
    question: "Which system does Great Britain have?",
    options: ["Republic", "Dictatorship", "Monarchy", "Empire"],
    correct: "Monarchy",
  },
  {
    id: 213,
    question: "British traditions are usually passed through:",
    options: ["Schools only", "Families", "Media", "Government"],
    correct: "Families",
  },
  {
    id: 214,
    question: "What is Parliament responsible for?",
    options: ["Sports", "Laws", "Media", "Education"],
    correct: "Laws",
  },
  {
    id: 215,
    question: "Which is a British traditional celebration?",
    options: [
      "Thanksgiving",
      "Halloween",
      "Guy Fawkes Night",
      "Independence Day",
    ],
    correct: "Guy Fawkes Night",
  },
  {
    id: 216,
    question: "The economy of Great Britain is based on:",
    options: [
      "Agriculture only",
      "Industry and services",
      "Fishing only",
      "Tourism only",
    ],
    correct: "Industry and services",
  },
  {
    id: 217,
    question: "Football is a popular British:",
    options: ["Dance", "Game", "Sport", "Festival"],
    correct: "Sport",
  },
  {
    id: 218,
    question: "BBC is an example of:",
    options: ["Industry", "Parliament", "Mass media", "Trade"],
    correct: "Mass media",
  },
  {
    id: 219,
    question: "Newspapers are part of:",
    options: ["Education", "Mass media", "Demography", "Culture only"],
    correct: "Mass media",
  },
  {
    id: 220,
    question: "Which sport originated in Britain?",
    options: ["Basketball", "Cricket", "Karate", "Skiing"],
    correct: "Cricket",
  },
  {
    id: 221,
    question:
      "Which U.S. state is the largest producer of agricultural products like wheat and corn?",
    options: ["Texas", "Iowa", "Kansas", "California"],
    correct: "Iowa",
  },
  {
    id: 222,
    question: "The Great Plains are known for which natural resource?",
    options: ["Coal deposits", "Iron ore", "Forests", "Agricultural land"],
    correct: "Agricultural land",
  },
  {
    id: 223,
    question: "What is the largest sector of the U.S. economy?",
    options: ["Agriculture", "Manufacturing", "Services", "Mining"],
    correct: "Services",
  },
  {
    id: 224,
    question: "Which city is considered the financial capital of the USA?",
    options: ["Chicago", "Los Angeles", "New York City", "San Francisco"],
    correct: "New York City",
  },
  {
    id: 225,
    question: "What is the central bank of the United States called?",
    options: [
      "Federal Reserve",
      "Bank of America",
      "U.S. Treasury",
      "National Bank",
    ],
    correct: "Federal Reserve",
  },
  {
    id: 226,
    question:
      "The USA is the world's largest producer of which agricultural product?",
    options: ["Corn", "Rice", "Coffee", "Sugar"],
    correct: "Corn",
  },
  {
    id: 227,
    question:
      "Which U.S. city is famous for its technology-driven economy, often called Silicon Valley?",
    options: ["Seattle", "San Jose", "Austin", "Boston"],
    correct: "San Jose",
  },
  {
    id: 228,
    question: "Which sport is known as 'America's pastime'?",
    options: ["Basketball", "Hockey", "American Football", "Baseball"],
    correct: "Baseball",
  },
  {
    id: 229,
    question:
      "What is the name of the professional American football league in the USA?",
    options: ["NBA", "NFL", "MLB", "MLS"],
    correct: "NFL",
  },
  {
    id: 230,
    question: "London is:",
    options: [
      "Only an industrial city",
      "Only a historical city",
      "The capital and cultural center",
      "A small town",
    ],
    correct: "The capital and cultural center",
  },
  {
    id: 231,
    question: "London is famous for:",
    options: ["Deserts", "Museums", "Mountains", "Forests"],
    correct: "Museums",
  },
  {
    id: 232,
    question: "Big Ben is located in:",
    options: ["Manchester", "London", "Liverpool", "Oxford"],
    correct: "London",
  },
  {
    id: 233,
    question: "London is also an important:",
    options: ["Village", "Port", "Farm", "Desert city"],
    correct: "Port",
  },
  {
    id: 234,
    question: "Which river flows through London?",
    options: ["Severn", "Thames", "Trent", "Clyde"],
    correct: "Thames",
  },
  {
    id: 235,
    question: "Great Britain is located in:",
    options: ["Asia", "Africa", "Europe", "America"],
    correct: "Europe",
  },
  {
    id: 236,
    question: "The UK consists of:",
    options: [
      "Two countries",
      "Three countries",
      "Four countries",
      "Five countries",
    ],
    correct: "Four countries",
  },
  {
    id: 237,
    question: "Demography studies:",
    options: ["Weather", "Population", "Economy", "Culture"],
    correct: "Population",
  },
  {
    id: 238,
    question: "Britain's climate is generally:",
    options: ["Very hot", "Very cold", "Mild", "Dry"],
    correct: "Mild",
  },
  {
    id: 239,
    question: "Which is a natural resource of Great Britain?",
    options: ["Gold", "Coal", "Diamonds", "Uranium"],
    correct: "Coal",
  },
  {
    id: 240,
    question: "The 'Stanley Cup' is awarded in which sport in USA?",
    options: ["Basketball", "Ice Hockey", "Baseball", "Soccer"],
    correct: "Ice Hockey",
  },
  {
    id: 241,
    question:
      "Which university rivalry is famous for the annual 'Iron Bowl' in college football?",
    options: [
      "Auburn vs. Alabama",
      "Michigan vs. Ohio State",
      "USC vs. UCLA",
      "Texas vs. Oklahoma",
    ],
    correct: "Auburn vs. Alabama",
  },
  {
    id: 242,
    question: "What is the largest film production center in the USA?",
    options: ["Hollywood", "New York City", "Atlanta", "Chicago"],
    correct: "Hollywood",
  },
  {
    id: 243,
    question:
      "What is the name of the annual awards for excellence in the film industry in the USA?",
    options: ["Tony Awards", "Emmy Awards", "Grammy Awards", "Academy Awards"],
    correct: "Academy Awards",
  },
  {
    id: 244,
    question:
      "Which American media company is known for its animated films and theme parks?",
    options: ["Pixar", "DreamWorks", "Disney", "Universal Studios"],
    correct: "Disney",
  },
  {
    id: 245,
    question: "Which religion has the largest following in the United States?",
    options: ["Islam", "Judaism", "Christianity", "Hinduism"],
    correct: "Christianity",
  },
  {
    id: 246,
    question: "Population means:",
    options: ["Land area", "Number of people", "Government", "Economy"],
    correct: "Number of people",
  },
  {
    id: 247,
    question: "The UK has a large:",
    options: [
      "Desert",
      "Forest only",
      "Urban population",
      "Nomadic population",
    ],
    correct: "Urban population",
  },
  {
    id: 248,
    question: "British media includes:",
    options: ["Only TV", "Only radio", "TV, radio, newspapers", "Books only"],
    correct: "TV, radio, newspapers",
  },
  {
    id: 249,
    question: "Trade helps to:",
    options: [
      "Stop economy",
      "Develop economy",
      "Reduce population",
      "Change climate",
    ],
    correct: "Develop economy",
  },
  {
    id: 250,
    question: "London is not only a capital but also a:",
    options: ["Cultural center", "Village", "Resort", "Farm"],
    correct: "Cultural center",
  },
  {
    id: 251,
    question: "Customs show:",
    options: ["Weather", "Social behavior", "Economy", "Geography"],
    correct: "Social behavior",
  },
  {
    id: 252,
    question: "British traditions are known for being:",
    options: ["New", "Modern only", "Long-lasting", "Temporary"],
    correct: "Long-lasting",
  },
  {
    id: 253,
    question: "Sport in Britain is important for:",
    options: ["Health and culture", "Industry", "Law", "Politics"],
    correct: "Health and culture",
  },
  {
    id: 254,
    question: "Natural resources are used in:",
    options: ["Demography", "Industry", "Literature", "Art"],
    correct: "Industry",
  },
  {
    id: 255,
    question: "The UK is surrounded by:",
    options: ["Deserts", "Mountains", "Seas", "Forests"],
    correct: "Seas",
  },
  {
    id: 256,
    question: "What mainly makes Great Britain's climate mild?",
    options: [
      "High altitude",
      "Polar winds",
      "Surrounding seas and oceans",
      "Dense forests",
    ],
    correct: "Surrounding seas and oceans",
  },
  {
    id: 257,
    question: "Great Britain is separated from Europe by:",
    options: [
      "The Mediterranean Sea",
      "The English Channel",
      "The Baltic Sea",
      "The North Atlantic",
    ],
    correct: "The English Channel",
  },
  {
    id: 258,
    question: "Which city is the capital of Great Britain?",
    options: ["Manchester", "Birmingham", "London", "Oxford"],
    correct: "London",
  },
  {
    id: 259,
    question: "London is important internationally because it is a:",
    options: [
      "Military center only",
      "Global financial and cultural city",
      "Small historical town",
      "Port city only",
    ],
    correct: "Global financial and cultural city",
  },
  {
    id: 260,
    question: "The British population is mainly:",
    options: ["Rural", "Nomadic", "Urban", "Agricultural"],
    correct: "Urban",
  },
  {
    id: 261,
    question: "Which factor helped Britain become a naval power?",
    options: [
      "Mountain chains",
      "Island location",
      "Desert climate",
      "Limited coastline",
    ],
    correct: "Island location",
  },
  {
    id: 262,
    question: "British culture is known for its:",
    options: [
      "Informality",
      "Strict silence",
      "Politeness and respect",
      "Aggressiveness",
    ],
    correct: "Politeness and respect",
  },
  {
    id: 263,
    question: "The tradition of saying 'please' and 'thank you' reflects:",
    options: [
      "Law requirements",
      "Social etiquette",
      "Religious belief",
      "Economic need",
    ],
    correct: "Social etiquette",
  },
  {
    id: 264,
    question: "Tea drinking in Britain is considered:",
    options: [
      "A modern habit",
      "A national tradition",
      "A sport activity",
      "A business meeting",
    ],
    correct: "A national tradition",
  },
  {
    id: 265,
    question: "Queueing in Great Britain shows:",
    options: [
      "Competition",
      "Social equality",
      "Respect for order",
      "Fear of rules",
    ],
    correct: "Respect for order",
  },
  {
    id: 266,
    question:
      "Who was the President during the Great Depression and World War II in USA?",
    options: [
      "Herbert Hoover",
      "Franklin D. Roosevelt",
      "Harry S. Truman",
      "Dwight D. Eisenhower",
    ],
    correct: "Franklin D. Roosevelt",
  },
  {
    id: 267,
    question:
      "What was the main goal of the Civil Rights Movement in the 1950s and 1960s?",
    options: [
      "To achieve racial equality and end segregation",
      "To expand U.S. territory",
      "To fight communism",
      "To promote industrialization",
    ],
    correct: "To achieve racial equality and end segregation",
  },
  {
    id: 268,
    question:
      "What was the significance of the Supreme Court case 'Brown v. Board of Education'?",
    options: [
      "It legalized segregation",
      "It abolished slavery",
      "It gave women the right to vote",
      "It desegregated public schools",
    ],
    correct: "It desegregated public schools",
  },
  {
    id: 269,
    question: "What is the largest river in the United States by length?",
    options: [
      "Mississippi River",
      "Missouri River",
      "Colorado River",
      "Yukon River",
    ],
    correct: "Missouri River",
  },
  {
    id: 270,
    question: "How many states are in the contiguous United States?",
    options: ["48", "49", "50", "51"],
    correct: "48",
  },
  {
    id: 271,
    question:
      "What is the approximate population of the United States (2023 estimate)?",
    options: ["250 million", "300 million", "330 million", "400 million"],
    correct: "330 million",
  },
  {
    id: 272,
    question: "Which state has the largest population in the United States?",
    options: ["Texas", "New York", "Florida", "California"],
    correct: "California",
  },
  {
    id: 273,
    question: "Which religion has the largest following in the United States?",
    options: ["Islam", "Judaism", "Christianity", "Hinduism"],
    correct: "Christianity",
  },
  {
    id: 274,
    question:
      "Which holiday is widely celebrated in the USA as a time for family gatherings and giving thanks?",
    options: ["Independence Day", "Thanksgiving", "Memorial Day", "Labor Day"],
    correct: "Thanksgiving",
  },
  {
    id: 275,
    question:
      "Which genre of music originated in the USA and is often associated with African American communities in the early 20th century?",
    options: ["Jazz", "Classical", "Reggae", "Flamenco"],
    correct: "Jazz",
  },
  {
    id: 276,
    question: "The Industrial Revolution began in Great Britain in the:",
    options: ["15th century", "17th century", "18th century", "20th century"],
    correct: "18th century",
  },
  {
    id: 277,
    question: "One result of the Industrial Revolution was:",
    options: [
      "Decrease in cities",
      "Growth of factories",
      "Reduction of trade",
      "Population decline",
    ],
    correct: "Growth of factories",
  },
  {
    id: 278,
    question: "Today, the most important economic sector in Britain is:",
    options: ["Agriculture", "Industry", "Services", "Fishing"],
    correct: "Services",
  },
  {
    id: 279,
    question: "Which industry is London especially famous for?",
    options: ["Farming", "Banking and finance", "Mining", "Fishing"],
    correct: "Banking and finance",
  },
  {
    id: 280,
    question: "Football in Great Britain is:",
    options: [
      "Recently introduced",
      "A minor sport",
      "Deeply rooted in history",
      "Played only by professionals",
    ],
    correct: "Deeply rooted in history",
  },
  {
    id: 281,
    question: "Which sport event is held at Wimbledon?",
    options: ["Football", "Cricket", "Tennis", "Rugby"],
    correct: "Tennis",
  },
  {
    id: 282,
    question: "Wimbledon is important because it represents:",
    options: [
      "Local sport only",
      "British tradition and prestige",
      "Youth sports",
      "Seasonal games",
    ],
    correct: "British tradition and prestige",
  },
  {
    id: 283,
    question: "Cricket is traditionally associated with:",
    options: [
      "British cultural values",
      "American culture",
      "Asian countries",
      "Winter sports",
    ],
    correct: "British cultural values",
  },
  {
    id: 284,
    question: "The BBC is best described as a:",
    options: [
      "Private company",
      "Advertising agency",
      "Public service broadcaster",
      "Political organization",
    ],
    correct: "Public service broadcaster",
  },
  {
    id: 285,
    question: "The main role of the BBC is to:",
    options: [
      "Sell products",
      "Support political parties",
      "Inform, educate and entertain",
      "Control public opinion",
    ],
    correct: "Inform, educate and entertain",
  },
  {
    id: 286,
    question:
      "What is the name of the famous cultural movement that flourished in Harlem, New York, during the 1920s?",
    options: [
      "The Renaissance Movement",
      "The Harlem Renaissance",
      "The Civil Rights Movement",
      "The Beat Generation",
    ],
    correct: "The Harlem Renaissance",
  },
  {
    id: 287,
    question: "Which U.S. city is known for its Mardi Gras celebrations?",
    options: ["Miami", "San Francisco", "New Orleans", "Chicago"],
    correct: "New Orleans",
  },
  {
    id: 288,
    question:
      "What is the predominant style of architecture in Washington, D.C.'s government buildings?",
    options: ["Gothic", "Modern", "Neoclassical", "Baroque"],
    correct: "Neoclassical",
  },
  {
    id: 289,
    question: "What is Broadway famous for?",
    options: [
      "Art galleries",
      "Musical theater and plays",
      "Historical landmarks",
      "Opera performances",
    ],
    correct: "Musical theater and plays",
  },
  {
    id: 290,
    question:
      "Which American author wrote 'The Great Gatsby,' a novel often considered a classic of U.S. literature?",
    options: [
      "F. Scott Fitzgerald",
      "Mark Twain",
      "Ernest Hemingway",
      "John Steinbeck",
    ],
    correct: "F. Scott Fitzgerald",
  },
  {
    id: 291,
    question:
      "What is the most popular sport for high school and college marching bands in the USA?",
    options: ["Basketball", "Baseball", "American Football", "Soccer"],
    correct: "American Football",
  },
  {
    id: 292,
    question:
      "Which iconic American painting by Grant Wood features a farmer and a woman standing in front of a house?",
    options: [
      "The Persistence of Memory",
      "The Nighthawks",
      "Whistler's Mother",
      "American Gothic",
    ],
    correct: "American Gothic",
  },
  {
    id: 293,
    question:
      "What is the main government body responsible for education policy in the USA?",
    options: [
      "Department of Education",
      "Ministry of Education",
      "Bureau of Academic Affairs",
      "Education Council",
    ],
    correct: "Department of Education",
  },
  {
    id: 294,
    question:
      "Which of the following is considered part of higher education in the USA?",
    options: [
      "Community Colleges",
      "High Schools",
      "Elementary Schools",
      "Trade Schools",
    ],
    correct: "Community Colleges",
  },
  {
    id: 295,
    question:
      "Which standardized test is commonly required for admission to U.S. undergraduate programs?",
    options: ["GRE", "SAT", "GMAT", "TOEFL"],
    correct: "SAT",
  },
  {
    id: 296,
    question: "British mass media is influential because it:",
    options: [
      "Avoids serious topics",
      "Shapes public opinion",
      "Focuses only on sports",
      "Is controlled by schools",
    ],
    correct: "Shapes public opinion",
  },
  {
    id: 297,
    question: "Newspapers in Britain are known for:",
    options: [
      "Complete neutrality",
      "Strong political views",
      "Lack of readers",
      "Limited distribution",
    ],
    correct: "Strong political views",
  },
  {
    id: 298,
    question: "The UK population is culturally diverse because of:",
    options: ["Tourism only", "Immigration", "Agriculture", "Climate"],
    correct: "Immigration",
  },
  {
    id: 299,
    question: "Great Britain's demographic structure shows:",
    options: [
      "Low urbanization",
      "Cultural diversity",
      "Young population only",
      "Rural dominance",
    ],
    correct: "Cultural diversity",
  },
  {
    id: 300,
    question: "Which natural feature is common in Great Britain?",
    options: ["Deserts", "Volcanoes", "Green hills and plains", "Glaciers"],
    correct: "Green hills and plains",
  },
  {
    id: 301,
    question: "Britain's green landscapes are mainly due to",
    options: ["Extreme heat", "Regular rainfall", "Dry winds", "Sandy soil"],
    correct: "Regular rainfall",
  },
  {
    id: 302,
    question: "National parks in Great Britain are created to:",
    options: [
      "Support factories",
      "Protect nature",
      "Build cities",
      "Reduce tourism",
    ],
    correct: "Protect nature",
  },
  {
    id: 303,
    question: "Which sea borders Great Britain to the east?",
    options: ["Irish Sea", "Mediterranean Sea", "North Sea", "Black Sea"],
    correct: "North Sea",
  },
  {
    id: 304,
    question: "England, Scotland and Wales together form:",
    options: [
      "The United Kingdom",
      "Great Britain",
      "Europe",
      "The British Isles",
    ],
    correct: "Great Britain",
  },
  {
    id: 305,
    question: "British national identity is based on:",
    options: [
      "Rejecting tradition",
      "Only modern values",
      "Balance of tradition and modern life",
      "Cultural isolation",
    ],
    correct: "Balance of tradition and modern life",
  },
  {
    id: 306,
    question:
      "What is the name of the legislation aimed at improving educational standards in the USA, introduced in 2001?",
    options: [
      "Every Student Succeeds Act",
      "No Child Left Behind Act",
      "Elementary and Secondary Education Act",
      "Race to the Top Act",
    ],
    correct: "No Child Left Behind Act",
  },
  {
    id: 307,
    question:
      "Which U.S. degree is typically pursued by students aiming to practice medicine?",
    options: ["J.D.", "Ph.D.", "M.D.", "MBA"],
    correct: "M.D.",
  },
  {
    id: 308,
    question:
      "What is the primary purpose of the GED in the U.S. education system?",
    options: [
      "Prepare students for college entrance exams",
      "Certify high school-level academic skills for non-graduates",
      "Train teachers for high school programs",
      "Measure teaching effectiveness",
    ],
    correct: "Certify high school-level academic skills for non-graduates",
  },
  {
    id: 309,
    question:
      "Which U.S. state is the largest producer of agricultural products like wheat and corn?",
    options: ["Texas", "Iowa", "Kansas", "California"],
    correct: "Iowa",
  },
  {
    id: 310,
    question:
      "Where is the largest concentration of oil production in the U.S.?",
    options: [
      "Gulf of Mexico",
      "Appalachian Basin",
      "Rocky Mountains",
      "Great Lakes",
    ],
    correct: "Gulf of Mexico",
  },
  {
    id: 311,
    question: "London is often called the 'heart' of Great Britain because:",
    options: [
      "It is the oldest city",
      "It is the largest port",
      "It concentrates key institutions",
      "It has the best climate",
    ],
    correct: "It concentrates key institutions",
  },
  {
    id: 312,
    question: "British customs are preserved mainly through:",
    options: ["Laws", "Media control", "Family and society", "Schools only"],
    correct: "Family and society",
  },
  {
    id: 313,
    question: "Which holiday is strongly associated with British culture?",
    options: ["Halloween", "Christmas", "Independence Day", "Thanksgiving"],
    correct: "Christmas",
  },
  {
    id: 314,
    question: "The Union Jack is:",
    options: [
      "A sport symbol",
      "A royal crown",
      "The national flag",
      "A newspaper",
    ],
    correct: "The national flag",
  },
  {
    id: 315,
    question: "British humour is often described as",
    options: ["Loud", "Aggressive", "Dry and ironic", "Emotional"],
    correct: "Dry and ironic",
  },
  {
    id: 316,
    question: "Which river flows through London?",
    options: ["Seine", "Thames", "Rhine", "Danube"],
    correct: "Thames",
  },
  {
    id: 317,
    question: "The UK is a constitutional:",
    options: ["Republic", "Empire", "Monarchy", "Federation"],
    correct: "Monarchy",
  },
  {
    id: 318,
    question: "The Queen/King in Britain mainly has",
    options: ["Absolute power", "No role", "Symbolic role", "Military control"],
    correct: "Symbolic role",
  },
  {
    id: 319,
    question: "British education is known for:",
    options: [
      "Informality",
      "Strong traditions",
      "Lack of discipline",
      "Short history",
    ],
    correct: "Strong traditions",
  },
  {
    id: 320,
    question: "Great Britain's global influence is mostly due to its:",
    options: [
      "Size",
      "Population",
      "Historical development and institutions",
      "Climate",
    ],
    correct: "Historical development and institutions",
  },
  {
    id: 321,
    question:
      "Which factor has most strongly influenced British culture over centuries?",
    options: [
      "Extreme climate",
      "Its island location and historical invasions",
      "Desert traditions",
      "Modern technology only",
    ],
    correct: "Its island location and historical invasions",
  },
  {
    id: 322,
    question:
      "What does the British tradition of 'afternoon tea' mainly represent?",
    options: [
      "A religious ceremony",
      "A symbol of social interaction and hospitality",
      "A working-class protest",
      "A royal law",
    ],
    correct: "A symbol of social interaction and hospitality",
  },
  {
    id: 323,
    question:
      "Which form of entertainment has played a key role in British cultural life since the 16th century?",
    options: ["Cinema", "Opera", "Theatre", "Television"],
    correct: "Theatre",
  },
  {
    id: 324,
    question: "Why is literature especially important in British culture?",
    options: [
      "Britain has very few scientists",
      "British writers shaped the English language and global literature",
      "Books are cheaper in Britain",
      "Schools do not teach other subjects",
    ],
    correct:
      "British writers shaped the English language and global literature",
  },
  {
    id: 325,
    question: "What is one cultural role of British museums?",
    options: [
      "Only to attract tourists",
      "To preserve national history and educate society",
      "To sell ancient objects",
      "To replace schools",
    ],
    correct: "To preserve national history and educate society",
  },
  {
    id: 326,
    question:
      "How do traditional festivals contribute to British cultural life?",
    options: [
      "They reduce working hours",
      "They help people forget history",
      "They connect modern society with historical traditions",
      "They are only for children",
    ],
    correct: "They connect modern society with historical traditions",
  },
  {
    id: 327,
    question: "What makes British humour culturally distinctive?",
    options: [
      "It is always loud",
      "It often uses irony and understatement",
      "It avoids social topics",
      "It is the same as American humour",
    ],
    correct: "It often uses irony and understatement",
  },
  {
    id: 328,
    question:
      "Which music style originated in Great Britain and influenced global culture?",
    options: ["Classical Indian music", "Jazz", "Rock and Britpop", "Reggae"],
    correct: "Rock and Britpop",
  },
  {
    id: 329,
    question: "What role does sport play in British cultural life?",
    options: [
      "It has no cultural meaning",
      "It is only a school subject",
      "It helps build national identity and community spirit",
      "It is only for professionals",
    ],
    correct: "It helps build national identity and community spirit",
  },
  {
    id: 330,
    question: "Why is cultural diversity important in modern British society?",
    options: [
      "It weakens national identity",
      "It limits traditions",
      "It enriches culture through different customs and ideas",
      "It removes British values",
    ],
    correct: "It enriches culture through different customs and ideas",
  },
  {
    id: 331,
    question: "Why do many British people prefer to stand in a queue?",
    options: [
      "It saves time",
      "It shows respect and fairness",
      "It is required by law",
      "It is taught in schools",
    ],
    correct: "It shows respect and fairness",
  },
  {
    id: 332,
    question: "What is traditionally added first when making British tea?",
    options: ["Sugar", "Lemon", "Milk", "Honey"],
    correct: "Milk",
  },
  {
    id: 333,
    question:
      "Which day is commonly associated with family meals and relaxation in Britain?",
    options: ["Friday", "Saturday", "Sunday", "Monday"],
    correct: "Sunday",
  },
  {
    id: 334,
    question: "What does 'small talk' usually include in British culture?",
    options: [
      "Politics and money",
      "Personal problems",
      "The weather and daily life",
      "Arguments and debates",
    ],
    correct: "The weather and daily life",
  },
  {
    id: 335,
    question: "Why is punctuality important in Great Britain?",
    options: [
      "It shows intelligence",
      "It shows discipline and respect",
      "It avoids fines",
      "It is a tradition from the royal family",
    ],
    correct: "It shows discipline and respect",
  },
  {
    id: 336,
    question: "What is a traditional British greeting in formal situations?",
    options: ["Hugging", "Kissing on the cheek", "Shaking hands", "Bowing"],
    correct: "Shaking hands",
  },
  {
    id: 337,
    question: "What food is most commonly linked with British traditions?",
    options: ["Pizza", "Sushi", "Fish and chips", "Tacos"],
    correct: "Fish and chips",
  },
  {
    id: 338,
    question: "What happens during the Changing of the Guard ceremony?",
    options: [
      "Soldiers train for war",
      "Guards change duty at the palace",
      "The Queen gives a speech",
      "Tourists enter the palace",
    ],
    correct: "Guards change duty at the palace",
  },
  {
    id: 339,
    question: "Why do British people often say 'sorry'?",
    options: [
      "They are always guilty",
      "It is a habit showing politeness",
      "It is required socially",
      "It replaces saying 'thank you'",
    ],
    correct: "It is a habit showing politeness",
  },
  {
    id: 340,
    question: "What is considered impolite in British culture?",
    options: [
      "Saying 'please'",
      "Speaking loudly in public places",
      "Waiting your turn",
      "Saying 'excuse me'",
    ],
    correct: "Speaking loudly in public places",
  },
  {
    id: 341,
    question:
      "Which sector plays the most important role in the modern British economy?",
    options: ["Agriculture", "Heavy industry", "Services", "Mining"],
    correct: "Services",
  },
  {
    id: 342,
    question:
      "London is considered a global financial centre mainly because of:",
    options: [
      "Tourism",
      "The London Stock Exchange",
      "Manufacturing factories",
      "Agricultural trade",
    ],
    correct: "The London Stock Exchange",
  },
  {
    id: 343,
    question:
      "What sport is traditionally associated with British public schools?",
    options: ["Basketball", "Cricket", "Ice hockey", "Volleyball"],
    correct: "Cricket",
  },
  {
    id: 344,
    question:
      "Which football league is watched by millions of people worldwide?",
    options: [
      "The Championship",
      "League One",
      "The Premier League",
      "The National League",
    ],
    correct: "The Premier League",
  },
  {
    id: 345,
    question: "Why is football so important in British society?",
    options: [
      "It is part of daily culture and community life",
      "It replaces other sports",
      "It is required in schools",
      "It is free to watch everywhere",
    ],
    correct: "It is part of daily culture and community life",
  },
  {
    id: 346,
    question: "What is the BBC best known for?",
    options: [
      "Advertising products",
      "Reality shows only",
      "Public service broadcasting",
      "Sports betting programs",
    ],
    correct: "Public service broadcasting",
  },
  {
    id: 347,
    question: "How is the BBC mainly funded?",
    options: [
      "Commercial sponsorship",
      "Television licence fee",
      "Private donations",
      "Newspaper sales",
    ],
    correct: "Television licence fee",
  },
  {
    id: 348,
    question:
      "Which newspaper type is popular for celebrity news and headlines in Britain?",
    options: [
      "Broadsheets",
      "Academic journals",
      "Tabloids",
      "Official reports",
    ],
    correct: "Tabloids",
  },
  {
    id: 349,
    question: "What role does mass media play in British democracy?",
    options: [
      "It controls the government",
      "It informs and influences public opinion",
      "It replaces elections",
      "It writes the laws",
    ],
    correct: "It informs and influences public opinion",
  },
  {
    id: 350,
    question: "Why are sports events important for the British economy?",
    options: [
      "They reduce unemployment completely",
      "They attract tourism and investment",
      "They replace education",
      "They stop inflation",
    ],
    correct: "They attract tourism and investment",
  },
  {
    id: 351,
    question: "Which part of London is famous for theatre performances?",
    options: ["East End", "West End", "Soho", "Brixton"],
    correct: "West End",
  },
  {
    id: 352,
    question: "The Proms is a famous British ______.",
    options: [
      "Film festival",
      "Music festival",
      "Theatre performance",
      "Fashion show",
    ],
    correct: "Music festival",
  },
  {
    id: 353,
    question:
      "The British Museum is mainly known for its collections of ______.",
    options: [
      "Modern art",
      "Ancient artefacts",
      "British literature",
      "Sports history",
    ],
    correct: "Ancient artefacts",
  },
  {
    id: 354,
    question: "The Beatles originated from which British city?",
    options: ["Manchester", "Liverpool", "Bristol", "Oxford"],
    correct: "Liverpool",
  },
  {
    id: 355,
    question: "Which gallery in London displays contemporary and modern art?",
    options: [
      "Tate Modern",
      "National Gallery",
      "V&A Museum",
      "Wallace Collection",
    ],
    correct: "Tate Modern",
  },
  {
    id: 356,
    question:
      "Afternoon Tea is a British tradition that includes tea and ______.",
    options: ["Soup", "Pizza", "Sandwiches and cakes", "Fried food"],
    correct: "Sandwiches and cakes",
  },
  {
    id: 357,
    question: "William Shakespeare is known as a famous British ______.",
    options: ["Scientist", "Composer", "Playwright", "Painter"],
    correct: "Playwright",
  },
  {
    id: 358,
    question: "The UK is made up of how many countries?",
    options: ["2", "3", "4", "5"],
    correct: "4",
  },
  {
    id: 359,
    question:
      "Which festival is known for Caribbean culture and street parades?",
    options: [
      "Diwali Festival",
      "Notting Hill Carnival",
      "Glastonbury",
      "Hogmanay",
    ],
    correct: "Notting Hill Carnival",
  },
  {
    id: 360,
    question: "Which museum houses the Rosetta Stone?",
    options: [
      "Tate Britain",
      "British Museum",
      "Imperial War Museum",
      "Science Museum",
    ],
    correct: "British Museum",
  },
  {
    id: 361,
    question: "The West End is mainly associated with ______.",
    options: ["Sports", "Theatre", "Architecture", "Politics"],
    correct: "Theatre",
  },
  {
    id: 362,
    question: "Which of the following is a traditional British folk dance?",
    options: ["Salsa", "Morris dance", "Tango", "Ceilidh"],
    correct: "Morris dance",
  },
  {
    id: 363,
    question: "Who wrote 'Oliver Twist'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "Tolkien",
      "Arthur Conan Doyle",
    ],
    correct: "Charles Dickens",
  },
  {
    id: 364,
    question: "Which British city is famous for its annual Fringe Festival?",
    options: ["Cardiff", "Edinburgh", "London", "York"],
    correct: "Edinburgh",
  },
  {
    id: 365,
    question: "The term 'multiculturalism' in the UK refers to ______.",
    options: [
      "One culture only",
      "Many cultures living together",
      "No immigration",
      "British culture only",
    ],
    correct: "Many cultures living together",
  },
  {
    id: 366,
    question: "BBC stands for ______.",
    options: [
      "British Broadcasting Corporation",
      "British Business Council",
      "British Book Centre",
      "British Ballet Company",
    ],
    correct: "British Broadcasting Corporation",
  },
  {
    id: 367,
    question: "Glastonbury Festival is mainly a ______ festival.",
    options: ["Classical music", "Pop/rock music", "Ballet", "Jazz"],
    correct: "Pop/rock music",
  },
  {
    id: 368,
    question: "Which institution is known for classical music education?",
    options: [
      "Royal College of Music",
      "Oxford Brookes",
      "King's College",
      "LSE",
    ],
    correct: "Royal College of Music",
  },
  {
    id: 369,
    question: "The National Gallery mainly displays ______.",
    options: [
      "Modern art",
      "European paintings",
      "Islamic art",
      "Maritime objects",
    ],
    correct: "European paintings",
  },
  {
    id: 370,
    question: "Who is a famous British contemporary artist?",
    options: ["Leonardo da Vinci", "Picasso", "Banksy", "Frida Kahlo"],
    correct: "Banksy",
  },
  {
    id: 371,
    question:
      "Which of the following is a famous British author of detective fiction?",
    options: ["Agatha Christie", "Homer", "Tolstoy", "Goethe"],
    correct: "Agatha Christie",
  },
  {
    id: 372,
    question:
      "Which city is home to the British film industry's 'Pinewood Studios'?",
    options: ["London", "Manchester", "Buckinghamshire", "Birmingham"],
    correct: "Buckinghamshire",
  },
  {
    id: 373,
    question: "The Royal Shakespeare Company is based in ______.",
    options: ["London", "Stratford-upon-Avon", "Glasgow", "Belfast"],
    correct: "Stratford-upon-Avon",
  },
  {
    id: 374,
    question: "A traditional British musical form is ______.",
    options: ["Opera", "K-pop", "Reggae", "Salsa"],
    correct: "Opera",
  },
  {
    id: 375,
    question: "Which building is known for classical concerts in the UK?",
    options: [
      "Royal Albert Hall",
      "O2 Arena",
      "Tower Bridge",
      "Wembley Stadium",
    ],
    correct: "Royal Albert Hall",
  },
  {
    id: 376,
    question: "'British cuisine' traditionally includes ______.",
    options: ["Sushi", "Fish and chips", "Burrito", "Pasta"],
    correct: "Fish and chips",
  },
  {
    id: 377,
    question: "Jane Austen is best known for writing ______.",
    options: [
      "Science fiction",
      "Romance novels",
      "Horror stories",
      "Poetry anthologies",
    ],
    correct: "Romance novels",
  },
  {
    id: 378,
    question: "Which UK organisation supports national museums and heritage?",
    options: ["UNESCO", "Arts Council England", "FIFA", "World Bank"],
    correct: "Arts Council England",
  },
  {
    id: 379,
    question: "Which of the following is a British TV series famous worldwide?",
    options: ["Breaking Bad", "Sherlock", "Vikings", "Narcos"],
    correct: "Sherlock",
  },
  {
    id: 380,
    question: "Contemporary British culture is strongly shaped by ______.",
    options: [
      "Isolation",
      "Multicultural influences",
      "Only old traditions",
      "No foreign influence",
    ],
    correct: "Multicultural influences",
  },
  {
    id: 381,
    question: "The UK's oldest university is located in which city?",
    options: ["Oxford", "London", "Manchester", "Edinburgh"],
    correct: "Oxford",
  },
  {
    id: 382,
    question:
      "Which British city is famous for its annual International Festival of Arts?",
    options: ["Bristol", "Glasgow", "Edinburgh", "Newcastle"],
    correct: "Edinburgh",
  },
  {
    id: 383,
    question: "The Globe Theatre is connected with which famous playwright?",
    options: [
      "Jane Austen",
      "Charles Dickens",
      "George Orwell",
      "William Shakespeare",
    ],
    correct: "William Shakespeare",
  },
  {
    id: 384,
    question:
      "Which museum in London is known for its collection of modern art?",
    options: [
      "Tate Modern",
      "Natural History Museum",
      "Victoria and Albert Museum",
      "Science Museum",
    ],
    correct: "Tate Modern",
  },
  {
    id: 385,
    question: "The Beatles started their music career in which city?",
    options: ["Birmingham", "Manchester", "Liverpool", "Cardiff"],
    correct: "Liverpool",
  },
  {
    id: 386,
    question:
      "Which of these is a traditional British cultural event held on November 5th?",
    options: [
      "Easter Parade",
      "Guy Fawkes Night",
      "Summer Fest",
      "Winter Lights",
    ],
    correct: "Guy Fawkes Night",
  },
  {
    id: 387,
    question:
      "The British Academy Film Awards (BAFTA) are related to which field?",
    options: ["Sports", "Literature", "Cinema", "Architecture"],
    correct: "Cinema",
  },
  {
    id: 388,
    question:
      "Stonehenge is an important cultural monument located in which part of England?",
    options: ["Cornwall", "Wiltshire", "Kent", "Surrey"],
    correct: "Wiltshire",
  },
  {
    id: 389,
    question: "Which English writer created Pride and Prejudice?",
    options: [
      "Mary Shelley",
      "Jane Austen",
      "Virginia Woolf",
      "Agatha Christie",
    ],
    correct: "Jane Austen",
  },
  {
    id: 390,
    question: "Which British city is known for its historic Roman baths?",
    options: ["Bath", "York", "Plymouth", "Sheffield"],
    correct: "Bath",
  },
  {
    id: 391,
    question: "On which day do British people celebrate Bonfire Night?",
    options: ["5th November", "1st January", "14th February", "25th December"],
    correct: "5th November",
  },
  {
    id: 392,
    question: "Which traditional British food is usually eaten on Sunday?",
    options: ["Sushi", "Pizza", "Sunday Roast", "Pasta"],
    correct: "Sunday Roast",
  },
  {
    id: 393,
    question: "What do British people traditionally drink at 5 o'clock?",
    options: ["Milk", "Coffee", "Lemonade", "Tea"],
    correct: "Tea",
  },
  {
    id: 394,
    question:
      "Which celebration includes decorating the house with pumpkins and costumes?",
    options: ["Easter", "Halloween", "New Year", "May Day"],
    correct: "Halloween",
  },
  {
    id: 395,
    question: "Which flower is the national symbol of England?",
    options: ["Thistle", "Rose", "Daffodil", "Shamrock"],
    correct: "Rose",
  },
  {
    id: 396,
    question: "On what occasion do British people exchange Christmas presents?",
    options: ["December 31", "December 25", "January 1", "February 14"],
    correct: "December 25",
  },
  {
    id: 397,
    question: "St. Patrick's Day is connected with which part of the UK?",
    options: ["Scotland", "Wales", "Northern Ireland", "England"],
    correct: "Northern Ireland",
  },
  {
    id: 398,
    question: "Which event marks the beginning of the British summer?",
    options: [
      "Pancake Day",
      "Summer Festival",
      "Trooping the Colour",
      "Winter Solstice",
    ],
    correct: "Trooping the Colour",
  },
  {
    id: 399,
    question:
      "Which British tradition involves dancing around a decorated pole?",
    options: ["Maypole Dance", "Harvest Festival", "Hogmanay", "Boxing Day"],
    correct: "Maypole Dance",
  },
  {
    id: 400,
    question: "What do British people usually do on Boxing Day?",
    options: [
      "Plant trees",
      "Give gifts to workers and the poor",
      "Go trick-or-treating",
      "Paint eggs",
    ],
    correct: "Give gifts to workers and the poor",
  },
  {
    id: 401,
    question: "Which city is considered the financial centre of Great Britain?",
    options: ["London", "Glasgow", "Manchester", "Birmingham"],
    correct: "London",
  },
  {
    id: 402,
    question: "The Bank of England was established in which century?",
    options: ["15th century", "17th century", "19th century", "21st century"],
    correct: "17th century",
  },
  {
    id: 403,
    question:
      "Which sport is traditionally considered the national sport of England?",
    options: ["Rugby", "Cricket", "Tennis", "Basketball"],
    correct: "Cricket",
  },
  {
    id: 404,
    question: "Wimbledon Championships are famous for which sport?",
    options: ["Golf", "Tennis", "Boxing", "Swimming"],
    correct: "Tennis",
  },
  {
    id: 405,
    question:
      "Which British football club is known for the nickname 'The Red Devils'?",
    options: ["Chelsea", "Manchester United", "Arsenal", "Liverpool"],
    correct: "Manchester United",
  },
  {
    id: 406,
    question:
      "Which British TV channel is known worldwide for news broadcasting?",
    options: ["FOX", "BBC", "CBC", "NBC"],
    correct: "BBC",
  },
  {
    id: 407,
    question:
      "The British newspaper The Times mainly focuses on which type of content?",
    options: [
      "Sports only",
      "Serious political and economic news",
      "Comics",
      "Fashion",
    ],
    correct: "Serious political and economic news",
  },
  {
    id: 408,
    question: "The service sector in the UK economy includes which industry?",
    options: ["Coal mining", "Banking and insurance", "Fishing", "Agriculture"],
    correct: "Banking and insurance",
  },
  {
    id: 409,
    question:
      "Which British sports event is known as the most famous boat race?",
    options: [
      "Oxford–Cambridge Boat Race",
      "London–Bristol Rowing Cup",
      "Whitehall River Competition",
      "Royal Regatta Race",
    ],
    correct: "Oxford–Cambridge Boat Race",
  },
  {
    id: 410,
    question: "Which British radio station is the oldest national broadcaster?",
    options: ["Virgin Radio", "BBC Radio", "Radio X", "Capital FM"],
    correct: "BBC Radio",
  },
  {
    id: 411,
    question: "London is located on which river?",
    options: ["Thames", "Severn", "Clyde", "Trent"],
    correct: "Thames",
  },
  {
    id: 412,
    question:
      "London is not only the capital of Great Britain, but also a major center of ______.",
    options: ["Agriculture", "Finance", "Fishing", "Farming"],
    correct: "Finance",
  },
  {
    id: 413,
    question: "Which famous clock tower is located in London?",
    options: ["Big Ben", "Eiffel Tower", "Empire State", "CN Tower"],
    correct: "Big Ben",
  },
  {
    id: 414,
    question: "Which place is the official residence of the British monarch?",
    options: [
      "Buckingham Palace",
      "Kensington Museum",
      "Tower Bridge",
      "London Eye",
    ],
    correct: "Buckingham Palace",
  },
  {
    id: 415,
    question:
      "London has one of the world's oldest underground systems called the ______.",
    options: ["Metro", "Subway", "Tube"],
    correct: "Tube",
  },
  {
    id: 416,
    question: "Which London museum offers free entry to visitors?",
    options: ["Louvre", "British Museum", "MoMA", "Uffizi"],
    correct: "British Museum",
  },
  {
    id: 417,
    question: "The City of London is mainly known for its ______.",
    options: ["Beaches", "Finance and business", "Farms", "Mountains"],
    correct: "Finance and business",
  },
  {
    id: 418,
    question: "Which park is one of the largest royal parks in London?",
    options: ["Central Park", "Hyde Park", "Stanley Park", "Regent Park"],
    correct: "Hyde Park",
  },
  {
    id: 419,
    question:
      "London is famous for its multicultural society, meaning it has people from ______.",
    options: [
      "Only Europe",
      "Africa only",
      "Asia only",
      "Many different countries",
    ],
    correct: "Many different countries",
  },
  {
    id: 420,
    question: "Which building is home to the UK Parliament?",
    options: [
      "White House",
      "Houses of Parliament (Westminster Palace)",
      "Windsor Castle",
      "Oxford Palace",
    ],
    correct: "Houses of Parliament (Westminster Palace)",
  },
  {
    id: 421,
    question: "Great Britain is located in which part of Europe?",
    options: [
      "Western Europe",
      "Eastern Europe",
      "Southern Europe",
      "Northern Europe",
    ],
    correct: "Western Europe",
  },
  {
    id: 422,
    question:
      "Great Britain is separated from mainland Europe by which water body?",
    options: [
      "Atlantic Ocean",
      "English Channel",
      "Mediterranean Sea",
      "Baltic Sea",
    ],
    correct: "English Channel",
  },
  {
    id: 423,
    question: "Which is the largest country in Great Britain by population?",
    options: ["Scotland", "Wales", "England", "Northern Ireland"],
    correct: "England",
  },
  {
    id: 424,
    question: "The climate of Great Britain is mostly ______.",
    options: ["Desert", "Continental", "Tropical", "Mild and temperate"],
    correct: "Mild and temperate",
  },
  {
    id: 425,
    question: "Which natural resource is Great Britain historically known for?",
    options: ["Diamonds", "Coal", "Oil sands", "Gold"],
    correct: "Coal",
  },
  {
    id: 426,
    question: "The population density of Great Britain is generally ______.",
    options: [
      "Very low",
      "Very high in urban areas",
      "Zero in the south",
      "Only high in villages",
    ],
    correct: "Very high in urban areas",
  },
  {
    id: 427,
    question: "The longest river in Great Britain is the ______.",
    options: ["Thames", "Clyde", "Severn", "Trent"],
    correct: "Severn",
  },
  {
    id: 428,
    question: "Which region of the UK has the most mountains?",
    options: ["Wales", "England", "Northern Ireland", "Scotland"],
    correct: "Scotland",
  },
  {
    id: 429,
    question:
      "The North Sea provides Great Britain with which important natural resource?",
    options: ["Uranium", "Natural gas and oil", "Rubber", "Timber"],
    correct: "Natural gas and oil",
  },
  {
    id: 450,
    question: "Most of Great Britain's population lives in ______.",
    options: [
      "Rural areas",
      "Coastal villages only",
      "Urban and industrial cities",
      "Uninhabited islands",
    ],
    correct: "Urban and industrial cities",
  },
  {
    id: 451,
    question: "The UK economy is mainly based on:",
    options: ["Agriculture", "Heavy industry", "Services", "Fishing"],
    correct: "Services",
  },
  {
    id: 452,
    question: "London is one of the world's leading centres for:",
    options: ["Farming", "Finance and banking", "Mining", "Oil production"],
    correct: "Finance and banking",
  },
  {
    id: 453,
    question: "The British currency is called:",
    options: ["Euro", "Dollar", "Pound sterling", "Franc"],
    correct: "Pound sterling",
  },
  {
    id: 454,
    question: "Which sport is considered the most popular in Great Britain?",
    options: ["Basketball", "Cricket", "Football", "Tennis"],
    correct: "Football",
  },
  {
    id: 455,
    question: "Wimbledon is famous for:",
    options: ["Football", "Rugby", "Tennis", "Golf"],
    correct: "Tennis",
  },
  {
    id: 456,
    question: "Cricket originated in:",
    options: ["USA", "Australia", "England", "India"],
    correct: "England",
  },
  {
    id: 457,
    question: "The BBC is an example of:",
    options: [
      "Newspaper",
      "Magazine",
      "Television and radio broadcaster",
      "Internet provider",
    ],
    correct: "Television and radio broadcaster",
  },
  {
    id: 458,
    question: "Which newspaper is a British daily newspaper?",
    options: ["The New York Times", "Le Monde", "The Times", "Pravda"],
    correct: "The Times",
  },
  {
    id: 459,
    question: "Mass media mainly provides people with:",
    options: ["Food", "Transport", "Information and news", "Medicine"],
    correct: "Information and news",
  },
  {
    id: 460,
    question: "Rugby is especially popular in:",
    options: [
      "England and Wales",
      "England, Wales and Scotland",
      "Only England",
      "Northern Ireland only",
    ],
    correct: "England, Wales and Scotland",
  },
  {
    id: 461,
    question: "London is also the capital of:",
    options: ["Wales", "Scotland", "England", "Northern Ireland"],
    correct: "England",
  },
  {
    id: 462,
    question: "The River Thames flows through:",
    options: ["Manchester", "Liverpool", "London", "Birmingham"],
    correct: "London",
  },
  {
    id: 463,
    question: "London is famous for Big Ben, which is actually:",
    options: ["A tower", "A palace", "A bell", "A bridge"],
    correct: "A bell",
  },
  {
    id: 464,
    question: "Buckingham Palace is:",
    options: [
      "Prime Minister's house",
      "The King's official residence",
      "A museum",
      "A parliament building",
    ],
    correct: "The King's official residence",
  },
  {
    id: 465,
    question: "London is an important centre for:",
    options: ["Agriculture", "Politics and culture", "Mining", "Fishing"],
    correct: "Politics and culture",
  },
  {
    id: 466,
    question: "The British Parliament is located in:",
    options: [
      "Westminster",
      "The Houses of Parliament",
      "Downing Street",
      "Trafalgar Square",
    ],
    correct: "Westminster",
  },
  {
    id: 467,
    question: "London Underground is also called:",
    options: ["Metro", "Subway", "The Tube", "Tunnel"],
    correct: "The Tube",
  },
  {
    id: 468,
    question: "In which year did London become the capital of England?",
    options: ["1066", "12th century", "1485", "1707"],
    correct: "12th century",
  },
  {
    id: 469,
    question: "The Palace of Westminster is the meeting place of:",
    options: [
      "The Royal Family",
      "The Supreme Court",
      "The UK Parliament",
      "The BBC",
    ],
    correct: "The UK Parliament",
  },
  {
    id: 470,
    question: "Which river flows through London?",
    options: ["Severn", "Trent", "Thames", "Avon"],
    correct: "Thames",
  },
  {
    id: 471,
    question: "The UK lies between which latitudes?",
    options: ["30°–40° N", "40°–50° N", "50°–60° N", "60°–70° N"],
    correct: "50°–60° N",
  },
  {
    id: 472,
    question: "Which body of water lies to the east of Great Britain?",
    options: ["Atlantic Ocean", "Irish Sea", "English Channel", "North Sea"],
    correct: "North Sea",
  },
  {
    id: 473,
    question: "The most densely populated part of the UK is:",
    options: ["Scotland", "Wales", "Northern Ireland", "England"],
    correct: "England",
  },
  {
    id: 474,
    question: "What is the approximate population of the United Kingdom?",
    options: ["45 million", "55 million", "67 million", "80 million"],
    correct: "67 million",
  },
  {
    id: 475,
    question:
      "Which natural resource was the basis of Britain's Industrial Revolution?",
    options: ["Oil", "Gas", "Iron ore", "Coal"],
    correct: "Coal",
  },
  {
    id: 476,
    question: "Oil and gas in the UK are mainly extracted from the:",
    options: ["Irish Sea", "English Channel", "Atlantic Ocean", "North Sea"],
    correct: "North Sea",
  },
  {
    id: 477,
    question: "The UK climate is classified as:",
    options: ["Continental", "Mediterranean", "Tropical", "Temperate maritime"],
    correct: "Temperate maritime",
  },
  {
    id: 478,
    question: "Which mountain range is the highest in Great Britain?",
    options: [
      "Pennines",
      "Cambrian Mountains",
      "Scottish Highlands",
      "Cotswolds",
    ],
    correct: "Scottish Highlands",
  },
  {
    id: 479,
    question: "Ben Nevis is located in:",
    options: ["England", "Wales", "Northern Ireland", "Scotland"],
    correct: "Scotland",
  },
  {
    id: 480,
    question: "Great Britain is separated from mainland Europe by the:",
    options: ["North Sea", "Irish Sea", "English Channel", "Baltic Sea"],
    correct: "English Channel",
  },
  {
    id: 481,
    question:
      "Which factor has had the greatest influence on the mild climate of Great Britain?",
    options: [
      "Mountain ranges",
      "Latitude only",
      "The surrounding seas and oceans",
      "Dense forests",
    ],
    correct: "The surrounding seas and oceans",
  },
  {
    id: 482,
    question: "London is described as a global city mainly because it is:",
    options: [
      "The oldest city in Europe",
      "A political capital only",
      "A major financial, cultural, and communication center",
      "The largest city in the UK",
    ],
    correct: "A major financial, cultural, and communication center",
  },
  {
    id: 483,
    question:
      "Which statement best explains why Great Britain developed strong maritime traditions?",
    options: [
      "It has large deserts",
      "It is an island surrounded by seas",
      "It has a large population",
      "It has a continental climate",
    ],
    correct: "It is an island surrounded by seas",
  },
  {
    id: 484,
    question:
      "British cultural behavior is often associated with politeness because:",
    options: [
      "It is required by law",
      "It is linked to long-standing social traditions",
      "It was introduced in modern times",
      "It is part of religious rules",
    ],
    correct: "It is linked to long-standing social traditions",
  },
  {
    id: 485,
    question: "The tradition of queueing in Great Britain reflects:",
    options: [
      "Fear of authority",
      "Economic competition",
      "Respect for order and fairness",
      "Lack of communication",
    ],
    correct: "Respect for order and fairness",
  },
  {
    id: 486,
    question: "The Industrial Revolution changed Great Britain mainly by:",
    options: [
      "Reducing population",
      "Strengthening agriculture only",
      "Transforming it into an industrial and economic power",
      "Ending urban life",
    ],
    correct: "Transforming it into an industrial and economic power",
  },
  {
    id: 487,
    question: "Which economic sector dominates modern Great Britain?",
    options: ["Agriculture", "Mining", "Services", "Fishing"],
    correct: "Services",
  },
  {
    id: 488,
    question:
      "Why is football more influential than other sports in Great Britain?",
    options: [
      "It is played only in Britain",
      "It has deep historical roots and mass popularity",
      "It is cheaper than all other sports",
      "It is supported only by the government",
    ],
    correct: "It has deep historical roots and mass popularity",
  },
  {
    id: 489,
    question: "Wimbledon is culturally important because it:",
    options: [
      "Is the oldest football tournament",
      "Represents British sporting tradition and global prestige",
      "Is held every month",
      "Is only for British players",
    ],
    correct: "Represents British sporting tradition and global prestige",
  },
  {
    id: 490,
    question: "The role of the BBC in British society is mainly to:",
    options: [
      "Entertain only",
      "Support political parties",
      "Inform, educate, and entertain the public",
      "Promote advertisements",
    ],
    correct: "Inform, educate, and entertain the public",
  },
  {
    id: 491,
    question:
      "Mass media in Great Britain is considered influential because it:",
    options: [
      "Is controlled by the monarchy",
      "Shapes public opinion and democratic debate",
      "Avoids political topics",
      "Is limited to newspapers",
    ],
    correct: "Shapes public opinion and democratic debate",
  },
  {
    id: 492,
    question: "The demographic structure of Great Britain is characterized by:",
    options: [
      "Rapid population decline",
      "A completely rural population",
      "High urbanization and cultural diversity",
      "Low life expectancy",
    ],
    correct: "High urbanization and cultural diversity",
  },
  {
    id: 493,
    question: "Which feature best describes British national identity?",
    options: [
      "Strong regional isolation",
      "Uniform culture across all regions",
      "A balance between tradition and modernity",
      "Rejection of historical values",
    ],
    correct: "A balance between tradition and modernity",
  },
  {
    id: 494,
    question: "The geographical position of Great Britain has contributed to:",
    options: [
      "Frequent desert storms",
      "Strong land-based trade only",
      "Naval power and overseas connections",
      "Agricultural isolation",
    ],
    correct: "Naval power and overseas connections",
  },
  {
    id: 495,
    question: "Why is London often called 'the heart of Great Britain'?",
    options: [
      "It is the most crowded city",
      "It concentrates political, economic, and cultural life",
      "It is the oldest settlement",
      "It produces most agricultural goods",
    ],
    correct: "It concentrates political, economic, and cultural life",
  },
  {
    id: 496,
    question: "British customs have remained strong mainly because:",
    options: [
      "They are enforced by schools",
      "They are protected by law",
      "They are passed down through generations",
      "They are copied from other cultures",
    ],
    correct: "They are passed down through generations",
  },
  {
    id: 497,
    question:
      "Which natural feature helps explain Great Britain's rich green landscapes?",
    options: [
      "Desert winds",
      "Heavy volcanic activity",
      "Regular rainfall",
      "Extreme temperatures",
    ],
    correct: "Regular rainfall",
  },
  {
    id: 498,
    question: "National parks in Great Britain are important because they:",
    options: [
      "Support industrial growth",
      "Protect natural heritage and biodiversity",
      "Increase urbanization",
      "Limit tourism",
    ],
    correct: "Protect natural heritage and biodiversity",
  },
  {
    id: 499,
    question: "The Union Jack symbolically represents:",
    options: [
      "One region only",
      "Military power",
      "The unity of different nations",
      "Economic independence",
    ],
    correct: "The unity of different nations",
  },
  {
    id: 500,
    question: "British newspapers are traditionally divided into:",
    options: [
      "Local and foreign",
      "Political and religious",
      "Broadsheets and tabloids",
      "Digital and printed only",
    ],
    correct: "Broadsheets and tabloids",
  },
  {
    id: 501,
    question: "Which factor explains the global influence of British culture?",
    options: [
      "Population size",
      "Climate",
      "Historical empire and language spread",
      "Agriculture",
    ],
    correct: "Historical empire and language spread",
  },
  {
    id: 502,
    question: "Why is Great Britain considered a multicultural society?",
    options: [
      "It has one dominant culture",
      "It has isolated communities",
      "It includes people from different ethnic and cultural backgrounds",
      "It avoids migration",
    ],
    correct:
      "It includes people from different ethnic and cultural backgrounds",
  },
  {
    id: 503,
    question: "The British economy benefits from London mainly because London:",
    options: [
      "Produces agricultural goods",
      "Is a global financial hub",
      "Controls all industries",
      "Has the largest population",
    ],
    correct: "Is a global financial hub",
  },
  {
    id: 504,
    question:
      "The relationship between geography and economy in Great Britain shows that:",
    options: [
      "Geography has no impact",
      "Climate limits development",
      "Coastal position encouraged trade and industry",
      "Mountains dominate economic life",
    ],
    correct: "Coastal position encouraged trade and industry",
  },
  {
    id: 505,
    question: "British respect for privacy is closely linked to:",
    options: [
      "Legal restrictions",
      "Cultural norms and social behavior",
      "Religious rules",
      "Economic factors",
    ],
    correct: "Cultural norms and social behavior",
  },
  {
    id: 506,
    question:
      "Which sport best reflects traditional British values of fairness and discipline?",
    options: ["Basketball", "Cricket", "Ice hockey", "Boxing"],
    correct: "Cricket",
  },
  {
    id: 507,
    question:
      "The importance of mass media in democracy lies in its ability to:",
    options: [
      "Replace the government",
      "Control citizens",
      "Provide information and encourage public discussion",
      "Avoid social issues",
    ],
    correct: "Provide information and encourage public discussion",
  },
  {
    id: 508,
    question: "Great Britain's island position historically helped it to:",
    options: [
      "Avoid all conflicts",
      "Develop strong naval defense",
      "Depend on agriculture only",
      "Remain isolated",
    ],
    correct: "Develop strong naval defense",
  },
  {
    id: 509,
    question: "British traditions such as tea culture symbolize:",
    options: [
      "Luxury",
      "Speed",
      "Social interaction and routine",
      "Religious practice",
    ],
    correct: "Social interaction and routine",
  },
  {
    id: 510,
    question:
      "The combination of tradition and modern life in Great Britain shows that the country:",
    options: [
      "Rejects change",
      "Rejects history",
      "Preserves heritage while adapting to globalization",
      "Avoids cultural development",
    ],
    correct: "Preserves heritage while adapting to globalization",
  },
  {
    id: 511,
    question: "British culture is strongly influenced by",
    options: [
      "One nation only",
      "Many different traditions",
      "Asian culture only",
      "African culture only",
    ],
    correct: "Many different traditions",
  },
  {
    id: 522,
    question: "Which city is famous for theatres and museums?",
    options: ["Manchester", "Liverpool", "London", "Oxford"],
    correct: "London",
  },
  {
    id: 523,
    question: "Shakespeare is known as",
    options: ["a scientist", "a painter", "a writer", "a politician"],
    correct: "a writer",
  },
  {
    id: 524,
    question: "British museums are usually",
    options: [
      "very expensive",
      "only for students",
      "free for visitors",
      "closed on weekends",
    ],
    correct: "free for visitors",
  },
  {
    id: 525,
    question: "The British are famous for their love of",
    options: ["fast food", "tea", "spicy food", "coffee"],
    correct: "tea",
  },
  {
    id: 526,
    question: "The Royal Opera House is located in",
    options: ["Edinburgh", "Cardiff", "London", "Belfast"],
    correct: "London",
  },
  {
    id: 527,
    question: "Which art form is popular in Britain?",
    options: ["Ballet", "Theatre", "Cinema", "All of them"],
    correct: "All of them",
  },
  {
    id: 528,
    question: "British literature is famous all over the",
    options: ["country", "Europe", "world", "Asia"],
    correct: "world",
  },
  {
    id: 529,
    question: "The BBC is important for British",
    options: ["agriculture", "culture", "industry", "transport"],
    correct: "culture",
  },
  {
    id: 530,
    question: "Cultural life in Britain is",
    options: ["boring", "limited", "rich and diverse", "old-fashioned"],
    correct: "rich and diverse",
  },
  {
    id: 531,
    question: "The British usually greet each other by",
    options: ["hugging", "kissing", "shaking hands", "bowing"],
    correct: "shaking hands",
  },
  {
    id: 532,
    question: "Tea time in Britain is traditionally at",
    options: ["morning", "noon", "afternoon", "midnight"],
    correct: "afternoon",
  },
  {
    id: 533,
    question: "Christmas is celebrated on",
    options: ["31 December", "1 January", "25 December", "14 February"],
    correct: "25 December",
  },
  {
    id: 534,
    question: "British people value",
    options: ["loud behavior", "politeness", "lateness", "silence only"],
    correct: "politeness",
  },
  {
    id: 535,
    question: "Which holiday celebrates the king or queen?",
    options: [
      "Easter",
      "Queen's (King's) Birthday",
      "Halloween",
      "Valentine's Day",
    ],
    correct: "Queen's (King's) Birthday",
  },
  {
    id: 536,
    question: "Traditional British food includes",
    options: ["sushi", "pizza", "fish and chips", "plov"],
    correct: "fish and chips",
  },
  {
    id: 537,
    question: "The British are known for",
    options: [
      "being very emotional",
      "being polite and reserved",
      "being noisy",
      "being rude",
    ],
    correct: "being polite and reserved",
  },
  {
    id: 538,
    question: "Which tradition is connected with Parliament?",
    options: [
      "Changing of the Guard",
      "Tea ceremony",
      "Bonfire Night",
      "Pancake Day",
    ],
    correct: "Changing of the Guard",
  },
  {
    id: 539,
    question: "Bonfire Night is celebrated on",
    options: ["5 November", "1 May", "25 December", "31 October"],
    correct: "5 November",
  },
  {
    id: 540,
    question: "British traditions are mostly",
    options: ["modern only", "very old", "unimportant", "forgotten"],
    correct: "very old",
  },
  {
    id: 541,
    question: "The British economy is based on",
    options: [
      "agriculture only",
      "industry and services",
      "fishing only",
      "tourism only",
    ],
    correct: "industry and services",
  },
  {
    id: 542,
    question: "London is a major",
    options: ["farming center", "financial center", "mining city", "port only"],
    correct: "financial center",
  },
  {
    id: 543,
    question: "Football in Britain is",
    options: ["unpopular", "new", "very popular", "forbidden"],
    correct: "very popular",
  },
  {
    id: 544,
    question: "Which sport originated in Britain?",
    options: ["Basketball", "Football", "Karate", "Volleyball"],
    correct: "Football",
  },
  {
    id: 545,
    question: "The BBC is a",
    options: [
      "newspaper",
      "radio only",
      "television only",
      "mass media organization",
    ],
    correct: "mass media organization",
  },
  {
    id: 546,
    question: "Cricket is especially popular in",
    options: ["England", "Germany", "France", "Italy"],
    correct: "England",
  },
  {
    id: 547,
    question: "British newspapers are known for",
    options: [
      "sports only",
      "fashion only",
      "serious and tabloid styles",
      "comics only",
    ],
    correct: "serious and tabloid styles",
  },
  {
    id: 548,
    question: "The British economy is considered",
    options: ["weak", "developing", "strong", "closed"],
    correct: "strong",
  },
  {
    id: 549,
    question: "Which sport event is famous in Britain?",
    options: ["Wimbledon", "Olympics only", "Asian Games", "World Chess"],
    correct: "Wimbledon",
  },
  {
    id: 550,
    question: "Mass media in Britain influences",
    options: [
      "only students",
      "only workers",
      "public opinion",
      "only politicians",
    ],
    correct: "public opinion",
  },
  {
    id: 551,
    question: "London is the capital of",
    options: ["England only", "Scotland", "Great Britain", "Wales"],
    correct: "Great Britain",
  },
  {
    id: 552,
    question: "London is an important center of",
    options: ["agriculture", "politics and economy", "fishing", "mining"],
    correct: "politics and economy",
  },
  {
    id: 553,
    question: "Which river flows through London?",
    options: ["Severn", "Thames", "Clyde", "Mersey"],
    correct: "Thames",
  },
  {
    id: 554,
    question: "London is famous for",
    options: [
      "modern villages",
      "historical buildings",
      "deserts",
      "mountains",
    ],
    correct: "historical buildings",
  },
  {
    id: 555,
    question: "The British Parliament is located in",
    options: ["Buckingham Palace", "Westminster", "Oxford", "Cambridge"],
    correct: "Westminster",
  },
  {
    id: 556,
    question: "London is also a major center of",
    options: ["education and culture", "farming", "oil production", "forestry"],
    correct: "education and culture",
  },
  {
    id: 557,
    question: "Which place is the official residence of the monarch?",
    options: ["Big Ben", "Tower Bridge", "Buckingham Palace", "London Eye"],
    correct: "Buckingham Palace",
  },
  {
    id: 558,
    question: "London is one of the most",
    options: [
      "boring cities",
      "polluted villages",
      "multicultural cities",
      "empty cities",
    ],
    correct: "multicultural cities",
  },
  {
    id: 559,
    question: "London has influence on",
    options: [
      "only British culture",
      "European culture only",
      "global politics and finance",
      "local traditions only",
    ],
    correct: "global politics and finance",
  },
  {
    id: 560,
    question: "London is not only the capital but also",
    options: [
      "a small town",
      "a cultural, financial and political center",
      "a farming city",
      "a quiet place",
    ],
    correct: "a cultural, financial and political center",
  },
  {
    id: 561,
    question: "When was the Declaration of Independence signed?",
    options: ["1789", "1776", "1801", "1750"],
    correct: "1776",
  },
  {
    id: 562,
    question: "Who was the first President of the United States?",
    options: [
      "Thomas Jefferson",
      "Abraham Lincoln",
      "George Washington",
      "John Adams",
    ],
    correct: "George Washington",
  },
  {
    id: 563,
    question: "Which event started the American Civil War?",
    options: [
      "Boston Tea Party",
      "Attack on Fort Sumter",
      "Pearl Harbor",
      "Louisiana Purchase",
    ],
    correct: "Attack on Fort Sumter",
  },
  {
    id: 564,
    question: "What was the main cause of the American Revolution?",
    options: [
      "Land disputes",
      "High taxes imposed by Britain",
      "Economic depression",
      "Conflict with France",
    ],
    correct: "High taxes imposed by Britain",
  },
  {
    id: 565,
    question: "In which year did the Civil War end?",
    options: ["1861", "1863", "1865", "1870"],
    correct: "1865",
  },
  {
    id: 566,
    question: "Who wrote the Declaration of Independence?",
    options: [
      "George Washington",
      "Thomas Jefferson",
      "Benjamin Franklin",
      "James Madison",
    ],
    correct: "Thomas Jefferson",
  },
  {
    id: 567,
    question: "What event is known as the beginning of the Great Depression?",
    options: [
      "Dust Bowl",
      "Black Tuesday (stock market crash)",
      "First World War",
      "Industrial Revolution",
    ],
    correct: "Black Tuesday (stock market crash)",
  },
  {
    id: 568,
    question: "Which country sold Louisiana to the USA in 1803?",
    options: ["Britain", "Spain", "France", "Mexico"],
    correct: "France",
  },
  {
    id: 569,
    question: "Who issued the Emancipation Proclamation?",
    options: [
      "Franklin Roosevelt",
      "Andrew Jackson",
      "Theodore Roosevelt",
      "Abraham Lincoln",
    ],
    correct: "Abraham Lincoln",
  },
  {
    id: 570,
    question: "When did the USA enter World War II?",
    options: [
      "After the invasion of Poland",
      "After the bombing of Pearl Harbor",
      "After D-Day",
      "After the Cold War began",
    ],
    correct: "After the bombing of Pearl Harbor",
  },
  {
    id: 571,
    question: "How many branches does the U.S. government have?",
    options: ["2", "3", "4", "5"],
    correct: "3",
  },
  {
    id: 572,
    question: "Who is the head of the Executive branch?",
    options: [
      "The Senate",
      "The President",
      "The Congress",
      "The Chief Justice",
    ],
    correct: "The President",
  },
  {
    id: 573,
    question: "How many senators are there in the U.S. Senate?",
    options: ["50", "100", "435", "150"],
    correct: "100",
  },
  {
    id: 574,
    question: "What is the main job of the Supreme Court?",
    options: [
      "Collecting taxes",
      "Making laws",
      "Interpreting the Constitution",
      "Controlling military",
    ],
    correct: "Interpreting the Constitution",
  },
  {
    id: 575,
    question: "Which document is the highest law of the USA?",
    options: [
      "Bill of Rights",
      "Declaration of Independence",
      "U.S. Constitution",
      "Federal Code",
    ],
    correct: "U.S. Constitution",
  },
  {
    id: 576,
    question: "How long is a President's term?",
    options: ["2 years", "4 years", "6 years", "8 years"],
    correct: "4 years",
  },
  {
    id: 577,
    question: "How many members are in the House of Representatives?",
    options: ["100", "150", "200", "435"],
    correct: "435",
  },
  {
    id: 578,
    question: "What is the role of the Vice President in the Senate?",
    options: [
      "Voting on all laws",
      "Speaker of the House",
      "Casting tie-breaking votes",
      "Approving judges",
    ],
    correct: "Casting tie-breaking votes",
  },
  {
    id: 579,
    question: "How many justices are in the U.S. Supreme Court?",
    options: ["6", "7", "9", "12"],
    correct: "9",
  },
  {
    id: 580,
    question: "Which political system does the USA have?",
    options: [
      "Constitutional Monarchy",
      "Dictatorship",
      "Federal Republic",
      "Absolute Monarchy",
    ],
    correct: "Federal Republic",
  },
  {
    id: 581,
    question: "When was the Football Association formed in England?",
    options: ["1848", "1863", "1877", "1901"],
    correct: "1863",
  },
  {
    id: 582,
    question:
      "What was the significance of the first Wimbledon Championship in 1877?",
    options: [
      "It marked the beginning of professional football.",
      "It established tennis as a prominent sport.",
      "It introduced women's participation in sports.",
      "It replaced 'jeu de paume' with basketball.",
    ],
    correct: "It established tennis as a prominent sport.",
  },
  {
    id: 583,
    question:
      "When did the modern version of handball develop and gain popularity?",
    options: [
      "In the 16th century",
      "In the 18th century",
      "In the early 20th century",
      "In the 21st century",
    ],
    correct: "In the early 20th century",
  },
  {
    id: 584,
    question: "Which club became the authority for cricket's laws?",
    options: [
      "The Royal Cricket Club",
      "The London Sports Association",
      "The Marylebone Cricket Club (MCC)",
      "The National Cricket Board",
    ],
    correct: "The Marylebone Cricket Club (MCC)",
  },
  {
    id: 585,
    question: "How has technology influenced modern English sports?",
    options: [
      "It made traditional sports less popular.",
      "It simplified rules and reduced fairness.",
      "It enhanced viewing experiences and fairness through innovations like VAR.",
      "It replaced referees with robots in all games.",
    ],
    correct:
      "It enhanced viewing experiences and fairness through innovations like VAR.",
  },
  {
    id: 586,
    question: "What is one key way sports contribute to English communities?",
    options: [
      "By discouraging local participation",
      "By promoting community spirit and inclusivity",
      "By focusing only on professional athletes",
      "By reducing local events",
    ],
    correct: "By promoting community spirit and inclusivity",
  },
  {
    id: 587,
    question:
      "What recent development promotes gender equality in English sports?",
    options: [
      "Decreased media coverage",
      "Equal pay and increased attention to women's sports",
      "Limiting women's participation",
      "Separate tournaments for men only",
    ],
    correct: "Equal pay and increased attention to women's sports",
  },
  {
    id: 588,
    question:
      "Which sport is most famously associated with the Oxford and Cambridge competitions?",
    options: ["Tennis", "Rowing", "Handball", "Basketball"],
    correct: "Rowing",
  },
  {
    id: 589,
    question: "How does sports tourism impact the UK economy?",
    options: [
      "It reduces local employment",
      "It contributes billions by attracting international visitors",
      "It increases pollution and traffic",
      "It focuses only on domestic visitors",
    ],
    correct: "It contributes billions by attracting international visitors",
  },
  {
    id: 590,
    question:
      "What economic benefits do major sporting events like the Olympics bring to the UK?",
    options: [
      "Reduced tourism and job losses",
      "Increased economic growth and improved infrastructure",
      "Less interest in local sports",
      "Higher ticket prices with no local benefit",
    ],
    correct: "Increased economic growth and improved infrastructure",
  },
  {
    id: 591,
    question: "From where did the first inhabitants of North America migrate?",
    options: ["Africa", "Europe", "Siberia", "Australia"],
    correct: "Siberia",
  },
  {
    id: 592,
    question: "How did these early inhabitants reach North America?",
    options: [
      "By sailing across the Pacific Ocean",
      "By crossing the Bering land bridge or coastline",
      "By using ice boats",
      "By traveling from South America",
    ],
    correct: "By crossing the Bering land bridge or coastline",
  },
  {
    id: 593,
    question: "When did the Clovis culture appear?",
    options: [
      "Around 15,000 BC",
      "Around 11,000 BC",
      "Around 5,000 BC",
      "Around 1,000 BC",
    ],
    correct: "Around 11,000 BC",
  },
  {
    id: 594,
    question: "What is the Clovis culture known for?",
    options: [
      "Being the first European settlement",
      "Being the first widespread culture in the Americas",
      "Building the first pyramids",
      "Inventing agriculture",
    ],
    correct: "Being the first widespread culture in the Americas",
  },
  {
    id: 595,
    question: "Which culture developed agriculture and complex societies?",
    options: ["Algonquian", "Hohokam", "Mississippian", "Puebloan"],
    correct: "Mississippian",
  },
  {
    id: 596,
    question: "Where were the Mississippian cultures mainly located?",
    options: [
      "Western Coast",
      "Midwestern, eastern, and southern regions",
      "Northern Canada",
      "Rocky Mountains",
    ],
    correct: "Midwestern, eastern, and southern regions",
  },
  {
    id: 597,
    question: "Who began exploring the Caribbean for Spain in 1492?",
    options: [
      "Hernán Cortés",
      "Ferdinand Magellan",
      "Christopher Columbus",
      "Francisco Pizarro",
    ],
    correct: "Christopher Columbus",
  },
  {
    id: 598,
    question:
      "What was the first Spanish colony in the continental United States?",
    options: ["New Spain", "Saint Augustine", "Spanish Florida", "New Mexico"],
    correct: "Saint Augustine",
  },
  {
    id: 599,
    question: "When was Saint Augustine founded?",
    options: ["1492", "1513", "1565", "1607"],
    correct: "1565",
  },
  {
    id: 600,
    question: "When did the British begin colonizing the East Coast?",
    options: ["1565", "1607", "1626", "1638"],
    correct: "1607",
  },
  {
    id: 601,
    question: "What type of system does the United States have?",
    options: ["Unitary system", "Federal system", "Confederation", "Monarchy"],
    correct: "Federal system",
  },
  {
    id: 602,
    question: "How many states does the United States comprise?",
    options: ["48", "49", "50", "52"],
    correct: "50",
  },
  {
    id: 603,
    question: "Which three branches of government exist within each state?",
    options: [
      "Legislative, Executive, and Judicial",
      "Political, Administrative, and Economic",
      "Federal, Local, and Municipal",
      "Judicial, Economic, and Cultural",
    ],
    correct: "Legislative, Executive, and Judicial",
  },
  {
    id: 604,
    question:
      "How many of the Thirteen Colonies were part of the United States when the Constitution took effect in 1789?",
    options: ["4", "9", "10", "13"],
    correct: "13",
  },
  {
    id: 605,
    question:
      "How many states ratified the Constitution after its commencement?",
    options: ["2", "3", "4", "6"],
    correct: "6",
  },
  {
    id: 606,
    question:
      "How many states have been admitted by Congress since the Constitution took effect?",
    options: ["27", "30", "37", "40"],
    correct: "37",
  },
  {
    id: 607,
    question:
      "What article of the U.S. Constitution authorizes Congress to admit new states?",
    options: [
      "Article I, Section 8",
      "Article II, Section 1",
      "Article IV, Section 3",
      "Article VI, Section 2",
    ],
    correct: "Article IV, Section 3",
  },
  {
    id: 608,
    question:
      "In what sense are U.S. states not sovereign according to international law?",
    options: [
      "They cannot have their own constitutions",
      "They are not recognized as independent nations",
      "They cannot collect taxes",
      "They cannot elect governors",
    ],
    correct: "They are not recognized as independent nations",
  },
  {
    id: 609,
    question:
      "Which principle of international law refers to each state's sovereignty and non-interference by others?",
    options: [
      "Federalism",
      "Westphalian sovereignty",
      "Judicial independence",
      "Republicanism",
    ],
    correct: "Westphalian sovereignty",
  },
  {
    id: 610,
    question:
      "What does 'interdependence sovereignty' refer to in this context?",
    options: [
      "The ability to print money",
      "The ability to control movement across borders",
      "The power to create laws",
      "The power to declare war",
    ],
    correct: "The ability to control movement across borders",
  },
  {
    id: 611,
    question: "Which currency is used in Great Britain?",
    options: ["Euro", "Dollar", "Pound sterling", "Franc"],
    correct: "Pound sterling",
  },
  {
    id: 612,
    question: "The Bank of England is located in:",
    options: ["Manchester", "London", "Liverpool", "Birmingham"],
    correct: "London",
  },
  {
    id: 613,
    question: "Which is the main sector of Britain's economy?",
    options: ["Agriculture", "Services", "Mining", "Fishing"],
    correct: "Services",
  },
  {
    id: 614,
    question: "Which sport was invented in Great Britain?",
    options: ["Basketball", "Baseball", "Football", "Ice hockey"],
    correct: "Football",
  },
  {
    id: 615,
    question: "Wimbledon is associated with:",
    options: ["Cricket", "Tennis", "Rugby", "Horse racing"],
    correct: "Tennis",
  },
  {
    id: 616,
    question: "The BBC stands for:",
    options: [
      "British Broadcasting Corporation",
      "British Business Council",
      "Broadcasting Bureau of Communication",
      "British Bureau of Culture",
    ],
    correct: "British Broadcasting Corporation",
  },
  {
    id: 617,
    question: "Which newspaper is known as a 'quality paper'?",
    options: ["The Sun", "The Times", "Daily Mirror", "Daily Star"],
    correct: "The Times",
  },
  {
    id: 618,
    question: "The British economy is considered one of the:",
    options: [
      "Weakest in Europe",
      "Fastest-growing in Asia",
      "Largest in the world",
      "Declining economies",
    ],
    correct: "Largest in the world",
  },
  {
    id: 619,
    question: "The Premier League is related to:",
    options: ["Rugby", "Football", "Tennis", "Golf"],
    correct: "Football",
  },
  {
    id: 620,
    question: "Which sport is traditionally played on village greens?",
    options: ["Cricket", "Basketball", "Volleyball", "Skiing"],
    correct: "Cricket",
  },
  {
    id: 621,
    question: "When was the Declaration of Independence signed?",
    options: ["1776", "1789", "1791", "1800"],
    correct: "1776",
  },
  {
    id: 622,
    question: "Who was the first President of the USA?",
    options: [
      "Abraham Lincoln",
      "George Washington",
      "Thomas Jefferson",
      "John Adams",
    ],
    correct: "George Washington",
  },
  {
    id: 623,
    question: "The American Civil War took place between:",
    options: ["1775–1783", "1861–1865", "1812–1815", "1914–1918"],
    correct: "1861–1865",
  },
  {
    id: 624,
    question: "The USA was discovered by:",
    options: [
      "Marco Polo",
      "Christopher Columbus",
      "James Cook",
      "Vasco da Gama",
    ],
    correct: "Christopher Columbus",
  },
  {
    id: 625,
    question: "Which country did the American colonies gain independence from?",
    options: ["France", "Spain", "Great Britain", "Portugal"],
    correct: "Great Britain",
  },
  {
    id: 626,
    question: "The Statue of Liberty was a gift from:",
    options: ["Germany", "France", "Canada", "Italy"],
    correct: "France",
  },
  {
    id: 627,
    question: "Abraham Lincoln is famous for:",
    options: [
      "Building the White House",
      "Ending slavery",
      "Discovering electricity",
      "Creating the flag",
    ],
    correct: "Ending slavery",
  },
  {
    id: 628,
    question: "The 'Cold War' was a period of tension between the USA and:",
    options: ["China", "Japan", "Soviet Union", "Germany"],
    correct: "Soviet Union",
  },
  {
    id: 629,
    question: "The American Constitution was adopted in:",
    options: ["1787", "1800", "1812", "1865"],
    correct: "1787",
  },
  {
    id: 630,
    question: "The Boston Tea Party was:",
    options: [
      "A social gathering",
      "A protest against British taxes",
      "A peace treaty",
      "A royal event",
    ],
    correct: "A protest against British taxes",
  },
  {
    id: 631,
    question: "The USA is a:",
    options: ["Monarchy", "Republic", "Dictatorship", "Confederation"],
    correct: "Republic",
  },
  {
    id: 632,
    question: "The U.S. Congress consists of:",
    options: ["One house", "Two houses", "Three chambers", "Four committees"],
    correct: "Two houses",
  },
  {
    id: 633,
    question: "The two houses of Congress are:",
    options: [
      "The Senate and the House of Representatives",
      "Parliament and Senate",
      "Supreme Court and Congress",
      "Cabinet and Council",
    ],
    correct: "The Senate and the House of Representatives",
  },
  {
    id: 634,
    question: "The head of the Executive branch is:",
    options: [
      "The President",
      "The Prime Minister",
      "The Speaker",
      "The Chief Justice",
    ],
    correct: "The President",
  },
  {
    id: 635,
    question: "The Supreme Court is part of which branch?",
    options: ["Legislative", "Executive", "Judicial", "Federal"],
    correct: "Judicial",
  },
  {
    id: 636,
    question: "How many states are there in the USA?",
    options: ["48", "49", "50", "52"],
    correct: "50",
  },
  {
    id: 637,
    question: "The U.S. Constitution is the:",
    options: [
      "National anthem",
      "Supreme law of the land",
      "Declaration of Independence",
      "Federal document",
    ],
    correct: "Supreme law of the land",
  },
  {
    id: 638,
    question: "The President of the USA is elected every:",
    options: ["2 years", "4 years", "5 years", "6 years"],
    correct: "4 years",
  },
  {
    id: 639,
    question: "The capital of the USA is:",
    options: ["New York", "Washington, D.C.", "Philadelphia", "Boston"],
    correct: "Washington, D.C.",
  },
  {
    id: 640,
    question: "The American flag has:",
    options: [
      "13 stripes and 50 stars",
      "50 stripes and 13 stars",
      "51 stars and 10 stripes",
      "25 stripes and 25 stars",
    ],
    correct: "13 stripes and 50 stars",
  },
  {
    id: 641,
    question:
      "What is the name of the British monarch's official birthday celebration held every June?",
    options: [
      "Coronation Day",
      "The Queen's (or King's) Birthday Parade",
      "May Day",
      "Remembrance Sunday",
    ],
    correct: "The Queen's (or King's) Birthday Parade",
  },
  {
    id: 642,
    question: "What traditional meal is commonly eaten on Sunday in Britain?",
    options: [
      "Fish and chips",
      "Sunday roast",
      "Afternoon tea",
      "Full English breakfast",
    ],
    correct: "Sunday roast",
  },
  {
    id: 643,
    question: "What drink is most associated with British afternoon tea?",
    options: ["Coffee", "Hot chocolate", "Tea", "Lemonade"],
    correct: "Tea",
  },
  {
    id: 644,
    question: "Which flower is a national symbol of Scotland?",
    options: ["Rose", "Daffodil", "Thistle", "Shamrock"],
    correct: "Thistle",
  },
  {
    id: 645,
    question: "What do people traditionally eat on Shrove Tuesday in Britain?",
    options: ["Mince pies", "Pancakes", "Hot cross buns", "Easter eggs"],
    correct: "Pancakes",
  },
  {
    id: 646,
    question: "On which day do British people traditionally exchange gifts?",
    options: [
      "Christmas Day",
      "Boxing Day",
      "New Year's Eve",
      "St. George's Day",
    ],
    correct: "Christmas Day",
  },
  {
    id: 647,
    question:
      "Which day marks the beginning of the New Year celebrations in Britain?",
    options: ["24th December", "25th December", "31st December", "1st January"],
    correct: "31st December",
  },
  {
    id: 648,
    question: "Which of these is a famous British sporting event?",
    options: ["Wimbledon", "Tour de France", "Super Bowl", "World Cup"],
    correct: "Wimbledon",
  },
  {
    id: 649,
    question: "What is traditionally eaten during Easter in Britain?",
    options: ["Hot cross buns", "Pancakes", "Mince pies", "Shortbread"],
    correct: "Hot cross buns",
  },
  {
    id: 650,
    question: "Which national day is associated with England?",
    options: [
      "St. David's Day",
      "St. George's Day",
      "St. Andrew's Day",
      "St. Patrick's Day",
    ],
    correct: "St. George's Day",
  },
  {
    id: 651,
    question: "What is the national currency of the United Kingdom?",
    options: ["Euro", "Dollar", "Pound sterling (£)", "Franc"],
    correct: "Pound sterling (£)",
  },
  {
    id: 652,
    question: "Which city is considered the financial center of the UK?",
    options: ["Manchester", "Edinburgh", "London", "Birmingham"],
    correct: "London",
  },
  {
    id: 653,
    question:
      "Which of the following industries is most important to the British economy today?",
    options: ["Agriculture", "Fishing", "Service industry", "Mining"],
    correct: "Service industry",
  },
  {
    id: 654,
    question: "What is the most popular sport in Great Britain?",
    options: ["Rugby", "Cricket", "Tennis", "Football (soccer)"],
    correct: "Football (soccer)",
  },
  {
    id: 655,
    question: "Where is the famous Wimbledon Tennis Championship held?",
    options: ["London", "Manchester", "Oxford", "Cardiff"],
    correct: "London",
  },
  {
    id: 656,
    question: "Which British newspaper is known as a 'quality' paper?",
    options: ["The Sun", "The Times", "The Daily Star", "The Mirror"],
    correct: "The Times",
  },
  {
    id: 657,
    question: "What is the BBC?",
    options: [
      "British Business Council",
      "British Broadcasting Corporation",
      "British Bank of Commerce",
      "British Bureau of Communication",
    ],
    correct: "British Broadcasting Corporation",
  },
  {
    id: 658,
    question:
      "Which sport originated in England and is now played worldwide, especially in former British colonies?",
    options: ["Basketball", "Baseball", "Cricket", "Ice hockey"],
    correct: "Cricket",
  },
  {
    id: 659,
    question: "What is one of the UK's main exports?",
    options: ["Electronics", "Automobiles", "Bananas", "Coffee"],
    correct: "Electronics",
  },
  {
    id: 660,
    question: "Which famous British football club is based in Manchester?",
    options: ["Chelsea", "Arsenal", "Manchester United", "Liverpool"],
    correct: "Manchester United",
  },
  {
    id: 661,
    question: "Who was the first President of the United States?",
    options: [
      "Thomas Jefferson",
      "George Washington",
      "Abraham Lincoln",
      "John Adams",
    ],
    correct: "George Washington",
  },
  {
    id: 662,
    question: "In what year was the Declaration of Independence signed?",
    options: ["1492", "1776", "1789", "1865"],
    correct: "1776",
  },
  {
    id: 663,
    question: "Who wrote most of the Declaration of Independence?",
    options: [
      "Benjamin Franklin",
      "Thomas Jefferson",
      "John Adams",
      "James Madison",
    ],
    correct: "Thomas Jefferson",
  },
  {
    id: 664,
    question:
      "What war was fought between the northern and southern states of America?",
    options: [
      "The Revolutionary War",
      "The Civil War",
      "The Vietnam War",
      "World War I",
    ],
    correct: "The Civil War",
  },
  {
    id: 665,
    question: "Who was President of the United States during the Civil War?",
    options: [
      "George Washington",
      "Andrew Jackson",
      "Abraham Lincoln",
      "Theodore Roosevelt",
    ],
    correct: "Abraham Lincoln",
  },
  {
    id: 666,
    question: "What event began on October 29, 1929, known as 'Black Tuesday'?",
    options: [
      "The Civil Rights Movement",
      "The Great Depression",
      "The First World War",
      "The Cold War",
    ],
    correct: "The Great Depression",
  },
  {
    id: 667,
    question: "What attack caused the United States to enter World War II?",
    options: [
      "The bombing of Pearl Harbor",
      "The sinking of the Titanic",
      "The invasion of Poland",
      "The attack on London",
    ],
    correct: "The bombing of Pearl Harbor",
  },
  {
    id: 668,
    question:
      "Who was the American civil rights leader famous for his 'I Have a Dream' speech?",
    options: [
      "Malcolm X",
      "Martin Luther King Jr.",
      "Barack Obama",
      "Rosa Parks",
    ],
    correct: "Martin Luther King Jr.",
  },
  {
    id: 669,
    question: "Which U.S. state was the last to join the Union in 1959?",
    options: ["Alaska", "Hawaii", "California", "Texas"],
    correct: "Hawaii",
  },
  {
    id: 670,
    question: "What happened on September 11, 2001, in the United States?",
    options: [
      "The end of World War II",
      "The assassination of a president",
      "Terrorist attacks on the World Trade Center and Pentagon",
      "The stock market crash",
    ],
    correct: "Terrorist attacks on the World Trade Center and Pentagon",
  },
  {
    id: 671,
    question: "When was the Declaration of Independence adopted?",
    options: ["1492", "1620", "1776", "1865"],
    correct: "1776",
  },
  {
    id: 672,
    question: "Who was the main author of the Declaration of Independence?",
    options: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "Benjamin Franklin",
    ],
    correct: "Thomas Jefferson",
  },
  {
    id: 673,
    question: "From which country did the USA gain independence?",
    options: ["France", "Great Britain", "Spain", "Germany"],
    correct: "Great Britain",
  },
  {
    id: 674,
    question: "The American Civil War took place between ___ and ___.",
    options: ["1750–1780", "1861–1865", "1812–1816", "1914–1918"],
    correct: "1861–1865",
  },
  {
    id: 675,
    question: "Who was the President of the USA during the Civil War?",
    options: [
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson",
      "Theodore Roosevelt",
    ],
    correct: "Abraham Lincoln",
  },
  {
    id: 676,
    question: "Which year did Christopher Columbus discover America?",
    options: ["1492", "1502", "1607", "1776"],
    correct: "1492",
  },
  {
    id: 677,
    question:
      "The first permanent English colony in America was founded in ___.",
    options: ["Plymouth", "Jamestown", "Boston", "Philadelphia"],
    correct: "Jamestown",
  },
  {
    id: 678,
    question: "The U.S. Constitution was adopted in what year?",
    options: ["1776", "1781", "1787", "1801"],
    correct: "1787",
  },
  {
    id: 679,
    question: "The first President of the United States was ___.",
    options: [
      "John Adams",
      "George Washington",
      "Thomas Jefferson",
      "James Madison",
    ],
    correct: "George Washington",
  },
  {
    id: 680,
    question:
      "The Bill of Rights includes the first ___ amendments to the Constitution.",
    options: ["5", "15", "10", "20"],
    correct: "10",
  },
  {
    id: 681,
    question: "The Louisiana Purchase (1803) was made from which country?",
    options: ["Spain", "France", "Britain", "Mexico"],
    correct: "France",
  },
  {
    id: 682,
    question: "Which war was fought between the North and South states?",
    options: ["War of Independence", "Civil War", "Vietnam War", "Cold War"],
    correct: "Civil War",
  },
  {
    id: 683,
    question: "Slavery was abolished in the USA in ___.",
    options: ["1789", "1865", "1900", "1945"],
    correct: "1865",
  },
  {
    id: 684,
    question: "Who wrote the U.S. national anthem 'The Star-Spangled Banner'?",
    options: [
      "George Washington",
      "Francis Scott Key",
      "Benjamin Franklin",
      "Thomas Paine",
    ],
    correct: "Francis Scott Key",
  },
  {
    id: 685,
    question: "The American flag has ___ stripes.",
    options: ["10", "12", "13", "15"],
    correct: "13",
  },
  {
    id: 686,
    question: "The 13 stripes on the American flag represent ___.",
    options: ["States", "The original 13 colonies", "Presidents", "Wars"],
    correct: "The original 13 colonies",
  },
  {
    id: 687,
    question: "The U.S. bought Alaska from which country?",
    options: ["Canada", "Russia", "Britain", "France"],
    correct: "Russia",
  },
  {
    id: 688,
    question: "The Great Depression began in ___.",
    options: ["1914", "1929", "1939", "1945"],
    correct: "1929",
  },
  {
    id: 689,
    question: "The attack on Pearl Harbor happened in ___.",
    options: ["1918", "1941", "1945", "1950"],
    correct: "1941",
  },
  {
    id: 690,
    question: "The Civil Rights Movement mainly took place in the ___.",
    options: ["1940s", "1950s–1960s", "1980s", "2000s"],
    correct: "1950s–1960s",
  },
  {
    id: 691,
    question: "Who delivered the famous 'I Have a Dream' speech?",
    options: [
      "Malcolm X",
      "Martin Luther King Jr.",
      "John F. Kennedy",
      "Barack Obama",
    ],
    correct: "Martin Luther King Jr.",
  },
  {
    id: 692,
    question: "The first man on the Moon was ___.",
    options: [
      "Yuri Gagarin",
      "Neil Armstrong",
      "Buzz Aldrin",
      "Michael Collins",
    ],
    correct: "Neil Armstrong",
  },
  {
    id: 693,
    question: "The Vietnam War ended in ___.",
    options: ["1965", "1975", "1980", "1990"],
    correct: "1975",
  },
  {
    id: 694,
    question:
      "The Watergate scandal led to the resignation of which President?",
    options: [
      "John F. Kennedy",
      "Richard Nixon",
      "Lyndon B. Johnson",
      "Ronald Reagan",
    ],
    correct: "Richard Nixon",
  },
  {
    id: 695,
    question: "Which event is remembered on September 11, 2001?",
    options: [
      "The Great Depression",
      "Terrorist attacks on the World Trade Center",
      "Hurricane Katrina",
      "War in Iraq",
    ],
    correct: "Terrorist attacks on the World Trade Center",
  },
  {
    id: 696,
    question: "Which U.S. President signed the Emancipation Proclamation?",
    options: [
      "George Washington",
      "Abraham Lincoln",
      "John F. Kennedy",
      "Theodore Roosevelt",
    ],
    correct: "Abraham Lincoln",
  },
  {
    id: 697,
    question: "When was women's right to vote guaranteed in the USA?",
    options: ["1865", "1920", "1945", "1963"],
    correct: "1920",
  },
  {
    id: 698,
    question: "The Cold War was mainly between the USA and ___.",
    options: ["Japan", "Soviet Union", "Germany", "China"],
    correct: "Soviet Union",
  },
  {
    id: 699,
    question: "Who was the first African-American President of the USA?",
    options: [
      "Martin Luther King Jr.",
      "Barack Obama",
      "Jesse Jackson",
      "Colin Powell",
    ],
    correct: "Barack Obama",
  },
  {
    id: 700,
    question: "The U.S. Constitution begins with the words ___.",
    options: [
      "'Freedom for all'",
      "'We the People'",
      "'In God We Trust'",
      "'United We Stand'",
    ],
    correct: "'We the People'",
  },
  {
    id: 701,
    question: "Which currency is used in the United Kingdom?",
    options: ["Euro", "Pound Sterling (£)", "Dollar", "Franc"],
    correct: "Pound Sterling (£)",
  },
  {
    id: 702,
    question: "The Bank of England is the ___ of the UK.",
    options: [
      "Main supermarket",
      "National central bank",
      "Oldest university",
      "Parliament building",
    ],
    correct: "National central bank",
  },
  {
    id: 703,
    question: "London is one of the world's leading centers of ___.",
    options: ["Tourism", "Finance and banking", "Agriculture", "Fishing"],
    correct: "Finance and banking",
  },
  {
    id: 704,
    question: "What is the London Stock Exchange known for?",
    options: [
      "Selling real estate",
      "Trading company shares",
      "Importing oil",
      "Publishing newspapers",
    ],
    correct: "Trading company shares",
  },
  {
    id: 705,
    question:
      "Which industry was the main driver of Britain's Industrial Revolution?",
    options: [
      "Textile industry",
      "Film industry",
      "Automotive industry",
      "Agriculture",
    ],
    correct: "Textile industry",
  },
  {
    id: 706,
    question: "The service sector in the UK includes ___.",
    options: [
      "Farming and mining",
      "Banking, tourism, and education",
      "Oil drilling",
      "Fishing",
    ],
    correct: "Banking, tourism, and education",
  },
  {
    id: 707,
    question: "What is the UK's main export product?",
    options: ["Cars and machinery", "Coffee", "Rice", "Timber"],
    correct: "Cars and machinery",
  },
  {
    id: 708,
    question: "The city of Manchester was historically famous for its ___.",
    options: ["Shipbuilding", "Textile production", "Wine making", "Tourism"],
    correct: "Textile production",
  },
  {
    id: 709,
    question: "What is the national sport of England?",
    options: ["Basketball", "Cricket", "Baseball", "Volleyball"],
    correct: "Cricket",
  },
  {
    id: 710,
    question: "Which sport was invented in Britain?",
    options: ["Rugby", "Basketball", "Ice hockey", "Baseball"],
    correct: "Rugby",
  },
  {
    id: 711,
    question: "Wimbledon is associated with which sport?",
    options: ["Football", "Tennis", "Golf", "Cricket"],
    correct: "Tennis",
  },
  {
    id: 712,
    question: "The Premier League is Britain's top ___.",
    options: [
      "Hockey competition",
      "Football league",
      "Basketball tournament",
      "Tennis club",
    ],
    correct: "Football league",
  },
  {
    id: 713,
    question: "The Olympic Games 2012 were held in ___.",
    options: ["Manchester", "London", "Liverpool", "Glasgow"],
    correct: "London",
  },
  {
    id: 714,
    question: "Who is considered one of Britain's greatest footballers?",
    options: [
      "David Beckham",
      "Michael Jordan",
      "Roger Federer",
      "Lionel Messi",
    ],
    correct: "David Beckham",
  },
  {
    id: 715,
    question: "Which British city is known as the 'Home of Golf'?",
    options: ["Edinburgh", "St Andrews", "London", "Birmingham"],
    correct: "St Andrews",
  },
  {
    id: 716,
    question: "'The Ashes' is a famous cricket series played between ___.",
    options: [
      "England and India",
      "England and Australia",
      "England and Canada",
      "England and South Africa",
    ],
    correct: "England and Australia",
  },
  {
    id: 717,
    question:
      "Who was the famous British mathematician who developed the concept of computer science?",
    options: [
      "Alan Turing",
      "Isaac Newton",
      "Albert Einstein",
      "Charles Darwin",
    ],
    correct: "Alan Turing",
  },
  {
    id: 718,
    question:
      "Isaac Newton contributed to mathematics through his invention of ___.",
    options: ["Algebra", "Calculus", "Geometry", "Statistics"],
    correct: "Calculus",
  },
  {
    id: 719,
    question:
      "What is the name of the famous British mathematical competition for schools?",
    options: [
      "UKMT (UK Mathematics Trust)",
      "EuroMath",
      "British Olympiad",
      "London Maths League",
    ],
    correct: "UKMT (UK Mathematics Trust)",
  },
  {
    id: 720,
    question:
      "Which university is home to many of Britain's greatest mathematicians?",
    options: ["Oxford", "Harvard", "Berlin", "Yale"],
    correct: "Oxford",
  },
  {
    id: 721,
    question:
      "George Boole, an English mathematician, created the foundation of ___.",
    options: ["Boolean algebra", "Geometry", "Arithmetic", "Trigonometry"],
    correct: "Boolean algebra",
  },
  {
    id: 722,
    question:
      "Which branch of math is essential for British financial systems?",
    options: ["Geometry", "Statistics", "Trigonometry", "Algebra"],
    correct: "Statistics",
  },
  {
    id: 723,
    question: "The BBC stands for ___.",
    options: [
      "British Broadcasting Corporation",
      "British Business Council",
      "Broadcasting Board of Culture",
      "British Broadcasting Channel",
    ],
    correct: "British Broadcasting Corporation",
  },
  {
    id: 724,
    question: "What is BBC known for?",
    options: [
      "Politics",
      "Public service broadcasting",
      "Advertising",
      "Music videos only",
    ],
    correct: "Public service broadcasting",
  },
  {
    id: 725,
    question: "Which newspaper is one of Britain's oldest daily papers?",
    options: ["The Sun", "The Times", "The Mirror", "Daily Mail"],
    correct: "The Times",
  },
  {
    id: 726,
    question: "'The Guardian' newspaper is known for its focus on ___.",
    options: [
      "Sports only",
      "Progressive journalism and analysis",
      "Entertainment news",
      "Local gossip",
    ],
    correct: "Progressive journalism and analysis",
  },
  {
    id: 727,
    question: "Which TV show is the longest-running British soap opera?",
    options: ["Doctor Who", "EastEnders", "Sherlock", "The Crown"],
    correct: "EastEnders",
  },
  {
    id: 728,
    question: "'BBC News' is broadcast from which city?",
    options: ["Edinburgh", "London", "Manchester", "Belfast"],
    correct: "London",
  },
  {
    id: 729,
    question: "The British film industry is often centered around ___.",
    options: ["Pinewood Studios", "Universal Studios", "Hollywood", "Netflix"],
    correct: "Pinewood Studios",
  },
  {
    id: 730,
    question: "'The Crown' is a famous British TV series about ___.",
    options: [
      "Sports stars",
      "The British royal family",
      "Science fiction",
      "Politics",
    ],
    correct: "The British royal family",
  },

  {
    id: 731,
    question:
      "Which sector is one of the largest contributors to the UK economy?",
    options: ["Agriculture", "Creative industries", "Mining", "Fishing"],
    correct: "Creative industries",
  },
  {
    id: 732,
    question: "What is the main financial centre of Great Britain?",
    options: ["Manchester", "Liverpool", "London", "Birmingham"],
    correct: "London",
  },
  {
    id: 733,
    question: "Which sport is considered the national sport of England?",
    options: ["Basketball", "Cricket", "Ice hockey", "Volleyball"],
    correct: "Cricket",
  },
  {
    id: 734,
    question:
      "Which British football league is one of the most profitable in the world?",
    options: [
      "Scottish Premier League",
      "Premier League",
      "Irish League",
      "Championship",
    ],
    correct: "Premier League",
  },
  {
    id: 735,
    question: "What is the BBC mainly responsible for?",
    options: [
      "Producing movies",
      "National broadcasting",
      "Managing sports competitions",
      "Transport services",
    ],
    correct: "National broadcasting",
  },
  {
    id: 736,
    question: "The UK's economy is mostly based on which sector?",
    options: [
      "Service sector",
      "Agriculture",
      "Heavy industry",
      "Textile production",
    ],
    correct: "Service sector",
  },
  {
    id: 737,
    question: "Which city hosted the Summer Olympics in 2012?",
    options: ["Cardiff", "London", "Belfast", "Edinburgh"],
    correct: "London",
  },
  {
    id: 738,
    question: "Which British newspaper is known for serious journalism?",
    options: ["The Sun", "Daily Mirror", "The Times", "Metro"],
    correct: "The Times",
  },
  {
    id: 739,
    question: "Which British TV channel is famous for sports broadcasting?",
    options: ["Channel 4", "ITV", "Sky Sports", "BBC Four"],
    correct: "Sky Sports",
  },
  {
    id: 740,
    question: "What is one major economic benefit of sports events in the UK?",
    options: [
      "Increased pollution",
      "Reduced tourism",
      "Job creation",
      "Decrease in investment",
    ],
    correct: "Job creation",
  },
  {
    id: 741,
    question: "When was the Declaration of Independence adopted?",
    options: ["1789", "1776", "1801", "1754"],
    correct: "1776",
  },
  {
    id: 742,
    question: "Who was the first President of the United States?",
    options: [
      "Thomas Jefferson",
      "Abraham Lincoln",
      "George Washington",
      "John Adams",
    ],
    correct: "George Washington",
  },
  {
    id: 743,
    question: "Which event started the American Civil War?",
    options: [
      "Boston Tea Party",
      "Attack on Fort Sumter",
      "Louisiana Purchase",
      "Discovery of gold in California",
    ],
    correct: "Attack on Fort Sumter",
  },
  {
    id: 744,
    question: "The Louisiana Purchase (1803) was bought from which country?",
    options: ["Spain", "France", "Britain", "Mexico"],
    correct: "France",
  },
  {
    id: 745,
    question: "Which war ended with the Treaty of Paris in 1783?",
    options: [
      "War of 1812",
      "Civil War",
      "Revolutionary War",
      "Mexican-American War",
    ],
    correct: "Revolutionary War",
  },
  {
    id: 746,
    question: "Abraham Lincoln is best known for…",
    options: [
      "Writing the Constitution",
      "Ending World War I",
      "Emancipating slaves",
      "Founding New York",
    ],
    correct: "Emancipating slaves",
  },
  {
    id: 747,
    question: "Which event caused the USA to enter World War II?",
    options: [
      "Germany invading Poland",
      "Attack on Pearl Harbor",
      "Bombing of London",
      "Fall of France",
    ],
    correct: "Attack on Pearl Harbor",
  },
  {
    id: 748,
    question: "When did the USA land the first man on the Moon?",
    options: ["1965", "1972", "1969", "1959"],
    correct: "1969",
  },
  {
    id: 749,
    question: "What was the main cause of the Great Depression?",
    options: [
      "World War II",
      "Stock Market Crash of 1929",
      "Civil War",
      "Cold War tensions",
    ],
    correct: "Stock Market Crash of 1929",
  },
  {
    id: 750,
    question: "Which two countries were the main rivals during the Cold War?",
    options: [
      "USA and China",
      "USA and Japan",
      "USA and Soviet Union",
      "USA and Germany",
    ],
    correct: "USA and Soviet Union",
  },
  {
    id: 751,
    question: "What is the main function of a government?",
    options: [
      "Entertainment",
      "Making and enforcing laws",
      "Selling goods",
      "Controlling religion",
    ],
    correct: "Making and enforcing laws",
  },
  {
    id: 752,
    question: "Which term refers to a state ruled by elected representatives?",
    options: ["Monarchy", "Dictatorship", "Democracy", "Empire"],
    correct: "Democracy",
  },
  {
    id: 753,
    question: "What is a constitution?",
    options: [
      "A type of election",
      "A document that outlines the rules and principles of a state",
      "A political party",
      "A building of government",
    ],
    correct: "A document that outlines the rules and principles of a state",
  },
  {
    id: 754,
    question: "Which branch of government makes the laws?",
    options: ["Executive", "Judicial", "Legislative", "Royal"],
    correct: "Legislative",
  },
  {
    id: 755,
    question: "Which branch of government interprets the laws?",
    options: ["Executive", "Judicial", "Administrative", "Military"],
    correct: "Judicial",
  },
  {
    id: 756,
    question: "What is the head of the executive branch usually called?",
    options: ["Judge", "Senator", "President or Prime Minister", "Ambassador"],
    correct: "President or Prime Minister",
  },
  {
    id: 757,
    question: "A monarchy is a system where…",
    options: [
      "Power is held by the people",
      "The military controls the state",
      "A king or queen rules",
      "Laws are not needed",
    ],
    correct: "A king or queen rules",
  },
  {
    id: 758,
    question: "What is the main role of the judicial branch?",
    options: [
      "To declare war",
      "To interpret the constitution",
      "To collect taxes",
      "To control media",
    ],
    correct: "To interpret the constitution",
  },
  {
    id: 759,
    question: "What is sovereignty?",
    options: [
      "The state's ability to make decisions independently",
      "A type of parliament",
      "A national holiday",
      "A military rank",
    ],
    correct: "The state's ability to make decisions independently",
  },
  {
    id: 760,
    question: "What is a federal system?",
    options: [
      "Power is shared between national and regional governments",
      "All power belongs only to the central government",
      "Government is controlled by the army",
      "Businesses rule the country",
    ],
    correct: "Power is shared between national and regional governments",
  },
  {
    id: 761,
    question:
      "What is the role of the federal Department of Education in the USA?",
    options: [
      "To pass national laws about education",
      "To control state Boards of Education",
      "To gather information and help finance programmes",
      "To set compulsory school age across the nation",
    ],
    correct: "To gather information and help finance programmes",
  },
  {
    id: 762,
    question: "How are state Boards of Education usually formed?",
    options: [
      "Members are elected by the public or appointed by the governor",
      "Members are appointed by the federal Department of Education",
      "They are chosen by teachers' unions",
      "They are created by local communities",
    ],
    correct: "Members are elected by the public or appointed by the governor",
  },
  {
    id: 763,
    question:
      "What percentage of education funds came from federal sources in 1986?",
    options: ["About 50%", "About 43%", "About 6%", "About 85%"],
    correct: "About 6%",
  },
  {
    id: 764,
    question:
      "Why is there still some degree of uniformity in American education despite local control?",
    options: [
      "Because the federal government imposes strict standards",
      "Because of state and national accrediting agencies",
      "Because teachers follow the same national curriculum",
      "Because funding is equally shared among states",
    ],
    correct: "Because of state and national accrediting agencies",
  },
  {
    id: 765,
    question: "What is considered a major result of local control of schools?",
    options: [
      "Limited flexibility in school programmes",
      "Variety and flexibility in education",
      "Equal funding across all schools",
      "More centralisation of power",
    ],
    correct: "Variety and flexibility in education",
  },
  {
    id: 766,
    question:
      "Which of the following is true about American high schools compared to other countries?",
    options: [
      "Only elite students attend American high schools",
      "American high schools include all students in the age group",
      "Technical and vocational schools are kept in separate buildings",
      "Students are separated early based on academic ability",
    ],
    correct: "American high schools include all students in the age group",
  },
  {
    id: 767,
    question: "What proportion of American students attend public schools?",
    options: ["15%", "43%", "85%", "100%"],
    correct: "85%",
  },
  {
    id: 768,
    question:
      "Which of the following is NOT true about private schools in the USA?",
    options: [
      "Four out of five are run by religious groups",
      "They include religious instruction in their curriculum",
      "They are supported by American taxpayers",
      "Families must pay special attendance fees",
    ],
    correct: "They are supported by American taxpayers",
  },
  {
    id: 769,
    question: "What is the currency of Great Britain?",
    options: ["Dollar", "Euro", "Pound sterling", "Franc"],
    correct: "Pound sterling",
  },
  {
    id: 770,
    question: "London is one of the world's leading centers for ________.",
    options: ["Agriculture", "Finance", "Mining", "Fishing"],
    correct: "Finance",
  },
  {
    id: 771,
    question: "Which sport was invented in Britain?",
    options: ["Football", "Baseball", "Basketball", "Volleyball"],
    correct: "Football",
  },
  {
    id: 772,
    question: "Wimbledon is famous for which sport?",
    options: ["Cricket", "Tennis", "Golf", "Rugby"],
    correct: "Tennis",
  },
  {
    id: 773,
    question: "The BBC stands for ________.",
    options: [
      "British Broadcasting Corporation",
      "British Business Company",
      "Big Broadcasting Channel",
      "Britain Broadcast Club",
    ],
    correct: "British Broadcasting Corporation",
  },
  {
    id: 774,
    question: "The National Lottery in the UK mainly supports ________.",
    options: [
      "Private businesses",
      "Arts, sports, and charities",
      "Political parties",
      "Schools only",
    ],
    correct: "Arts, sports, and charities",
  },
  {
    id: 775,
    question: "The Premier League is related to ________.",
    options: ["Football", "Basketball", "Cricket", "Rugby"],
    correct: "Football",
  },
  {
    id: 776,
    question: "The British education system includes strong focus on ________.",
    options: ["History", "Mathematics", "Art only", "Cooking"],
    correct: "Mathematics",
  },
  {
    id: 778,
    question: "The most popular newspapers in Britain are called ________.",
    options: [
      "The Times, The Guardian, The Daily Mail",
      "The New York Times",
      "The Washington Post",
      "The Paris News",
    ],
    correct: "The Times, The Guardian, The Daily Mail",
  },
  {
    id: 779,
    question: "The British economy is known as a ________ economy.",
    options: ["Centralized", "Mixed", "Planned", "Agricultural"],
    correct: "Mixed",
  },
  {
    id: 780,
    question: "Who was the first Queen of England?",
    options: ["Elizabeth II", "Elizabeth I", "Victoria", "Anne"],
    correct: "Elizabeth I",
  },
  {
    id: 781,
    question: "When did the Battle of Hastings take place?",
    options: ["1066", "1215", "1666", "1815"],
    correct: "1066",
  },
  {
    id: 782,
    question: "Who signed the Magna Carta in 1215?",
    options: ["King John", "Henry VIII", "William the Conqueror", "Edward I"],
    correct: "King John",
  },
  {
    id: 783,
    question: "The Industrial Revolution began in ________.",
    options: ["France", "Britain", "Germany", "Russia"],
    correct: "Britain",
  },
  {
    id: 784,
    question: "Which war ended in 1945?",
    options: ["World War II", "World War I", "The Civil War", "The Cold War"],
    correct: "World War II",
  },
  {
    id: 785,
    question: "The Great Fire of London happened in ________.",
    options: ["1215", "1348", "1666", "1918"],
    correct: "1666",
  },
  {
    id: 786,
    question:
      "Which queen ruled Britain for the longest time before Elizabeth II?",
    options: [
      "Queen Victoria",
      "Queen Mary",
      "Queen Anne",
      "Queen Elizabeth I",
    ],
    correct: "Queen Victoria",
  },
  {
    id: 787,
    question: "The British Empire was the largest empire in ________.",
    options: [
      "The 19th century",
      "The 17th century",
      "The 15th century",
      "The 21st century",
    ],
    correct: "The 19th century",
  },
  {
    id: 788,
    question: "Which event united England and Scotland?",
    options: [
      "The Act of Union (1707)",
      "The Battle of Hastings",
      "The Great Fire of London",
      "The English Civil War",
    ],
    correct: "The Act of Union (1707)",
  },
  {
    id: 789,
    question: "Who was the British Prime Minister during World War II?",
    options: [
      "Winston Churchill",
      "Margaret Thatcher",
      "Tony Blair",
      "Boris Johnson",
    ],
    correct: "Winston Churchill",
  },
  {
    id: 790,
    question: "What type of government does the UK have?",
    options: [
      "Constitutional monarchy",
      "Absolute monarchy",
      "Republic",
      "Dictatorship",
    ],
    correct: "Constitutional monarchy",
  },
  {
    id: 791,
    question: "Who is the head of state in the UK?",
    options: [
      "The King/Queen",
      "The Prime Minister",
      "The Parliament",
      "The President",
    ],
    correct: "The King/Queen",
  },
  {
    id: 792,
    question: "Who is the head of government in the UK?",
    options: [
      "The King",
      "The Prime Minister",
      "The Speaker",
      "The Lord Chancellor",
    ],
    correct: "The Prime Minister",
  },
  {
    id: 793,
    question: "What is the name of the UK Parliament's two houses?",
    options: [
      "House of Commons and House of Lords",
      "House of Representatives and Senate",
      "Upper and Lower Court",
      "Congress and Senate",
    ],
    correct: "House of Commons and House of Lords",
  },
  {
    id: 794,
    question: "The Prime Minister lives at ________.",
    options: [
      "Buckingham Palace",
      "10 Downing Street",
      "Windsor Castle",
      "Westminster Abbey",
    ],
    correct: "10 Downing Street",
  },
  {
    id: 795,
    question: "Members of Parliament (MPs) are elected by ________.",
    options: [
      "Citizens",
      "The King",
      "The Prime Minister",
      "The House of Lords",
    ],
    correct: "Citizens",
  },
  {
    id: 796,
    question: "The British legal system is based on ________.",
    options: ["Common law", "Roman law", "Civil law", "Canon law"],
    correct: "Common law",
  },
  {
    id: 797,
    question:
      "The King or Queen opens the new session of Parliament during ________.",
    options: [
      "The State Opening",
      "Coronation",
      "General Election",
      "Commonwealth Day",
    ],
    correct: "The State Opening",
  },
  {
    id: 798,
    question: "The main political parties in the UK are ________.",
    options: [
      "Conservative and Labor",
      "Republican and Democratic",
      "Green and Liberal",
      "Socialist and Communist",
    ],
    correct: "Conservative and Labor",
  },
  {
    id: 799,
    question: "The flag of the United Kingdom is called ________.",
    options: [
      "The Union Jack",
      "The Royal Banner",
      "The British Cross",
      "The National Flag",
    ],
    correct: "The Union Jack",
  },
  {
    id: 800,
    question: "Great Britain is one of the world's leading countries in:",
    options: [
      "Agriculture",
      "Industry and finance",
      "Fishing",
      "Oil production",
    ],
    correct: "Industry and finance",
  },
  {
    id: 801,
    question: "The main financial center of Great Britain is:",
    options: ["Birmingham", "Liverpool", "London", "Manchester"],
    correct: "London",
  },
  {
    id: 802,
    question:
      "Which of the following industries is most important in the UK economy?",
    options: ["Shipbuilding", "Services sector", "Textile industry", "Farming"],
    correct: "Services sector",
  },
  {
    id: 803,
    question: "Football in Great Britain is often called:",
    options: ["Soccer", "Rugger", "Cricket", "Polo"],
    correct: "Soccer",
  },
  {
    id: 804,
    question: "Wimbledon in London is famous for which sport?",
    options: ["Golf", "Tennis", "Rugby", "Boxing"],
    correct: "Tennis",
  },
  {
    id: 805,
    question:
      "Which sport is considered the 'national summer game' of England?",
    options: ["Football", "Rugby", "Cricket", "Tennis"],
    correct: "Cricket",
  },
  {
    id: 806,
    question: "The BBC (British Broadcasting Corporation) was founded in:",
    options: ["1922", "1939", "1945", "1953"],
    correct: "1922",
  },
  {
    id: 807,
    question: "What does the BBC provide?",
    options: [
      "Only newspapers",
      "Radio and television broadcasting",
      "Sports clubs",
      "Internet shopping",
    ],
    correct: "Radio and television broadcasting",
  },
  {
    id: 808,
    question: "The most popular newspapers in Great Britain are divided into:",
    options: [
      "Broadsheets and tabloids",
      "Weeklies and monthlies",
      "Sport and business",
      "Official and private",
    ],
    correct: "Broadsheets and tabloids",
  },
  {
    id: 809,
    question: "Which of the following sports was invented in Great Britain?",
    options: ["Basketball", "Cricket", "Volleyball", "Baseball"],
    correct: "Cricket",
  },
  {
    id: 810,
    question: "When was the Declaration of Independence adopted?",
    options: ["1492", "1620", "1776", "1865"],
    correct: "1776",
  },
  {
    id: 811,
    question: "Who was the first President of the United States?",
    options: [
      "Abraham Lincoln",
      "George Washington",
      "Thomas Jefferson",
      "John Adams",
    ],
    correct: "George Washington",
  },
  {
    id: 812,
    question:
      "Which European country first established permanent colonies in North America?",
    options: ["Spain", "France", "England", "Portugal"],
    correct: "England",
  },
  {
    id: 813,
    question: "The American Civil War took place in:",
    options: ["1607–1612", "1775–1783", "1861–1865", "1914–1918"],
    correct: "1861–1865",
  },
  {
    id: 814,
    question: "Who wrote the Declaration of Independence?",
    options: [
      "Benjamin Franklin",
      "George Washington",
      "Thomas Jefferson",
      "James Madison",
    ],
    correct: "Thomas Jefferson",
  },
  {
    id: 815,
    question: "In 1620 the Pilgrims landed in America on the ship called:",
    options: ["Santa Maria", "Mayflower", "Discovery", "Victoria"],
    correct: "Mayflower",
  },
  {
    id: 816,
    question: "When did the United States enter World War II?",
    options: ["1939", "1940", "1941", "1945"],
    correct: "1941",
  },
  {
    id: 817,
    question: "The U.S. Constitution was signed in:",
    options: ["1776", "1787", "1791", "1801"],
    correct: "1787",
  },
  {
    id: 818,
    question: "Abraham Lincoln is famous for:",
    options: [
      "Discovering America",
      "Leading the War of Independence",
      "Abolishing slavery",
      "Founding the U.S. Constitution",
    ],
    correct: "Abolishing slavery",
  },
  {
    id: 819,
    question: "Who was the U.S. President during World War II?",
    options: [
      "George Washington",
      "Theodore Roosevelt",
      "Franklin D. Roosevelt",
      "John F. Kennedy",
    ],
    correct: "Franklin D. Roosevelt",
  },
  {
    id: 820,
    question: "What type of state is Great Britain?",
    options: [
      "Federal Republic",
      "Parliamentary Monarchy",
      "Presidential Republic",
      "Absolute Monarchy",
    ],
    correct: "Parliamentary Monarchy",
  },
  {
    id: 821,
    question: "Who is the Head of State in the UK?",
    options: [
      "The Prime Minister",
      "The President",
      "The Monarch (King/Queen)",
      "The Parliament",
    ],
    correct: "The Monarch (King/Queen)",
  },
  {
    id: 822,
    question: "Who is the Head of Government in Great Britain?",
    options: [
      "The Prime Minister",
      "The Monarch",
      "The Speaker",
      "The Chancellor",
    ],
    correct: "The Prime Minister",
  },
  {
    id: 823,
    question: "The Parliament of the UK consists of:",
    options: ["One House", "Two Houses", "Three Houses", "Four Houses"],
    correct: "Two Houses",
  },
  {
    id: 824,
    question: "What are the names of the two Houses of Parliament?",
    options: [
      "House of Deputies and Senate",
      "House of Commons and House of Lords",
      "Senate and Congress",
      "Duma and Council",
    ],
    correct: "House of Commons and House of Lords",
  },
  {
    id: 825,
    question: "Members of the House of Commons are:",
    options: [
      "Appointed by the Monarch",
      "Elected by the people",
      "Inherited by nobility",
      "Selected by the Lords",
    ],
    correct: "Elected by the people",
  },
  {
    id: 826,
    question: "Members of the House of Lords are mainly:",
    options: [
      "Electred by citizens",
      "Appointed and hereditary peers",
      "Governors of regions",
      "Judges only",
    ],
    correct: "Appointed and hereditary peers",
  },
  {
    id: 827,
    question: "The Prime Minister is usually the leader of:",
    options: [
      "The ruling party in the House of Commons",
      "The House of Lords",
      "The Royal Family",
      "The Judiciary",
    ],
    correct: "The ruling party in the House of Commons",
  },
  {
    id: 828,
    question: "Which is the highest court of appeal in the UK?",
    options: ["Crown Court", "High Court", "Supreme Court", "Privy Council"],
    correct: "Supreme Court",
  },
  {
    id: 829,
    question: "What is the role of the Monarch in modern UK politics?",
    options: [
      "Governs the country directly",
      "Exercises absolute power",
      "Performs mainly ceremonial functions",
      "Leads the House of Commons",
    ],
    correct: "Performs mainly ceremonial functions",
  },
];

/* ========= VARIABLES ========= */
let currentIndex = 0;
let score = 0;

/* ========= ELEMENTS ========= */
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const quizBox = document.getElementById("quiz-box");
const progressEl = document.getElementById("progress");

/* ========= START ========= */
loadQuestion();

/* ========= FUNCTIONS ========= */

// Shuffle options
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Confetti animation
function launchConfetti() {
  const colors = ["#27ae60", "#2980b9", "#f1c40f", "#9b59b6", "#e67e22"];

  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = Math.random() * 1 + 1.5 + "s";

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2500);
  }
}

// Load question
function loadQuestion() {
  nextBtn.disabled = true;
  optionsEl.innerHTML = "";

  const q = questions[currentIndex];
  progressEl.textContent = `Savol ${currentIndex + 1} / ${questions.length}`;
  questionEl.textContent = q.question;

  const shuffled = shuffleArray([...q.options]);

  shuffled.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(btn, option, q.correct);
    optionsEl.appendChild(btn);
  });
}

// Check answer
function checkAnswer(btn, selected, correct) {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach((b) => (b.disabled = true));

  if (selected === correct) {
    btn.classList.add("correct");
    score++;
    launchConfetti();
  } else {
    btn.classList.add("wrong");
    buttons.forEach((b) => {
      if (b.textContent === correct) {
        b.classList.add("correct");
      }
    });
  }

  nextBtn.disabled = false;
}

// Next question
nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

// Show result
function showResult() {
  quizBox.classList.add("hidden");
  nextBtn.classList.add("hidden");

  resultEl.classList.remove("hidden");
  resultEl.innerHTML = `
        <h3>Test yakunlandi</h3>
        <p>Natija: <b>${score} / ${questions.length}</b></p>
        <button class="restart-btn" onclick="restartQuiz()">🔁 Qayta yechish</button>
    `;
}

// Restart quiz
function restartQuiz() {
  currentIndex = 0;
  score = 0;
  resultEl.classList.add("hidden");
  quizBox.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
  loadQuestion();
}
