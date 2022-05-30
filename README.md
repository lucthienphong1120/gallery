# Gallery

An automatic photo gallery generator for your images and albums, a free portfolio solution for your photos.

![demo](./demo.gif)

## How to use

- Fork this repository 🍴
- Clone the repository
```
git clone https://github.com/lucthienphong1120/gallery
```
- Replace contents of `/photos` with all of your albums. For each of your albums, create a folder with the same name as your album name, and then put all of your photos in the folder.

**Example**:
```
/photos
  /albums1
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
Once you've created your `config.json`, the website can now use that file to figure out which photos to show. It uses Jekyll template 🔥 and JavaScript ES6 to layout your photos, grouping all of the photos per album.

## Customizing your Gallery
Gallery supports 3 different kinds of layouts: rows, squares and columns. You can choose which type of layout to use in `_config.yml` file to be either `SQUARES`, `ROWS` or `COLUMNS`.

Each different layout has both its own and shared set of configuration options.

- `spacing` (Integer): The vertical and horizontal distance that separates each photo from all adjacent photos. *Defaulted to 10*.
- `shuffle` (Boolean): Toggle to shuffle or not to shuffle the photos. *Default is `false`*.

### Column
- `columns` (Integer): The number of columns for the layout. *Default is `3`*.

### Square
- `columns` (Integer): The number of columns for the layout. *Default is `3`*.
- `maxHeight` (Integer): The max height in px for each photo. *Default is `400`*.

Columns takes priority if both are set.

### Row
- `maxHeight` (Integer): The max height in px for each photo. *Default is `400`*.

## Fun Facts
- No Bootstrap is used. AT ALL! 🔥🔥🔥
- It uses ES6. NEW TECH! 🔥🔥🔥
- It has no local dependencies. SAY WHAT! 🔥🔥🔥

🔥🔥🔥

---

If you enjoyed using Gallery, I'd love to see what you created with Gallery 🙌

Share your gallery with me on this [thread](https://github.com/andyzg/gallery/issues/1)❤️!
