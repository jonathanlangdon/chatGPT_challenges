// create a car object

public class CarObjectChallenge
{
	public class Car
	{
		public string Make { get; set; }
		public string Model { get; set; }
		public int Year { get; set; }

		public Car(string make, string model, int year)
		{
			Make = make;
			Model = model;
			Year = year;
		}

		public string GetCarInfo()
		{
			return $"Make: {Make}, Model: {Model}, Year: {Year}";
		}
	}

	public static void Main(string[] args)
	{
		Car car1 = new Car("Honda", "Focus", 1998);
		System.Console.WriteLine(car1.GetCarInfo());
	}
}