let jokes = [
  { Q: "Why did the scarecrow win an award at Gardens by the Bay?", A: "Because he was outstanding in his field!" },
  { Q: "What do you call a snowman who loves gardening?", A: "Frosty the Hoe-man!" },
  { Q: "Why did the Christmas tree visit Gardens by the Bay?", A: "It wanted to see if it could spruce up its branches!" },
  { Q: "What did one flower say to the other during the holiday season?", A: "\"Let's put the petal to the jingle!\"" },
  { Q: "Why do gardeners always carry a pencil and paper during the holidays?", A: "In case they want to draw their Christmas plants!" },
  { Q: "What's a gardener's favourite Christmas carol?", A: "\"Silent Nightshade.\"" },
  { Q: "How do flowers celebrate Christmas?", A: "They put on their best poinsettia dresses!" },
  { Q: "What did the Christmas tree say to the flower at Gardens by the Bay?", A: "\"You really rose to the occasion!\"" },
  { Q: "Why did the gardener bring tinsel to Gardens by the Bay?", A: "To add a touch of \"gar-land\" glam!" },
  { Q: "How do you know when Santa has been in the garden?", A: "You find Claus-tard seeds everywhere!" },
  { Q: "Why did the gardener invite a Christmas tree to the picnic?", A: "Because it was a fir-m believer in outdoor dining!" },
  { Q: "What do you get if you cross a snowman and a cactus in Gardens by the Bay?", A: "Frostbite!" },
  { Q: "What's a plant's favourite holiday decoration?", A: "Holly leaves, and jingle bells!" },
  { Q: "Why did the gardener bring a ladder to the Christmas party?", A: "To decorate the top of the mistletoe tree!" },
  { Q: "What do you call a snowman in the Gardens by the Bay flower dome?", A: "A frosty botanist!" },
  { Q: "What did the gardener say to the weeds on Christmas Day?", A: "\"You're not welcome here – it's the season of goodwill, not weed-will!\"" },
  { Q: "Why do flowers love to go shopping during the holidays?", A: "They want to get a bloomin' good deal!" },
  { Q: "What's a garden's favourite Christmas movie?", A: "\"The Miracle on 34th Seed!\"" },
  { Q: "How do gardeners ensure they have a merry Christmas?", A: "They make sure their celebrations are well-irrigated!" },
  { Q: "Why did the Christmas wreath apply for a job at Gardens by the Bay?", A: "It wanted to be in a \"circular\" motion picture!" }
];
const CrackerOpened = () => {
  const jokesIdx = Math.floor(Math.random() * jokes.length)
  const jokeQuestion = jokes[jokesIdx].Q;
  const jokeAnswer = jokes[jokesIdx].A;
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <img
        src="/public/Images/WebP/joke_bg.webp"
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      />
      <div
        style={{
          position: "relative",
          height: "35%",
          width: "100%",
          transform: "translateY(-180%)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            position: "absolute",
            inset: "0",
            left: "5%",
            width: "90%",
            height:'100%'
          }}
          src={"/Images/WebP/joke_box.webp"}
          alt="joke box"
        />
        <p
          style={{
            color: "red",
            position: "absolute",
            top: 0,
            left: "10%",
            width: "40%",
            // fontSize: '2vw'
          }}
        >
          {jokeQuestion}
        </p>
        <p
          style={{
            color: "black",
            position: "absolute",
            top:'50%',
            left: "40%",
            width: "40%",
            // fontSize: '2vw'
          }}
        >
          {jokeAnswer}
        </p>
        <img
          style={{
            width: "25%",

            position: "absolute",
            bottom: '10%',
            right: "8%",
          }}
          src="/Images/SVG/share_btn.svg"
          alt="share button"
        />
      </div>
    </div>
  );
};

export default CrackerOpened;
