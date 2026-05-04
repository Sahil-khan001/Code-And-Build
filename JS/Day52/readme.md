<!-- 🧱 Static HTML vs Dynamic (JS-rendered)

Static HTML

Markup is hardcoded in the .html file.
Browser parses it once → DOM is built → CSS applies.
No dependency on runtime data.
<div class="card">...</div>
<div class="card">...</div>

Dynamic (JS) HTML

You generate DOM nodes at runtime using data.
Same class names ⇒ same CSS rules apply (CSS doesn’t care how nodes were created).
data.forEach(obj => {
  const card = document.createElement('div');
  card.className = 'card';
  // ...
});

✔ Correct understanding:

You’re replicating the static structure using JS, driven by data objects.

🔁 “Re-rendering” — what it actually means

In plain JS (no framework):

There is no automatic re-render.
The DOM changes only when you explicitly modify it:
appendChild
innerHTML = ...
removeChild, replaceChild, etc.

Example:

container.innerHTML = "";   // clear
data.forEach(createCard);   // build again

That manual clear + rebuild = re-render.

So re-render = “you changed the DOM again,” not something the browser does by itself.

⚠️ innerHTML vs createElement (important difference)
innerHTML += ...
Re-parses HTML string
Can recreate nodes repeatedly (costly)
Feels like “re-rendering” every loop
createElement + appendChild
Adds nodes incrementally
More efficient, predictable
📊 Why number of elements depends on data
data.length === number of cards
6 objects → 6 cards
100 objects → 100 cards

Data is the source of truth; UI is just a projection of it.

🎯 Final Mental Model (keep this)
HTML structure = template idea
JS = factory that builds that structure
Data = controls how many + what content
CSS = applies based on class names only
Re-render = manually updating/rebuilding DOM -->