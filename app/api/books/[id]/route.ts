import books from "../../db";

export async function GET(request : Request, context : { params: { id : string }}) {
    const { params } = context;
    return Response.json(books[+params.id]);
}

export async function PUT( request : Request, context : { params: { id : string }}) {
    const book = await request.json();

    const index = books.findIndex(book => book.id === +context.params.id);

    books[index] = book;

    return Response.json(books);
}

export async function DELETE( request : Request, context : { params: { id : string }}) {
    const id = books.findIndex(book => book.id === +context.params.id);
    
    const index = books.findIndex(book => book.id === id);
    
    books.slice(index, 1);

    return Response.json(books);

}