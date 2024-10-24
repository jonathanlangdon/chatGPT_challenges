// practice with hashset to make random numbers

import java.util.Scanner;
import java.util.HashSet;
import java.util.Random;

public class HashSetRandomNumbers {

  public static void printNums(int[] nums) {
    for (int i = 0; i < nums.length; ++i) {
      System.out.printf("%d ", nums[i]);
    }
  }

  public static int retries;

  public static int[] uniqueRandomInts(int howMany, int maxNum) {
    int i = 0;
    int nextRand;
    retries = 0;
    Random randGen = new Random(29);

    int[] nums = new int[howMany];
    HashSet<Integer> alreadySeen = new HashSet<Integer>();

    while (alreadySeen.size() < howMany) {
      nextRand = randGen.nextInt(maxNum);
      if (alreadySeen.contains(nextRand)) {
        retries += 1;
        continue;
      }
      nums[i] = nextRand;
      i += 1;
      alreadySeen.add(nextRand);
    }

    return nums;
  }

  public static void main(String[] args) {
    Scanner scnr = new Scanner(System.in);
    int howMany = scnr.nextInt();
    int maxNum = scnr.nextInt();

    int[] uniqueInts = uniqueRandomInts(howMany, maxNum);
    printNums(uniqueInts);
    System.out.printf("  [%d retries]\n", retries);
  }

}
