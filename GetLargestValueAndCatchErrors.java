// catch input errors

import java.util.Scanner;
import java.util.NoSuchElementException;
import java.util.Arrays;

public class GetLargestValueAndCatchErrors {

  public static void getMaxValue(Scanner inputScanner) throws NoSuchElementException {
    if (!inputScanner.hasNext()) {
      throw new NoSuchElementException("0 input(s) read:\nNo max");
    }
    String[] userInputArray = inputScanner.nextLine().split(" ");
    int[] inputInts = Arrays.stream(userInputArray).mapToInt(Integer::parseInt).toArray();
    int max = Arrays.stream(inputInts).max().orElseThrow();
    int inputLength = userInputArray.length;
    if (inputLength != 3) {
      throw new NoSuchElementException(inputLength + " input(s) read:\nMax is " + max);
    }
    System.out.println(max);
  }

  public static void main(String[] args) {
    Scanner scnr = new Scanner(System.in);
    try {
      getMaxValue(scnr);
    } catch (NoSuchElementException e) {
      System.out.println(e.getMessage());
    }
  }

}
