# Project Name

Backend Code provides a response of a video URL and the transcribed text

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
  - [Reporting Issues](#reportingIssues)
  - [Contributing Code](#contributingCode)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## About

This is the backend code for a web application that needs a video url and the transcribed text. 

The main functionality of the app includes:

- **Video Upload:** Users can upload video files in common formats (e.g., MP4, MKV, WebM) through a user-friendly interface.
  
- **Transcription:** The app utilizes the Deepgram API to transcribe the audio content within uploaded videos into text. This enables users to obtain a textual representation of the spoken words within the video.


## Getting Started

To get started, follow these steps:

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

- **API Key:** Obtain an API key for the Deepgram API. You can sign up for an API key on the [Deepgram website](https://www.deepgram.com/).

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://[github.com/joanita-51/hgnx-stage5](https://github.com/joanita-51/hgnx-stage5)

2. Install the project dependencies using npm:
   
   ```bash
   npm install

3. Create a .env file in the root directory of the project and add your Deepgram API key as follows:

   ```bash
   DEEPGRAM_API_KEY=your-api-key-here
   

4. Start the app

   ```bash
    npm start

5.  Open your web browser or postman and visit http://localhost:3000 to access the application



## Usage

### Using Postman to Transcribe a Video

1. **Open Postman:** If you don't have Postman installed, you can download it from [postman.com](https://www.postman.com/).

2. **Import the API Collection:** Download our Postman collection from [here](link-to-your-postman-collection) and import it into Postman.

3. **Set Up Environment Variables:**
   - Create a new environment in Postman and add the following variables:
     - `BASE_URL`: The base URL of your Video Transcription App (e.g., `http://localhost:3000`).
     - `VIDEO_UPLOAD_ENDPOINT`: The endpoint for uploading videos (e.g., `/upload`).

4. **Upload a Video File:**
   - Select the `Video Transcription App` collection and choose the `Upload Video` request.
   - In the request body, set the `video` field to a video file you want to transcribe.

5. **Send the Request:** Click the "Send" button to upload the video to the app for transcription.

6. **View Transcription Response:**
   - After sending the request, you will receive a JSON response containing the transcription text and the video URL.

7. **Access Transcribed Video:**
   - You can access the transcribed video by opening the provided video URL in a web browser or media player.

That's it! You've successfully transcribed a video using the Video Transcription App via Postman. You can use this process to transcribe multiple videos or integrate it into your own applications.
![Image](https://github.com/joanita-51/hgnx-stage5/assets/82649346/413c9916-3ed4-41e8-b3d4-a2b3ba3404ee)

## Contributing

We welcome contributions to the Video Transcription App! Whether you want to report a bug, suggest an improvement, or submit a new feature, here's how you can get involved:

### Reporting Issues

If you encounter any issues or have suggestions for improvements, please open an issue on our [GitHub Issue Tracker](link-to-your-issues). When reporting issues, please provide the following information:

- A descriptive title and clear description of the problem or suggestion.
- Steps to reproduce the issue (if applicable).
- Your operating system and browser version (if the issue is related to the user interface).
- Any relevant screenshots or error messages.

### Contributing Code
Contributions to the code are welcome! Whether you want to report a bug, suggest an improvement, or submit a new feature, here's how you can get involved:

### Reporting Issues

If you encounter any issues or have suggestions for improvements, please open an issue on our [GitHub Issue Tracker](link-to-your-issues). When reporting issues, please provide the following information:

- A descriptive title and clear description of the problem or suggestion.
- Steps to reproduce the issue (if applicable).
- Your operating system and browser version (if the issue is related to the user interface).
- Any relevant screenshots or error messages.

### Contributing Code

1. **Fork the Repository:** Click the "Fork" button on the top right of this repository to create your own copy.
2. **Clone Your Fork:** Clone your forked repository to your local machine.
3. **Create a Branch:** Create a new branch for your work with a descriptive name.
4. **Make Changes:** Make your code changes, additions, or fixes.
5. **Commit Your Changes:** Commit your changes with clear and concise commit messages.
6. **Push to Your Fork:** Push your changes to your forked repository on GitHub.
7. **Open a Pull Request:** Go to the Pull Requests section of the original repository and click "New Pull Request." Compare and create a pull request from your branch to the main branch.
8. **Code Review:** Your pull request will be reviewed by the maintainers. Be prepared to make changes or address feedback.
9. **Merge:** Once your pull request is approved, it will be merged into the main branch.
Thank you for your contributions!

## License

This project is licensed under the [MIT License](LICENSE) - See the [LICENSE](LICENSE) file for details.

## Acknowledgments

I would like to extend our gratitude to the following individuals, libraries, and tools that have contributed to the development and success of the Video Transcription App:

- **Deepgram SDK:** I want to thank the developers behind the [Deepgram SDK](https://www.deepgram.com/), which played a crucial role in enabling seamless audio transcription within our app.

- **Express.js:** The project relies heavily on [Express.js](https://expressjs.com/), a fast and minimalist web framework for Node.js, which simplified the development of our server-side application.

- **Multer:** [Multer](https://github.com/expressjs/multer) provided us with an efficient and flexible middleware for handling file uploads, making it easier for users to upload their videos.

- **Cors:** The [CORS](https://github.com/expressjs/cors) middleware ensured that our app could accept requests from various domains, enhancing its accessibility.

- **dotenv:** We appreciate the simplicity and convenience of [dotenv](https://github.com/motdotla/dotenv), which allowed us to manage environment variables effortlessly.

- **Nodemon:** [Nodemon](https://nodemon.io/) significantly improved our development workflow by automatically restarting the server upon code changes during development.

- **Node.js and JavaScript Community:** We are grateful for the vibrant Node.js and JavaScript community that provides valuable resources, documentation, and support for developers worldwide.

These tools and individuals have played a vital role. I appreciate their contributions and dedication to the open-source community.


