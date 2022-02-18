# ✨ Demo
[estefaniaderosa.github.io/blog](https://estefaniaderosa.github.io/blog)

# :notebook: BLOG APP
Simple app that simulates a blog where the user can **add , edit  and delete posts**. The posts displayed are random paragraphs and titles generated with [Random Paragraph](https://randomwordgenerator.com/paragraph.php).
There's also a **Profile** page where the user can **choose a random image for the avatar**.

For this project I used **Mobx** for the first time to manage the global state of the app. If the user adds or deletes a post, there is a posts counter that will display the current amount.
Everytime the user adds a post an ID is generated using **UUIDv4**.
To navigate between pages I used **React Router DOM**.
I used **Axios** to fetch the data from the **Unsplash API** to generate the random image for the avatar. Everytime the user clicks on the 'Generate random avatar' button, a random word is generated using the **random-word npm package**. And that will be the query for the Unsplash search.
For the UI I used **Ant Design**.


##   👩‍💻 Stack
[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[React](https://es.reactjs.org/)

[CCS3](https://developer.mozilla.org/en-US/docs/Web/CSS)

[HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)

[npm random-word package](https://www.npmjs.com/package/random-words)

[UUIDv4 ](https://github.com/thenativeweb/uuidv4)

[Unsplash API](https://unsplash.com/documentation)

[AXIOS](https://axios-http.com/)

[MobX](https://mobx.js.org/README.html)

[Ant Design](https://ant.design/)

[React Router](https://reactrouter.com/)


##  🗂️ Folder Structure
![Screenshot 2022-02-18 at 14 09 33](https://user-images.githubusercontent.com/65559206/154688702-1f168f4a-ff6d-4d05-a313-aae7ecfce096.png)


## 🚀 Installation
To start working with the repository and install all the packages:

1.  Clone repo
> `git clone https://github.com/estefaniaderosa/blog.git`

2. Install
> `npm i`

3.  Start

> `npm start`


#### ✅ Codefactor Score
[![CodeFactor](https://www.codefactor.io/repository/github/estefaniaderosa/blog/badge/master)](https://www.codefactor.io/repository/github/estefaniaderosa/blog/overview/master)

