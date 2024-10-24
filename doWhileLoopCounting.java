// do while loop to count up to value inputed

import java.util.Scanner;

public class doWhileLoopCounting {
  public static void main(String[] args) {
    Scanner scnr = new Scanner(System.in);
    int countLimit;
    int printVal;

    countLimit = scnr.nextInt();

    printVal = 0;
    do {
      System.out.print(printVal + " ");
      printVal = printVal + 1;
    } while (printVal <= countLimit);
    System.out.println("");
  }
}