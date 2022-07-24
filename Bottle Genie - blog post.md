# Bottle Genie
## UX Design

### Problem statement

Firstly, we had to specify the problem we wanted to solve with our project. We created a survey using Google Forms to understand who our users were and what specific problems with the (German) deposit system they wanted solved. Nineteen people replied, and the three main types of responses we received were as follows:

- users don’t know where to bring returnable bottles in the first place,
- not all bottles are accepted in one place, which leads to frustration, and
- users don’t know which bottles are returnable and which are not.

### Market research

We found several websites and apps that offered help with the (German) deposit system. Some of them specialized in simply providing information about the system. Others provided services to either help the user find somebody who would return the bottles for them, or help the user find someone who was willing to give their own bottles away. Apps from the latter category gave their users the opportunity to use the bottles (and the deposit money) as a donation to charities. But this was not what we envisioned with our app. We wanted to give our users a good and successful experience as they actually retrieve the deposit themselves.

### Users

The survey mentioned earlier also helped us to identify our target group(s). Not all participants fitted in there because some of them were born and raised in Germany and already had a good understanding of how to handle their deposit bottles. But those who needed our app could be grouped into the following categories:

- foreigners who don’t understand the system,
- new residents who don’t know the area where they live,
- people who don’t shop in just one supermarket,
- people who care about the environment and want to return the bottles.

But even though the process was a nuisance and a difficulty to some people, all 19 survey participants responded that they returned their deposit bottles. Their biggest motivation was to protect the environment, but getting their deposit money back was also mentioned many times.

![Results of an opinion survey on the deposit system](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c6d696cc-e1b7-45a2-ac88-42e0d4d56e75/Bild_2022-07-24_145846147.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T173915Z&X-Amz-Expires=86400&X-Amz-Signature=a98b1e08c5bebdf5308f112fb5662dd853899b197981a76552f91286bba95ed5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_145846147.png%22&x-id=GetObject "Results of an opinion survey on the deposit system")

In the next step, we proceeded to create personas, write user stories, and draw storyboards to help us elaborate on who we were designing our app for.

![User persona](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/56d80195-79f5-47d7-8e32-dd3a9ae1f841/Bild_2022-07-24_155947177.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T174341Z&X-Amz-Expires=86400&X-Amz-Signature=cecb372396afef5262fa46933887b934a6acb84b4db63a9ed3d6eba0f358ed17&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_155947177.png%22&x-id=GetObject "User persona")

The persona embodied all the information we had gathered on our target user, and made it easier for us to remember and materialize all of it. The user story and the storyboard helped us to recall the situations in which our user was supposed to use the app and realize what obstacles and emotions they might be facing. This will be important in our next step.

![User story](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/09afc1a3-94ea-4baf-96b9-8c7ecec92329/Bild_2022-07-24_160548089.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T174501Z&X-Amz-Expires=86400&X-Amz-Signature=868803fa10b5796c558ec1b3df8cf14c40fc2bd4318a882b14deaf9d25f17f96&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_160548089.png%22&x-id=GetObject "User story")

### Features

Based on our research and our effort to define the target user, we decided which features our app needed. The primary features were (1) a simulated bottle scanner, and (2) a user form to search for the closest location to return a bottle, in which the user would provide the information needed manually. Both of these would redirect the user to the result, from which the user would find out whether the bottle was returnable or not including the deposit value and the location where they could return the bottle visualized on the map (addresses and opening hours of those different return points would be displayed on the screen upon tapping it). We also wanted to implement a small ‘wiki’ page where users could learn about the deposit system and recycling. Another feature (that wasn’t developed due to time constraints) would show the score based on the total value of bottles/cans returned, with which the users could keep track of how much money they had retrieved by returning their deposit bottles. Basic features like login, signup, and log out were also needed.

Secondary features would include the actual scanning function, or - as a possible ‘extra’ cherry on top - implementing a little gamification into the whole process, if only we had been given more time. This would make the whole experience a bit more fun and motivate the users to keep making the effort of returning their bottles. By way of example, we were considering adding funny suggestions what could be bought with the amount of money shown in the score function, or having animated coins rolling towards the score value.

