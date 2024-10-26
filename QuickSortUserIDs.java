// quick sort method used on userIDs

import java.util.Scanner;
import java.util.ArrayList;

public class QuickSortUserIDs {

  public static int partition(ArrayList<String> userIDs, int low, int high) {

    int pivotIndex = (low + high) / 2;
    String pivot = userIDs.get(pivotIndex);
    userIDs.set(pivotIndex, userIDs.get(high));
    userIDs.set(high, pivot);

    int i = low - 1;

    for (int j = low; j < high; j++) {
      if (userIDs.get(j).compareTo(pivot) < 0) {
        i++;
        String temp = userIDs.get(i);
        userIDs.set(i, userIDs.get(j));
        userIDs.set(j, temp);
      }
    }
    String temp = userIDs.get(i + 1);
    userIDs.set(i + 1, userIDs.get(high));
    userIDs.set(high, temp);
    return i + 1;
  }

  public static void quicksort(ArrayList<String> userIDs, int low, int high) {
    if (low < high) {
      int pivotIndex = partition(userIDs, low, high);
      quicksort(userIDs, low, pivotIndex - 1); // sort lower
      quicksort(userIDs, pivotIndex + 1, high); // sort higher
    }
  }

  public static void main(String[] args) {
    Scanner scnr = new Scanner(System.in);

    ArrayList<String> userIDList = new ArrayList<String>();

    String userID;

    userID = scnr.next();
    while (!userID.equals("-1")) {
      userIDList.add(userID);
      userID = scnr.next();
    }

    quicksort(userIDList, 0, userIDList.size() - 1);

    for (int i = 0; i < userIDList.size(); ++i) {
      System.out.println(userIDList.get(i));
    }
  }

}
