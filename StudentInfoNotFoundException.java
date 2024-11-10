// custom exception handling for username and id lookups

import java.util.Scanner;
import java.io.FileInputStream;
import java.io.IOException;

public class StudentInfoNotFoundException {

  public class LabProgram {

    public static String findID(String studentName, Scanner infoScnr) throws Exception {
      String foundId = "";

      while (infoScnr.hasNextLine()) {
        String newLine = infoScnr.nextLine();
        String[] userInfo = newLine.split(" ");
        String curName = userInfo[0];
        if (curName.equals(studentName)) {
          foundId = userInfo[1];
          break;
        }
      }

      if (foundId == "")
        throw new Exception("Student ID not found for " + studentName);
      return foundId;
    }

    public static String findName(String studentID, Scanner infoScnr) throws Exception {
      String foundName = "";

      while (infoScnr.hasNextLine()) {
        String newLine = infoScnr.nextLine();
        String[] userInfo = newLine.split(" ");
        String curId = userInfo[1];
        if (curId.equals(studentID)) {
          foundName = userInfo[0];
          break;
        }
      }
      if (foundName == "")
        throw new Exception("Student name not found for " + studentID);
      return foundName;
    }

    public static void main(String[] args) throws IOException {
      Scanner scnr = new Scanner(System.in);
      String studentName;
      String studentID;
      String studentInfoFileName;
      FileInputStream studentInfoStream = null;
      Scanner studentInfoScanner = null;
      studentInfoFileName = scnr.next();
      studentInfoStream = new FileInputStream(studentInfoFileName);
      studentInfoScanner = new Scanner(studentInfoStream);

      // Read search option from user. 0: findID(), 1: findName()
      int userChoice = scnr.nextInt();
      try {
        if (userChoice == 0) {
          studentName = scnr.next();
          studentID = findID(studentName, studentInfoScanner);
          System.out.println(studentID);
        } else {
          studentID = scnr.next();
          studentName = findName(studentID, studentInfoScanner);
          System.out.println(studentName);
        }
      } catch (Exception e) {
        System.out.println(e.getMessage());
      }

      studentInfoStream.close();
    }
  }

}
