# Image-Upload

Image upload component can drag and drop the images or upload images as a image file
## Output Format

 <p align='center'><img src="https://github.com/SairamPotta/Image-Upload/blob/master/Images/image.PNG"></p>
 
 To preview demo of image-upload project, [Click here](https://drag-and-drop-image-tgcyeh.stackblitz.io/)

## Getting Started
Download the Image-Upload component and install the required packages and run the application. 

### Installing
    - npm install

### Run server
    - ng serve

## Adding image-upload component in your project
Download the Image-Upload component and use it in your project.

####  Use this below syntax to send the data to image-upload component
    - <app-upload-file [fileSize]='3'></app-upload-file>
##### fileSize input decorator is useful to provide maximum allowed image size 
#### Description
- Drag and drop directive will be useful to drag and drop files from anywhere in local computer
- It comes with some basic validations as mentioned below,
    - If file size exceeds given image size then it will show Allowed maximum file size is 3MB.
    - If user is trying to drag file other than type image then it shows please select valid file
#### How it works?

1. Click on upload or drag the image on screen
2. If image is valid then user can able to see the preview


