// simple try catch block

import java.util.Scanner;
import java.util.InputMismatchException;
import java.util.Arrays;

public class NameAgeChecker {
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      String inputLine = scnr.nextLine();
      while (!inputLine.equals("-1")) {
         String[] parts = inputLine.split(" ");
         String inputName = parts[0];
         int age = 0;
         try {
            age = Integer.parseInt(parts[1]);
            System.out.println(inputName + " " + (age + 1));
         } catch (NumberFormatException e) {
            System.out.println(inputName + " " + 0);
         }
         inputLine = scnr.nextLine();
      }
      scnr.close();
   }
}