// practice using LinkedLists - make sure to import ListItem.java

import java.util.Scanner;
import java.util.LinkedList;
import java.util.ListIterator;

class ListItem {
  private String item;

  public ListItem() {
    item = "";
  }

  public ListItem(String itemInit) {
    this.item = itemInit;
  }

  public void printNodeData() {
    System.out.println(this.item);
  }
}

public class LinkedListGroceryList {

  public static void main(String[] args) {
    Scanner scnr = new Scanner(System.in);

    LinkedList<ListItem> shoppingList = new LinkedList<>();

    String item;
    item = scnr.nextLine();

    while (!item.equals("-1")) {
      shoppingList.add(new ListItem(item));
      item = scnr.nextLine();
    }

    ListIterator<ListItem> iterator = shoppingList.listIterator();
    while (iterator.hasNext()) {
      ListItem nextItem = iterator.next();
      nextItem.printNodeData();
    }
    scnr.close();
  }
}
