// multiple exception catching with 2 methods of showing message

import java.util.Scanner;
import java.util.InputMismatchException;

public class DivisionWithMultipleExceptions {

  public class LabProgram {
    public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);

      try {
        int numerator = scnr.nextInt();
        int denominator = scnr.nextInt();
        System.out.println(numerator / denominator);
      } catch (ArithmeticException e) {
        System.out.println("Arithmetic Exception: " + e.getMessage());
      } catch (InputMismatchException e) {
        System.out.println("Input Mismatch Exception: " + e.toString());
      }
    }
  }

}
