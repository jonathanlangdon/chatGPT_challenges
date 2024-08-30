// create a person object with a HaveBirthday function

using System;

public class PersonObjectChallenge
{
	public class Person 
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public int Age { get; set; }

		public Person(string firstName, string lastName, int age)
		{
			FirstName = firstName;
			LastName = lastName;
			Age = age;

			Console.WriteLine($"New Person created: {FirstName} {LastName} who is {Age}");
		}

		public string GetFullName()
		{
			return FirstName + " " + LastName;
		}		

		public void HaveBirthday()
		{
			Age += 1;
			Console.WriteLine($"Age is now {Age}");
		}
	}

	public static void Main(string[] args)
	{
		Person person = new Person("John", "Doe", 30);
		Console.WriteLine(person.GetFullName()); // "John Doe"
		person.HaveBirthday(); // Age becomes 31
	}
}