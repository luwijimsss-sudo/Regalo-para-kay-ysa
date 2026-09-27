TANGLED-INSPIRED BIRTHDAY WEBSITE
=================================

FILES
-----
index.html      = opening birthday animation
home.html       = main menu
memories.html   = photo gallery
music.html      = music playlist
letter.html     = birthday letter
style.css       = all design/styling
script.js       = confetti + balloons + opening animation

ADDING PHOTOS
-------------
1. Create a folder named "assets" beside the HTML files.
2. Put your pictures inside it:
   assets/photo1.jpg
   assets/photo2.jpg
   etc.
3. In memories.html, replace each placeholder:
      <div class="photo-frame"><span>YOUR PHOTO #1</span></div>
   with:
      <div class="photo-frame">
        <img src="assets/photo1.jpg" alt="Memory 1">
      </div>

ADDING MUSIC
------------
1. Create:
   assets/music/
2. Put your songs there:
   assets/music/song1.mp3
   assets/music/song2.mp3
   etc.
3. Change the src in music.html if your filenames are different.
4. Change the song title and artist text.

ADDING YOUR LETTER
------------------
Open letter.html and replace the sample paragraphs inside
the .letter-paper section with your own letter.

USING A GIF ON THE FIRST PAGE
-----------------------------
Put your GIF inside assets, for example:
assets/birthday.gif

Then in index.html replace the magic icon with:
<img src="assets/birthday.gif" alt="Birthday magic">

GITHUB PAGES
------------
Upload all files while keeping their structure.
In GitHub:
Settings -> Pages -> Deploy from a branch -> main -> /(root)

Your public website will then be available through your GitHub Pages URL.

NOTE
----
This design is inspired by the dreamy purple/gold lantern/fairytale
aesthetic associated with Tangled. It does not include Disney-owned
artwork, characters, logos, or other copyrighted assets.
