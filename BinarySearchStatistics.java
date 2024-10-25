// track statistics of how many comparisons & recursions done with binary search

import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;

public class BinarySearchStatistics {

  static int recursions = 0;
  static int comparisons = 0;

  private static ArrayList<Integer> readNums(Scanner scnr) {
    int size = scnr.nextInt();
    ArrayList<Integer> nums = new ArrayList<Integer>();
    for (int i = 0; i < size; ++i) {
      nums.add(scnr.nextInt());
    }
    return nums;
  }

  static public int binarySearch(int target, ArrayList<Integer> integers,
      int lower, int upper) {
    if (lower > upper) {
      recursions += 1;
      return -1;
    }
    int testIndex = (lower + upper) / 2;
    comparisons += 1;
    if (target == integers.get(testIndex)) {
      recursions += 1;
      return testIndex;
    }
    comparisons += 1;
    if (integers.get(testIndex) < target) {
      recursions += 1;
      return binarySearch(target, integers, testIndex + 1, upper);
    }
    recursions += 1;
    return binarySearch(target, integers, lower, testIndex - 1);

  }

  public static void main(String[] args) {
    Scanner scnr = new Scanner(System.in);
    ArrayList<Integer> integers = readNums(scnr);

    int target = scnr.nextInt();

    int index = binarySearch(target, integers, 0, integers.size() - 1);

    System.out.printf("index: %d, recursions: %d, comparisons: %d\n",
        index, recursions, comparisons);
  }
}
