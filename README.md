# Gallery

An flexible gallery generator for your images and albums, a free portfolio solution for your photos.

![demo](./demo.gif)

## How to use

- Fork this repository 🍴
- Clone the repository
```
git clone https://github.com/lucthienphong1120/gallery
```
- Put your photos in folder `/photos` with all of your albums.
- For each of your albums, create a folder with name as your album name, and then put all of your photos in.

**Example**:
```
/photos
  /albums1
    IMG1_01.jpg
    IMG1_02.png
    ...
  /albums2
    IMG2_01.jpg
    IMG2_02.jpg
    ...
  /albums3
    IMG3_01.png
    IMG3_02.jpg
    ...
```
- In Windows, open `PowerShell` and run
```
python .\tools\setup.py
```
- Personalize the contents of website at `_config.yml`.
- Commit all change and host your repo with github page
- ... and that's all your gallery

## How It Works

- `setup.py` will go through all of folders in `/photos/` directory and create a `config.json` file.
- It will collects all of information of each photo in your albums. It aggregates all data into one file called `config.json`.
- Once you've created your `config.json`, the website can use it to figure out which photos to show.
- It uses Jekyll template 🔥 and JavaScript ES6 to layout your photos, grouping all of the photos per album.

<<<<<<< HEAD
=======
*Note*: It currently supports 3 formats: png, jpeg and jpg

## Customizing your Gallery

Gallery supports 3 different kinds of layouts: rows, squares and columns. You can configure it at `_config.yml` file

- `SQUARES`: crop images in squares, stack them in blocks, 4 columns each row
- `ROWS`: keep the aspect ratio of the image, arrange in a horizontal row, 2-4 photo each row
- `COLUMNS`: keep the aspect ratio of the image, divided into 4 columns, arranged vertically down

## Layout configuration

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
>>>>>>> f7b533fe15e40bda9a125638bb5742bb9f067c40