### Information Architecture and Decision Path

The information architecture shows the basic flow through our application. The draft does not cover the details of all possible steps such as using the planned navigation bar at the bottom of the screen, which would allow the users to switch between the main functions at any given time. This increases the flexibility and efficiency of use, which is crucial in order to make the whole process of returning deposit bottles less frustrating.

![Information architecture](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b1257222-1e54-4596-9343-db86b7d7f431/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T174645Z&X-Amz-Expires=86400&X-Amz-Signature=9bb0ed0736591fcd246ed2059e061e1fcaa25607aa650d68aeabd31979f615b4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject "Information architecture")

The decision path is a different visualization of the way that the user navigates through the app.

![Decision path](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6366e53e-945b-4c05-85af-3f4851fc2f36/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T174759Z&X-Amz-Expires=86400&X-Amz-Signature=8844cbb4fdb85e059c7058fb244c11f64bb02a997ea753e264ed151acc622b45&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject "Decision path")

### Prototype

At the next stage, we created an interactive prototype in Figma, which we based on our hand drawn wireframe.

You can see the prototype here: [Bottle Genie](https://www.figma.com/file/PwEdVHynjWmbMV8HN0KvwT/Bottle-Genie?node-id=0%3A1)

![Figma prototype](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c50938e7-a61e-481a-86cd-553f8cbe21db "Figma prototype")

### User testing

To test our concept and its implementation, we let our users test our prototype created in Figma, since the developed version was not quite ready for testing at the time. We performed a short user test, where participants were asked to 'think aloud' while navigating through the prototype, and then to fill out a questionnaire where individual statements were to be rated on a scale of 1-5. Prior to the test, we explained to the participants what our product was about and asked them a few questions, such as where they were from and how well they understood the deposit system in Germany. The test showed that the users (participants) didn’t have any significant problems navigating the app. They gave us feedback on some minor issues - that said, we have fixed them since.

## Web Development

### App development

The way Bottle Genie was envisioned was for it to be a mobile application. That being said, with the languages and tools we had at our disposal as per TechLabs’ curriculum and requirements, we decided to simply design it to look like a mobile app (which you can see in the demo).

### Overview of features

Speaking of design, let’s start with the frontend. For this part, we used CSS with Bootstrap, JavaScript, and React with JSX. The colors were picked based on the logo which had been created in advance. The login and signup pages - the former of which is the landing page as well - feature an animated version of the logo, while others show the regular logo at the top.

The login and signup functions were handled by using React hooks on the frontend and JWTs for user authorization.

![Login page](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6f310298-23b4-4d52-babf-44b1f1ceebf4/Bild_2022-07-24_161216283.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T175633Z&X-Amz-Expires=86400&X-Amz-Signature=35ca0fb5a9c2b43fd6a18dfd80e484741fec2954713bde9c8932c2f6073322de&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_161216283.png%22&x-id=GetObject "Login page")

![Signup page](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8f71f0ee-c311-4231-88f3-81df613672dc/Bild_2022-07-24_161038339.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T175925Z&X-Amz-Expires=86400&X-Amz-Signature=fb40a719902852f98a4f707841a8846c8579e0a2edd96aa122c034ba4aaf92d3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_161038339.png%22&x-id=GetObject "Signup page")

Upon logging in, the user is redirected to the homepage. They can explore other pages by clicking on one of the icons in the navigation bar at the bottom of the current page.

![Homepage](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7d8718bb-96de-482e-8ff9-a8ee5a2ef0e3/Bild_2022-07-24_160854239.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T175850Z&X-Amz-Expires=86400&X-Amz-Signature=af547b71fc2719a7ee8f9d52b464cf1954ae066db26457098bfbe5b8af7b106e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_160854239.png%22&x-id=GetObject "Homepage")

Let’s start with the “Scan” feature. It was conceived to allow the user to scan the barcode on the label of a bottle or a can, but this couldn’t be completed due to time constraints. Instead, we chose to use the React Webcam component to enable the app to access the user’s camera so as to have the most essential part in place in case we want to develop the idea in the future. With a barcode detection or an image recognition algorithm, the scanner would read the barcode/Pfand symbol on the container, identify it, and redirect the user to the result page, where they would find out what the amount of the deposit is and where they can return the container (in proximity to their current location, which is shown on the map rendered with React Leaflet).

![Scan feature](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b3bddaaf-b983-43a8-9a64-3fc62819117e/Bild_2022-07-24_155527471.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T180012Z&X-Amz-Expires=86400&X-Amz-Signature=eb56ad121c947d1d889ff68973e0c6275f7d686a739b53e0d3d464acfcb54b44&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_155527471.png%22&x-id=GetObject "Scan feature")

Right now, the user can utilize the fully functional “Search” feature to receive the result. All that they need to do is fill out a form with information regarding the brand under which their beverage of choice is sold, the volume of the container, and the material it is made of (aluminium, plastic, glass). Upon clicking the button at the bottom, the user is then redirected to the result page described above. The feature was executed by using React hooks and mapping over a dataset provided as a JSON file.

![Search feature](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ff2506ab-743b-46ee-96b1-ee377a52a0ee/Bild_2022-07-24_161440344.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T180127Z&X-Amz-Expires=86400&X-Amz-Signature=afba8e6560e75f1f1f40b63bb6c312a471df64edfdb0449e33f8028eb305e138&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_161440344.png%22&x-id=GetObject "Search feature")

![Result page](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2e8fe3df-78dc-4f2a-8cd4-340a40d22ffd/Bild_2022-07-24_155645088.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T180208Z&X-Amz-Expires=86400&X-Amz-Signature=f8115d56ef848fc91eae1d64ed3f598727b4b88f07b036775602565bc9c08bb4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_155645088.png%22&x-id=GetObject "Result page")

Another functionality that we implemented is called “Bottle Wiki.” In essence, it is a short guide to the Pfand system in Germany.

![Wiki page](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/16ba442c-280a-4fce-9db0-e8f482d91635/Bild_2022-07-24_151428865.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T180326Z&X-Amz-Expires=86400&X-Amz-Signature=d7fcbbd49d15275dcf8d29cce212c245c8971c78c653265c2b7ba62be1cacecc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_151428865.png%22&x-id=GetObject "Wiki page")

Once the user is done using the app, they can click on the “Home” icon in the navigation bar, which will take them to the homepage. They can log out of the app by clicking the appropriate link. Upon logging out, the user is redirected to the login (landing) page.

Since the app is written in JavaScript, we used Node.js with Express.js to handle server side programming and MongoDB as the database.

### Future prospects

We have some ideas about how we would like to develop Bottle Genie in the future. For instance, we’d like to add a functionality which would allow the user to keep score of multiple bottles/cans that they want to return, which would show them the total amount of money they would get back by returning all containers to a collection point.

## Data Science

### On the dataset

For this project, we needed two datasets. The first one had to contain information on grocery stores, brands, container types (plastic, glass, aluminium) and volumes, and the deposit charged on each container. For the other one, we needed data pertaining to each store, i.e., the address and the coordinates of supermarkets in Berlin. Unfortunately, we didn’t find any dataset available for use. We contacted many supermarkets but they didn't have such data either. Therefore, we had to create our own dataset as follows:

### Step 1: Data scraping

Data scraping is the process of gathering information from the Internet. As some markets have an online marketplace as well as their stores with coordinates, it was possible to extract some information using BeautifulSoup in Python (we used Pycharm instead of Jupyter Notebooks only for this part). The following is a sample of a supermarket search:

![Supermarket search](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/83014075-35e1-4797-947f-221554799d04/Bild_2022-07-24_133526289.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T180721Z&X-Amz-Expires=86400&X-Amz-Signature=aa0b8396640a79fd29c4b854bddf4ac8c4d3ea0eef8d3562912af6f5a3d4e826&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_133526289.png%22&x-id=GetObject "Supermarket search")

For most stores, we didn’t have this option, so we had to go there and take some photos of different bottles/cans. Afterwards, we created a Google Sheet and wrote down all the data that we needed (we could have created the dataset in Python right away, but we decided to create a CSV and then open it in Python to practice).

For stores without coordinates, we got their data through Google Maps (if you right-click on a location, the map will give you its coordinates).

Part of the dataset for bottles/cans is presented below:

![Dataset sample](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5247cbdb-f117-4be8-b80f-027f565cd133/Bild_2022-07-24_133427556.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T180802Z&X-Amz-Expires=86400&X-Amz-Signature=779902756bef2abb8f97edd74e1505ef9fc0671ea8e6fc3d785507e178fbca47&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_133427556.png%22&x-id=GetObject "Dataset sample")

### Step 2: Data cleaning

After we created the CSV, we opened it on Jupyter Notebook using pandas library with the code below:

![Data cleaning - example](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e7da052e-1c77-4071-acc4-e402f72cfc40/Bild_2022-07-24_133404215.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T180857Z&X-Amz-Expires=86400&X-Amz-Signature=76a989e0f0d429387ed42c6b2ffcb8c386efbbcdc5ab9561614c8812e3941c3e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_133404215.png%22&x-id=GetObject "Data cleaning - example")

We also imported the library called Numpy to work on the dataset. When we opened the file, we saw that one column wasn’t being used and that the index was wrong, se we removed the column with the “drop” command:

![Data cleaning - example 2](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c383ea06-1397-4f72-bef1-2bbeee4d0d72/Bild_2022-07-24_133334546.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T180958Z&X-Amz-Expires=86400&X-Amz-Signature=dde41a872cedf4c7a69058678c09e06e1dcad1a290d025cdd6f86793d0b634ad&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_133334546.png%22&x-id=GetObject "Data cleaning - example 2")

### Step 3: Converting data

After finishing with the dataset, we had to convert it to JSON with the command (.to_json), so the WD team could use it to run some tests:

![Data conversion - example](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c987fb3f-951d-4e1a-8607-e5c13004f34b/Bild_2022-07-24_133309514.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T181115Z&X-Amz-Expires=86400&X-Amz-Signature=6307bbec7b44a1da680dcffb9b99d17d3b266922262d0cbc3704d699441fdd9c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_133309514.png%22&x-id=GetObject "Data conversion - example")

When you use this command and then print, it will create a JSON file in the same directory as the Jupiter file.

**Search Engine in Python:**

We also created a search engine in Python, which would receive the Brand, Material and Volume inputs, and would answer which stores collect the particular bottle/can. To search in Python, we used the '.loc' command as seen in the image below:

![Search engine in Python](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/74206704-899a-4544-8a61-e7953f60bc5b/Bild_2022-07-24_133204498.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T181211Z&X-Amz-Expires=86400&X-Amz-Signature=e61a3d357ddfd1e8860e2637a3c681187055209223d551aae8ed41cdde4198c6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_133204498.png%22&x-id=GetObject "Search engine in Python")

Then we used the code (.merge) to get the results and show which supermarket would collect all the bottles:

![Merging in Python](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/51555457-7402-40fe-ae92-6dffd53de28e/Bild_2022-07-24_133138631.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T181305Z&X-Amz-Expires=86400&X-Amz-Signature=623986afbb8e9e52058a8912ae3d194d6c133bd8c64dc020a1f4cd14d43247d9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Bild_2022-07-24_133138631.png%22&x-id=GetObject "Merging in Python")

The initial idea was to get the results of several searches and see which market would collect all the bottles so as to facilitate the process of returning them, but due to insufficient time, we chose to create a search engine with JavaScript to look them up one by one.

*UX Design - Anna Dahm and Kristina Kulicova*

*Web Development - Vinh Nguyen and Anna Szudek*

*Data Science - Guilherme Mazzolini*

*Mentor -  Renan Bandeira*

























