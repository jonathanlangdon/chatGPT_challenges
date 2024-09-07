// Working out Shadows of Knight - Ep1 Function

using System;
using System.Collections.Generic;
using System.Linq;

public class ReplaceMe
{
	public static void Main(string[] args)
	{
		// start 0, height 100, bomb@ 49
		int Y0 = 0;
		int X0 = 0;
		int W = 40;
		int H = 100;
		int BombPosition = 49;
		List<int> PossibleY = new List<int>();
		List<int> PossibleX = new List<int>();
		int MovesMade = 0;

		int NextVPosition(string direction)
		{
			return PossibleY[PossibleY.Count() / 2];
		}

		void InitialPossible(string direction, string vertex)
		{
			int Position = 0;
			int Max = 0;
			if (vertex == "Y")
			{
				Position = Y0;
				Max = H;
			}
			else if (vertex == "X")
			{
				Position = X0;
				Max = W;
			}
			int FirstY = direction == "L" ? 0 : direction == "G" ? Position + 1 : Position;
			int CountPossible = direction == "L" ? Position - 1 : direction == "G" ? Max - Position : 1;
			if (vertex == "Y")
			{
				PossibleY = Enumerable.Range(FirstY, CountPossible).ToList();
			}
			else if (vertex == "X")
			{
				PossibleX = Enumerable.Range(FirstY, CountPossible).ToList();
			}
		}

		void UpdatePossible(string direction, string vertex)
		{

		}

		while(Y0 != BombPosition)
		{
			// G = greater, L = Less
			string DirectionY = Y0 > BombPosition ? "L" : "G";
			string DirectionY = X0 > BombPosition ? "L" : "G";
			if(MovesMade == 0) 
			{
				InitialPossible(DirectionY, "Y");
				InitialPossible(DirectionX, "X");
			}
			else
			{
				UpdatePossible(DirectionY, "Y");
				UpdatePossible(DirectionX, "X");
			}
			Y0 = NextVPosition(DirectionY);
			Console.WriteLine(Y0);
		}
	}
}

// bomb @ 49 Height of building 100
// round # : Position : Direction : Change : NextPosition : PossiblesArray : Possible Count

// 0 : 0  : D : +50 : 50 : [1-100] : 100
// 1 : 50 : U : -25 : 25 : [1-49] : 49
// 2 : 25 : D : +13 : 38 : [26-49] : 23
// 3 : 38 : D : +6  : 44 : [39-49] : 11
// 4 : 44 : D : +3  : 47 : [45-49] : 5
// 5 : 47 : D : +1  : 48 : [48, 49] : 2
// 6 : 48 : D : +1  : 49