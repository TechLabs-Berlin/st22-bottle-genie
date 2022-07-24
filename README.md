&nbsp;

<p align="center">
<img src=https://res.cloudinary.com/vinntt/image/upload/v1658582382/bottle-genie/logo_p6rhzq.png style="width: 250px">
</p>

<p align="center">
<!-- https://ileriayo.github.io/markdown-badges/ -->
<img src=https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white>
<img src=https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white>
<img src=https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white>
<img src=https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB>
<img src=https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB>
<img src=https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white>
<img src=https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens>
<img src=https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54>
<img src=https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white>
<img src=https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white>
<img src=https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white>
<img src=https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white>
</p>

&nbsp;

<h5 align="center">
  <a href="#About">About</a>  |
  <a href="#Prototype">Prototype</a>  |
  <a href="#Setup">Setup</a>  |
  <a href="#Running">Run</a>  |
  <a href="#User Tour">User Tour</a>  |
  <a href="#Backlogs">Backlogs</a>  |
  <a href="#Authors">Authors</a>  |
</h5>

&nbsp;

## About

The Bottle Genie app is a digital recycling assistant to help the residents of Berlin (especially expats) understand the German bottle and can collection system (Pfandsystem). The app guides its user by helping them identify the type of returnable container (whether it's a single or multiple use one, for instance) and the return location in their area so that they can retrieve the deposit (Pfand) that they paid when buying the product in a returnable container.

&nbsp;

## Prototype
- Presentation: [Bottle Genie](https://www.canva.com/design/DAFAICPuSKA/OsoYQOi5RBhWU7Hs85zv7Q/edit?utm_content=DAFAICPuSKA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) &nbsp;
- Live Demo: [Bottle Genie Demo](https://drive.google.com/file/u/1/d/1_lSEPH8z60zYw04D6dtDoG5MvuoWfTxg/view?usp=drive_open)


https://user-images.githubusercontent.com/96484600/180612029-eb72c9fe-79e3-4ef5-8488-93fba3f3104e.mp4


&nbsp;

## Setup
### Basic requirements:
- Code editors (VS Code, Atom...)
- Node.js (v14 and above)
- MongoDB
- Nodemon (optional)

&nbsp;

### Client
> Use the package manager [npm](https://npmjs.com/) to install the dependencies

1. From the top-level directory: `st22-bottle-genie`

2. Change to folder: `$ cd client`

3. Run following commands to install express and dependencies:

 ```sh
 npm install
 ```

### Server
> for installation

1. From the top-level directory: `st22-bottle-genie`

2. Change to folder: `$ cd server`

3. Run following commands to install express and dependencies:

 ```sh
 npm install
 ```

4. Create an **.env** file.

 ```sh
TOKEN_SECRET=xxxxxx
PORT=xxxx
MONGODB_URI=mongodb://localhost:27017/bottle-genie
MONGODB_URI_LIVE=xxxxxxx
 ```

  Note: If you find any ImportError messages, continue to install missing dependencies.

&nbsp;

## Running
**Run the server**:

1. Go to the directory: `st22-bottle-genie/server`

2. Run the following commands:

  ```sh
  $ npm start
  ```

 or

  ```sh
 node server.js
 ```

**Run express** run command:

1. Go to the directory: `st22-bottle-genie/client`

2. Run the following commands:

 ```sh
 $ npm start
 ```

&nbsp;

## User Tour
- Sign Up
- Login
- Homepage with navigation bar.
- Wiki page with helpful information.
- Search by brand, volume, material..
- Result page with map.
- Scan by camera
- Log-out

&nbsp;

## Backlogs
1. Create the features we skipped (e.g., a basket for multiple bottles which shows you the total value of your deposit on all bottles/cans)
2. Make the app more fun (e.g., with animations), make the gratification aspect a bigger part of it (since it's a mundane topic)
3. Make the app more responsive so that it's suitable for all devices (we envisioned it as a mobile app only)

&nbsp;

## Authors
This project was created by:

- Mentor:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Renan Bandeira](https://www.linkedin.com/in/renanbandeira/) &nbsp;

- Wed Developer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Vinh Nguyen](https://www.linkedin.com/in/vinntt/) &nbsp;

- Wed Developer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Anna Szudek](https://www.linkedin.com/in/anna-szudek-3a305210b/) &nbsp;

- Data Science:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Guilherme Mazzolini](https://www.linkedin.com/in/guilherme-mazzolini-muniz-739852147/) &nbsp;

- User Experience:&nbsp;&nbsp; [Anna Dahm](https://www.linkedin.com/in/anna-dahm-ux/) &nbsp;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Kristina Kulicova](https://www.linkedin.com/in/kristina-kulicova-240456246/)
