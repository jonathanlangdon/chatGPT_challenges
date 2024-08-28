using System;
using System.IO;
using System.Text;

public class FizzBuzzCSV
{
    public static void MakeCSV()
    {
        string filePath = "FizzBuzz.csv";
        var csvContent = new StringBuilder();
        csvContent.AppendLine("Index,Value");

        for (int i = 1; i <= 100; i++)
        {
            var NewItem = "";
            if (i % 3 == 0) NewItem += "Fizz";
            if (i % 5 == 0) NewItem += "Buzz";
            if (NewItem == "") NewItem += i;
            csvContent.AppendLine($"{i},{NewItem}");
        }

        File.WriteAllText(filePath, csvContent.ToString());
        Console.WriteLine("CSV file written.");
    }

    public static void Main(string[] args)
    {
        MakeCSV();
    }
}
