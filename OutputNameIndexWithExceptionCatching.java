// output name based on index with a try-catch block

import java.util.Scanner;

public class OutputNameIndexWithExceptionCatching {

  public static void main(String[] args) {
    Scanner scnr = new Scanner(System.in);
    String[] names = { "Ryley", "Edan", "Reagan", "Henry", "Caius", "Jane", "Guto", "Sonya", "Tyrese", "Johnny" };
    int index;

    index = scnr.nextInt();

    try {
      System.out.println("Name: " + names[index]);
    } catch (ArrayIndexOutOfBoundsException e) {
      String closestName = names[0];
      if (index > names.length - 1)
        closestName = names[names.length - 1];
      System.out.println("Exception! Index " + index + " out of bounds for length " + names.length);
      System.out.println("The closest name is: " + closestName);
    }
  }

}