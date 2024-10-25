// Insertion sort and also give data on how many comparisons and swaps performed

import java.util.Scanner;

public class InsertionSortIntegers {

  private static int[] readNums() {
    Scanner scnr = new Scanner(System.in);
    int size = scnr.nextInt();
    int[] numbers = new int[size];
    for (int i = 0; i < size; ++i) {
      numbers[i] = scnr.nextInt();
    }
    return numbers;
  }

  private static void printNums(int[] nums) {
    for (int i = 0; i < nums.length; ++i) {
      System.out.print(nums[i]);
      if (i < nums.length - 1) {
        System.out.print(" ");
      }
    }
    System.out.println();
  }

  private static void swap(int[] nums, int j, int k) {
    int temp = nums[j];
    nums[j] = nums[k];
    nums[k] = temp;
  }

  public static void insertionSort(int[] numbers) {
    int numCompared = 0;
    int numSwaps = 0;
    int i;
    int j;

    for (i = 1; i < numbers.length; ++i) {
      j = i;
      while (true) {
        if (j <= 0) {
          break;
        }
        numCompared += 1;
        if (numbers[j] < numbers[j - 1]) {
          swap(numbers, j, j - 1);
          numSwaps += 1;
          --j;
        } else {
          break;
        }
      }
      printNums(numbers);
    }
    System.out.println();
    System.out.println("comparisons: " + numCompared);
    System.out.println("swaps: " + numSwaps);
  }

  public static void main(String[] args) {

    int[] numbers = readNums();

    printNums(numbers);
    System.out.println();

    insertionSort(numbers);

  }
}
