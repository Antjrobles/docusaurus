
![AI_PROMPTS]()

> # AI PROMPTS

## WEB DEVELOPMENTS PROMPTS
- TAILWINDDD


```html
<!-- Generate a semantic HTML and Tailwind CSS "Contact Support" form consisting of the user's name, email, issue type and message. The form elements should be stacked vertically and placed inside a card. Make it responsive -->
<div class="container mx-auto px-4 mt-8">
  <div class="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
    <div class="p-4 md:p-6">
      <h2 class="text-lg font-semibold text-gray-800 mb-2">Contact Support</h2>
      <form class="space-y-4">
        <div class="flex flex-wrap -mx-2">
          <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label class="block text-gray-700 font-semibold mb-2" for="name">Name</label>
            <input class="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" name="name" required>
          </div>
          <div class="w-full md:w-1/2 px-2">
            <label class="block text-gray-700 font-semibold mb-2" for="email">Email</label>
            <input class="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" name="email" required>
          </div>
        </div>
        <div class="flex flex-wrap -mx-2">
          <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label class="block text-gray-700 font-semibold mb-2" for="issue">Issue Type</label>
            <select class="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" id="issue" name="issue" required>
              <option value="" disabled selected>Select an issue type</option>
              <option value="billing">Billing</option>
              <option value="technical">Technical</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div class="flex flex-wrap -mx-2">
          <div class="w-full px-2">
            <label class="block text-gray-700 font-semibold mb-2" for="message">Message</label>
            <textarea class="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" name="message" rows="4" required></textarea>
          </div>
        </div>
        <div class="flex justify-center mt-4">
          <button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
```

### EXPRESS & MONGODB

```text
Write and Express.js API to fetch the current user's profile information. it should make use of MongobDB
```
```js
//CODE
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// configure middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configure database connection
const MONGODB_URI = 'mongodb://localhost:27017/mydb';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// define user profile schema
const userProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String }
});

// define user profile model
const UserProfile = mongoose.model('UserProfile', userProfileSchema);

// define API route to fetch user profile
app.get('/profile', async (req, res) => {
  try {
    // get user ID from request headers or query string
    const userId = req.headers.userid || req.query.userid;

    // find user profile in database
    const userProfile = await UserProfile.findOne({ _id: userId });

    // check if user profile exists
    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    // return user profile
    res.status(200).json(userProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```


### CONVERT CODE
- You can convert code form one lenguaje to another., for example, Javascript to Typescript. Even convert from Bootstrap css to Tailwind. 

### EXPLAIN CODE & CODE REVIEWS
- WE can ask ChatGPT to explain some code snippet or review our code. 

### CODE REFACTOR & FIND BUGS.
- ChatGPT can refactor your code to make it more compact and readable.

### WRITE UNIT TESTS
- Write a unit test for the below Javascript function using Jest as the testinf framework

- Write a list of test cases to manually test user registration in a web/mobile application

###  SHELL COMMANDS & GIT
 - Write a shell command to delete all files with the extension '.log' in the 'logs' folder
```
rm logs/*.log
```

### Write a git command to undo the previous commit
```bash
git reset HEAD~1
```


### REGULAR EXPRESION. GENERATE & EXPLANATIONS
- We ask ChatGPT to create regular expression that match our requirements, and explain them to us.

### RESUME & COVERS LETTERS

### AI ART KEY WORDS
A watercolor painting of a campground...
A pencil sketch of a campground...
A 3d rendering of a campground...

### GUIDE TO A GOOD PROMPT
- SUBJECT, MEDIUM, ADJECTIVE, STYLE/ARTIST AND TECHNICAL TERMS (in this order).

- SUBJECTS: Oceanics currents, the cosmos, microscopic life...
- MEDIUM: Paintning, Sculpture, Drawing, Printmaking, Ceramics, Textille, Collage, Engraving, Woodcutting, Digital art...
- ADJECTIVES: Vibrant, Chaotic, Serene, Playful, Tranquil, Sublme...
- STYLE / ARTITS: Geometric, Vintage, Origami, Sureal, Realistic, Watercolor, Grunge, Art Brut...
- TECHNICAL TERMS: ISO 800 f/4, Shallow depth-of-field, High contrast, Telephoto Lens, Kodak Gold 200...

