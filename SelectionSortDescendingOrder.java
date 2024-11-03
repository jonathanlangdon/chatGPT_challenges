// selection sort used on ints to put them in decreasing order

import java.util.Scanner;

public class SelectionSortDescendingOrder {

  public static void selectionSortDescendTrace(int[] numbers, int numElements) {
    for (int i = 0; i < numElements - 1; i++) {
      int maxIndex = i;
      for (int j = i + 1; j < numElements; j++) {
        if (numbers[j] > numbers[maxIndex]) {
          maxIndex = j; // index of largest item in unsorted portion
        }
      }
      if (maxIndex != i) {
        int temp = numbers[i];
        numbers[i] = numbers[maxIndex];
        numbers[maxIndex] = temp;
      }
      for (int k = 0; k < numElements; k++) {
        System.out.print(numbers[k] + " ");
      }
      System.out.println();
    }
  }

  public static void main(String[] args) {
    Scanner scnr = new Scanner(System.in);

    int i = 0;
    int numElements = 0;
    int[] numbers = new int[10];

    int input = scnr.nextInt();

    while (input != -1) {
      numElements += 1;
      numbers[i] = input;
      i += 1;
      input = scnr.nextInt();
    }

    selectionSortDescendTrace(numbers, numElements);

  }
}
