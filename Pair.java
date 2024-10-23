// Pair class using Generics for the GenericPairComparison challenge

public class Pair<TheType extends Comparable<TheType>> {
  private TheType firstVal;
  private TheType secondVal;

  public Pair(TheType aVal, TheType bVal) {
    this.firstVal = aVal;
    this.secondVal = bVal;
  }

  public String toString() {
    return "[" + firstVal + ", " + secondVal + "]";
  }

  public int compareTo(Pair<TheType> otherPair) {
    if (this.firstVal.compareTo(otherPair.firstVal) > 0)
      return 1;
    if (this.firstVal.compareTo(otherPair.firstVal) < 0)
      return -1;
    if (this.secondVal.compareTo(otherPair.secondVal) > 0)
      return 1;
    if (this.secondVal.compareTo(otherPair.secondVal) < 0)
      return -1;
    return 0;
  }

  public char comparisonSymbol(Pair<TheType> otherPair) {
    return compareTo(otherPair) == 1 ? '>' : compareTo(otherPair) == -1 ? '<' : '=';
  }

}