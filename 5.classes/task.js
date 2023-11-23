"use strict";

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
    if (this.state < 0) {
      this.state = 0;
    } else if (this.state > 100) {
      this.state = 100;
    }
  }

  set state(state) {
    this._state = state;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const findedBook = this.books.find((item) => item[type] === value);
    return findedBook ? findedBook : null;
  }

  giveBookByName(bookName) {
    const findedBookIndex = this.books.findIndex(
      (item) => item.name === bookName
    );
    if (findedBookIndex < 0) {
      return null;
    }
    const givenBook = this.books.splice(findedBookIndex, 1);
    return givenBook[0];
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subjectName) {
    if (mark >= 2 && mark <= 5) {
      if (!this.marks.hasOwnProperty(subjectName)) {
        this.marks[subjectName] = [];
      }
      this.marks[subjectName].push(mark);
    }
  }

  getAverageBySubject(subjectName) {
    if (
      !this.marks.hasOwnProperty(subjectName) ||
      this.marks[subjectName].length === 0
    ) {
      return 0;
    }
    return (
      this.marks[subjectName].reduce((acc, cur) => (acc += cur)) /
      this.marks[subjectName].length
    );
  }

  getAverage() {
    const objects = Object.keys(this.marks);
    if (!objects.length) {
      return 0;
    }
    let averageSumObjects = 0;
    for (let object of objects) {
      let averageOfObject = this.getAverageBySubject(object);
      averageSumObjects += averageOfObject;
    }
    return averageSumObjects / objects.length;
  }
}
