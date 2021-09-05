interface Author {
  name: string;
  surname: string;
  age: number;
}

interface Book {
  description: string;
  id: number;
  imageUrl: string;
  price: string;
  title: string;
  authors?: Author[];
}

export default Book;
