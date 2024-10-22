// custom exception for negative steps and rounding to hundreth place on output

import java.util.Scanner;

public class CatchNegativeStepsException {

  public class LabProgram {
    public static double stepsToMiles(int steps) throws Exception {
      if (steps < 0) {
        throw new Exception("Exception: Negative step count entered.");
      }
      return (double) steps / 2000;
    }

    public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      try {
        int steps = scnr.nextInt();
        System.out.printf("%.2f\n", stepsToMiles(steps));
      } catch (Exception e) {
        System.out.println(e.getMessage());
      }
    }
  }

}
