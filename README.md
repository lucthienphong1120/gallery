# Gallery

An flexible gallery generator for your images and albums, a free portfolio solution for your photos.

This library also includes [img previewer](https://github.com/lucthienphong1120/img-previewer) feature

## How to use

- Fork this repository π΄
- Clone the repository
```
git clone https://github.com/lucthienphong1120/gallery
```
- Put your photos in folder `/photos` with all of your albums.
- For each of your albums, create a folder with name as your album name, and then put all of your photos in.

**Example**: You can use `tree photos /F` to see all of your file in `photos` folder
```
ββββphotos
β   ββββalbums1
β   β   ββββIMG1_01.jpg
β   β   ββββIMG1_02.png
β   β   ββββ ...
β   ββββalbums2
β   β   ββββIMG2_01.jpg
β   β   ββββIMG2_02.jpg
β   β   ββββ ...
β   ββββalbums3
β   β   ββββIMG3_01.png
β   β   ββββIMG3_02.jpg
β   β   ββββ ...
β   ββββ ...
```
- In Windows, open your terminal and run
```
python setup.py
```
- Personalize the contents of website at `info.json`.
- Commit all change and host your repo with github page
- ... and that's all your gallery

## How It Works

- I use I use VueJS framework to render items and use Python to aggregate data π₯
- `setup.py` will go through all of folders in `/photos/` directory and create a `config.json` file.
- It will collects all of information of each photo in your albums. It aggregates all data into one file called `config.json`.
- Once you've created your `config.json`, the website can use it to figure out which photos to show.
