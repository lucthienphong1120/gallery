# Gallery
A visual portfolio generator with web hosting for your mockups and photo albums. Requires no 3rd party libraries or installations. A 🤑free🤑 Squarespace alternative for your photos.

![demo](./demo.gif)

*Gallery is a side project of mine to allow me to create a more curated version of my photography and mockup portfolio. It's intended to have a simple setup process that is accessible by anyone.*

## How to use

- Fork this repository 🍴
- Clone the repository through terminal by running
```
git clone https://github.com/lucthienphong1120/gallery
```
- Replace contents of `/photos` with all of your albums. For each of your albums, create a folder with the same name as your album name, and then put all of your photos in the folder.

**Example**:
```
/photos
  /mockups
    IMG_0123.jpg
    IMG_0124.jpg
  /portrait
    IMG_1234.jpg
    IMG_1235.jpg
```

- In Windows, open PowerShell and run `python .\tools\setup.py`, this will go through all of your albums and create a `config.json` file. (This file allows the generator to know which photos will be hosted on your website).✨
- Personalize the contents of website at `_config.yml`.
- Commit all change and host your repo with github page
- ... and that's all your gallery

## How It Works
There are two important pieces to gallery:

### Album Generation
`setup.command` goes through all of the folders in your `/photos/` directory. It collects all of the file paths of each photo in each album. It aggregates all of this data into one key file called `config.json`.

### Client-side Generation
Once you've created your `config.json`, the website can now use that file to figure out which photos to show. It uses jekyll and JavaScript(ES6🔥) to layout your photos, grouping all of the photos per album.

## Customizing your Gallery
Gallery supports 3 different kinds of layouts: rows, squares and columns. You can choose which type of layout you want to use by setting the `layout` variable in `script.js` to be either `SQUARES`, `ROWS` or `COLUMNS`.

Each different layout has both its own and shared set of configuration options.

### Shared
- `spacing` (Integer): The vertical and horizontal distance that separates each photo from all adjacent photos. *Defaulted to 10*.
- `shuffle` (Boolean): Toggle to shuffle or not to shuffle the photos. *Default is `false`*.

### Column Configuration
- `columns` (Integer): The number of columns for the layout. *Default is `3`*.

### Square Configuration
- `columns` (Integer): The number of columns for the layout. *Default is `3`*.
- `maxHeight` (Integer): The max height in px for each photo. *Default is `400`*.

Columns takes priority if both are set.

### Row Configuration
- `maxHeight` (Integer): The max height in px for each photo. *Default is `400`*.

## Fun Facts
- No Bootstrap is used. AT ALL! 🔥🔥🔥
- It uses ES6. NEW TECH! 🔥🔥🔥
- It has no local dependencies. SAY WHAT! 🔥🔥🔥

🔥🔥🔥

---

If you enjoyed using Gallery, I'd love to see what you created with Gallery 🙌

Share your gallery with me on this [thread](https://github.com/andyzg/gallery/issues/1)❤️!
