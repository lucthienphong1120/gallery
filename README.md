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
