// create a Jedi object

public class CreateJediObject
{
	public class Jedi
	{
		public string LightSaberColor { get; set;}

		public Jedi(string LightSaberColor = "green")
		{
			this.LightSaberColor = LightSaberColor;
		}
	}


	public static void Main(string[] args)
	{
		Jedi jedi1 = new Jedi();
		Jedi jedi2 = new Jedi("yellow");
		System.Console.WriteLine(jedi1.LightSaberColor);
		System.Console.WriteLine(jedi2.LightSaberColor);

	}
}