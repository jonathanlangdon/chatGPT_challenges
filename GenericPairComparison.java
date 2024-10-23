// Use Generics to compare various types. also make sure to grab Pair.java file

import java.util.Scanner;

public class GenericPairComparison {

  public static Pair<Integer> readIntegerPair(Scanner scnr) {
    return new Pair<Integer>(scnr.nextInt(), scnr.nextInt());
  }

  public static Pair<Double> readDoublePair(Scanner scnr) {
    return new Pair<Double>(scnr.nextDouble(), scnr.nextDouble());
  }

  public static Pair<String> readWordPair(Scanner scnr) {
    return new Pair<String>(scnr.next(), scnr.next());

  }

  public static void main(String[] args) {
    Scanner scnr = new Scanner(System.in);

    Pair<Integer> integerPair1 = readIntegerPair(scnr);
    Pair<Integer> integerPair2 = readIntegerPair(scnr);

    System.out.println(
        integerPair1.toString() + " " + integerPair1.comparisonSymbol(integerPair2) + " " + integerPair2.toString());

    Pair<Double> doublePair1 = readDoublePair(scnr);
    Pair<Double> doublePair2 = readDoublePair(scnr);

    System.out.println(
        doublePair1.toString() + " " + doublePair1.comparisonSymbol(doublePair2) + " " + doublePair2.toString());

    Pair<String> wordPair1 = readWordPair(scnr);
    Pair<String> wordPair2 = readWordPair(scnr);

    System.out.println(
        wordPair1.toString() + " " + wordPair1.comparisonSymbol(wordPair2) + " " + wordPair2.toString());

    scnr.close();
  }
}