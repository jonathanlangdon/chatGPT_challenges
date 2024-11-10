// practice creating classes for courses and students

import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;

public class StudentAndCourseClasses {

  public static class Course implements Comparable<Course> {
    String department;
    Integer number;

    public Course(String dept, int num) {
      this.department = dept;
      this.number = num;
    }

    public int compareTo(Course otherCourse) {
      if (department.compareTo(otherCourse.department) > 0)
        return 1;
      if (department.compareTo(otherCourse.department) < 0)
        return -1;
      if (number.compareTo(otherCourse.number) > 0)
        return 1;
      if (number.compareTo(otherCourse.number) < 0)
        return -1;
      return 0;
    }

    public String toString() {
      return department + " " + number;
    }
  }

  public static class Student implements Comparable<Student> {
    String firstName;
    String lastName;
    Double GPA;

    public Student(String firstName, String lastName, Double GPA) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.GPA = GPA;
    }

    public int compareTo(Student otherStudent) {
      if (GPA.compareTo(otherStudent.GPA) < 0)
        return 1;
      if (GPA.compareTo(otherStudent.GPA) > 0)
        return -1;
      if (lastName.compareTo(otherStudent.lastName) > 0)
        return 1;
      if (lastName.compareTo(otherStudent.lastName) < 0)
        return -1;
      if (firstName.compareTo(otherStudent.firstName) > 0)
        return 1;
      if (firstName.compareTo(otherStudent.firstName) < 0)
        return -1;
      return 0;
    }

    public String toString() {
      return String.format("%.2f %s, %s", GPA, lastName, firstName);
    }
  }

  public static void main(String[] args) {
    int j;
    Scanner scnr = new Scanner(System.in);

    ArrayList<Course> courses = new ArrayList<Course>();
    ArrayList<Student> students = new ArrayList<Student>();

    // Input 5 courses
    for (j = 0; j < 5; ++j) {
      courses.add(new Course(scnr.next(), scnr.nextInt()));
    }
    // Input 5 students
    for (j = 0; j < 5; ++j) {
      students.add(new Student(scnr.next(), scnr.next(), scnr.nextDouble()));
    }

    // Sort courses and students
    Collections.sort(courses);
    Collections.sort(students);

    // Output courses and students
    for (j = 0; j < courses.size(); ++j) {
      System.out.println(courses.get(j));
    }
    System.out.println();
    for (j = 0; j < students.size(); ++j) {
      System.out.println(students.get(j));
    }
  }

}
