module.exports = async (context) => {
  const { client, m } = context;

  // List of video URLs
  const videoUrls = [
    "https://files.catbox.moe/8gdmwt.mp4",
    "https://files.catbox.moe/rvsa8e.mp4",
    "https://files.catbox.moe/9vi52x.mp4",
    "https://files.catbox.moe/qvs84n.mp4",
    "https://files.catbox.moe/j1xeqm.mp4",
    "https://files.catbox.moe/5b7b5d.mp4",
    "https://files.catbox.moe/krd77m.mp4",
    "https://files.catbox.moe/kdk22x.mp4",
    "https://files.catbox.moe/anbl9w.mp4",
    "https://files.catbox.moe/a9491n.mp4",
    "https://telegra.ph/file/08f740224ed39233f92cb.mp4"
  ];

  try {
    // Fetching repository data from GitHub API
    const response = await fetch("https://api.github.com/repos/Berabruce/BERA-MD");
    const repoData = await response.json();

    if (repoData) {
      // Multiplying forks and stars by 9
      const { stargazers_count, forks_count } = repoData;
      const modifiedStars = stargazers_count * 9;
      const modifiedForks = forks_count * 9;

      // Constructing the message content
      const messageText = `
        *A Total of ${modifiedForks} People are using BERA-MD.*
        
        *${modifiedStars} People have starred it as a sign of Loving it.*
        
        *KEEP USING BERA-MD*
        
        *Regards, Bruce Bera*
      `;

      // Randomly selecting a video URL from the list
      const randomVideoUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)];

      // Preparing the video content to send
      const messageToSend = {
        video: {
          url: randomVideoUrl
        },
        caption: messageText,
        externalAdReply: {
          title: "𝐁𝐄𝐑𝐀-𝐌𝐃",
          body: "𝐫𝐞𝐠𝐚𝐫𝐝𝐬 𝐁𝐫𝐮𝐜𝐞 𝐁𝐞𝐫𝐚",
          sourceUrl: "https://whatsapp.com/channel/0029VajJoCoLI8YePbpsnE3q",
          mediaType: 1,
        }
      };

      // Sending the message
      await client.sendMessage(m.chat, messageToSend);
    } else {
      console.error("Could not fetch data from GitHub API.");
    }
  } catch (error) {
    console.error("Error fetching data or sending message:", error);
  }
};
