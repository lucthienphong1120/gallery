# Gallery

An flexible gallery generator for your images and albums, a free portfolio solution for your photos.

This library also includes [img-previewer](https://github.com/lucthienphong1120/img-previewer) feature

## How to use

- Fork this repository 🍴
- Clone the repository
```
git clone https://github.com/lucthienphong1120/gallery
```
- Put your photos in folder `/photos` with all of your albums.
- For each of your albums, create a folder with name as your album name, and then put all of your photos in.

**Example**: You can use `tree photos /F` to see all of your file in `photos` folder
```
├───photos
│   ├───albums1
│   │   ├───IMG1_01.jpg
│   │   ├───IMG1_02.png
│   │   └─── ...
│   ├───albums2
│   │   ├───IMG2_01.jpg
│   │   ├───IMG2_02.jpg
│   │   └─── ...
│   ├───albums3
│   │   ├───IMG3_01.png
│   │   ├───IMG3_02.jpg
│   │   └─── ...
│   └─── ...
```
- In Windows, open your terminal and run
```
python data/setup.py
```
- Personalize the contents of website at `data/info.json`. (Title, Description, Note)
- Commit all change and host your repo with github page
```
git add -A
git commit -m "commit"
git push origin main
```
- ... and that's all your gallery

## Automate processing

In windows, you can automate your process by running:
```
sync.bat
```
It includes update config, sync data, commit and push to your deploy too!

## How It Works

- I used VueJS framework to render items and use Python to aggregate data 🔥
- `setup.py` will go through all of folders in `/photos/` directory and create a `data/config.json` file.
- It will collects all of information of each photo in your albums. It aggregates all data into one file called `data/config.json`.
- Once you've created your `data/config.json`, the website can use it to figure out which photos to show.
