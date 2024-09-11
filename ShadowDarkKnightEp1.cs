// Working out Shadows of Knight - Ep1 Function

using System;
using System.Linq;

public class ReplaceMe
{
	public static void Main(string[] args)
	{
		// start 0, height 100, bomb@ 49
		int Y0 = 0;
		int H = 100;
		int BombPosition = 24;
		int MoveCount = 1;
		int InitialGap = H - Y0;

		int NextPosition(string direction)
		{
			if (direction.Contains("U"))
			{
				return Y0 - (int)Math.Ceiling((InitialGap / Math.Pow(2, MoveCount)));
			}
			if (direction.Contains("D"))
			{
				return Y0 + (int)Math.Ceiling((InitialGap / Math.Pow(2, MoveCount)));
			}
			else return Y0;
		}

		while(Y0 != BombPosition)
		{
			string Direction = Y0 > BombPosition ? "U" : "D";
			Y0 = NextPosition(Direction);
			MoveCount += 1;
			Console.WriteLine(Y0);
		}
	}
}

// bomb @ 49 Height of building 100
// round # : Position : Direction : Change : NextPosition

// 0 : 0  : D : +50 : 50
// 1 : 50 : U : -25 : 25
// 2 : 25 : D : +13 : 38
// 3 : 38 : D : +6  : 45
// 4 : 44 : D : +3  : 49
// 5 : 47 : D : +1  : 48
// 6 : 48 : D : +1  : 49