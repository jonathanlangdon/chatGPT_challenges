// practice with Generics -> getting max, min and median of various types

import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;

public class GenericMinMaxMedian {

  public static ArrayList<Integer> inputIntegers(Scanner scnr) {
    ArrayList<Integer> newList = new ArrayList<>();
    for (int i = 0; i < 5; i++) {
      newList.add(scnr.nextInt());
    }
    return newList;
  }

  public static ArrayList<Double> inputDoubles(Scanner scnr) {
    ArrayList<Double> newList = new ArrayList<>();
    for (int i = 0; i < 5; i++) {
      newList.add(scnr.nextDouble());
    }
    return newList;
  }

  public static ArrayList<String> inputWords(Scanner scnr) {
    ArrayList<String> newList = new ArrayList<>();
    for (int i = 0; i < 5; i++) {
      newList.add(scnr.next());
    }
    return newList;
  }

  public static <TheType extends Comparable<TheType>> void print(ArrayList<TheType> list) {
    for (TheType element : list) {
      System.out.print(element + " ");
    }
    System.out.println();
  }

  public static <TheType extends Comparable<TheType>> ArrayList<TheType> getStatistics(ArrayList<TheType> list) {
    Collections.sort(list);
    ArrayList<TheType> sortedList = new ArrayList<>();
    sortedList.add(list.get(0));
    sortedList.add(list.get(2));
    sortedList.add(list.get(4));
    return sortedList;
  }

  public static void main(String[] args) {
    Scanner scnr = new Scanner(System.in);

    ArrayList<Integer> integers = inputIntegers(scnr);
    print(integers);
    ArrayList<Integer> integerStatistics = getStatistics(integers);
    print(integerStatistics);
    System.out.println();

    ArrayList<Double> doubles = inputDoubles(scnr);
    print(doubles);
    ArrayList<Double> doubleStatistics = getStatistics(doubles);
    print(doubleStatistics);
    System.out.println();

    ArrayList<String> words = inputWords(scnr);
    print(words);
    ArrayList<String> wordStatistics = getStatistics(words);
    print(wordStatistics);
  }

}
