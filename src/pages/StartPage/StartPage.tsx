import {SpriteCards} from "@legion-builder/components/SpriteCard";
import {Typography} from "@mui/material";
// import axios from "axios";

// const stringToHash = (str: string) => {
//   let hash = 0;
//   if (str.length === 0) {
//     return hash;
//   }
//   for (const char of str) {
//     hash ^= char.charCodeAt(0);
//   }
//   return hash;
// };

export function StartPage() {
  // const [message, setMessage] = useState<string>("");

  // useEffect(() => {
  // axios
  //   .get("/api/cards/Ci")
  //   .then((response) => {
  //     // const text = response.data ? Object.keys(response.data).join("|") : "";
  //     setMessage(JSON.stringify(response.data));
  //   })
  //   .catch((error) => console.error("Error fetching data", error));
  // }, []);

  return (
    <div>
      <Typography variant="h1">Startpage</Typography>
      {/* {[
        "Darth Vader",
        "Darth Vader: Dark Lord of the Sith",
        "Luke Skywalker",
        "Leia Organa",
        "Han Solo",
      ].map((name) => (
        <p>{`${name} (${stringToHash(name)})`}</p>
      ))} */}
      <SpriteCards />
    </div>
  );
}
