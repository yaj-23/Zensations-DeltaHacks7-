import express, { Request, Response } from "express";

export const router = express.Router({
  strict: true,
});

let array = [
  { value: 1, weight: 10 },
  { value: 2, weight: 7 },
  { value: 5, weight: 2 },
  { value: 3, weight: 5 },
];

// happy, lovely, sad, irritated, mentalbreakdown

//VERY SAD, SAD, MEDIOCRE, HAPPY, VERY HAPPY

// ANGER  21%
// SADNESS  37%
// HAPPINESS 42%

router.put("/", (req: Request, res: Response) => {
  //   console.log(req, res);
  let angry = 0;
  let sad = 0;
  let happy = 0;

  for (let i = 0; i < 5; i++) {
    if (i == 1) {
      if (array[i].value == 2) {
        angry += 3;
        sad += 2;
      } else if (array[i].value == 3) {
        angry += 5;
      } else {
        happy += array[i].value; // 1
        sad += 5 - array[i].value; // 4
      }
    }
  }

  const x = array.reduce(
    (accumulate, current) => accumulate + current.value * current.weight,
    0
  );

  console.log(x);
  //TODO Figure out how to scale with the given array

  res.status(200).json(x);
});
