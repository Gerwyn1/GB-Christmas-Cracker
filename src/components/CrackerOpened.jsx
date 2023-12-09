import { useEffect, useState } from "react";

let jokes = [
  {
    Q: "Why did the scarecrow win an award at Gardens by the Bay?",
    A: "Because he was outstanding in his field!",
  },
  {
    Q: "What do you call a snowman who loves gardening?",
    A: "Frosty the Hoe-man!",
  },
  {
    Q: "Why did the Christmas tree visit Gardens by the Bay?",
    A: "It wanted to see if it could spruce up its branches!",
  },
  {
    Q: "What did one flower say to the other during the holiday season?",
    A: '"Let\'s put the petal to the jingle!"',
  },
  {
    Q: "Why do gardeners always carry a pencil and paper during the holidays?",
    A: "In case they want to draw their Christmas plants!",
  },
  {
    Q: "What's a gardener's favourite Christmas carol?",
    A: '"Silent Nightshade."',
  },
  {
    Q: "How do flowers celebrate Christmas?",
    A: "They put on their best poinsettia dresses!",
  },
  {
    Q: "What did the Christmas tree say to the flower at Gardens by the Bay?",
    A: '"You really rose to the occasion!"',
  },
  {
    Q: "Why did the gardener bring tinsel to Gardens by the Bay?",
    A: 'To add a touch of "gar-land" glam!',
  },
  {
    Q: "How do you know when Santa has been in the garden?",
    A: "You find Claus-tard seeds everywhere!",
  },
  {
    Q: "Why did the gardener invite a Christmas tree to the picnic?",
    A: "Because it was a fir-m believer in outdoor dining!",
  },
  {
    Q: "What do you get if you cross a snowman and a cactus in Gardens by the Bay?",
    A: "Frostbite!",
  },
  {
    Q: "What's a plant's favourite holiday decoration?",
    A: "Holly leaves, and jingle bells!",
  },
  {
    Q: "Why did the gardener bring a ladder to the Christmas party?",
    A: "To decorate the top of the mistletoe tree!",
  },
  {
    Q: "What do you call a snowman in the Gardens by the Bay flower dome?",
    A: "A frosty botanist!",
  },
  {
    Q: "What did the gardener say to the weeds on Christmas Day?",
    A: "\"You're not welcome here – it's the season of goodwill, not weed-will!\"",
  },
  {
    Q: "Why do flowers love to go shopping during the holidays?",
    A: "They want to get a bloomin' good deal!",
  },
  {
    Q: "What's a garden's favourite Christmas movie?",
    A: '"The Miracle on 34th Seed!"',
  },
  {
    Q: "How do gardeners ensure they have a merry Christmas?",
    A: "They make sure their celebrations are well-irrigated!",
  },
  {
    Q: "Why did the Christmas wreath apply for a job at Gardens by the Bay?",
    A: 'It wanted to be in a "circular" motion picture!',
  },
];
const CrackerOpened = () => {
  const jokesIdx = Math.floor(Math.random() * jokes.length);
  const jokeQuestion = jokes[jokesIdx].Q;
  const jokeAnswer = jokes[jokesIdx].A;
  const jokeAnswLength = jokeAnswer.split(" ").length;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          height: `${windowWidth < 768 ? "35%" : "40%"}`,
          width: "90%",
          transform: "translateY(-180%)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          margin: "auto",
        }}
      >
        <img
          style={{
            position: "absolute",
            inset: "0",
            left: "5%",
            width: "90%",
            height: "100%",
          }}
          src={"/Images/WebP/joke_box.webp"}
          alt="joke box"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            left: "5%",
            right: "5%",
          }}
        >
          {/* JOKE TEXTS (1) */}
          <p
            style={{
              margin: `${windowWidth >= 768 ? "1rem" : ".5rem"}`,
              paddingTop: `${windowWidth >= 768 ? "1rem" : "0"}`,
              textAlign: "center",
              color: "red",
              width: "62.5%",
              lineHeight: 1,
              height: "30%",
              marginBottom: '.25rem'
            }}
          >
            {jokeQuestion}
          </p>
          {/* JOKE TEXTS (2) */}
          <p
            style={{
              color: "black",
              width: `${jokeAnswLength <= 7 ? "57.5%" : "64%"}`,
              lineHeight: 1,
              marginLeft: "auto",
              height: "30%",
              marginRight: '1rem',
              marginTop: `${windowWidth >= 768 ? "0" : "1rem"}`,
            }}
          >
            {jokeAnswer}
          </p>
          <img
            style={{
              width: "25%",
              position: "absolute",
              bottom: "10%",
              right: "8%",
            }}
            src="/Images/SVG/share_btn.svg"
            alt="share button"
          />
        </div>
      </div>
    </div>
  );
};

export default CrackerOpened;
