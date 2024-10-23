import java.util.Scanner;

public class GenericMethodIsInputsInOrder {

  // Check the order of the input: return -1 for ascending,
  // 0 for neither, 1 for descending

  public static <T extends Comparable<T>> int checkOrder(T v1, T v2, T v3, T v4) {
    boolean isAscending = v2.compareTo(v1) > 0 ? true : false;
    if ((v3.compareTo(v2) > 0) != isAscending)
      return 0;
    if ((v4.compareTo(v3) > 0) != isAscending)
      return 0;
    return isAscending ? -1 : 1;
  }

  public static void main(String[] args) {
    Scanner scnr = new Scanner(System.in);

    // Check order of four strings
    System.out.println("Order: " + checkOrder(scnr.next(), scnr.next(), scnr.next(), scnr.next()));

    // Check order of four doubles
    System.out
        .println("Order: " + checkOrder(scnr.nextDouble(), scnr.nextDouble(), scnr.nextDouble(), scnr.nextDouble()));

    scnr.close();
  }
}
