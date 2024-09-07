const initialMemes = [
  {
    id: 1,
    imageUrl: "/placeholder.svg?height=300&width=400&text=Meme1",
    title: "When the code finally compiles",
    description: "But you don't know why",
    likes: 42,
    comments: 5,
  },
  {
    id: 2,
    imageUrl: "/placeholder.svg?height=300&width=400&text=Meme2",
    title: "Debugging",
    description: "It's like being the detective in a crime movie where you're also the murderer",
    likes: 28,
    comments: 3,
  },
];

let memes = [...initialMemes];

function displayMemes() {
  const memeContainer = document.getElementById("memeContainer");
  memeContainer.innerHTML = ''; // Clear previous content

  memes.forEach((meme) => {
    const memeCard = document.createElement("div");
    memeCard.className = "meme-card";

    memeCard.innerHTML = `
      <h3>${meme.title}</h3>
      <img src="${meme.imageUrl}" alt="${meme.title}" />
      <p class="description">${meme.description}</p>
      <div class="meme-footer">
        <button onclick="likeMeme(${meme.id})">👍 ${meme.likes}</button>
        <button>💬 ${meme.comments}</button>
      </div>
    `;

    memeContainer.appendChild(memeCard);
  });
}

function postMeme() {
  const title = document.getElementById("memeTitle").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const description = document.getElementById("description").value;

  if (title && imageUrl) {
    const newMeme = {
      id: memes.length + 1,
      title,
      imageUrl,
      description,
      likes: 0,
      comments: 0,
    };

    memes.unshift(newMeme);
    displayMemes(); // Refresh the displayed memes

    // Clear form inputs
    document.getElementById("memeTitle").value = '';
    document.getElementById("imageUrl").value = '';
    document.getElementById("description").value = '';
  }
}

function likeMeme(id) {
  memes = memes.map(meme =>
    meme.id === id ? { ...meme, likes: meme.likes + 1 } : meme
  );
  displayMemes(); // Refresh the displayed memes
}

// Initial rendering of memes
window.onload = displayMemes;
