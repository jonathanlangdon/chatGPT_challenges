// create a Rectangle Object

public class RectangleChallenge
{
	public class Rectangle
	{
		public double Width { get; set; }
		public double Height { get; set; }

		public Rectangle(double width, double height)
		{
			Width = width;
			Height = height;
		}

		public double GetArea()
		{
			return Width * Height;
		}

		public double GetPerimeter()
		{
			return Width * 2 + Height * 2;
		}

		public void Resize(double newWidth, double newHeight)
		{
			Width = newWidth;
			Height = newHeight;
		}
	}

	public static void Main(string[] args)
    {
        Rectangle rectangle = new Rectangle(5.0, 3.0);
        double area = rectangle.GetArea(); // 15.0
        double perimeter = rectangle.GetPerimeter(); // 16.0
        System.Console.WriteLine($"Area: {area}, Perimeter: {perimeter}");

        rectangle.Resize(7.0, 4.0);
        area = rectangle.GetArea(); // 28.0
        perimeter = rectangle.GetPerimeter(); // 22.0
        System.Console.WriteLine($"New Area: {area}, New Perimeter: {perimeter}");
    }
}