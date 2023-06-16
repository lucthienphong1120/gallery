#!/usr/bin/env python

try:
    from StringIO import StringIO as sbIO
except ImportError:
    from io import BytesIO as sbIO
from operator import le
import struct
import os
import sys
import json
import re
import time

PATH = os.path.dirname(__file__) + '\\'
RELATIVE_PATH = 'photos'
PHOTO_PATH = PATH + RELATIVE_PATH

def get_directories():
    items = os.listdir(PHOTO_PATH)
    return list(filter(lambda x: os.path.isdir(PHOTO_PATH + '/' + x), items))

def is_image(path):
    return re.search(r'\.(jpe?g|png)$', path)


def get_path(path, ext):
    return re.sub(r'\.(png|jpe?g)$', '.' + ext + '.\g<1>', path)


def get_images(path):
    items = os.listdir(PHOTO_PATH + '/' + path)
    imgs = list(filter(is_image, items))
    result = []
    for img in imgs:
        width, height = 0, 0
        src = './' + RELATIVE_PATH + '/' + path + '/' + img
        # print(p)
        with open(PHOTO_PATH + '/' + path + '/' + img, 'rb') as f:
            _, width, height = getImageInfo(f.read())
        result.append({
            'width': width,
            'height': height,
            'src': src,
        })
    return result

def write_config(config):
    f = open('data/config.json', 'w')
    f.write(json.dumps(config, indent=2, separators=(',', ': ')))
    f.close()


def run():
    print('Start reading data of each photo in ' + RELATIVE_PATH + ' directory\n')
    time.sleep(2)
    config = {}
    dirs = get_directories()
    print('Collecting {length} albums...'.format(length=len(dirs)))
    print('\n---------------------------------------------------------\n')
    time.sleep(3)
    print()
    count = 0
    for i, path in enumerate(dirs):
        print(str(i+1) + ': Processing album "{album}"'.format(album=path))
        config[path] = get_images(path)
        count += len(config[path])
        print('Found {length} photos\n'.format(length=len(config[path])))
    print('\n---------------------------------------------------------\n')

    write_config(config)
    print('Finished configuring total {albums} albums and {photos} photos!\n'.format(
        albums=len(config),
        photos=count
        ))

    print('Config file has been saved on {path}\n'.format(path=PATH + 'config.json'))
    print('Thank you for using, please leave a Star if you like it!\n')
    return 0


############################################################
# Thanks StackOverflow: http://stackoverflow.com/a/3175473 #
############################################################
def getImageInfo(data):
    size = len(data)
    height = -1
    width = -1
    content_type = ''

    # See PNG 2. Edition spec (http://www.w3.org/TR/PNG/)
    # Bytes 0-7 are below, 4-byte chunk length, then 'IHDR'
    # and finally the 4-byte width, height
    if ((size >= 24) and data.startswith(b'\211PNG\r\n\032\n') and
       (data[12:16] == b'IHDR')):
        content_type = 'image/png'
        w, h = struct.unpack(">LL", data[16:24])
        width = int(w)
        height = int(h)

    # Maybe this is for an older PNG version.
    elif (size >= 16) and data.startswith(b'\211PNG\r\n\032\n'):
        # Check to see if we have the right content type
        content_type = 'image/png'
        w, h = struct.unpack(">LL", data[8:16])
        width = int(w)
        height = int(h)

    # handle JPEGs
    elif (size >= 2) and data.startswith(b'\xff\xd8'):
        content_type = 'image/jpeg'

        try:
            jpeg = sbIO(data)  # Python 3
        except:
            jpeg = sbIO(str(data))  # Python 2

        jpeg.read(2)
        b = jpeg.read(1)
        try:
            while (b and ord(b) != 0xDA):
                while (ord(b) != 0xFF):
                    b = jpeg.read(1)
                while (ord(b) == 0xFF):
                    b = jpeg.read(1)
                if (ord(b) >= 0xC0 and ord(b) <= 0xC3):
                    jpeg.read(3)
                    h, w = struct.unpack(">HH", jpeg.read(4))
                    break
                else:
                    jpeg.read(int(struct.unpack(">H", jpeg.read(2))[0])-2)
                b = jpeg.read(1)
            width = int(w)
            height = int(h)
        except struct.error:
            pass
        except ValueError:
            pass

    return content_type, width, height

if __name__ == '__main__':
    run()
    time.sleep(3)
