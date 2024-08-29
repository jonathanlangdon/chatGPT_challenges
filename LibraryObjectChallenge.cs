// create a Library Object which is a collection of Book objects

using System.Collections.Generic;
using System.Linq;

public class LibraryChallenge
{
	public class Book
	{
		public string Title { get; set; }
		public string Author { get; set; }
		public bool IsCheckedOut { get; set; }

		public Book(string title, string author)
		{
			Title = title;
			Author = author;
		}

		public void CheckOut()
		{
			IsCheckedOut = true;
		}

		public void ReturnBook()
		{
			IsCheckedOut = false;
		}

		public override string ToString()
		{
			return $"Title: {Title}, Author: {Author}, Checked Out? {IsCheckedOut}";
		}
	}
	
	public class Library
	{
		public List<Book> Books { get; set;}

		public Library()
		{
			Books = new List<Book>();
		}

		public void AddBook(Book book)
		{
			Books.Add(book);
		}

		public void RemoveBook(Book book)
		{
			Books.Remove(book);
		}

		public List<Book> ListAvailableBooks()
		{
			return Books.Where(x => !x.IsCheckedOut).ToList();
		}
	}

	public static void Main(string[] args)
    {
        Library library = new Library();

        Book book1 = new Book("1984", "George Orwell");
        Book book2 = new Book("Brave New World", "Aldous Huxley");

        library.AddBook(book1);
        library.AddBook(book2);

        System.Console.WriteLine("Available books:");
        foreach (var book in library.ListAvailableBooks())
        {
            System.Console.WriteLine(book);
        }
        book1.CheckOut();

        System.Console.WriteLine("\nAvailable books after checking out '1984':");
        foreach (var book in library.ListAvailableBooks())
        {
            System.Console.WriteLine(book);
        }

        book1.ReturnBook();

        System.Console.WriteLine("\nAvailable books after returning '1984':");
        foreach (var book in library.ListAvailableBooks())
        {
            System.Console.WriteLine(book);
        }
    }
}