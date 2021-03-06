import { EMOTIONS } from "../config/models";

type Evaluator = (value: number) => void;

export class QuizController {
  /**
   * main emotions that determine score
   */
  angry: number = 0;
  sad: number = 0;
  happy: number = 0;

  private evaluateFeel: Evaluator = (value: number) => {
    switch (value) {
      case EMOTIONS.ANGRY:
        this.angry += 5;
        break;
      case EMOTIONS.WEARY:
        this.angry += 3;
        this.sad += 2;
        break;
      case EMOTIONS.TIRED:
        this.angry += 2;
        break;
      case EMOTIONS.ZOMBIE:
        break;
      default:
        this.happy += value;
        this.sad += 5 - value;
        break;
    }
  };

  private evaluateStress: Evaluator = (value: number) => {
    const STRESS_FACTOR = 1.1;
    const stress = (emotion: number) => (emotion + value) * STRESS_FACTOR;

    this.angry = stress(this.angry);
    this.sad = stress(this.sad);

    if (value < 3) {
      this.happy = stress(this.happy);
    }
  };


  private evaluateHealth: Evaluator = (value: number) => {
    this.happy += value;
    this.sad += 5 - value;
  };

  /**
   * main evaluate function
   * @param values array of question responses
   */
  public evaluate(values: number[]): number[] {
    // clear values
    this.angry = this.sad = this.happy = 0;

    const evaluators: Evaluator[] = [this.evaluateFeel, this.evaluateStress, this.evaluateFeel, this.evaluateHealth];

    values.forEach((value: number, index: number) => evaluators[index](value));

    return [this.happy, this.sad, this.angry];
  }
}
