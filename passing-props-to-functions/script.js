// Task 1: Create a function that accepts an object with name and age
// Task 2: Console log the values from the object
// Task 3: Call the function and pass an object



// --- 10 Practice Tasks ---
// Example 1: Function receives a user object and logs name and age

function showUserName({name, age}) {
  console.log(`Name: ${name}, Age: ${age}`);
}

showUserName({name: "Howard", age: 28});

// Example 2: Use object destructuring to log user details

function grabUserDetails({firstName, lastName, job}) {
  console.log(`First Name: ${firstName}, Last Name: ${lastName}, Job: ${job}`)
};

grabUserDetails({firstName: "Tyson", lastName: "Zimmer", job: "Programmer"});

// Example 3: Log city and country from an object

function findCity({city, country}) {
  console.log(`City: ${city}, Country: ${country}`);
};

findCity({city: "Los Angeles", country: "USA"});

// Example 4: Log username and email from an object

function userInformation({username, email}) {
  console.log(`Your username is:${username} and your email is:${email}`);
};

userInformation({username: "BigCheese123", email: "bigcheese@gmail.com"});

// Example 5: Log views and likes from a stats object

function interactionStats({views, likes}) {
  console.log(`This post has ${views} views and ${likes} likes`);
};

interactionStats({views: 100000, likes: 34588});

// Example 6: Log X and Y coordinates

function coordinates({x, y}) {
  console.log(`Your currently location is ${x}, ${y}`);
};

coordinates({x: 1242523.04, y: -2354238.933});


// Example 7: Log dark mode setting and language

function currentMode({mode, language}) {
  console.log(`Color Mode:${mode} Current Language:${language}`);
};

currentMode({mode: "Dark Mode", language: "English"})

// Example 8: Log title and length of a summary

function blogDetails({title, summaryLength}) {
  console.log(`Blog title: ${title}, Summary Length: ${summaryLength}`);
};

blogDetails({title: "How to be awesome!", summaryLength: "Looooong"});

// Example 9: Log name, age, and job from user

function allUserData({userName, userAge, userJob}) {
  console.log(`Name: ${userName}, Age: ${userAge}, Job: ${userJob}`);
};

allUserData({userName: "Frank Kern", userJob: "Doctor", userAge: 45});


// Example 10: Log sender and message content

function messageData({sender, message}) {
 console.log(`New message from: ${sender} and here is what they said: ${message}`);
};

messageData({sender: "buddy boy", message: "I am your biggest fan! I hope to meet you one day"});