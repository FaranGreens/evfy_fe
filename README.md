## EVFY_FE - Documentation
EVFY_FE is the front-end application for EVFY. This application is built with React.js and communicates with the EVFY_BE backend server application to provide the user interface for the car-sharing platform.

### Deployed Link on AWS
http://13.233.106.225:3000/

To install the EVFY_FE application, follow these steps:

Clone the repository from GitHub using the following command:

```bash
git clone https://github.com/FaranGreens/evfy_fe.git
```
Change into the cloned repository directory using the following command:
```bash
cd evfy_fe
```
Install the dependencies using the following command:
```
npm install
```
### Configuration
Before you can use the EVFY_FE application, you will need to set up a few environment variables. These variables can be set in a .env file located in the root of the project. Here is a list of the environment variables that you will need to set:


``` 
REACT_APP_API_URL=<backend_api_url>
REACT_APP_API_URL: This is the URL for the backend server application.
```
Usage
To start the EVFY_FE application, run the following command:

```
npm run dev
```
This will start the development server on port 3000 or 5173. You can view the application by opening a web browser and navigating to http://localhost:3000 or http://localhost:5173.

### Deployed Link on AWS
http://13.233.106.225:3000/






